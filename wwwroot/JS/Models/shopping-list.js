
export class ShoppingList {

    constructor(settings) {

        if (settings instanceof ShoppingList) {
            return settings;
        }

        settings = settings ?? {};

        this.Id = settings.Id ?? null;
        this.Name = settings.Name ?? "No Name";
        this.Budget = settings.Budget ?? 0;
        this.Completed = settings.Completed ?? false;
        this.items = [];
    }

    get displayBudget() {
        return `&dollar;${this.Budget.toFixed(2)}`;
    }

}