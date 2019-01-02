import express from 'express'
import { square, diag } from 'hasmath'
import * as ex from './es6default'

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    let result = diag(4, 5)
    res.send('Hello World ' + result)
})


app.get('/deffunc', (req, res) =>{
    let total1 = ex.calcuatebill(10);
    let total2 = ex.calcuatebill(10, 0.2);
    let total3 = ex.calcuatebill(10, 0.2, 0.1);

    let total21 = ex.calcuatebill(10, undefined, 0.1);

    res.send(`Default value passing example of 10 ${total1}, ${total2}, ${total3}`)
})


app.get('/arrow', (req, res) => {
    let total1 = ex.calcuatebill2(10, 0.2, 0.1)
    let total2 = ex.calcuatebill2(10, 0.2);
    res.send(`Arrow function ${total1}, ${total2}`);
})

app.get('/implicitreturn', (req, res) => {
    let total1= ex.calcuatebill3(10, 0.2 ,0.1);
    res.send(`Arrow function ${total1} `);
})

app.listen(port, () => console.log('App started from $s', port))


