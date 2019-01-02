import express from 'express'
import { square, diag } from 'hasmath'

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    let result = diag(4, 5)
    res.send('Hello World ' + result)
})

app.listen(port, () => console.log('App started from $s', port))


