import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

const dynamoClient = new DynamoDBClient({
  endpoint: "http://localhost:4566",
});

export { dynamoClient };
