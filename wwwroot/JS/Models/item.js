export default class Item {
    constructor(settings) {
        if (settings instanceof Item) {
            return settings;
        }

        settings = settings ?? {};

        this.Name = settings.Name ?? "No name";
        this.Description = settings.Description ?? "No description";
        this.Price = settings.Price ?? 0;
        this.Selected = settings.Selected ?? false;
    }

}