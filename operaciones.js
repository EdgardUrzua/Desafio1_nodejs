const fs = require('fs');

const registrar = (nombre, edad, tipo, color, enfermedad) => {
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf8'));
    const nuevaCita = {nombre, edad, tipo, color, enfermedad};
    citas.push(nuevaCita);
    fs.writeFileSync('citas.json', JSON.stringify(citas));
    console.log('Cita Registrada:', nuevaCita);
};

module.exports = { registrar };

const leer = () =>{
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf8'));
    console.log('Citas Registradas:', citas);    
};

module.exports = { registrar, leer }