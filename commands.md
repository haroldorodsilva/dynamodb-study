# Criar um bucket

```
aws --endpoint-url=http://localhost:4566 s3 mb s3://haroldo
```

# Listar todos os buckets

```
aws --endpoint-url=http://localhost:4566 s3 ls
```

# Create Table

```
aws dynamodb --endpoint-url http://localhost:4566 create-table --cli-input-json '{
    "TableName": "black-list-tokens",
    "BillingMode": "PAY_PER_REQUEST",
    "AttributeDefinitions": [
        {
            "AttributeName": "idusuario",
            "AttributeType": "S"
        }
    ],
    "KeySchema": [
        {
        "AttributeName": "idusuario",
        "KeyType": "HASH"
        }
    ]
}'
```

# List Tables

```
aws dynamodb list-tables --endpoint-url http://localhost:4566
```

# Put Items

```

```
