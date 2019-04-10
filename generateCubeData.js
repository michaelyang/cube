let bcrypt = require("bcryptjs");
let AES = require("crypto-js/aes");
let fs = require("fs");
let answers = JSON.parse(fs.readFileSync("./answers.json"));

const emptyMaterialsList = [null, null, null, null, null, null];
const encryptedBy = {
    "2-left": 1,
    "2-right": 3,
    "4-back": 1,
    "4-front": 7,
    "5-back": 2,
    "5-left": 4,
    "5-right": 6,
    "5-front": 8,
    "6-back": 3,
    "6-front": 9,
    "8-left": 7,
    "8-right": 9,
    "10-up": 1,
    "10-down": 19,
    "11-up": 2,
    "11-left": 10,
    "11-right": 12,
    "11-down": 20,
    "12-up": 3,
    "12-down": 21,
    "13-up": 4,
    "13-back": 10,
    "13-front": 16,
    "13-down": 22,
    "14-up": 5,
    "14-back": 11,
    "14-left": 13,
    "14-right": 15,
    "14-front": 17,
    "14-down": 23,
    "15-up": 6,
    "15-back": 12,
    "15-front": 18,
    "15-down": 24,
    "16-up": 7,
    "16-down": 25,
    "17-up": 8,
    "17-left": 16,
    "17-right": 18,
    "17-down": 26,
    "18-up": 9,
    "18-down": 27,
    "20-left": 19,
    "20-right": 21,
    "22-back": 19,
    "22-front": 25,
    "23-back": 20,
    "23-left": 22,
    "23-right": 24,
    "23-front": 26,
    "24-back": 21,
    "24-front": 27,
    "26-left": 25,
    "26-right": 27
};
// 0 - front, 1 - back, 2 - up, 3 - down, 4 - left, 5 - right
const cubeDict = {
    1: {
        position: [-1, 1, 1],
        materialsList: [
            null,
            {
                image: "./img/1-b.png",
                rotation: 0
            },
            {
                image: "./img/1-u.png",
                rotation: 0
            },
            null,
            {
                image: "./img/1-l.png",
                rotation: 0
            },
            null
        ],
        answer: "",
        toUncover: [[2, "front"], [4, "back"], [10, "up"]]
    },
    2: {
        position: [-1, 1, 0],
        materialsList: emptyMaterialsList,
        answer: "",
        toUncover: [[5, "back"], [11, "up"]]
    },
    3: {
        position: [-1, 1, -1],
        materialsList: [
            null,
            {
                image: "./img/3-b.png",
                rotation: 0
            },
            {
                image: "./img/3-u.png",
                rotation: 0
            },
            null,
            null,
            {
                image: "./img/3-r.png",
                rotation: 0
            }
        ],
        answer: "",
        toUncover: [[2, "right"], [6, "back"], [12, "up"]]
    },
    4: {
        position: [0, 1, 1],
        materialsList: emptyMaterialsList,
        answer: "",
        toUncover: [[5, "left"], [13, "up"]]
    },
    5: {
        position: [0, 1, 0],
        materialsList: emptyMaterialsList,
        answer: "",
        toUncover: [[14, "up"]]
    },
    6: {
        position: [0, 1, -1],
        materialsList: emptyMaterialsList,
        answer: "",
        toUncover: [[5, "right"], [15, "up"]]
    },
    7: {
        position: [1, 1, 1],
        materialsList: emptyMaterialsList,
        answer: "",
        toUncover: [[4, "front"], [8, "left"], [16, "up"]]
    },
    8: {
        position: [1, 1, 0],
        materialsList: [
            {
                image: "./img/8-f.png",
                rotation: 0
            },
            null,
            {
                image: "./img/8-u.png",
                rotation: 0
            },
            null,
            {
                image: "./img/8-l.png",
                rotation: 0
            },
            {
                image: "./img/8-r.png",
                rotation: 0
            }
        ],
        answer: "",
        toUncover: [[5, "down"], [17, "up"]]
    },
    9: {
        position: [1, 1, -1],
        materialsList: emptyMaterialsList,
        answer: "",
        toUncover: [[6, "front"], [8, "right"], [18, "up"]]
    },
    10: {
        position: [-1, 0, 1],
        materialsList: emptyMaterialsList,
        answer: "",
        toUncover: [[10, "left"], [13, "back"]]
    },
    11: {
        position: [-1, 0, 0],
        materialsList: emptyMaterialsList,
        answer: "",
        toUncover: [[14, "back"]]
    },
    12: {
        position: [-1, 0, -1],
        materialsList: emptyMaterialsList,
        answer: "",
        toUncover: [[10, "right"], [15, "back"]]
    },
    13: {
        position: [0, 0, 1],
        materialsList: [
            {
                image: "./img/13-f.png",
                rotation: 0
            },
            {
                image: "./img/13-b.png",
                rotation: 0
            },
            {
                image: "./img/13-u.png",
                rotation: 0
            },
            {
                image: "./img/13-d.png",
                rotation: 0
            },
            {
                image: "./img/13-l.png",
                rotation: 0
            },
            null
        ],
        answer: "",
        toUncover: [[14, "left"]]
    },
    14: {
        position: [0, 0, 0],
        materialsList: emptyMaterialsList,
        answer: "",
        toUncover: [[]]
    },
    15: {
        position: [0, 0, -1],
        materialsList: emptyMaterialsList,
        answer: "",
        toUncover: [[14, "right"]]
    },
    16: {
        position: [1, 0, 1],
        materialsList: emptyMaterialsList,
        answer: "",
        toUncover: [[13, "front"], [17, "left"]]
    },
    17: {
        position: [1, 0, 0],
        materialsList: emptyMaterialsList,
        answer: "",
        toUncover: [[14, "front"]]
    },
    18: {
        position: [1, 0, -1],
        materialsList: emptyMaterialsList,
        answer: "",
        toUncover: [[15, "front"], [17, "right"]]
    },
    19: {
        position: [-1, -1, 1],
        materialsList: emptyMaterialsList,
        answer: "",
        toUncover: [[10, "down"], [20, "left"], [22, "back"]]
    },
    20: {
        position: [-1, -1, 0],
        materialsList: emptyMaterialsList,
        answer: "",
        toUncover: [[11, "down"], [23, "back"]]
    },
    21: {
        position: [-1, -1, -1],
        materialsList: emptyMaterialsList,
        answer: "",
        toUncover: [[12, "down"], [20, "right"], [24, "back"]]
    },
    22: {
        position: [0, -1, 1],
        materialsList: emptyMaterialsList,
        answer: "",
        toUncover: [[12, "down"], [23, "left"]]
    },
    23: {
        position: [0, -1, 0],
        materialsList: emptyMaterialsList,
        answer: "",
        toUncover: [[14, "down"]]
    },
    24: {
        position: [0, -1, -1],
        materialsList: emptyMaterialsList,
        answer: "",
        toUncover: [[15, "down"], [23, "right"]]
    },
    25: {
        position: [1, -1, 1],
        materialsList: [
            {
                image: "./img/25-f.png",
                rotation: 0
            },
            null,
            null,
            {
                image: "./img/25-d.png",
                rotation: 0
            },
            {
                image: "./img/25-l.png",
                rotation: 0
            },
            null
        ],
        answer: "",
        toUncover: [[16, "down"], [22, "front"], [26, "left"]]
    },
    26: {
        position: [1, -1, 0],
        materialsList: emptyMaterialsList,
        answer: "",
        toUncover: [[18, "down"], [23, "front"]]
    },
    27: {
        position: [1, -1, -1],
        materialsList: emptyMaterialsList,
        answer: "",
        toUncover: [[19, "down"], [24, "front"], [26, "right"]]
    }
};

for (let key in cubeDict) {
    //Convert image to base64
    materialsList = cubeDict[key]["materialsList"];
    base64List = materialsList.map(obj => {
        if (obj)
            return {
                image: fs.readFileSync(obj.image, "base64"),
                rotation: obj.rotation
            };
        else return null;
    });
    cubeDict[key]["materialsList"] = base64List;
    //Set hashed answers
    let hashedAnswer = bcrypt.hashSync(answers[key.toString()], 10);
    cubeDict[key]["answer"] = hashedAnswer;
}

//Encrypt image if necessary
const directionMap = {
    front: 0,
    back: 1,
    up: 2,
    down: 3,
    left: 4,
    right: 5
};
for (const [key, value] of Object.entries(encryptedBy)) {
    const [a, b] = key.split("-");
    // 0 - front, 1 - back, 2 - up, 3 - down, 4 - left, 5 - right
    let base64Image = cubeDict[parseInt(a)]["materialsList"][directionMap[b]];
    let encrypted = null;
    if (base64Image) {
        encrypted = AES.encrypt(
            base64Image.image,
            answers[value.toString()]
        ).toString();
        cubeDict[parseInt(a)]["materialsList"][directionMap[b]] = {
            image: encrypted,
            rotation: base64Image.rotation
        };
    }
}
let jsonFile = JSON.stringify(cubeDict);
var jsonContent = JSON.stringify(cubeDict);
fs.writeFile("cubeData.js", "const cubeData = " + jsonContent, "utf8", function(
    err
) {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    }
});
