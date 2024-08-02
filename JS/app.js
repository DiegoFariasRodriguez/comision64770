console.log("Entro");


function calcularDosis(pesoKg) {
    
    if (pesoKg <= 0 || isNaN(pesoKg)) {
        return "El peso debe ser un número positivo.";
    }

    // Definir la dosis por kilogramo (en mililitros)
    const dosisPorKg = 1;

    // Calcular la dosis total
    const dosisTotal = pesoKg * dosisPorKg;

    // Devolver el resultado
    return `La dosis de contraste recomendada es ${dosisTotal} mililitros.`;
}

