// Add Item
// Add the new item to the shopping list
// Load items from local storage when the page loads
document.addEventListener("DOMContentLoaded", () => {
    loadItemsFromLocalStorage();
});

// Add the new item to the shopping list
document.addEventListener("click", (e) => {
    let source = e.target;
    let operation = source.dataset.operation;
    let itemId = source.dataset.itemid;

    if (operation === "AddItem") {
        handleAddItem(itemId);
    } else {
        operations[operation]?.(itemId);
    }
});

function handleAddItem(itemId) {
    let itemName = prompt("Enter the item name:");
    let itemPrice = prompt("Enter the item price:");
    let itemSelected = prompt("Is the item selected? (true/false):");
    let itemDescription = prompt("Enter the item description:");

    let newItem = {
        Name: itemName,
        Price: parseFloat(itemPrice),
        Selected: itemSelected === "true",
        Description: itemDescription,
    };

    // Save the new item to local storage and update UI
    addItemToShoppingList(itemId, newItem);
    saveItemsToLocalStorage();
}

function addItemToShoppingList(itemId, newItem) {
    let form = document.querySelector(`#form_${itemId}`);
    let itemList = form.querySelector(".left-align-list");
    let newItemTemplate = `
        <hr>
        <strong>Item Name: </strong> <em data-name="ItemName" data-val="${newItem.Name}" data-type="text">${newItem.Name}</em> <br>
        <strong>Price: </strong> <em data-name="Price" data-val="${newItem.Price}" data-type="Number">&dollar;${newItem.Price.toFixed(2)}</em> <br>
        <strong>Selected: </strong> <em data-name="Selected" data-val="${newItem.Selected}" data-type="text">${newItem.Selected}</em> <br>
        <strong>Description: </strong> <em data-name="Description" data-val="${newItem.Description}" data-type="text">${newItem.Description}</em>
        <br> 
        <button data-itemid="${itemId}" onclick="deleteItem(${itemId})">Delete Item</button>
        <hr><br>
    `;

    itemList.insertAdjacentHTML("beforeend", newItemTemplate);
}

function deleteItem(itemId) {
    // Implement delete logic as needed
    // Remove the item from local storage
    // Update the UI
    let itemElement = document.querySelector(`#form_${itemId}`);
    itemElement.remove();
    saveItemsToLocalStorage();
}

function updateItem(itemId) {
    handleAddItem();
    saveItemsToLocalStorage();
}

// Save items to local storage
function saveItemsToLocalStorage() {
    let storedItems = [];

    // Iterate through forms to collect items
    let forms = document.querySelectorAll('.shopping-form');
    forms.forEach((form) => {
        let items = form.querySelectorAll('[data-itemid]');
        items.forEach((item) => {
            let itemId = item.dataset.itemid;
            let itemName = item.querySelector('[data-name="ItemName"]').innerText;
            let itemPrice = item.querySelector('[data-name="Price"]').innerText;
            let itemSelected = item.querySelector('[data-name="Selected"]').innerText;
            let itemDescription = item.querySelector('[data-name="Description"]').innerText;

            storedItems.push({
                Id: itemId,
                Name: itemName,
                Price: parseFloat(itemPrice.replace(/\$/g, '')),
                Selected: itemSelected,
                Description: itemDescription,
            });
        });
    });

    localStorage.setItem('shoppingItems', JSON.stringify(storedItems));
}

// Load items from local storage
function loadItemsFromLocalStorage() {
    let storedItems = localStorage.getItem('shoppingItems');

    if (storedItems) {
        storedItems = JSON.parse(storedItems);

        storedItems.forEach((item) => {
            addItemToShoppingList(item.Id, item);
        });
    }
}