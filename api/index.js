const express = require('express');
// const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const router = express.Router();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

var contatos = [
    { nome: "Pedro", telefone: "99998888", data: new Date(), operadora: { nome: 'Oi', codigo: 14, categoria: 'celular' }, cor: 'blue' },
    { nome: "Ana", telefone: "12344321", data: new Date(), operadora: { nome: 'Vivo', codigo: 15, categoria: 'celular' }, cor: 'yellow' },
    { nome: "Maria", telefone: "11223344", data: new Date(), operadora: { nome: 'Tim', codigo: 41, categoria: 'celular' }, cor: 'red' }
];

var operadoras = [
    { nome: 'Oi', codigo: 14, categoria: 'celular', preco: 2 },
    { nome: 'Vivo', codigo: 15, categoria: 'celular', preco: 1 },
    { nome: 'Tim', codigo: 41, categoria: 'celular', preco: 3 },
    { nome: 'GVT', codigo: 25, categoria: 'fixo', preco: 1 },
    { nome: 'Embratel', codigo: 21, categoria: 'fixo', preco: 2 },
]


router.post('/contatos', (req, res) => {
    contatos.push(req.body)

    res.send({ message: 'ok' })
})

router.get('/contatos', (req, res) => {
    res.send(contatos)
})



router.get('/operadoras', (req, res) => {
    res.send(operadoras)
})

app.use('/', router);

// app.post('/operadoras', (req, res) => {
//     const { nome, codigo, categoria, preco } = req.body;
    
//     contatos.push({ 
//         nome, 
//         telefone, 
//         data: new Date(),
//         operadora,
//         cor: 'gray'
//     })

//     res.send({ message: 'ok' })
// })

app.listen(3000, () => console.log('Listening on port 3000'));