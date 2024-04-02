import { CreateTableCommand } from "@aws-sdk/client-dynamodb";
import { dynamoClient } from "./dynamodb.js";

export const main = async () => {
  const command = new CreateTableCommand({
    TableName: "EspressoDrinks",
    AttributeDefinitions: [
      {
        AttributeName: "DrinkName",
        AttributeType: "S",
      },
    ],
    KeySchema: [
      {
        AttributeName: "DrinkName",
        KeyType: "HASH",
      },
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 1,
      WriteCapacityUnits: 1,
    },
  });

  const response = await dynamoClient.send(command);
  console.log(response);
  return response;
};

main();
