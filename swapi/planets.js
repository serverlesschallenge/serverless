'use strict';

const uuid = require('uuid');

const swapi = require('../services/swapi');
const dynamoDb = require('../services/dynamoDb');

module.exports.handler = async (event, context) => {
    const method = event.httpMethod;
    const params = event.pathParameters;

    if (method === 'GET') {
        if (params === null) {
            const items = await swapi.getItems('planets');

            const dbItems = await dynamoDb.listItems('planets');
            for (const dbItem of dbItems) {
                items.push(dbItem);
            }

            const response = {
                statusCode: 200,
                body: JSON.stringify(items)
            };
            return response;
        } else {
            if (params.id !== null) {
                const item = await swapi.getItem('planets', params.id);
                if (item !== null) {
                    const response = {
                        statusCode: 200,
                        body: JSON.stringify(item)
                    };
                    return response;
                } else {
                    const dbItem = await dynamoDb.getItem('planets', params.id);
                    if (dbItem !== undefined) {
                        const response = {
                            statusCode: 200,
                            body: JSON.stringify(dbItem)
                        };
                        return response;
                    } else {
                        const response = {
                            statusCode: 404,
                            body: JSON.stringify({
                                message: 'No existe planeta con ese id!'
                            })
                        };
                        return response;
                    }
                }
            }
        }
    } else if (method === 'POST') {
        const timestamp = new Date().toISOString();
        const data = JSON.parse(event.body);
        const resource = event.resource;
        const domain = event.requestContext.domainName;
        const stage = event.requestContext.stage;
        const id = uuid.v1();

        const item = {
            id: id,
            nombre: data.nombre,
            periodo_rotacion: data.periodo_rotacion,
            diametro: data.diametro,
            clima: data.clima,
            gravedad: data.gravedad,
            terreno: data.terreno,
            agua_superficie: data.agua_superficie,
            poblacion: data.poblacion,
            residentes: data.residentes,
            peliculas: data.peliculas,
            creado: timestamp,
            editado: timestamp,
            url: `https://${domain}/${stage}${resource}/${id}`
        };

        await dynamoDb.createItem('planets', item);

        const response = {
            statusCode: 201,
            body: JSON.stringify(item)
        };
        return response;
    } else {
        const response = {
            statusCode: 200,
            body: JSON.stringify({
                message: 'Metodo no soportado!',
            })
        };
        return response;
    }
};
