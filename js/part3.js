const output1 = document.getElementById('output-1');
const output2 = document.getElementById('output-2');

document.getElementById('api-1-btn').addEventListener('click', async () => {
    // Make a request to your first API here. Put the response's data in output-1.
    // If your response has no body, put the status code in output-1.

    // TODO
    const response = await fetch("https://parallelum.com.br/fipe/api/v1/carros/marcas");
    const json  = await response.json();
    output1.textContent = JSON.stringify(json, null, 2);
});

document.getElementById('api-2-btn').addEventListener('click', async () => {
    // Make a request to your second API here. Put the response's data in output-2.
    // If your response has no body, put the status code in output-2.
    const response = await fetch("https://vpic.nhtsa.dot.gov/api/vehicles/GetAllManufacturers?format=json&page=2");
    const json  = await response.json();
    output2.textContent = JSON.stringify(json, null, 2);
    // TODO
});
