// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();

    // Validar que el campo no esté vacío
    if (nombreAmigo === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }

    // Agregar el nombre al array
    amigos.push(nombreAmigo);

    // Limpiar el campo de entrada
    inputAmigo.value = '';

    // Actualizar la lista de amigos en la página
    actualizarListaAmigos();
}

// Función para actualizar la lista de amigos en la página
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpiar la lista antes de actualizar

    // Recorrer el array de amigos y agregar cada uno a la lista
    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${amigo}`;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    // Verificar que haya al menos un amigo en la lista
    if (amigos.length === 0) {
        alert('No hay amigos en la lista para sortear.');
        return;
    }

    // Seleccionar un amigo al azar
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    // Eliminar el amigo sorteado de la lista
    amigos.splice(indiceAleatorio, 1);

    // Mostrar el resultado en la página
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;

    // Actualizar la lista de amigos en la página
    actualizarListaAmigos();
}

// Función para manejar la tecla "Enter"
function manejarEnter(event) {
    // Verificar si la tecla presionada es "Enter" (código 13)
    if (event.key === 'Enter') {
        agregarAmigo(); // Llamar a la función para agregar el amigo
    }
}

// Asignar el evento "keypress" al campo de texto
const inputAmigo = document.getElementById('amigo');
inputAmigo.addEventListener('keypress', manejarEnter);