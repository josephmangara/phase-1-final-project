//The js code fetches data from a json server and displays it and creates an interactive user inferface. 

document.addEventListener("DOMContentLoaded", function (){
  getCharacters()
});
 function getCharacters(){
    fetch("https://rickandmortyapi.com/api/character")
    .then(res => res.json())
    .then(data => {displayCharacters(data)
      if (data.length > 0) {
        let rand = Math.floor(Math.random() * data.length)
        displayCharacters(data[rand]);
    }
 })};

//This function creates a list of the chosen characters. 
function displayCharacters(data){
  let list = document.getElementById("characters");  

  for (let details of data){
    console.log(details);
    let li = document.createElement("li");
    li.textContent = details.name;
    li.addEventListener("click", (event) => seeCharacters(details));
    list.appendChild(li);
   
}
}

//Displaying the characters on the webpage.
function seeCharacters(details){
    let chdata = document.getElementById("chdata");
    chdata.innerHTML =`
    <h2>Insight</h2>
      <img src="${details.image}">
      <p>Name: ${details.name}</p>
      <p>Status: ${details.status}</p>
      <p>Species: ${details.species}</p>
      <p>Gender: ${details.gender}</p>
      <p>Location: ${details.location.name}</p>
      <p>Origin: ${details.origin.name}</p>
    
    `
}

document.addEventListener("click", function (){
  addComment() 
})
function addComment(){
  const commentInput = document.getElementById("commentSection");
  const commentText = commentInput.value.trim();

if (commentText !== ""){
const commentElement = document.createElement("p");
  commentElement.textContent = commentText;
  commentContainer.appendChild(commentElement);

  //delete button 
document.addEventListener("click", function (){
  deleteComment()
})
const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
    deleteComment(commentElement);
    });
    commentContainer.appendChild(deleteButton); 

function deleteComment(commentElement){
    commentElement.remove();
}
// Storing the comments in localStorage
    const comments = JSON.parse(localStorage.getItem("comments")) || [];
    comments.push(commentText);
    localStorage.setItem("comments", JSON.stringify(comments));
    commentInput.value = "";
    }
}

// Loading  and displaying existing comments from localStorage when the page loads
window.addEventListener("load", function () {
  const comments = JSON.parse(localStorage.getItem("comments")) || [];
  const commentContainer = document.getElementById("commentContainer");

  comments.forEach(function (commentText) {
      const commentElement = document.createElement("p");
      commentElement.textContent = commentText;
      commentContainer.appendChild(commentElement);
  });
});

