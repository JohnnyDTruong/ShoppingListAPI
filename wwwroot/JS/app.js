//import { ShoppingList } from './models/shopping-list.js'
//import mustache from './mustache.js';



//const demoTemplate = `

//{{#lists}}
//    <p>

//    <strong>Name: </strong> {{Name}}
//    <br>
//    <strong>Budget: </strong> {{{displayBudget}}}}
//    <br>
//    <strong>Completed: </strong> {{Completed}}
//    </p>
//    <hr>
//{{/lists}}

//`;


//async function showShoppingList() {
//    let url = "api/Items";

//    let request = fetch(url);

//    let result = await request.json();

//    let shoppingLists = [];

//    result.forEach((settings) => {
//        shoppingLists.push(new ShoppingList(settings));
//    });

//    window.lastResort = result;

//    let context = {
//        lists: []
//    };



//    context.lists = result.sort((a, b) => {
//        return a.Name.localeCompare(b.Name)
//    });

//    window.currentContext = context;

//    let html = mustache.render(demoTemplate, context);

//    let target = document.querySelector("#ShoppingListArea");
//    target.innerHTML = html;

//}

//function renderShoppingLists {
//    let target = document.querySelector("#ShoppingListArea");
//    target.innerHTML = html;
//};


//showShoppingList();

//window.sortShoppingListByBudget = function() {
//    const shoppingLists = window.currentContext.lists.sort((a, b) => {
//        return a - b;
//    });

//    const newContext = {
//        Items: shoppingLists
//    };

//    let html = mustache.render(demoTemplate, newContext);

//}