import { DynamoDBDocumentClient, DeleteCommand } from "@aws-sdk/lib-dynamodb";
import { dynamoClient } from "./dynamodb.js";

const docClient = DynamoDBDocumentClient.from(dynamoClient);

export const main = async () => {
  const command = new DeleteCommand({
    TableName: "EspressoDrinks",
    Key: {
      DrinkName: "Suco",
    },
  });

  const response = await docClient.send(command);
  console.log(response);
  return response;
};

main();
