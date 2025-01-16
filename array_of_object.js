let object = [
    {"id":1,
        "img":"https://imgv3.fotor.com/images/side/3D-pink-hair-girl-image-with-generate-box.jpg",
        "name":"sharad",
        "course":"python",
        "mobile":173894876
        
    },
    {"id":2,
        "img":"https://imgv3.fotor.com/images/side/3D-pink-hair-girl-image-with-generate-box.jpg",
        "name":"sharad",
        "course":"python",
        "mobile":173894876
        
    }
]

let table = document.getElementById('table')
table.innerHTML= object.map((e)=>
    `
    <tr>
        <td>${e.id}</td>
        <td><img style="width:100px;" src="${e.img}"></td>
        <td>${e.name}</td>
        <td>${e.course}</td>
        <td>${e.mobile}</td>
    </tr>
    `
).join(" ")