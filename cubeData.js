const emptyMaterialsList = [null, null, null, null, null, null];
// front, back, up, down, left, right
const cubeData = [
    {
        name: '1',
        position: [-1, 1, 1],
        materialsList: [
            null,
            'img/1-b.png',
            'img/1-u.png',
            null,
            'img/1-l.png',
            null,
        ],
    },
    {
        name: '2',
        position: [0, 1, 1],
        materialsList: emptyMaterialsList,
    },
    {
        name: '3',
        position: [1, 1, 1],
        materialsList: emptyMaterialsList,
    },
    {
        name: '4',
        position: [-1, 0, 1],
        materialsList: emptyMaterialsList,
    },
    {
        name: '5',
        position: [0, 0, 1],
        materialsList: emptyMaterialsList,
    },
    {
        name: '6',
        position: [1, 0, 1],
        materialsList: emptyMaterialsList,
    },
    {
        name: '7',
        position: [-1, -1, 1],
        materialsList: emptyMaterialsList,
    },
    {
        name: '8',
        position: [0, -1, 1],
        materialsList: emptyMaterialsList,
    },
    {
        name: '9',
        position: [1, -1, 1],
        materialsList: emptyMaterialsList,
    },
    {
        name: '10',
        position: [-1, 1, 0],
        materialsList: emptyMaterialsList,
    },
    {
        name: '11',
        position: [0, 1, 0],
        materialsList: emptyMaterialsList,
    },
    {
        name: '12',
        position: [1, 1, 0],
        materialsList: emptyMaterialsList,
    },
    {
        name: '13',
        position: [-1, 0, 0],
        materialsList: emptyMaterialsList,
    },
    {
        name: '14',
        position: [0, 0, 0],
        materialsList: emptyMaterialsList,
    },
    {
        name: '15',
        position: [1, 0, 0],
        materialsList: emptyMaterialsList,
    },
    {
        name: '16',
        position: [-1, -1, 0],
        materialsList: emptyMaterialsList,
    },
    {
        name: '17',
        position: [0, -1, 0],
        materialsList: emptyMaterialsList,
    },
    {
        name: '18',
        position: [1, -1, 0],
        materialsList: emptyMaterialsList,
    },
    {
        name: '19',
        position: [-1, 1, -1],
        materialsList: emptyMaterialsList,
    },
    {
        name: '20',
        position: [0, 1, -1],
        materialsList: emptyMaterialsList,
    },
    {
        name: '21',
        position: [1, 1, -1],
        materialsList: emptyMaterialsList,
    },
    {
        name: '22',
        position: [-1, 0, -1],
        materialsList: emptyMaterialsList,
    },
    {
        name: '23',
        position: [0, 0, -1],
        materialsList: emptyMaterialsList,
    },
    {
        name: '24',
        position: [1, 0, -1],
        materialsList: emptyMaterialsList,
    },
    {
        name: '25',
        position: [-1, -1, -1],
        materialsList: emptyMaterialsList,
    },
    {
        name: '26',
        position: [0, -1, -1],
        materialsList: emptyMaterialsList,
    },
    {
        name: '27',
        position: [1, -1, -1],
        materialsList: emptyMaterialsList,
    },
];

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
