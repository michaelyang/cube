const emptyMaterialsList = [null, null, null, null, null, null];
// front, back, up, down, left, right
const cubeDict = {
    1: {
        position: [-1, 1, 1],
        materialsList: [
            null,
            {
                image:
                    "https://raw.githubusercontent.com/michaelyang/cube/master/img/1-b.png",
                rotation: 0
            },
            {
                image:
                    "https://raw.githubusercontent.com/michaelyang/cube/master/img/1-u.png",
                rotation: 0
            },
            null,
            {
                image:
                    "https://raw.githubusercontent.com/michaelyang/cube/master/img/1-l.png",
                rotation: 0
            },
            null
        ],
        answer: "$2a$10$qSyruho17.tyzGkHlgbGxu.l4BSjIGXpra2CYycT5gOKmJsi5CfZu"
    },
    2: {
        position: [-1, 1, 0],
        materialsList: emptyMaterialsList,
        selectedMaterialsList: emptyMaterialsList,
        answer: "$2a$10$NF.0xt9Dzd0GjU.qbW.D/OGJ1l/XVTrPtLjit1SBbZ3tftfc52Rza"
    },
    3: {
        position: [-1, 1, -1],
        materialsList: [
            null,
            {
                image:
                    "https://raw.githubusercontent.com/michaelyang/cube/master/img/3-b.png",
                rotation: 0
            },
            {
                image:
                    "https://raw.githubusercontent.com/michaelyang/cube/master/img/3-u.png",
                rotation: 90
            },
            null,
            null,
            {
                image:
                    "https://raw.githubusercontent.com/michaelyang/cube/master/img/3-r.png",
                rotation: 0
            }
        ],
        answer: "$2a$10$.EY6ym2wKE5M5r185kwyx.3AagEKnFnZGy4xXlhKR7QepC9wEDsQC"
    },
    4: {
        position: [0, 1, 1],
        materialsList: emptyMaterialsList,
        selectedMaterialsList: emptyMaterialsList,
        answer: "$2a$10$NF.0xt9Dzd0GjU.qbW.D/OGJ1l/XVTrPtLjit1SBbZ3tftfc52Rza"
    },
    5: {
        position: [0, 1, 0],
        materialsList: emptyMaterialsList,
        selectedMaterialsList: emptyMaterialsList,
        answer: "$2a$10$NF.0xt9Dzd0GjU.qbW.D/OGJ1l/XVTrPtLjit1SBbZ3tftfc52Rza"
    },
    6: {
        position: [0, 1, -1],
        materialsList: emptyMaterialsList,
        selectedMaterialsList: emptyMaterialsList,
        answer: "$2a$10$NF.0xt9Dzd0GjU.qbW.D/OGJ1l/XVTrPtLjit1SBbZ3tftfc52Rza"
    },
    7: {
        position: [1, 1, 1],
        materialsList: emptyMaterialsList,
        selectedMaterialsList: emptyMaterialsList,
        answer: "$2a$10$NF.0xt9Dzd0GjU.qbW.D/OGJ1l/XVTrPtLjit1SBbZ3tftfc52Rza"
    },
    8: {
        position: [1, 1, 0],
        materialsList: emptyMaterialsList,
        selectedMaterialsList: emptyMaterialsList
    },
    9: {
        position: [1, 1, -1],
        materialsList: emptyMaterialsList,
        selectedMaterialsList: emptyMaterialsList,
        answer: "$2a$10$NF.0xt9Dzd0GjU.qbW.D/OGJ1l/XVTrPtLjit1SBbZ3tftfc52Rza"
    },
    10: {
        position: [-1, 0, 1],
        materialsList: emptyMaterialsList,
        selectedMaterialsList: emptyMaterialsList,
        answer: "$2a$10$NF.0xt9Dzd0GjU.qbW.D/OGJ1l/XVTrPtLjit1SBbZ3tftfc52Rza"
    },
    11: {
        position: [-1, 0, 0],
        materialsList: emptyMaterialsList,
        selectedMaterialsList: emptyMaterialsList
    },
    12: {
        position: [-1, 0, -1],
        materialsList: emptyMaterialsList,
        selectedMaterialsList: emptyMaterialsList
    },
    13: {
        position: [0, 0, 1],
        materialsList: [
            {
                image:
                    "https://raw.githubusercontent.com/michaelyang/cube/master/img/13-f.png",
                rotation: 0
            },
            {
                image:
                    "https://raw.githubusercontent.com/michaelyang/cube/master/img/13-b.png",
                rotation: 0
            },
            {
                image:
                    "https://raw.githubusercontent.com/michaelyang/cube/master/img/13-u.png",
                rotation: 0
            },
            {
                image:
                    "https://raw.githubusercontent.com/michaelyang/cube/master/img/13-d.png",
                rotation: 0
            },
            {
                image:
                    "https://raw.githubusercontent.com/michaelyang/cube/master/img/13-l.png",
                rotation: 0
            },
            null
        ],
        selectedMaterialsList: [
            {
                image:
                    "https://raw.githubusercontent.com/michaelyang/cube/master/img/13-f_selected.png",
                rotation: 0
            },
            {
                image:
                    "https://raw.githubusercontent.com/michaelyang/cube/master/img/13-b_selected.png",
                rotation: 0
            },
            {
                image:
                    "https://raw.githubusercontent.com/michaelyang/cube/master/img/13-u_selected.png",
                rotation: 0
            },
            {
                image:
                    "https://raw.githubusercontent.com/michaelyang/cube/master/img/13-d_selected.png",
                rotation: 90
            },
            {
                image:
                    "https://raw.githubusercontent.com/michaelyang/cube/master/img/13-l_selected.png",
                rotation: 0
            },
            null
        ]
    },
    14: {
        position: [0, 0, 0],
        materialsList: emptyMaterialsList,
        selectedMaterialsList: emptyMaterialsList
    },
    15: {
        position: [0, 0, -1],
        materialsList: emptyMaterialsList,
        selectedMaterialsList: emptyMaterialsList
    },
    16: {
        position: [1, 0, 1],
        materialsList: emptyMaterialsList,
        selectedMaterialsList: emptyMaterialsList
    },
    17: {
        position: [1, 0, 0],
        materialsList: emptyMaterialsList,
        selectedMaterialsList: emptyMaterialsList
    },
    18: {
        position: [1, 0, -1],
        materialsList: emptyMaterialsList,
        selectedMaterialsList: emptyMaterialsList
    },
    19: {
        position: [-1, -1, 1],
        materialsList: emptyMaterialsList,
        selectedMaterialsList: emptyMaterialsList
    },
    20: {
        position: [-1, -1, 0],
        materialsList: emptyMaterialsList,
        selectedMaterialsList: emptyMaterialsList
    },
    21: {
        position: [-1, -1, -1],
        materialsList: emptyMaterialsList,
        selectedMaterialsList: emptyMaterialsList
    },
    22: {
        position: [0, -1, 1],
        materialsList: emptyMaterialsList,
        selectedMaterialsList: emptyMaterialsList
    },
    23: {
        position: [0, -1, 0],
        materialsList: emptyMaterialsList,
        selectedMaterialsList: emptyMaterialsList
    },
    24: {
        position: [0, -1, -1],
        materialsList: emptyMaterialsList,
        selectedMaterialsList: emptyMaterialsList
    },
    25: {
        position: [1, -1, 1],
        materialsList: [
            {
                image:
                    "https://raw.githubusercontent.com/michaelyang/cube/master/img/25-f.png",
                rotation: 0
            },
            null,
            null,
            {
                image:
                    "https://raw.githubusercontent.com/michaelyang/cube/master/img/25-d.png",
                rotation: 0
            },
            {
                image:
                    "https://raw.githubusercontent.com/michaelyang/cube/master/img/25-l.png",
                rotation: 0
            },
            null
        ],
        selectedMaterialsList: [
            {
                image:
                    "https://raw.githubusercontent.com/michaelyang/cube/master/img/25-f_selected.png",
                rotation: 0
            },
            null,
            null,
            {
                image:
                    "https://raw.githubusercontent.com/michaelyang/cube/master/img/25-d_selected.png",
                rotation: 0
            },
            {
                image:
                    "https://raw.githubusercontent.com/michaelyang/cube/master/img/25-l_selected.png",
                rotation: 0
            },
            null
        ]
    },
    26: {
        position: [1, -1, 0],
        materialsList: emptyMaterialsList,
        selectedMaterialsList: emptyMaterialsList
    },
    27: {
        position: [1, -1, -1],
        materialsList: emptyMaterialsList,
        selectedMaterialsList: emptyMaterialsList
    }
};

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
