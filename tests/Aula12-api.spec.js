//https://www.youtube.com/watch?v=EEjyLfp6DoQ&list=PLhW3qG5bs-L9sJKoT1LC5grGT77sfW0Z8&index=14
//https://reqres.in/

import { test, expect } from '@playwright/test';

test('API get request sucess', async ({ request }) => {
    //capturando a resposta para a chamada
    const response = await request.get('https://reqres.in/api/users/2');

    //esperando que o resultado seja 200(sucesso)
    expect(response.status()).toBe(200);
})

test('API get request failed', async ({ request }) => {
    //capturando a resposta para a chamada
    const response = await request.get('https://reqres.in/api/users/2h');

    //esperando que o resultado seja 404(falha)
    expect(response.status()).toBe(404);
})

test.only('API get request lendo texto da response', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users/2');

    //qualquer resultado positivo de 200 a 299
    expect(response.status()).toBeTruthy();

    //esperando qualquer um texto da response.(body)
    const text = await response.text();
    expect(text).toContain('Janet')

    //json no console
    console.log(await response.json());
})

test('API get request lendo body', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users/2');
    expect(response.status()).toBe(200);

    const responseBody = await response.json();   

    expect(responseBody.data.id).toBe(2);//se é esse valor
    expect(responseBody.data.last_name).toBe("Weaver");//se é esse texto
    expect(responseBody.data.email).toBeTruthy();;//se esse campo nao esta vazio

    //json no console
    console.log(await response.json());
})

test('API get request lendo body parse', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users/2');
    const respBody = JSON.parse(await response.text());
    console.log(respBody); 
})

test('API post request', async ({ request }) => {
    //Enviando um body
    const response = await request.post('https://reqres.in/api/users', {
        data: {
                "name": "Joao",
                "job": "leader"
        }
    });

    expect(response.status()).toBe(201);

    const text = await response.text();
    expect(text).toContain('Joao')

    console.log(await response.json());
})

test('API put request', async ({ request }) => {
    //Enviando um body
    const response = await request.put('https://reqres.in/api/users/2', {
        data: {
                "name": "Joao Marcos",
                "job": "leader"
        }
    });

    expect(response.status()).toBe(200);

    const text = await response.text();
    expect(text).toContain('Joao Marcos')
    
    console.log(await response.json());
})

test('API delete request', async ({ request }) => {
    
    const response = await request.delete('https://reqres.in/api/users/2');
    
    expect(response.status()).toBe(204);  

})