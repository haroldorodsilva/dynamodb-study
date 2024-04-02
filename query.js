import { dynamoClient } from "./dynamodb.js";
import { QueryCommand } from "@aws-sdk/client-dynamodb";

export const main = async () => {
  const command = new QueryCommand({
    TableName: "EspressoDrinks",
    KeyConditionExpression: "DrinkName = :name",
    ExpressionAttributeValues: {
      ":name": { S: "Suco" },
      // ":searchKey": { S: "Vodka" },
    },
    // FilterExpression: "contains (Description, :searchKey)",
    // ProjectionExpression: "name",
  });

  const response = await dynamoClient.send(command);
  response.Items.forEach(function (drink) {
    console.log(`${drink.DrinkName.S}\n`);
  });
  return response;
};

main();
