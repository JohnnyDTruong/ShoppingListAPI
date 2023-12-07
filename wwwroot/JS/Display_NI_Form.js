const SLForm = document.getElementById('ShoppingListForm');
const addItemsForm = document.getElementById('AddItemForm');

SLForm.addEventListener('submit', (event) => { /*clicking create hides the NewList form but does not submit. Should it submit? */
    event.preventDefault();
    if (event.target.name = 'Create') {
        ShoppingListForm.style.display = 'none';
        addItemsForm.style.display = 'block';
    }

});

addItemsForm.addEventListener('submit', (event) => {/* Not yet functional, both buttons hide the form (submit?) */

    if (event.target.name === 'CompleteList') {
        ShoppingListForm.style.display = 'none';
        addItemsForm.style.display = 'block';
    }
    else if (event.target.name === 'Add') {
        addItemsForm.reset();
    }
});