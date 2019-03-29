var camera, controls, scene, renderer, projector, INTERSECTED, LASTCLICKED;
var cubes = {};
var outlines = {};
var cubesArray = [];
var mouse = new THREE.Vector2(-1000, -1000);
init();
animate();

let targetURL =
    'https://gallant-joliot-2f63cf.netlify.com/.netlify/functions/answer';
let headers = {
    'Content-Type': 'application/json',
    'Access-Control-Origin': '*',
};

function handleClick(cubeID) {
    let answer = prompt(`Answer for cube ${cubeID}?`);
    console.log({ answer });
    fetch(targetURL, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({ answer }),
    })
        .then(function(response) {
            console.log(response.json());
        })
        .catch(function(error) {
            console.log(error);
        });
}

function materialsListToMaterials(materialsList, type) {
    const materials = [];
    const loader = new THREE.TextureLoader();
    materialsList.forEach(material => {
        if (material) {
            const texture = loader.load(material.image);
            texture.center.set(0.5, 0.5);
            texture.rotation = THREE.Math.degToRad(material.rotation);
            materials.push(
                new THREE.MeshBasicMaterial({
                    map: texture,
                    transparent: true,
                    polygonOffset: true,
                    polygonOffsetFactor: 1,
                    polygonOffsetUnits: 1,
                }),
            );
        } else {
            color = type == 'unselected' ? '#c8c8c8' : '#d5d5d5';
            materials.push(
                new THREE.MeshBasicMaterial({
                    color,
                    polygonOffset: true,
                    polygonOffsetFactor: 1,
                    polygonOffsetUnits: 1,
                }),
            );
        }
    });
    return materials;
}

function addCubesToScene(scene) {
    cubeData.forEach(cubeProp => {
        const { position, id, materialsList, selectedMaterialsList } = cubeProp;
        const [x, y, z] = position;
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        unselectedMaterials = materialsListToMaterials(
            materialsList,
            'unselected',
        );
        selectedMaterials = materialsListToMaterials(
            selectedMaterialsList,
            'selected',
        );
        let cube = new THREE.Mesh(geometry, unselectedMaterials);
        cube.unselectedMaterials = unselectedMaterials;
        cube.selectedMaterials = selectedMaterials;
        cube.position.set(x, y, z);
        cube.callback = () => {
            handleClick(id);
        };
        cubes[id] = cube;
        scene.add(cube);
        var edges = new THREE.EdgesGeometry(geometry);
        var outline = new THREE.LineSegments(
            edges,
            new THREE.LineBasicMaterial({ color: 0xffffff }),
        );
        outline.position.set(x, y, z);
        outlines[id] = outline;
        scene.add(outline);
    });
    cubesArray = Object.values(cubes);
}

function init() {
    //Camera
    camera = new THREE.PerspectiveCamera(
        30,
        window.innerWidth / window.innerHeight,
        0.1,
        100,
    );
    camera.position.x = 20;
    camera.position.y = 20;
    camera.position.z = 20;

    //Scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);
    addCubesToScene(scene);

    //renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    renderer.domElement.addEventListener('mousemove', onMouseMove, false);
    renderer.domElement.addEventListener('mousedown', onMouseDown, false);
    renderer.domElement.addEventListener('mouseup', onMouseUp, false);
    window.addEventListener('resize', onWindowResize, false);

    //Controls
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.minDistance = 10;
    controls.maxDistance = 20;
    controls.enablePan = false;
    controls.rotateSpeed = 0.1;
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    renderer.render(scene, camera);
}

function onMouseMove(e) {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
}

function onMouseDown(e) {
    LASTCLICKED = Object.assign({}, mouse);
}

function onMouseUp(e) {
    //Might have to change later to an interval of mouse click rather than exact
    if (
        !LASTCLICKED ||
        (LASTCLICKED.x === mouse.x && LASTCLICKED.y === mouse.y && INTERSECTED)
    )
        INTERSECTED.callback();
    LASTCLICKED = null;
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
    var intersects = ray.intersectObjects(cubesArray);
    if (
        (!LASTCLICKED ||
            (LASTCLICKED.x === mouse.x && LASTCLICKED.y === mouse.y)) &&
        intersects.length > 0
    ) {
        if (intersects[0].object != INTERSECTED) {
            if (INTERSECTED) INTERSECTED.material = INTERSECTED.currentMaterial;
            INTERSECTED = intersects[0].object;
            INTERSECTED.currentMaterial = INTERSECTED.material;
            INTERSECTED.material = INTERSECTED.selectedMaterials;
        }
    } else {
        if (INTERSECTED) INTERSECTED.material = INTERSECTED.currentMaterial;
        INTERSECTED = null;
    }
    controls.update();
}

function remove(id) {
    mesh = cubes[id];
    scene.remove(mesh);
    outline = outlines[id];
    scene.remove(outline);
    cubesArray = Object.values(cubes);
}
