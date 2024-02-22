const submitButton = document.getElementById("submit"); // get the submit button    
const questInput = document.getElementById("quest-title"); // get the input field
const questList = document.getElementById("quests-list"); // get the list element
const form = document.querySelector(".quest-form"); // get the form
const noQuests = document.getElementById("no-quests"); // get the element that will show if there are no quests
let quests = localStorage.getItem("quests") ? localStorage.getItem("quests").split(",") : [];
form.addEventListener("submit", (event) => {
    event.preventDefault(); // prevent the default form submission
    const questTitle = questInput.value; // get the value of the input field
    const newQuest = document.createElement("li"); // create a new list item
    newQuest.textContent = questTitle; // set the text content of the new list item
    questList.appendChild(newQuest); // append the new list item to the list
    quests.push(questTitle)
    localStorage.setItem("quests", quests); // store the quest in local storage
    noQuests.style.display = "none"; // hide the "no quests" message
    questInput.value = ""; // clear the input field
})

function populateQuests(){

    const quest = localStorage.getItem("quests");
    const questsArray = quest.split(",");
    for(let i=0; i<questsArray.length; i++){
        const newQuest = document.createElement("li");
        newQuest.textContent = questsArray[i];
        questList.appendChild(newQuest);
    }

    if(questsArray.length >= 0){
        noQuests.style.display = "none";
    }
    
}

populateQuests();