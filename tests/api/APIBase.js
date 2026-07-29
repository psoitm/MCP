import { test, expect } from '@playwright/test';

export async function postRequest(request, url, requestBody) {
    const response = await request.post(url, {
        'data': requestBody
    });

    return response;
}

export async function getRequest(request, url) {
    const response = await request.get(url);
    return response;
}

export async function putRequest(request, url, requestBody) {
    const response = await request.put(url, {
        'data': requestBody
    });

    return response;
}


export async function patchRequest(url, requestBody) {
    const response = await request.patch(url, {
        'data': requestBody
    });
    const responseBody = await response.json();
    console.log(responseBody);
    return responseBody;
}

export async function deleteRequest(url) {
    const response = await request.delete(url);
    const responseBody = await response.json();
    console.log(responseBody);
    return responseBody;
}

