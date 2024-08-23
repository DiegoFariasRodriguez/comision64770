function calcularDosis() {

    const pesoInput = document.getElementById('peso').value;
    const edad = document.getElementById('edad').value;
    const contraste = document.getElementById('contraste').value;

    const pesoKg = parseFloat(pesoInput);


    if (pesoKg <= 0 || isNaN(pesoKg)) {
        document.getElementById('resultado').innerText = "El peso debe ser un número positivo.";
        return;
    }

    
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

    
    document.getElementById('resultado').innerText = `La dosis de contraste recomendada es ${dosisTotal.toFixed(2)} mililitros.`;
}
