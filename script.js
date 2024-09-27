const input = document.querySelector("#input")
const search = document.querySelector("#search")
const output = document.querySelector("#meaning")


search.addEventListener("click", async ()=>{
    let val = input.value 
    if(val === ""){
        alert("Please Enter a Word")
    }else{
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${val}`
        let meaning = await fetch(url)
        meaning = await meaning.json()
        output.textContent = meaning[0] ['meanings'][0] ['definitions'][0] ['definition']
    }
})