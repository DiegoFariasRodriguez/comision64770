document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('dosisForm');
    const pacientesLista = document.getElementById('pacientes');
    const resultado = document.getElementById('resultado');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita el envío del formulario y la recarga de la página
        
        // Captura los datos del formulario
        const nombre = document.getElementById('nombre') ? document.getElementById('nombre').value : 'No especificado';
        const peso = document.getElementById('peso').value;
        const edad = document.getElementById('edad').value;
        const contraste = document.getElementById('contraste').value;

        // Validación del peso
        const pesoKg = parseFloat(peso);
        if (pesoKg <= 0 || isNaN(pesoKg)) {
            resultado.innerText = "El peso debe ser un número positivo.";
            return;
        }

        // Cálculo de la dosis
        let dosisPorKg = 0;

        if (edad === 'recién_nacido') {
            if (contraste === 'ultravist_300') {
                dosisPorKg = 4.0;
            } else if (contraste === 'ultravist_370') {
                dosisPorKg = 3.2;
            }
        } else if (edad === 'lactante') {
            if (contraste === 'ultravist_300') {
                dosisPorKg = 3.0;
            } else if (contraste === 'ultravist_370') {
                dosisPorKg = 2.7;
            }
        } else if (edad === 'niño') {
            if (contraste === 'ultravist_300') {
                dosisPorKg = 1.5;
            } else if (contraste === 'ultravist_370') {
                dosisPorKg = 1.4;
            }
        } else if (edad === 'adulto') {
            if (contraste === 'ultravist_300') {
                dosisPorKg = 1.0;
            } else if (contraste === 'ultravist_370') {
                dosisPorKg = 0.8;
            }
        }

        const dosisTotal = pesoKg * dosisPorKg;
        resultado.innerText = `La dosis de contraste recomendada es ${dosisTotal.toFixed(2)} mililitros.`;

        // Añadir el resultado a la lista de pacientes
        const li = document.createElement('li');
        li.textContent = `Nombre: ${nombre}, Edad: ${edad}, Peso: ${peso} kg, Contraste: ${contraste}, Dosis: ${dosisTotal.toFixed(2)} ml`;
        pacientesLista.appendChild(li);

        // Limpiar el formulario
        form.reset();
    });
});
