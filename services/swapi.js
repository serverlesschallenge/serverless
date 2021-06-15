'use strict';

const axios = require('axios');
const SWAPI_URL = process.env.SWAPI_URL || 'https://swapi.py4e.com';
const translator = require('../utils/translator');

const getRequest = async (endpoint) => {
    try {
        const response = await axios.get(endpoint);
        return response;
    } catch (error) {
        console.error('getRequest error:', error);
        return error.response;
    }
};

const getItems = async (resource) => {
    let endpoint = `${SWAPI_URL}/api/${resource}`;
    let response = await getRequest(endpoint);

    const items = [];
    for (const e of response.data.results) {
        items.push(translator.planetTranslator(e));
    }

    endpoint = response.data.next;
    while (endpoint !== null) {
        response = await getRequest(endpoint);
        for (const e of response.data.results) {
            items.push(translator.planetTranslator(e));
        }
        endpoint = response.data.next;
    };

    return items;
}

const getItem = async (resource, id) => {
    const endpoint = `${SWAPI_URL}/api/${resource}/${id}`;
    const response = await getRequest(endpoint);
    if (response.status === 200) {
        return translator.planetTranslator(response.data);
    } else if (response.status === 404) {
        return null;
    } else {
        return null;
    }
}

module.exports = { getItems, getItem };
