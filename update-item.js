import { dynamoClient } from "./dynamodb.js";
import { DynamoDBDocumentClient, UpdateCommand } from "@aws-sdk/lib-dynamodb";

const docClient = DynamoDBDocumentClient.from(dynamoClient);

export const main = async () => {
  const command = new UpdateCommand({
    TableName: "EspressoDrinks",
    Key: {
      DrinkName: "Refrigerante",
    },
    UpdateExpression: "set DrinkName = :name",
    ExpressionAttributeValues: {
      ":name": "Updated Name",
    },
    ReturnValues: "ALL_NEW",
  });

  const response = await docClient.send(command);
  console.log(response);
  return response;
};

main();
