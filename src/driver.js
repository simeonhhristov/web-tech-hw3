const button = document.getElementById("main-button")

async function analyzeData() {

    let res = await fetch('http://localhost:3000/get-analysis', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({  })
    }).catch(err => {
        console.log(err);
    }).then(res => res.json())
    console.log(res)
    populateAnalysis(res)
}


button.addEventListener("click", _ => {
    analyzeData()
})


function populateAnalysis(data) {
    var list = document.getElementById("data-analysis")

    var ageMode = document.createElement("li")
    ageMode.innerHTML = `Ages mode: ${data.ageMode}`
    list.appendChild(ageMode)

    var ageVariance = document.createElement("li")
    ageVariance.innerHTML = `Ages variance: ${data.ageVariance}`
    list.appendChild(ageVariance)

    var heightMedian = document.createElement("li")
    heightMedian.innerHTML = `Height median: ${data.heightMedian}`
    list.appendChild(heightMedian)

    var weightVariance = document.createElement("li")
    weightVariance.innerHTML = `Weight variance: ${data.weightVariance}`
    list.appendChild(weightVariance)

    var ageToWeightCorelation = document.createElement("li")
    ageToWeightCorelation.innerHTML = `Age to weight corelation: ${data.ageToWeightCorelation}`
    list.appendChild(ageToWeightCorelation)
}