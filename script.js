document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('registro-form');
    const respuestaDiv = document.getElementById('respuesta');

    formulario.addEventListener('submit', function (e) {
        e.preventDefault(); // Evita que el formulario se envíe por defecto

        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const fechaNacimiento = document.getElementById('fechaNacimiento').value;

        const datos = {
            nombre: nombre,
            apellido: apellido,
            fechaNacimiento: fechaNacimiento
        };

        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            respuestaDiv.innerHTML = `Respuesta del servidor: ${JSON.stringify(data)}`;
        })
        .catch(error => {
            respuestaDiv.innerHTML = `Error: ${error.message}`;
        });
    });
});