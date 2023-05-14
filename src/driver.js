
async function requestAvailableRecipes() {

    let res = await fetch('http://localhost:3000/get-analysis', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({  })
    }).catch(err => {
        console.log(err, "hii");
    }).then( res => {
        console.log(res, "response")
    })
}


requestAvailableRecipes()
