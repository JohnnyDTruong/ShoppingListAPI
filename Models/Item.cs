using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.Text.Json.Serialization;

namespace ShoppingListAPI.Models;

public class Item
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }

    [BsonElement("Name")]
    [JsonPropertyName("Name")]
    public string ItemName { get; set; } = null!;

    public decimal Budget { get; set; }

    public bool Completed { get; set; }

    public List<ShoppingItem> Items { get; set; } = null!;
}