import { test, expect } from '@playwright/test';
import data from '../../testData/data.json' assert { type: 'json' };
import objectdata from '../../testData/objectdata.json' assert { type: 'json' };
import { getRequest, postRequest } from '../api/APIBase.js';

test('Verify API Response', async ({ request }) => {
    const response = await getRequest(request, data.allObjects);
    console.log(response.status());
    await expect(response.status()).toBe(200);

    const body = await response.json();

    expect(Array.isArray(body)).toBeTruthy();
    expect(body.length).toBeGreaterThan(0);
    expect(body[0].id).toEqual(objectdata.id);
    expect(body[0].name).toEqual(objectdata.name);
    expect(body[0].data.capacity).toEqual(objectdata.data.capacity);
    expect(body[0].data.color).toEqual(objectdata.data.color);

    body.forEach(item => {
        expect(item).toHaveProperty('id');
        expect(item).toHaveProperty('name');
        expect(item).toHaveProperty('data');
    });

});

test.only('Verify Post Request', async ({ request }) => {
    console.log(objectdata.createObject);

    const response = await postRequest(request, data.allObjects, objectdata.createObject);
    console.log(response.status());
    await expect(response.status()).toBe(200);

    expect(response.ok()).toBeTruthy();

    const responseBody = await response.json();
    console.log(responseBody);
    expect(responseBody.id).toBeDefined();



});