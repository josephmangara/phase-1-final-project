//The js code fetches data from a json server and displays it and creates an interactive user inferface. 

document.addEventListener("DOMContentLoaded", function (){
    getCharacters()
});

function getCharacters(){
    fetch(" http://localhost:3000/results")
    .then(res => res.json())
    .then(data => {
        displayCharacters(data)
    });
};
//This function creates a list of the chosen characters. 
function displayCharacters(data){
    for (let details of data){
    console.log(details);
    let list = document.getElementById("characters");
    let li = document.createElement("li");
    li.textContent = details.name;
    li.addEventListener("click", () => seeCharacters(details));
    list.appendChild(li);
    
}
}

//Displaying the characters on the webpage.
function seeCharacters(details){
    let chdata = document.querySelector("#chdata");
    chdata.innerHTML =`
    <ol id="them">
      <img src="${details.image}">
      <p>Name: ${details.name}</p>
      <p>Status: ${details.status}</p>
      <p>Species: ${details.species}</p>
      <p>Gender: ${details.gender}</p>
      <p>Location: ${details.location.name}</p>
      <p>Origin: ${details.origin.name}</p>
    `
}

