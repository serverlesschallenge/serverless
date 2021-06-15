'use strict';

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

const listItems = async (table) => {
    const params = {
        TableName: table
    };
    try {
        const data = await dynamoDb.scan(params).promise();
        return data.Items;
    } catch (error) {
        console.error(error);
        return error;
    }
};

const createItem = async (table, item) => {
    const params = {
        TableName: table,
        Item: item
    };
    try {
        await dynamoDb.put(params).promise();
    } catch (error) {
        console.error(error);
        return error;
    }
};

const getItem = async (table, id) => {
    const params = {
        TableName: table,
        Key: { id }
    };
    try {
        const data = await dynamoDb.get(params).promise();
        return data.Item;
    } catch (error) {
        console.error(error);
        return error;
    }
};

module.exports = { listItems, createItem, getItem };
