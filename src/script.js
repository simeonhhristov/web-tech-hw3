const SimpleStatistics = require('simple-statistics')
const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.post('/get-analysis', function (req, res) {
    res.send("heloo")
    console.log(SimpleStatistics.average([10, 2]))
});

app.listen(3000, () => console.log("\x1b[33m", "Server Started"))