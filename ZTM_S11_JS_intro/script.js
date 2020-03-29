// Using the Shopping List files from the previous videos update the shopping list app to do the following:

// 1. If you click on the list item, it toggles the .done  class on and off.

// 2. Add buttons next to each list item to delete the item when clicked on its corresponding delete button.

// 3. BONUS: When adding a new list item, it automatically adds the delete button next to it (hint: be sure to check if new items are clickable too!)

// Good Luck!

var button = document.getElementById("enter");
var userInput = document.getElementById("textinput");
var ul = document.querySelector("ul");
var toggleLi = document.querySelector("li");
var deleteBtns = document.getElementsByClassName("deleteButton");

toggleLi.addEventListener("click", function() {
    toggleLi.className = "done";
})

// deleteButton.addEventListener("click", function() {
//     var listItem = document.getElementById("chicken");
//     listItem.remove();
//     deleteButton.remove();
// })


// add event listener to delete parent for each 
for(var i = 0; i < deleteBtns.length; i++){
	deleteBtns[i].addEventListener("click", removeParent, false);
}


function removeParent(event) {
    event.target.removeEventListener("click", removeParent, false);
    event.target.parentNode.remove();
}




function inputLength() {
    return userInput.value.length;
}

function createListItem() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(userInput.value));
    ul.appendChild(li);
    userInput.value="";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListItem();
    } 
}

function addListAfterEnter(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListItem();
    } 
}


button.addEventListener("click", addListAfterClick)


userInput.addEventListener("keypress", addListAfterEnter)