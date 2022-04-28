

let tbl = document.getElementsByTagName("table");
// let tr = " ";

let f = fetch("https://jsonplaceholder.typicode.com/users");
f.then(response => {
    response.json().then(data => {
        data.forEach(element => {
            console.log(element.id,element.name,element.username);
            tbl+=`<tr>` 
            "<td> ${element.id}</td>" 
            tbl+= `</tr>`

            
        });
    })

})

// tbl += `<tr>`;
// for (let j = 0; j<element.leght; j++) {
//     tr += `<td > ${elemnet.id} </td>`;
//     `<td> ${element.name}</td>`;
//     `<td> ${element.username}</td>`;

// };

// tbl += `</tr>`;