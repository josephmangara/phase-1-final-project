# phase-1-final-project
Rick and Morty project 
This project fetches data from the Rick and Morty API and displays character information in an interactive user interface. 

Initialization on Page Load:
the first event listener ensures that the code starts execution after the DOM content is fully loaded.

Fetching Character Data:
I use the GET request to fetch data from the Rick and Morty API. 

Displaying Characters:
The displayCharacters function takes the character data and creates a list of characters with their names. 
Each character's name is clickable, allowing users to view more details when clicked.

Character Details Display:
When a character's name is clicked, the seeCharacters function is called, displaying detailed information about the character.

Adding Comments:
Users can leave comments in the comment section. 

Local Storage for Comments:
User comments are stored in the browser's local storage to persist across page loads. I use an event listener that ensures that when the page loads, previous comments appear. 