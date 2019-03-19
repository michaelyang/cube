var camera, controls, scene, renderer;
var parent;
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
                materials.push(
                    new THREE.MeshBasicMaterial({
                        map: loader.load(material),
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
    renderer.domElement.addEventListener('mousemove', onMouseMove);
    renderer.render(scene, camera);
}

function onMouseMove(e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
}

function animate() {
    requestAnimationFrame(animate);
    render();
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function render() {
    controls.update();
    renderer.render(scene, camera);
}
