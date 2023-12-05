using ShoppingListAPI.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace ShoppingListAPI.Services;

public class ItemsService
{
    private readonly IMongoCollection<Item> _itemsCollection;

    public ItemsService(
        IOptions<ShoppingListDatabaseSettings> shoppingListDatabaseSettings)
    {
        var mongoClient = new MongoClient(
            shoppingListDatabaseSettings.Value.ConnectionString);

        var mongoDatabase = mongoClient.GetDatabase(
            shoppingListDatabaseSettings.Value.DatabaseName);

        _itemsCollection = mongoDatabase.GetCollection<Item>(
            shoppingListDatabaseSettings.Value.ItemsCollectionName);
    }

    public async Task<List<Item>> GetAsync() =>
        await _itemsCollection.Find(_ => true).ToListAsync();

    public async Task<Item?> GetAsync(string id) =>
        await _itemsCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

    public async Task CreateAsync(Item newItem) =>
        await _itemsCollection.InsertOneAsync(newItem);

    public async Task UpdateAsync(string id, Item updatedItem) =>
        await _itemsCollection.ReplaceOneAsync(x => x.Id == id, updatedItem);

    public async Task RemoveAsync(string id) =>
        await _itemsCollection.DeleteOneAsync(x => x.Id == id);
}
