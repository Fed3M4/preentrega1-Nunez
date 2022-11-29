let numeroReclamo = 0;

function nuevoReclamo() {
    let sector = 0;
    let categoria = '';
    let descripcion = '';
    let terminado = false;

    do {
        alert('¡¡Bienvenido al sistema de reclamos!!. \n Por favor indicá el sector desde donde viene el mismo');
        sector = parseInt(prompt('Seleccioná uno de los sectores: \n 1: Operaciones \n 2: Fraudes \n 3: Sistemas \n 4: Reclamos \n 5: Contabilidad \n 6: Administración \n 7: Ventas \n 8: Distribuidores'));
        descripcion = prompt('Danos una breve descripción:');
        categoria = prompt('¿A que categoría pertenece? \n a) Medios de pago \n b) Recargas \n c) SUBE');
        let sectorValidado = validarElSector(sector);

        switch (categoria) {
            case 'a':
                numeroReclamo+=1;
                let reclamoMDP = 'M' + numeroReclamo;
                alert('Tu número de reclamo es: ' + reclamoMDP);
                break;
            case 'b':
                numeroReclamo+=1;
                let reclamoR = 'R' + numeroReclamo;
                alert('Tu número de reclamo es: ' + reclamoR);
                break;
            case 'c':
                numeroReclamo+=1;
                let reclamoS = 'S' + numeroReclamo;
                alert('Tu número de reclamo es: ' + reclamoS);
                break;
            default:
                alert('No elegiste una opción válida')
                break;
        }

        terminado = confirm('¿Querés hacer otro reclamo?')
    } while (terminado);

}

function validarElSector(sector) {
    while (Number.isNaN(sector) || sector <= 0 || sector >8) {
        if (sector <= 0 || sector > 8) {
            alert('El sector ingresado no corresponde a alguno registrado')
        } else {
            alert('Por favor ingresa unicamente el número del sector')
        }
        sector = parseInt(prompt('¿Desde que área se eleva el reclamo? \n 1: Operaciones \n 2: Fraudes \n 3: Sistemas \n 4: Reclamos \n 5: Contabilidad \n 6: Administración \n 7: Ventas \n 8: Distribuidores'));
    }
    return sector;
}

nuevoReclamo()