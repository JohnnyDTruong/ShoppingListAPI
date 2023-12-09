document.addEventListener("click", (e) => {
    let source = e.target;
    let operation = source.dataset.operation;
    let itemId = source.dataset.itemid;

    if (operation === "AddItem") {
        addItemToList(itemId);
    } else {
        operations[operation]?.(itemId);
    }
});

// ...

function addItemToList(itemId) {
    // Find the form corresponding to the clicked "ADD-Item" button
    let form = document.querySelector(`#form_${itemId}`);

    // Get the values from the form
    let itemName = form.querySelector("[data-name='ItemName']").value;
    let itemPrice = form.querySelector("[data-name='Price']").value;
    let itemSelected = form.querySelector("[data-name='Selected']").value;
    let itemDescription = form.querySelector("[data-name='Description']").value;

    // Create a new item object
    let newItem = {
        Name: itemName,
        Price: parseFloat(itemPrice),
        Selected: itemSelected === "true",
        Description: itemDescription
    };

    // Fetch the existing shopping list data
    fetch(`/api/Items/${itemId}`)
        .then(response => response.json())
        .then(existingItem => {
            // Add the new item to the existing Items array
            existingItem.Items.push(newItem);

            // Update the shopping list with the modified Items array
            return fetch(`/api/Items/${itemId}`, {
                method: "PUT",
                body: JSON.stringify(existingItem),
                headers: {
                    "Content-Type": "application/json"
                }
            });
        })
        .then(response => response.json())
        .then(updatedItem => {
            console.log("Item added successfully:", updatedItem);

            // Refresh the list after adding a new item
            getItems();
        })
        .catch(error => {
            console.error("Error adding item:", error);
        });
}
