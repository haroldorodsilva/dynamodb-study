import { PutItemCommand } from "@aws-sdk/client-dynamodb";
import { dynamoClient } from "./dynamodb.js";

export const main = async () => {
  const command = new PutItemCommand({
    TableName: "EspressoDrinks",
    Item: {
      DrinkName: { S: "Suco" },
      //   Variants: { SS: ["Whisk", "Vodka"] },
    },
  });

  const response = await dynamoClient.send(command);
  console.log(response);
  return response;
};

main();
