const AWS = require('aws-sdk')

const fetchTodos = async (event) => {

  const dynamodb = new AWS.DynamoDB.DocumentClient();
  let todos;

  try {
      const result = await dynamodb.scan({ TableName: 'TodoTable' }).promise()
      todos = result.Items
  }catch(err) {
    console.log(err)
  }

  return {
    statusCode: 200,
    body: JSON.stringify(todos),
  };
}

module.exports = {
    handler: fetchTodos
  }
  