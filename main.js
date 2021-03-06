let camera,
    controls,
    scene,
    renderer,
    projector,
    INTERSECTED,
    LASTCLICKEDLOCATION,
    DRAGGED;
let cubesDict = {};
let cubesArray;
let mouse = new THREE.Vector2(-1000, -1000);
let bcrypt = dcodeIO.bcrypt;
let highlightMaterialIndex = 12;

init();
animate();

function loadImage(imgURL) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = "Anonymous";
        img.addEventListener("load", () => resolve(img));
        img.addEventListener("error", reject); // don't forget this one
        img.src = imgURL;
    });
}

async function encryptImg(imgURL, key) {
    const img = await loadImage(imgURL);
    let canvas = document.createElement("canvas");
    let ctx = canvas.getContext("2d");
    let dataURL;
    canvas.height = img.naturalHeight;
    canvas.width = img.naturalWidth;
    ctx.drawImage(img, 0, 0);
    dataURL = await canvas.toDataURL();
    strippedDataURL = dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
    encrypted = CryptoJS.AES.encrypt(strippedDataURL, key).toString();
    img.src = imgURL;
    return encrypted;
}

function decryptImg(encrypted, key) {
    strippedBase64 = encrypted.replace(/^data:image\/(png|jpg);base64,/, "");
    let decrypted = CryptoJS.AES.decrypt(strippedBase64, key).toString(
        CryptoJS.enc.Utf8
    );
    return decrypted;
}
//let base64 = imgURLToBase64(cubeData[0]['materialsList'][1]['image'], function(
//    dataUrl,
//) {
//   console.log(dataUrl);
//   let encrypted = CryptoJS.AES.encrypt(dataUrl, 'hi').toString();
//    console.log(encrypted);
//    let decrypted = CryptoJS.AES.decrypt(encrypted, 'hi');
//    console.log(decrypted.toString(CryptoJS.enc.Utf8));
//});
//async function testing() {
//    let encrypted = await encryptImg(
//        cubeDict[1]['materialsList'][1]['image'],
//        'key',
//    );
//    let img = decryptImg(encrypted, 'key');
//    console.log(img);
//}

//testing();
//let targetURL =
//    'https://gallant-joliot-2f63cf.netlify.com/.netlify/functions/answer';
//let headers = {
//    'Content-Type': 'application/json',
//};
const directionMap = {
    front: 0,
    back: 1,
    up: 2,
    down: 3,
    left: 4,
    right: 5
};
async function handleClick(id) {
    let answer = prompt(`Answer for cube ${id}?`);
    if (
        answer &&
        ((await bcrypt.compare(answer, cubeData[id].answer)) ||
            answer === "Wrong Answer")
    ) {
        removeCube(id);
        let toUncover = cubeData[id]["toUncover"];
        toUncover.forEach(element => {
            let [toUncoverId, toUncoverDirection] = element;
            if (cubesDict[toUncoverId]) {
                let encrypted =
                    cubeData[toUncoverId]["materialsList"][
                        directionMap[toUncoverDirection]
                    ];
                if (encrypted && encrypted.image) {
                    let decrypted = decryptImg(encrypted.image, answer);
                    //directionMap[toUncoverDirection] + 1 due the the groups defined
                    //automatically updates due to image.onload = function() { texture.needsUpdate = true;};
                    cubesDict[toUncoverId].material[
                        directionMap[toUncoverDirection] + 6
                    ].map.image.src = "data:image/png;base64," + decrypted;
                    //let image = new Image();
                    //image.src = 'data:image/png;base64,' + decrypted;
                    //let texture = new THREE.Texture();
                    //texture.image = image;
                    //image.onload = function() {
                    //    texture.needsUpdate = true;
                    //};
                    //texture.center.set(0.5, 0.5);
                    //texture.rotation = THREE.Math.degToRad(material.rotation);
                    //texture.flipY;
                    //materials.push(
                    //    new THREE.MeshBasicMaterial({
                    //        map: texture,
                    //        transparent: true,
                    //        side: THREE.DoubleSide,
                    //    }),
                    //);
                }
            }
        });
    }
    //try {
    //    let response = await fetch(targetURL, {
    //        method: 'POST',
    //        headers: headers,
    //        body: JSON.stringify({ answer }),
    //    });
    //    let data = await response.json();
    //    if (data.status === '200') {
    //        remove(cubeID);
    //    }
    //} catch (e) {
    //    console.log('Error', e);
    //}
}

function removeCube(id) {
    let cubeMesh = cubesDict[id];
    scene.remove(cubeMesh);
    delete cubesDict.id;
    cubesArray = Object.values(cubesDict);
}

function getCubeMesh(id) {
    const { position, materialsList } = cubeData[id];
    const [x, y, z] = position;
    const geometry = new THREE.BoxBufferGeometry(1, 1, 1);
    let materials = [];
    geometry.clearGroups();
    //Base Grey
    let index;
    for (index = 0; index < 6; index++) {
        geometry.addGroup(index * 6, 6, index);
        if (id === "6" && index === 2) {
            materials.push(
                new THREE.MeshBasicMaterial({
                    color: 0x423550,
                    visible: true,
                    polygonOffset: true,
                    polygonOffsetFactor: 1,
                    polygonOffsetUnits: 1
                })
            );
        } else if (id === "6" && index === 5) {
            materials.push(
                new THREE.MeshBasicMaterial({
                    color: 0x710655,
                    visible: true,
                    polygonOffset: true,
                    polygonOffsetFactor: 1,
                    polygonOffsetUnits: 1
                })
            );
        } else {
            materials.push(
                new THREE.MeshBasicMaterial({
                    color: 0xc8c8c8,
                    visible: true,
                    polygonOffset: true,
                    polygonOffsetFactor: 1,
                    polygonOffsetUnits: 1
                })
            );
        }
    }
    //PNG
    materialsList.map((material, index) => {
        //Adds group 1 through 6
        geometry.addGroup(index * 6, 6, index + 6);
        if (material) {
            let image = new Image();
            image.src = "data:image/png;base64," + material.image;
            let texture = new THREE.Texture();
            texture.image = image;
            image.onload = function() {
                texture.needsUpdate = true;
            };
            texture.center.set(0.5, 0.5);
            texture.rotation = THREE.Math.degToRad(material.rotation);
            //texture.flipY;
            materials.push(
                new THREE.MeshBasicMaterial({
                    map: texture,
                    transparent: true,
                    side: THREE.DoubleSide
                })
            );
        } else {
            materials.push(
                new THREE.MeshBasicMaterial({
                    visible: false
                })
            );
        }
    });
    //Highlight
    geometry.addGroup(0, 36, highlightMaterialIndex);

    //Highlight
    materials.push(
        new THREE.MeshBasicMaterial({
            opacity: 0.3,
            color: 0xffffff,
            transparent: true,
            visible: false
        })
    );

    let cubeMesh = new THREE.Mesh(geometry, materials);

    //Outline
    let edges = new THREE.EdgesGeometry(geometry);
    let outline = new THREE.LineSegments(
        edges,
        new THREE.LineBasicMaterial({ color: 0xffffff })
    );
    cubeMesh.add(outline);
    //Position
    cubeMesh.position.set(x, y, z);
    //onClick
    cubeMesh.callback = () => handleClick(id);
    //setID
    cubeMesh.cubeID = id;

    return cubeMesh;
}

function addCubesToScene(scene) {
    for (let id in cubeData) {
        cubeMesh = getCubeMesh(id);
        scene.add(cubeMesh);
        cubesDict[id] = cubeMesh;
    }
    cubesArray = Object.values(cubesDict);
}

function init() {
    //Camera
    camera = new THREE.PerspectiveCamera(
        30,
        window.innerWidth / window.innerHeight,
        0.1,
        100
    );
    camera.position.x = 20;
    camera.position.y = 20;
    camera.position.z = 20;

    //Scene
    scene = new THREE.Scene();
    addCubesToScene(scene);

    //renderer
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    renderer.domElement.addEventListener("mousemove", onMouseMove, false);
    renderer.domElement.addEventListener("mousedown", onMouseDown, false);
    renderer.domElement.addEventListener("mouseup", onMouseUp, false);
    renderer.domElement.addEventListener("touchstart", onTouchStart, false);
    renderer.domElement.addEventListener("touchend", onTouchEnd, false);
    renderer.domElement.addEventListener("touchmove", onTouchMove, false);
    window.addEventListener("resize", onWindowResize, false);

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

//Controls
function onMouseMove(e) {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    if (
        LASTCLICKEDLOCATION &&
        (Math.abs(mouse.x - LASTCLICKEDLOCATION.x) > 0.025 ||
            Math.abs(mouse.y - LASTCLICKEDLOCATION.y) > 0.025)
    ) {
        DRAGGED = true;
    }
}

function onMouseDown(e) {
    e.preventDefault();
    LASTCLICKEDLOCATION = Object.assign({}, mouse);
    DRAGGED = false;
}

function onMouseUp(e) {
    e.preventDefault();
    if (!DRAGGED && INTERSECTED) INTERSECTED.callback();
    LASTCLICKEDLOCATION = false;
    DRAGGED = false;
}

function onTouchMove(e) {
    mouse.x = (e.touches[0].clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(e.touches[0].clientY / window.innerHeight) * 2 + 1;
    if (
        LASTCLICKEDLOCATION &&
        (Math.abs(mouse.x - LASTCLICKEDLOCATION.x) > 0.025 ||
            Math.abs(mouse.y - LASTCLICKEDLOCATION.y) > 0.025)
    ) {
        DRAGGED = true;
    }
}

function onTouchStart(e) {
    e.preventDefault();
    switch (e.touches.length) {
        case 1:
            mouse.x = (e.touches[0].clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(e.touches[0].clientY / window.innerHeight) * 2 + 1;
            LASTCLICKEDLOCATION = Object.assign({}, mouse);
            DRAGGED = false;
            break;
        case 2:
            DRAGGED = true;
            break;
        case 3:
            DRAGGED = true;
            break;
        default:
            console.log("Not supported");
            break;
    }
}

function onTouchEnd(e) {
    e.preventDefault();
    if (!DRAGGED && INTERSECTED) INTERSECTED.callback();
    if (DRAGGED) mouse = new THREE.Vector2(-1000, -1000);
    LASTCLICKEDLOCATION = false;
    DRAGGED = false;
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
        vector.sub(camera.position).normalize()
    );
    var intersects = ray.intersectObjects(cubesArray);
    if (!DRAGGED && intersects.length > 0) {
        if (intersects[0].object != INTERSECTED) {
            if (INTERSECTED)
                INTERSECTED.material[highlightMaterialIndex].visible = false;
            INTERSECTED = intersects[0].object;
            INTERSECTED.material[highlightMaterialIndex].visible = true;
        }
    } else {
        if (INTERSECTED)
            INTERSECTED.material[highlightMaterialIndex].visible = false;
        INTERSECTED = null;
    }
    controls.update();
}
