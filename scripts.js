const submitButton = document.getElementById("submit"); // get the submit button    
const questInput = document.getElementById("quest-title"); // get the input field
const questList = document.getElementById("quests-list"); // get the list element
const form = document.querySelector(".quest-form"); // get the form

form.addEventListener("submit", (event) => {
    event.preventDefault(); // prevent the default form submission
    const questTitle = questInput.value; // get the value of the input field
    const newQuest = document.createElement("li"); // create a new list item
    newQuest.textContent = questTitle; // set the text content of the new list item
    questList.appendChild(newQuest); // append the new list item to the list
})