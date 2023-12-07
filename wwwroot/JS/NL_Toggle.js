const showFormBtn = document.getElementById('show-form-btn');
const myForm = document.getElementById('ShoppingListForm');

showFormBtn.addEventListener('click', () => {
    if (myForm.style.display === 'none') {
        myForm.style.display = 'block';
    } else {
        myForm.style.display = 'none';
    }
}); /*working code to show/hide New List Form*/