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
        categoria = prompt('¿Sobre que producto es el reclamo? \n 1) Recargas \n 2) SUBE \n 3) Cobro de servicios \n 4) Medios de pagos \n 5)Transferencias \n 6)Plataforma \n 7)App');
        let sectorValidado = validarElSector(sector);
        let idReclamo = "";

        switch (categoria) {
            case '1':
                numeroReclamo+=1;
                productoReclama = 'Recargas'
                let reclamoR = 'R' + numeroReclamo;
                reclamo.push({
                    id: numeroReclamo,
                    sector: productoReclama,
                    motivo: descripcion
                });
                alert('Tu número de reclamo es: ' + reclamoR);
                break;
            case  '2':
                numeroReclamo+=1;
                productoReclama = 'SUBE'
                let reclamoS = 'S' + numeroReclamo;
                reclamo.push({
                    id: numeroReclamo,
                    sector: productoReclama,
                    motivo: descripcion
                });
                alert('Tu número de reclamo es: ' + reclamoS);
                break;
            case '3':
                numeroReclamo+=1;
                productoReclama = 'Cobro de servicios'
                let reclamoCS = 'CS' + numeroReclamo;
                reclamo.push({
                    id: numeroReclamo,
                    sector: productoReclama,
                    motivo: descripcion
                });
                alert('Tu número de reclamo es: ' + reclamoCS);
                break;
            case '4':
                numeroReclamo+=1;
                productoReclama = 'Medios de pago'
                let reclamoMP = 'MP' + numeroReclamo;
                reclamo.push({
                    id: numeroReclamo,
                    sector: productoReclama,
                    motivo: descripcion
                });
                alert('Tu número de reclamo es: ' + reclamoMP);
                break;
            case '5':
                numeroReclamo+=1;
                productoReclama = 'Transferencias'
                let reclamoT = 'T' + numeroReclamo;
                reclamo.push({
                    id: numeroReclamo,
                    sector: productoReclama,
                    motivo: descripcion
                });
                alert('Tu número de reclamo es: ' + reclamoT);
                break;
            case '6':
                numeroReclamo+=1;
                productoReclama = 'Plataforma'
                let reclamoP = 'P' + numeroReclamo;
                reclamo.push({
                    id: numeroReclamo,
                    sector: productoReclama,
                    motivo: descripcion
                });
                alert('Tu número de reclamo es: ' + reclamoP);
                break;
            case '7':
                numeroReclamo+=1;
                productoReclama = 'App'
                let reclamoA = 'A' + numeroReclamo;
                reclamo.push({
                    id: numeroReclamo,
                    sector: productoReclama,
                    motivo: descripcion
                });
                alert('Tu número de reclamo es: ' + reclamoA);
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