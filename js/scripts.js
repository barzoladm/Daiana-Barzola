document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-horarios');
    const listaHorarios = document.getElementById('lista-horarios');

    toggleButton.addEventListener('click', function() {
        listaHorarios.classList.toggle('hidden');
    });

    document.addEventListener('click', function(event) {
        if (!toggleButton.contains(event.target) && !listaHorarios.contains(event.target)) {
            listaHorarios.classList.add('hidden');
        }
    });
});

const horarios = {
    lunes: ["10:00-14:00", "17:00-21:00"],
    martes: ["10:00-14:00", "17:00-21:00"],
    miércoles: ["10:00-14:00", "17:00-21:00"],
    jueves: ["10:00-14:00", "17:00-21:00"],
    viernes: ["10:00-14:00", "17:00-21:00"],
    sábado: ["09:00-12:00"],
    domingo: ["Cerrado"]
};

function esHoraDeApertura(hora, rango) {
    const [inicio, fin] = rango.split('-').map(t => t.trim());
    return hora >= inicio && hora <= fin;
}

function estadoTienda() {
    const ahora = new Date();
    const dia = ahora.toLocaleDateString('es-ES', { weekday: 'long' }).toLowerCase();
    const horaActual = ahora.toTimeString().split(' ')[0].substring(0, 5); // HH:MM

    const horariosHoy = horarios[dia] || [];
    const abierto = horariosHoy.some(rango => {
        if (rango === "Cerrado") return false;
        return esHoraDeApertura(horaActual, rango);
    });

    const mensaje = abierto ? "¡Abierto ahora!" : "Cerrado ahora.";
    document.getElementById('estado-tienda').textContent = mensaje;
}

document.addEventListener('DOMContentLoaded', function() {
    estadoTienda();
    mostrarHorarios(horarios);

    const toggleButton = document.getElementById('toggle-horarios');
    const listaHorarios = document.getElementById('lista-horarios');

    if (toggleButton && listaHorarios) {
        toggleButton.addEventListener('click', function() {
            listaHorarios.classList.toggle('hidden');
        });

        document.addEventListener('click', function(event) {
            if (!toggleButton.contains(event.target) && !listaHorarios.contains(event.target)) {
                listaHorarios.classList.add('hidden');
            }
        });
    } else {
        console.error('Uno o ambos elementos con id "toggle-horarios" o "lista-horarios" no se encuentran en el DOM.');
    }

    estadoTienda();
});
