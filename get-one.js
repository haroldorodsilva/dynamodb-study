import { dynamoClient } from "./dynamodb.js";
import { DynamoDBDocumentClient, GetCommand } from "@aws-sdk/lib-dynamodb";

const docClient = DynamoDBDocumentClient.from(dynamoClient);

export const main = async () => {
  const command = new GetCommand({
    TableName: "EspressoDrinks",
    Key: {
      DrinkName: "Refrigerante",
    },
  });

  const response = await docClient.send(command);
  console.log(response);
  return response;
};

main();
