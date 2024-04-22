const codigo = document.getElementById('codigo');
const nombre = document.getElementById('nombre');
const button = document.getElementById('button__home');

let user = JSON.parse(localStorage.getItem('user'));
codigo.innerText += ' ' + user.codigo
nombre.innerText += ' ' + user.nombre;

document.addEventListener('DOMContentLoaded', function() {
    let url = 'https://24a0dac0-2579-4138-985c-bec2df4bdfcc-00-3unzo70c406dl.riker.replit.dev/students/' + user.codigo + '/notas';
fetch(url , {
    method: 'GET', 
    headers: {
        'Content-Type': 'application/json' 
    }
})  .then(response => {
        if (response.ok) {
            return response.json(); // Convertir la respuesta a formato JSON
        } else {
            throw new Error('Error en la solicitud'); // Manejo de errores
        }
    })
    .then(data => {
        console.log(data);
        // Obtener la referencia a la tabla
        const tabla = document.getElementById('notasTable').querySelector('tbody');
        
        // Recorrer cada objeto y agregar una fila a la tabla
        data.notas.forEach(item => {
            const fila = document.createElement('tr'); // Crear una fila
            
            // Crear celdas para cada atributo
            const celdaAsignatura = document.createElement('td');
            celdaAsignatura.textContent = item.asignatura;
            
            const celdaCreditos = document.createElement('td');
            celdaCreditos.textContent = item.creditos;
            
            const celdaN1 = document.createElement('td');
            celdaN1.textContent = item.n1;
            
            const celdaN2 = document.createElement('td');
            celdaN2.textContent = item.n2;
            
            const celdaN3 = document.createElement('td');
            celdaN3.textContent = item.n3;

            const celdaN4 = document.createElement('td');
            celdaN4.textContent = item.ex;
            //console.log(item.ex);
            
            const celdaNotaFinal = document.createElement('td');
            let nota = ((parseFloat(item.n1) + parseFloat(item.n2) + parseFloat(item.n3)) / 3) * 0.7 + (parseFloat(item.ex) * 0.3);
            celdaNotaFinal.textContent = nota.toFixed(2);
            
            // Agregar las celdas a la fila
            fila.appendChild(celdaAsignatura);
            fila.appendChild(celdaCreditos);
            fila.appendChild(celdaN1);
            fila.appendChild(celdaN2);
            fila.appendChild(celdaN3);
            fila.appendChild(celdaN4);
            fila.appendChild(celdaNotaFinal);
            
            // Agregar la fila a la tabla
            tabla.appendChild(fila);
        });
    })
});

button__home.addEventListener('click', ()=>{
    window.location.href = 'index.html';
})