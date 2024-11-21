const userList = document.getElementById("user-list");

document.addEventListener("DOMContentLoaded", async () => {
    // This function should GET the first page of users from reqres.in.
    // The users should be displayed in the user-list element.
    // Each user should be in a new <div> with the user's first name, last name, and profile image.
    // The format should follow the example user in the HTML file.

    // TODO
    const exampleCard = document.querySelector(".card");
    const cardList = document.getElementById("user-list");
    let params = new URLSearchParams( {page: 1} );
    const resp = await fetch("https://reqres.in/api/users?" + params.toString());
    const echo = await resp.json();
    //console.log(echo.data);
    Object.entries(echo.data).forEach(([key, value]) => {
        let clonedCard = exampleCard.cloneNode(true);
        const children = clonedCard.children;
        clonedCard.id = toString(key);
        children[0].textContent = value.first_name + " " +value.last_name;
        children[1].src = value.avatar
        cardList.appendChild(clonedCard);

    })
});
