const button  =document.getElementById('button');
const code = document.getElementById('codeStudent');
const password = document.getElementById('passwordStudent');

button.addEventListener('click', () =>{
    const data = {
        codigo: code.value,
        clave: password.value,
    };

    console.log(data)

    fetch('https://24a0dac0-2579-4138-985c-bec2df4bdfcc-00-3unzo70c406dl.riker.replit.dev/login', {
    method: 'POST', 
    headers: {
        'Content-Type': 'application/json' 
    },
    body: JSON.stringify(data) 
})
.then(response => {
    if (response.ok) {
        return response.json(); 
    } else {
        throw new Error('Error en la solicitud'); 
    }
})
.then(data => {
    alert(data.mensaje); 
    localStorage.setItem('user', JSON.stringify(data)); 
    
    window.location.href = 'notas.html';
})
.catch(error => {
    console.error('Error:', error);
});
})