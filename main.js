var camera, controls, scene, renderer;
var parent;
var mouse = new THREE.Vector2();

const cubeProps = [
    {
        name: '1',
        position: [-1, 1, 1],
        color: getRandomColor(),
    },
    {
        name: '2',
        position: [0, 1, 1],
        color: getRandomColor(),
    },
    {
        name: '3',
        position: [1, 1, 1],
        color: getRandomColor(),
    },
    {
        name: '4',
        position: [-1, 0, 1],
        color: getRandomColor(),
    },
    {
        name: '5',
        position: [0, 0, 1],
        color: getRandomColor(),
    },
    {
        name: '6',
        position: [1, 0, 1],
        color: getRandomColor(),
    },
    {
        name: '7',
        position: [-1, -1, 1],
        color: getRandomColor(),
    },
    {
        name: '8',
        position: [0, -1, 1],
        color: getRandomColor(),
    },
    {
        name: '9',
        position: [1, -1, 1],
        color: getRandomColor(),
    },
    {
        name: '10',
        position: [-1, 1, 0],
        color: getRandomColor(),
    },
    {
        name: '11',
        position: [0, 1, 0],
        color: getRandomColor(),
    },
    {
        name: '12',
        position: [1, 1, 0],
        color: getRandomColor(),
    },
    {
        name: '13',
        position: [-1, 0, 0],
        color: getRandomColor(),
    },
    {
        name: '14',
        position: [0, 0, 0],
        color: getRandomColor(),
    },
    {
        name: '15',
        position: [1, 0, 0],
        color: getRandomColor(),
    },
    {
        name: '16',
        position: [-1, -1, 0],
        color: getRandomColor(),
    },
    {
        name: '17',
        position: [0, -1, 0],
        color: getRandomColor(),
    },
    {
        name: '18',
        position: [1, -1, 0],
        color: getRandomColor(),
    },
    {
        name: '19',
        position: [-1, 1, -1],
        color: getRandomColor(),
    },
    {
        name: '20',
        position: [0, 1, -1],
        color: getRandomColor(),
    },
    {
        name: '21',
        position: [1, 1, -1],
        color: getRandomColor(),
    },
    {
        name: '22',
        position: [-1, 0, -1],
        color: getRandomColor(),
    },
    {
        name: '23',
        position: [0, 0, -1],
        color: getRandomColor(),
    },
    {
        name: '24',
        position: [1, 0, -1],
        color: getRandomColor(),
    },
    {
        name: '25',
        position: [-1, -1, -1],
        color: getRandomColor(),
    },
    {
        name: '26',
        position: [0, -1, -1],
        color: getRandomColor(),
    },
    {
        name: '27',
        position: [1, -1, -1],
        color: getRandomColor(),
    },
];

init();
animate();

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function addCubesToScene(scene) {
    const loader = new THREE.TextureLoader();
    cubeProps.forEach(cubeProp => {
        const { position, color } = cubeProp;
        const [x, y, z] = position;
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const materials = [
            new THREE.MeshBasicMaterial({ map: loader.load('img/sample.png') }),
            new THREE.MeshBasicMaterial({ map: loader.load('img/sample.png') }),
            new THREE.MeshBasicMaterial({ map: loader.load('img/sample.png') }),
            new THREE.MeshBasicMaterial({ map: loader.load('img/sample.png') }),
            new THREE.MeshBasicMaterial({ map: loader.load('img/sample.png') }),
            new THREE.MeshBasicMaterial({ map: loader.load('img/sample.png') }),
        ];
        let cube = new THREE.Mesh(geometry, materials);
        cube.position.set(x, y, z);
        scene.add(cube);
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
