var camera, controls, scene, renderer, projector, INTERSECTED;
var cubes = [];
var mouse = new THREE.Vector2();

init();
animate();

function addCubesToScene(scene) {
    const loader = new THREE.TextureLoader();
    cubeData.forEach(cubeProp => {
        const { position, materialsList } = cubeProp;
        const [x, y, z] = position;
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const materials = [];
        materialsList.forEach(material => {
            if (material) {
                const texture = loader.load(material.image);
                texture.center.set(0.5, 0.5);
                texture.rotation = THREE.Math.degToRad(material.rotation);
                materials.push(
                    new THREE.MeshBasicMaterial({
                        map: texture,
                        transparent: true,
                    }),
                );
            } else {
                materials.push(
                    new THREE.MeshBasicMaterial({
                        color: '#C8C8C8',
                    }),
                );
            }
        });
        let cube = new THREE.Mesh(geometry, materials);
        cube.position.set(x, y, z);
        cubes.push(cube);
        scene.add(cube);
        var edges = new THREE.EdgesGeometry(geometry);
        var line = new THREE.LineSegments(
            edges,
            new THREE.LineBasicMaterial({ color: 0xffffff }),
        );
        line.position.set(x, y, z);
        scene.add(line);
    });
}

function init() {
    camera = new THREE.PerspectiveCamera(
        15,
        window.innerWidth / window.innerHeight,
        10,
        100,
    );
    camera.position.x = 20;
    camera.position.y = 20;
    camera.position.z = 20;

    controls = new THREE.TrackballControls(camera);
    controls.rotateSpeed = 3.0;
    controls.dynamicDampingFactor = 0.1;
    controls.noZoom = true;
    controls.noPan = true;

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);
    pickingScene = new THREE.Scene();
    pickingTexture = new THREE.WebGLRenderTarget(1, 1);
    scene.add(new THREE.AmbientLight(0x555555));
    var light = new THREE.SpotLight(0xffffff, 1.5);
    light.position.set(0, 500, 2000);
    scene.add(light);

    addCubesToScene(scene);

    window.addEventListener('resize', onWindowResize, false);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    renderer.domElement.addEventListener('mousemove', onMouseMove, false);
    renderer.render(scene, camera);
    console.log(scene.children);
}

function onMouseMove(e) {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
}

function animate() {
    requestAnimationFrame(animate);

    render();
    update();
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function render() {
    renderer.render(scene, camera);
}

function update() {
    var vector = new THREE.Vector3(mouse.x, mouse.y, 1);
    vector.unproject(camera);
    var ray = new THREE.Raycaster(
        camera.position,
        vector.sub(camera.position).normalize(),
    );
    var intersects = ray.intersectObjects(cubes);
    if (intersects.length > 0) {
        if (intersects[0].object != INTERSECTED) {
            console.log('inhere');
            if (INTERSECTED) INTERSECTED.material = INTERSECTED.currentMaterial;
            INTERSECTED = intersects[0].object;
            INTERSECTED.currentMaterial = INTERSECTED.material;
            INTERSECTED.material = new THREE.MeshBasicMaterial({
                color: '#DCDCDC',
            });
        }
    } else {
        if (INTERSECTED) INTERSECTED.material = INTERSECTED.currentMaterial;
        INTERSECTED = null;
    }
    controls.update();
}
