const emptyMaterialsList = [null, null, null, null, null, null];
// 0 - front, 1 - back, 2 - up, 3 - down, 4 - left, 5 - right
const cubeDict = {
    1: {
        position: [-1, 1, 1],
        materialsList: [
            null,
            {
                image:
                    'https://raw.githubusercontent.com/michaelyang/cube/master/img/1-b.png',
                rotation: 0,
            },
            {
                image:
                    'https://raw.githubusercontent.com/michaelyang/cube/master/img/1-u.png',
                rotation: 0,
            },
            null,
            {
                image:
                    'https://raw.githubusercontent.com/michaelyang/cube/master/img/1-l.png',
                rotation: 0,
            },
            null,
        ],
        answer: '$2a$10$qSyruho17.tyzGkHlgbGxu.l4BSjIGXpra2CYycT5gOKmJsi5CfZu',
        toUncover: [[2, 'front'], [4, 'back'], [10, 'up']],
    },
    2: {
        position: [-1, 1, 0],
        materialsList: emptyMaterialsList,
        answer: '$2a$10$NF.0xt9Dzd0GjU.qbW.D/OGJ1l/XVTrPtLjit1SBbZ3tftfc52Rza',
        toUncover: [[5, 'back'], [11, 'up']],
    },
    3: {
        position: [-1, 1, -1],
        materialsList: [
            null,
            {
                image:
                    'https://raw.githubusercontent.com/michaelyang/cube/master/img/3-b.png',
                rotation: 0,
            },
            {
                image:
                    'https://raw.githubusercontent.com/michaelyang/cube/master/img/3-u.png',
                rotation: 90,
            },
            null,
            null,
            {
                image:
                    'https://raw.githubusercontent.com/michaelyang/cube/master/img/3-r.png',
                rotation: 0,
            },
        ],
        answer: '$2a$10$.EY6ym2wKE5M5r185kwyx.3AagEKnFnZGy4xXlhKR7QepC9wEDsQC',
        toUncover: [[2, 'right'], [6, 'back'], [12, 'up']],
    },
    4: {
        position: [0, 1, 1],
        materialsList: emptyMaterialsList,
        answer: '$2a$10$NF.0xt9Dzd0GjU.qbW.D/OGJ1l/XVTrPtLjit1SBbZ3tftfc52Rza',
        toUncover: [[5, 'left'], [13, 'up']],
    },
    5: {
        position: [0, 1, 0],
        materialsList: emptyMaterialsList,
        answer: '$2a$10$NF.0xt9Dzd0GjU.qbW.D/OGJ1l/XVTrPtLjit1SBbZ3tftfc52Rza',
        toUncover: [[14, 'up']],
    },
    6: {
        position: [0, 1, -1],
        materialsList: emptyMaterialsList,
        answer: '$2a$10$NF.0xt9Dzd0GjU.qbW.D/OGJ1l/XVTrPtLjit1SBbZ3tftfc52Rza',
        toUncover: [[5, 'right'], [15, 'up']],
    },
    7: {
        position: [1, 1, 1],
        materialsList: emptyMaterialsList,
        answer: '$2a$10$NF.0xt9Dzd0GjU.qbW.D/OGJ1l/XVTrPtLjit1SBbZ3tftfc52Rza',
        toUncover: [[4, 'front'], [8, 'left'], [16, 'up']],
    },
    8: {
        position: [1, 1, 0],
        materialsList: emptyMaterialsList,
        answer: '$2a$10$.EY6ym2wKE5M5r185kwyx.3AagEKnFnZGy4xXlhKR7QepC9wEDsQC',
        toUncover: [[5, 'down'], [17, 'up']],
    },
    9: {
        position: [1, 1, -1],
        materialsList: emptyMaterialsList,
        answer: '$2a$10$NF.0xt9Dzd0GjU.qbW.D/OGJ1l/XVTrPtLjit1SBbZ3tftfc52Rza',
        toUncover: [[6, 'front'], [8, 'right'], [18, 'up']],
    },
    10: {
        position: [-1, 0, 1],
        materialsList: emptyMaterialsList,
        answer: '$2a$10$NF.0xt9Dzd0GjU.qbW.D/OGJ1l/XVTrPtLjit1SBbZ3tftfc52Rza',
        toUncover: [[10, 'left'], [13, 'back']],
    },
    11: {
        position: [-1, 0, 0],
        materialsList: emptyMaterialsList,
        answer: '$2a$10$.EY6ym2wKE5M5r185kwyx.3AagEKnFnZGy4xXlhKR7QepC9wEDsQC',
        toUncover: [[14, 'back']],
    },
    12: {
        position: [-1, 0, -1],
        materialsList: emptyMaterialsList,
        answer: '$2a$10$.EY6ym2wKE5M5r185kwyx.3AagEKnFnZGy4xXlhKR7QepC9wEDsQC',
        toUncover: [[10, 'right'], [15, 'back']],
    },
    13: {
        position: [0, 0, 1],
        materialsList: [
            {
                image:
                    'https://raw.githubusercontent.com/michaelyang/cube/master/img/13-f.png',
                rotation: 0,
            },
            {
                image:
                    'https://raw.githubusercontent.com/michaelyang/cube/master/img/13-b.png',
                rotation: 0,
            },
            {
                image:
                    'https://raw.githubusercontent.com/michaelyang/cube/master/img/13-u.png',
                rotation: 0,
            },
            {
                image:
                    'https://raw.githubusercontent.com/michaelyang/cube/master/img/13-d.png',
                rotation: 0,
            },
            {
                image:
                    'https://raw.githubusercontent.com/michaelyang/cube/master/img/13-l.png',
                rotation: 0,
            },
            null,
        ],
        answer: '',
        toUncover: [[14, 'left']],
    },
    14: {
        position: [0, 0, 0],
        materialsList: emptyMaterialsList,
        answer: '$2a$10$.EY6ym2wKE5M5r185kwyx.3AagEKnFnZGy4xXlhKR7QepC9wEDsQC',
        toUncover: [[]],
    },
    15: {
        position: [0, 0, -1],
        materialsList: emptyMaterialsList,
        answer: '$2a$10$.EY6ym2wKE5M5r185kwyx.3AagEKnFnZGy4xXlhKR7QepC9wEDsQC',
        toUncover: [[14, 'right']],
    },
    16: {
        position: [1, 0, 1],
        materialsList: emptyMaterialsList,
        answer: '$2a$10$.EY6ym2wKE5M5r185kwyx.3AagEKnFnZGy4xXlhKR7QepC9wEDsQC',
        toUncover: [[13, 'front'], [17, 'left']],
    },
    17: {
        position: [1, 0, 0],
        materialsList: emptyMaterialsList,
        answer: '$2a$10$.EY6ym2wKE5M5r185kwyx.3AagEKnFnZGy4xXlhKR7QepC9wEDsQC',
        toUncover: [[14, 'front']],
    },
    18: {
        position: [1, 0, -1],
        materialsList: emptyMaterialsList,
        answer: '$2a$10$.EY6ym2wKE5M5r185kwyx.3AagEKnFnZGy4xXlhKR7QepC9wEDsQC',
        toUncover: [[15, 'front'], [17, 'right']],
    },
    19: {
        position: [-1, -1, 1],
        materialsList: emptyMaterialsList,
        answer: '$2a$10$.EY6ym2wKE5M5r185kwyx.3AagEKnFnZGy4xXlhKR7QepC9wEDsQC',
        toUncover: [[10, 'down'], [20, 'left'], [22, 'back']],
    },
    20: {
        position: [-1, -1, 0],
        materialsList: emptyMaterialsList,
        answer: '$2a$10$.EY6ym2wKE5M5r185kwyx.3AagEKnFnZGy4xXlhKR7QepC9wEDsQC',
        toUncover: [[11, 'down'], [23, 'back']],
    },
    21: {
        position: [-1, -1, -1],
        materialsList: emptyMaterialsList,
        answer: '$2a$10$.EY6ym2wKE5M5r185kwyx.3AagEKnFnZGy4xXlhKR7QepC9wEDsQC',
        toUncover: [[12, 'down'], [20, 'right'], [24, 'back']],
    },
    22: {
        position: [0, -1, 1],
        materialsList: emptyMaterialsList,
        answer: '$2a$10$.EY6ym2wKE5M5r185kwyx.3AagEKnFnZGy4xXlhKR7QepC9wEDsQC',
        toUncover: [[12, 'down'], [23, 'left']],
    },
    23: {
        position: [0, -1, 0],
        materialsList: emptyMaterialsList,
        answer: '$2a$10$.EY6ym2wKE5M5r185kwyx.3AagEKnFnZGy4xXlhKR7QepC9wEDsQC',
        toUncover: [[14, 'down']],
    },
    24: {
        position: [0, -1, -1],
        materialsList: emptyMaterialsList,
        answer: '$2a$10$.EY6ym2wKE5M5r185kwyx.3AagEKnFnZGy4xXlhKR7QepC9wEDsQC',
        toUncover: [[15, 'down'], [23, 'right']],
    },
    25: {
        position: [1, -1, 1],
        materialsList: [
            {
                image:
                    'https://raw.githubusercontent.com/michaelyang/cube/master/img/25-f.png',
                rotation: 0,
            },
            null,
            null,
            {
                image:
                    'https://raw.githubusercontent.com/michaelyang/cube/master/img/25-d.png',
                rotation: 0,
            },
            {
                image:
                    'https://raw.githubusercontent.com/michaelyang/cube/master/img/25-l.png',
                rotation: 0,
            },
            null,
        ],
        answer: '$2a$10$.EY6ym2wKE5M5r185kwyx.3AagEKnFnZGy4xXlhKR7QepC9wEDsQC',
        toUncover: [[16, 'down'], [22, 'front'], [26, 'left']],
    },
    26: {
        position: [1, -1, 0],
        materialsList: emptyMaterialsList,
        answer: '$2a$10$.EY6ym2wKE5M5r185kwyx.3AagEKnFnZGy4xXlhKR7QepC9wEDsQC',
        toUncover: [[18, 'down'], [23, 'front']],
    },
    27: {
        position: [1, -1, -1],
        materialsList: emptyMaterialsList,
        answer: '$2a$10$.EY6ym2wKE5M5r185kwyx.3AagEKnFnZGy4xXlhKR7QepC9wEDsQC',
        toUncover: [[19, 'down'], [24, 'front'], [26, 'right']],
    },
};
