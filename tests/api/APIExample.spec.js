
import { test, expect } from '@playwright/test';
import data from '../../testData/data.json' assert { type: 'json' };





test('Verify API Response', async ({ request }) => {
    const response = await request.get('https://api.restful-api.dev/objects');

    expect(response.status()).toBe(200);


    const body = await response.json();

    expect(Array.isArray(body)).toBeTruthy();
    expect(body.length).toBeGreaterThan(0);
    expect(body[0].id).toEqual("1");
    expect(body[0].name).toEqual("Google Pixel 6 Pro");
    expect(body[0].data.capacity).toEqual("128 GB");
    expect(body[0].data.color).toEqual("Cloudy White1");

    body.forEach(item => {
        expect(item).toHaveProperty('id');
        expect(item).toHaveProperty('name');
        expect(item).toHaveProperty('data');
    });
});
test.only('Verify Post request', async ({ request }) => {


    const response = await request.post('https://api.restful-api.dev/objects', {
        'data': {
            "name": "Apple MacBook Pro 16",
            "data": {
                "year": 2019,
                "price": 1849.99,
                "CPU model": "Intel Core i9",
                "Hard disk size": "1 TB"
            }
        }
    });
    const responseBody = await response.json();
    console.log(responseBody);

    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();
    expect(responseBody.id).toBeDefined();

    const response1 = await request.get(`https://api.restful-api.dev/objects/${responseBody.id}`);


    expect(response1.status()).toBe(200);
    const getResponseBody1 = await response1.json();
    console.log(getResponseBody1);
    expect(getResponseBody1.name).toEqual("Apple MacBook Pro 16");
    expect(getResponseBody1.data.year).toEqual(2019);
    expect(getResponseBody1.data.price).toEqual(1849.99);
    expect(getResponseBody1.data["CPU model"]).toEqual("Intel Core i9");
    expect(getResponseBody1.data["Hard disk size"]).toEqual("1 TB");



    const response4 = await request.put(`https://api.restful-api.dev/objects/${responseBody.id}`, {
        'data': {
            "name": "Apple MacBook Pro 16 (Updated)",
            "data": {
                "year": 2026,
                "price": 3000.99,
                "CPU model": "Intel Core i9",
                "Hard disk size": "2 TB"
            }
        }
    });
    const getResponseBody4 = await response4.json();
    console.log(getResponseBody4);

    const response5 = await request.patch(`https://api.restful-api.dev/objects/${responseBody.id}`, {
        'data': {
            "name": "Apple MacBook Pro 16 (Patch Updated)",
        }
    });
    const getResponseBody5 = await response5.json();
    console.log(getResponseBody5);






    const response2 = await request.delete(`https://api.restful-api.dev/objects/${responseBody.id}`);
    expect(response2.status()).toBe(200);
    const getResponseBody2 = await response2.json();
    console.log(getResponseBody2);
    // expect(getResponseBody2).toEqual({ "message": "Object deleted successfully" }); 

    const response3 = await request.get(`https://api.restful-api.dev/objects/${responseBody.id}`);
    const getResponseBody3 = await response3.json();
    console.log(getResponseBody3);
    expect(response3.status()).toBe(404);



});

