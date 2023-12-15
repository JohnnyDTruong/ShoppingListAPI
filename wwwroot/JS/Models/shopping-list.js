import Item from "./item.js";

export default class ShoppingList {
    constructor(settings) {
        if (settings instanceof ShoppingList) {
            return settings;
        }

        settings = settings ?? {};

        this.Id = settings.Id;
        this.Name = settings.Name ?? "No name";
        this.Budget = settings.Budget ?? 0;
        this.Items = [];
        settings.Items?.forEach(item => this.Items.push(new Item(item)));
        this.Completed = this.getCompletion();
    }

    get displayBudget() {
        return `$${this.Budget.toFixed(2)}`;
    }

    get displayCompleted() {
        return this.Completed ? "✅" : "❌";
    }

    get displayItems() {
        let result = "<ul class='item-list'>";
        this.Items.forEach((item, index) => {
            result += `
            <li class="item-list-item">
                <input type="checkbox" onclick="toggleItemFromlist('${index}','${encodeURIComponent(JSON.stringify(this))}')" class="item-checkbox" ${item.Selected && "checked"}>
                <div>
                    <strong>${item.Name}</strong>
                    <p>Description: ${item.Description}</p>
                    <p>Price: $${item.Price.toFixed(2)}</p>
                </div>
            </li> `
        });
        result += "</ul>"
        return result;
    }

    get displayCurrentTotal() {
        let sum = 0;

        this.Items.forEach(item => {
            if (item.Selected) {
                sum += item.Price;
            }
        })

        if (sum > this.Budget) {
            alert(`The current total for ${this.Name} is over budget by $${(sum - this.Budget).toFixed(2)}!`)
        }

        return `$${sum.toFixed(2)}`;
    }

    addItem(settings) {
        const newItem = new Item(settings);
        this.Items.push(newItem);
    }

    deleteItem(id) {
        this.Items = this.Items.filter(item => item.Id === id);
    }

    getCompletion() {
        if (!this.Items.length) return false;

        let completed = true;
        this.Items.forEach(item => {
            if (!item.Selected) completed = false;
        });

        return completed;
    }
}