
const singlePupDiv = document.querySelector('#singlePupDiv')
console.log(singlePupDiv)

let puppy = []


window.addEventListener("hashchange", () =>{
  
   render()
})

const ul = document.querySelector("ul")

 function render(){
    const html = puppy.map((pup) => {
        return `<li>
        <img src = ${pup.imageUrl} /> 
        <a href=#${pup.name}>${pup.name}</a>
        </li>`
    })
    

    const name = window.location.hash.slice(1)
    
    const singlePup = puppy.find((pup) => {
        return pup.name === name
    })
    ul.innerHTML = singlePupDiv ? "" :   html.join("")
   /*if(singlePup)
    const pupData = await fetch(singlePup)
    const singlePupData = await pupData()*/

    //singlePupDiv.innerHTML =  html.join("")
    
}
   
async function fetchPuppy(){
    const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2310-ftb-et-web-ft/players")
    const data = await response.json()
    console.log(data.data.players)
    puppy = data.data.players

    render()
}

fetchPuppy()