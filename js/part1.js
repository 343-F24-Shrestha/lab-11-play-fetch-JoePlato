const output = document.getElementById("output");

document.getElementById("get-btn").addEventListener("click", async () => {
    // This function should send a GET request to the echo endpoint and output the result
    // The two input fields should be included in the request URL as **query parameters**
    const name = document.getElementById("name");
    const age = document.getElementById("age");
    const pre = document.querySelector("pre");
    let params = new URLSearchParams( {q: name.value, page: age.value} );
    const resp = await fetch("https://echo.zuplo.io/api?" + params.toString());
    const echo = await resp.json();
    let formatted = JSON.stringify(echo, null, 2);
    pre.textContent = formatted;
    // TODO
});

document.getElementById("post-json-btn").addEventListener("click", async () => {
    // This function should send a POST request to the echo endpoint with the input data as JSON
    // The two input fields should be included in the request body as **JSON data**
    const name = document.getElementById("name");
    const age = document.getElementById("age");
    const pre = document.querySelector("pre");
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json", // or "application/x-www-form-urlencoded", "text/plain", etc.
        },
        body: JSON.stringify( {q: name.value, page: age.value} ),
    };
    // TODO
    const resp = await fetch("https://echo.zuplo.io/api?", options);
    const echo = await resp.json();
    let formatted = JSON.stringify(echo, null, 2);
    pre.textContent = formatted;
});

document.getElementById("post-form-btn").addEventListener("click", async () => {
    // This function should send a POST request to the echo endpoint with the input data as form data
    // The two input fields should be included in the request body as **url-encoded data**
    const name = document.getElementById("name");
    const age = document.getElementById("age");
    const pre = document.querySelector("pre");
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded", // or "application/x-www-form-urlencoded", "text/plain", etc.
        },
        body: new URLSearchParams( {q: name.value, page: age.value} ),
    };
    // TODO
    const resp = await fetch("https://echo.zuplo.io/api?", options);
    const echo = await resp.json();
    let formatted = JSON.stringify(echo, null, 2);
    pre.textContent = formatted;
    // TODO
});
