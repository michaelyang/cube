const emptyMaterialsList = [null, null, null, null, null, null];
// front, back, up, down, left, right
const cubeData = [
    {
        id: "1",
        position: [-1, 1, 1],
        materialsList: [
            null,
            {
                image:
                    "https://raw.githubusercontent.com/michaelyang/cube/master/img/1-b.png",
                rotation: 180
            },
            {
                image:
                    "https://raw.githubusercontent.com/michaelyang/cube/master/img/1-u.png",
                rotation: -90
            },
            null,
            {
                image:
                    "https://raw.githubusercontent.com/michaelyang/cube/master/img/1-l.png",
                rotation: 180
            },
            null
        ],
        selectedMaterialsList: [
            null,
            {
                image:
                    "https://raw.githubusercontent.com/michaelyang/cube/master/img/1-b_selected.png",
                rotation: 0
            },
            {
                image:
                    "https://raw.githubusercontent.com/michaelyang/cube/master/img/1-u_selected.png",
                rotation: 0
            },
            null,
            {
                image:
                    "https://raw.githubusercontent.com/michaelyang/cube/master/img/1-l_selected.png",
                rotation: 0
            },
            null
        ]
    },
    {
        id: "2",
        position: [-1, 1, 0],
        materialsList: emptyMaterialsList,
        selectedMaterialsList: emptyMaterialsList
    },
    {
        id: "3",
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
        selectedMaterialsList: [
            null,
            {
                image:
                    "https://raw.githubusercontent.com/michaelyang/cube/master/img/3-b_selected.png",
                rotation: 0
            },
            {
                image:
                    "https://raw.githubusercontent.com/michaelyang/cube/master/img/3-u_selected.png",
                rotation: 90
            },
            null,
            null,
            {
                image:
                    "https://raw.githubusercontent.com/michaelyang/cube/master/img/3-r_selected.png",
                rotation: 0
            }
        ]
    },
    {
        id: "4",
        position: [0, 1, 1],
        materialsList: emptyMaterialsList,
        selectedMaterialsList: emptyMaterialsList
    },
    {
        id: "5",
        position: [0, 1, 0],
        materialsList: emptyMaterialsList,
        selectedMaterialsList: emptyMaterialsList
    },
    {
        id: "6",
        position: [0, 1, -1],
        materialsList: emptyMaterialsList,
        selectedMaterialsList: emptyMaterialsList
    },
    {
        id: "7",
        position: [1, 1, 1],
        materialsList: emptyMaterialsList,
        selectedMaterialsList: emptyMaterialsList
    },
    {
        id: "8",
        position: [1, 1, 0],
        materialsList: emptyMaterialsList,
        selectedMaterialsList: emptyMaterialsList
    },
    {
        id: "9",
        position: [1, 1, -1],
        materialsList: emptyMaterialsList,
        selectedMaterialsList: emptyMaterialsList
    },
    {
        id: "10",
        position: [-1, 0, 1],
        materialsList: emptyMaterialsList,
        selectedMaterialsList: emptyMaterialsList
    },
    {
        id: "11",
        position: [-1, 0, 0],
        materialsList: emptyMaterialsList,
        selectedMaterialsList: emptyMaterialsList
    },
    {
        id: "12",
        position: [-1, 0, -1],
        materialsList: emptyMaterialsList,
        selectedMaterialsList: emptyMaterialsList
    },
    {
        id: "13",
        position: [0, 0, 1],
        materialsList: emptyMaterialsList,
        selectedMaterialsList: emptyMaterialsList
    },
    {
        id: "14",
        position: [0, 0, 0],
        materialsList: emptyMaterialsList,
        selectedMaterialsList: emptyMaterialsList
    },
    {
        id: "15",
        position: [0, 0, -1],
        materialsList: emptyMaterialsList,
        selectedMaterialsList: emptyMaterialsList
    },
    {
        id: "16",
        position: [1, 0, 1],
        materialsList: emptyMaterialsList,
        selectedMaterialsList: emptyMaterialsList
    },
    {
        id: "17",
        position: [1, 0, 0],
        materialsList: emptyMaterialsList,
        selectedMaterialsList: emptyMaterialsList
    },
    {
        id: "18",
        position: [1, 0, -1],
        materialsList: emptyMaterialsList,
        selectedMaterialsList: emptyMaterialsList
    },
    {
        id: "19",
        position: [-1, -1, 1],
        materialsList: emptyMaterialsList,
        selectedMaterialsList: emptyMaterialsList
    },
    {
        id: "20",
        position: [-1, -1, 0],
        materialsList: emptyMaterialsList,
        selectedMaterialsList: emptyMaterialsList
    },
    {
        id: "21",
        position: [-1, -1, -1],
        materialsList: emptyMaterialsList,
        selectedMaterialsList: emptyMaterialsList
    },
    {
        id: "22",
        position: [0, -1, 1],
        materialsList: emptyMaterialsList,
        selectedMaterialsList: emptyMaterialsList
    },
    {
        id: "23",
        position: [0, -1, 0],
        materialsList: emptyMaterialsList,
        selectedMaterialsList: emptyMaterialsList
    },
    {
        id: "24",
        position: [0, -1, -1],
        materialsList: emptyMaterialsList,
        selectedMaterialsList: emptyMaterialsList
    },
    {
        id: "25",
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
                rotation: 90
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
    {
        id: "26",
        position: [1, -1, 0],
        materialsList: emptyMaterialsList,
        selectedMaterialsList: emptyMaterialsList
    },
    {
        id: "27",
        position: [1, -1, -1],
        materialsList: emptyMaterialsList,
        selectedMaterialsList: emptyMaterialsList
    }
];

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
