const form = document.getElementById('input-form');
const input = document.getElementById('input');

// THE PARENT ITEM FOR ALL ITEMS
const listItems = document.getElementById('to-do-list-items');

const todoItems = [];

// Add event listener
form.addEventListener('submit', saveItem);

// Save item
function saveItem(e) {
    e.preventDefault(); // Prevent form submission

    if (input.value.trim() !== '') { // Check if input is not empty
        todoItems.push(input.value.trim()); // Add the value to the array
        input.value = ''; // Clear the input field
        displayItems(); // Update the display
        updateButtons(); // Update event listeners
    }
}

// Display items
function displayItems() {
    // Clear the list
    listItems.innerHTML = '';

    todoItems.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('to-do-list-item');

        // Div for name
        const toDoItemName = document.createElement('div');
        toDoItemName.classList.add('to-do-list-item-name');

        const toDoTitle = document.createElement('p');
        toDoTitle.classList.add('to-do-list-item-title');
        toDoTitle.innerText = item;

        toDoItemName.appendChild(toDoTitle);

        // Div for buttons
        const actionsDiv = document.createElement('div');

        // Edit button
        const editButton = document.createElement('button');
        editButton.classList.add('icon', 'edit');
        editButton.id = `edit-${index}`;
        const editIcon = document.createElement('i');
        editIcon.classList.add('fa-solid', 'fa-pen-to-square');

        editButton.appendChild(editIcon);

        // Delete button
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('icon', 'delete');
        deleteButton.id = `delete-${index}`;
        const deleteIcon = document.createElement('i');
        deleteIcon.classList.add('fa-solid', 'fa-trash');

        deleteButton.appendChild(deleteIcon);

        actionsDiv.appendChild(editButton);
        actionsDiv.appendChild(deleteButton);

        itemDiv.appendChild(toDoItemName);
        itemDiv.appendChild(actionsDiv);

        listItems.appendChild(itemDiv);
    });
}

// Update event listeners for edit and delete buttons
function updateButtons() {
    const deleteButtons = document.querySelectorAll('.delete');
    const editButtons = document.querySelectorAll('.edit');

    deleteButtons.forEach(button => {
        button.addEventListener('click', deleteItem);
    });

    editButtons.forEach(button => {
        button.addEventListener('click', editItem);
    });
}

// Delete item
function deleteItem(e) {
    const clickedItem = e.target.closest('button').id;
    const itemIndex = clickedItem.split('-')[1];

    todoItems.splice(itemIndex, 1);

    displayItems();
    updateButtons();
}

// Edit item
function editItem(e) {
    const clickedItem = e.target.closest('button').id;
    const itemIndex = clickedItem.split('-')[1];

    const newValue = prompt('Edit your item:', todoItems[itemIndex]);

    if (newValue !== null && newValue.trim() !== '') {
        todoItems[itemIndex] = newValue.trim();
        displayItems();
        updateButtons();
    }
}
