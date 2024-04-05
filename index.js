const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
const data = [
    {
        "id": "1",
        "name": "WEAPONS",
        "stock": '134/185',
        "imageUrl": 'https://res.cloudinary.com/dcf6kyeeu/image/upload/v1712296697/solider/b34ipptoxbabfldomcca.png'
    },
    {
        "id": "2",
        "name": "KITS",
        "stock": '46/64',
        "imageUrl": 'https://res.cloudinary.com/dcf6kyeeu/image/upload/v1712297262/solider/bjepaktmpynhszkulqbg.png'
    },
    {
        "id": "3",
        "name": "VEHICLES",
        "stock": '77/182',
        "imageUrl": "https://res.cloudinary.com/dcf6kyeeu/image/upload/v1712296697/solider/m4oztfniflsnvzx8gwxu.png"
    },
    {
        "id": "4",
        "name": "MEDALS",
        "stock": '11/54',
        "imageUrl": "https://res.cloudinary.com/dcf6kyeeu/image/upload/v1712296697/solider/tbshqqfmhjtvllxaonyk.png"
    },
    {
        "id": "5",
        "name": "ASSIGNMENTS",
        "stock": '21/110',
        "imageUrl": "https://res.cloudinary.com/dcf6kyeeu/image/upload/v1712296697/solider/tbshqqfmhjtvllxaonyk.png"
    },
    {
        "id": "6",
        "name": "DOG TAGS",
        "stock": '357/720',
        "imageUrl": 'https://res.cloudinary.com/dcf6kyeeu/image/upload/v1712296697/solider/b34ipptoxbabfldomcca.png'
    },
    {
        "id": "7",
        "name": "BATTLEPACKS",
        "stock": '',
        "imageUrl": ''
    },
]

const stat = [
    {
        "id": "1",
        "name": "WINS",
        "score": "44%",
    },
    {
        "id": "2",
        "name": "SCORE/MIN",
        "score": "592",
    },
    {
        "id": "3",
        "name": "KILLS/MIN",
        "score": "0.60",
    },
]

const objects = [
    {
        "id": "1",
        "head": "top vechicles",
        "name": "Main Battle Tank",
        "score": "33 kills",
        'imageUrl':'https://res.cloudinary.com/dcf6kyeeu/image/upload/v1712300066/solider/faj7vcqizj9sqywnffbl.png'
    },
    {
        "id": "2",
        "head": "top primary",
        "name": "ACW-R",
        "score": "495 kills",
        'imageUrl':'https://res.cloudinary.com/dcf6kyeeu/image/upload/v1712300065/solider/w5k4kvzxvbexwmfr6e5f.png'
    },
    {
        "id": "3",
        "head": "top class",
        "name": "engineer",
        "score": "828,514 kills",
        'imageUrl':'https://res.cloudinary.com/dcf6kyeeu/image/upload/v1712300065/solider/i1pyjy1c80b2uumnxp12.png'
    },
    {
        "id": "4",
        "head": "top sidearm",
        "name": "M9",
        "score": "112 kills",
        'imageUrl':'https://res.cloudinary.com/dcf6kyeeu/image/upload/v1712300065/solider/zppz15m6t5bewjkdiypj.png'
    },
]
app.get('/get', (req, res) => {
    res.send(data)
})

app.get('/stat', (req, res) => {
    res.send(stat)
})

app.get('/getobj', (req, res) => {
    res.send(objects)
})


app.listen(3000, () => {
    console.log("server is started with port 3000");
})