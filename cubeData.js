const emptyMaterialsList = [null, null, null, null, null, null];
// front, back, up, down, left, right
const cubeData = [
    {
        id: '1',
        position: [-1, 1, 1],
        materialsList: [
            null,
            {
                image:
                    'https://raw.githubusercontent.com/michaelyang/cube/master/img/1-b.png',
                rotation: 180,
            },
            {
                image:
                    'https://raw.githubusercontent.com/michaelyang/cube/master/img/1-u.png',
                rotation: -90,
            },
            null,
            {
                image:
                    'https://raw.githubusercontent.com/michaelyang/cube/master/img/1-l.png',
                rotation: 180,
            },
            null,
        ],
    },
    {
        id: '2',
        position: [0, 1, 1],
        materialsList: emptyMaterialsList,
    },
    {
        id: '3',
        position: [1, 1, 1],
        materialsList: emptyMaterialsList,
    },
    {
        id: '4',
        position: [-1, 0, 1],
        materialsList: emptyMaterialsList,
    },
    {
        id: '5',
        position: [0, 0, 1],
        materialsList: emptyMaterialsList,
    },
    {
        id: '6',
        position: [1, 0, 1],
        materialsList: emptyMaterialsList,
    },
    {
        id: '7',
        position: [-1, -1, 1],
        materialsList: emptyMaterialsList,
    },
    {
        id: '8',
        position: [0, -1, 1],
        materialsList: emptyMaterialsList,
    },
    {
        id: '9',
        position: [1, -1, 1],
        materialsList: emptyMaterialsList,
    },
    {
        id: '10',
        position: [-1, 1, 0],
        materialsList: emptyMaterialsList,
    },
    {
        id: '11',
        position: [0, 1, 0],
        materialsList: emptyMaterialsList,
    },
    {
        id: '12',
        position: [1, 1, 0],
        materialsList: emptyMaterialsList,
    },
    {
        id: '13',
        position: [-1, 0, 0],
        materialsList: emptyMaterialsList,
    },
    {
        id: '14',
        position: [0, 0, 0],
        materialsList: emptyMaterialsList,
    },
    {
        id: '15',
        position: [1, 0, 0],
        materialsList: emptyMaterialsList,
    },
    {
        id: '16',
        position: [-1, -1, 0],
        materialsList: emptyMaterialsList,
    },
    {
        id: '17',
        position: [0, -1, 0],
        materialsList: emptyMaterialsList,
    },
    {
        id: '18',
        position: [1, -1, 0],
        materialsList: emptyMaterialsList,
    },
    {
        id: '19',
        position: [-1, 1, -1],
        materialsList: emptyMaterialsList,
    },
    {
        id: '20',
        position: [0, 1, -1],
        materialsList: emptyMaterialsList,
    },
    {
        id: '21',
        position: [1, 1, -1],
        materialsList: emptyMaterialsList,
    },
    {
        id: '22',
        position: [-1, 0, -1],
        materialsList: emptyMaterialsList,
    },
    {
        id: '23',
        position: [0, 0, -1],
        materialsList: emptyMaterialsList,
    },
    {
        id: '24',
        position: [1, 0, -1],
        materialsList: emptyMaterialsList,
    },
    {
        id: '25',
        position: [-1, -1, -1],
        materialsList: emptyMaterialsList,
    },
    {
        id: '26',
        position: [0, -1, -1],
        materialsList: emptyMaterialsList,
    },
    {
        id: '27',
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
