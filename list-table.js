import { ListTablesCommand } from "@aws-sdk/client-dynamodb";
import { dynamoClient } from "./dynamodb.js";

export const listTables = async () => {
  const command = new ListTablesCommand({});
  const response = await dynamoClient.send(command);
  console.log(response.TableNames.join("\n"));
  return response;
};

listTables();
