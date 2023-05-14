const SimpleStatistics = require('simple-statistics')
const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.post('/get-analysis', function (req, res) {
    var analysis = analyseData()
    res.send(analysis)
    console.log(analysis)
});

app.listen(3000, () => console.log("\x1b[33m", "Server Started"))

function analyseData() {
    var ageMode = agesMode()
    var heightMedian = heightsMedian()
    var ageVariance = agesVariance()
    var weightVariance = weightsVariance()
    var ageToWeightCorelation = ageWeightCorelation()

    return JSON.stringify( {
        ageMode: ageMode,
        heightMedian: heightMedian,
        ageVariance: ageVariance,
        weightVariance: weightVariance,
        ageToWeightCorelation: ageToWeightCorelation
    })
}

const agesMode = () => {
    let ages = hardCodedData.people.map( person => person.age )
    return SimpleStatistics.mode(ages)
}
const heightsMedian = () => {
    let ages = hardCodedData.people.map( person => person.height )
    return SimpleStatistics.median(ages)
}

const agesVariance = () => {
    let ages = hardCodedData.people.map( person => person.age )
    return SimpleStatistics.variance(ages)
}

const weightsVariance = () => {
    let weights = hardCodedData.people.map( person => person.weight )
    return SimpleStatistics.variance(weights)
}

const ageWeightCorelation = () => {
    let ages = hardCodedData.people.map( person => person.age )
    let weights = hardCodedData.people.map( person => person.weight )
    return SimpleStatistics.sampleCorrelation(ages, weights)
}
const hardCodedData = {
    "people": [
      {
        "name": "Georgi",
        "height": 182,
        "weight": 94,
        "age": 21,
        "eyeColor": "brown",
        "hairColor": "black",
        "hairType": "straight",
        "job": "software engineer"
      },
      {
        "name": "Krasimir",
        "height": 187,
        "weight": 90,
        "age": 23,
        "eyeColor": "blue",
        "hairColor": "black",
        "hairType": "straight",
        "job": "software engineer"
      },
      {
        "name": "Esteban",
        "height": 178,
        "weight": 105,
        "age": 19,
        "eyeColor": "brown",
        "hairColor": "blonde",
        "hairType": "curly",
        "job": "unemployed"
      },
      {
        "name": "Pier",
        "height": 183,
        "weight": 79,
        "age": 21,
        "eyeColor": "brown",
        "hairColor": "black",
        "hairType": "curly",
        "job": "construction worker"
      },
      {
        "name": "Max",
        "height": 185,
        "weight": 81,
        "age": 25,
        "eyeColor": "brown",
        "hairColor": "ginger",
        "hairType": "curly",
        "job": "seller"
      },
      {
        "name": "Lewis",
        "height": 184,
        "weight": 81.2,
        "age": 27,
        "eyeColor": "brown",
        "hairColor": "black",
        "hairType": "curly",
        "job": "seller"
      },
      {
        "name": "Stoyan",
        "height": 184,
        "weight": 84.3,
        "age": 27,
        "eyeColor": "brown",
        "hairColor": "blonde",
        "hairType": "straight",
        "job": "software engineer"
      },
      {
        "name": "Ramires",
        "height": 194,
        "weight": 84.3,
        "age": 20,
        "eyeColor": "brown",
        "hairColor": "ginger",
        "hairType": "straight",
        "job": "software engineer"
      }
    ]
  }