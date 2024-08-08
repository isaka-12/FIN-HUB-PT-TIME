const form = document.getElementById('input-form');
const input = document.getElementById('input');

//THE PARENT ITEM FOR ALL ITEMS
const listItems = document.getElementById('to-do-list-items');


const todoitems=[];

//add event listener
form.addEventListener('submit', saveItem,);

//save item
function saveItem(e){
    e.preventDefault();
    todoitems.push(input.value);
    input.value = '';
    displayItems();  
}

//display items
function displayItems(){

    //clear the list
    listItems.innerText = '';
    for (let i = 0; i < todoitems.length; i++) {
       
        var itemDiv = document.createElement('div');
        itemDiv.classList.add('to-do-list-item');

        //dives for name and buttons
        var toDoItemName = document.createElement('div');
        toDoItemName.classList.add('to-do-list-item-name');

        var toDoTitle = document.createElement('p');
        toDoTitle.classList.add('to-do-list-item-title');

        toDoTitle.innerText = todoitems[i];


        toDoItemName.appendChild(toDoTitle);

        //buttons
        var actionsDiv = document.createElement('div');
        //EDIT BUTTON
        var editButton = document.createElement('button');
        editButton.classList.add('icon');
        editButton.id = 'edit-${i}';
        var editIcon = document.createElement('i');
        editIcon.classList.add('fa-solid', 'fa-pen-to-square');

        editButton.appendChild(editIcon);

        //DELETE BUTTON
        var deleteButton = document.createElement('button');
        deleteButton.classList.add('icon');
        deleteButton.id = 'delete-${i}';
        var deleteIcon = document.createElement('i');
        deleteIcon.classList.add('fa-solid', 'fa-trash');

        deleteButton.appendChild(deleteIcon);

        actionsDiv.appendChild(editButton);
        actionsDiv.appendChild(deleteButton);

        itemDiv.appendChild(toDoItemName);
        itemDiv.appendChild(actionsDiv);

        listItems.appendChild(itemDiv);
    }
}






