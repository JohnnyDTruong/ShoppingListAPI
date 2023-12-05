import { ShoppingList } from './models/shopping-list.js'
import { mustache } from './mustache.js';



const demoTemplate = `

{{#lists}}
    <p>

    <strong>Name: </strong> {{Name}}
    <br>
    <strong>Budget: </strong> {{{displayBudget}}}}
    <br>
    <strong>Completed: </strong> {{Completed}}
    </p>
    <hr>
{{/lists}}

`;


async function showShoppingList() {
    let url = "api/Items";

    let request = fetch(url);

    let result = await request.json();

    let listOfLists = {
        lists: []
    };

    result.forEach((shoppingList) => {

        listOfLists.lists.push(new ShoppingList(shoppingList));

    });

    let html = mustache.render(demoTemplate, context);

    let target = document.querySelector("#ShoppingListArea");
    target.innerHTML = html;

}

showShoppingList();