namespace ShoppingListAPI.Models;

public class ShoppingListDatabaseSettings
{
    public string ConnectionString { get; set; } = null!;

    public string DatabaseName { get; set; } = null!;

    public string ItemsCollectionName { get; set; } = null!;
}