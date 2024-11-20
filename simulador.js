// 1. Definimos la clase Servicio que define un servicio con nombre, precio y proveedor.
class Servicio {
    constructor(nombre, precio, proveedor) {
        this.nombre = nombre; // Nombre Servicio.
        this.precio = precio; // Precio Servicio en CLP.
        this.proveedor = proveedor; // Proveedor Servicio.
    }
}

// 2. Definimos el array para registro servicios, con servicios genéricos predefinidos para fines de pruebas.
let servicios = [
    new Servicio("Banqueteria básica", 5000000, "Banqueteros genéricos"),
    new Servicio("Musica básica", 500000, "Banqueteros genéricos"),
    new Servicio("Decoración básica", 1500000, "Banqueteros genéricos")
];

//  3. Ajuste con declaración de constante para mostrar precios en CLP con separación de miles y sin decimales por medio de Intl.NumberFormat.
const CLPformato = new Intl.NumberFormat('es-CL', {
    style: 'currency', // Formato moneda.
    currency: 'CLP', // Formato moneda Chilena.
    minimumFractionDigits: 0 // Para no mostrar decimales.
});

// 4. Definimos función para mostrar el menú principal
function mostrarMenu() {
    let opcion = parseInt(prompt(
        "Seleccione número de una de las siguientes opciones:\n" +
        "1. Crear Servicio.\n" +
        "2. Revisar Servicios disponibles.\n" +
        "3. Actualizar Servicio.\n" +
        "4. Eliminar Servicio.\n" +
        "5. Filtrar Servicios por Rango de Precio.\n" +
        "6. Buscar Servicio por Nombre exacto.\n" +
        "7. Calcular Costo Total y Porcentaje del Presupuesto.\n" +
        "0. Salir."
    ));
    return opcion;
}

// 5. Función para crear un nuevo servicio (#1).
function crearServicio() {
    let nombre = prompt("Ingrese el nombre del servicio:"); // Input nombre servicio.
    let precio = parseFloat(prompt("Ingrese el precio del servicio (en CLP):")); // Input precio servicio.
    let proveedor = prompt("Ingrese el nombre del proveedor:"); // Input nombre proveedor.

   //If de validación de registros usuario para posteriormente ejecutar push() para la incorporación del objeto servicio al array servicios. 
    if (nombre && !isNaN(precio) && proveedor) {
        servicios.push(new Servicio(nombre, precio, proveedor));
        alert(`Servicio creado con éxito.\nServicio creado: ${nombre}.\nPrecio: ${CLPformato.format(precio)}.\nProveedor: ${proveedor}.`); // Alerta función correcta y detalle de creación en log.
        console.log(`Servicio creado con éxito.\nServicio creado: ${nombre}.\nPrecio: ${CLPformato.format(precio)}.\nProveedor: ${proveedor}.`); // Alerta función correcta y detalle de creación en log.
    } else {
        alert("Datos inválidos. Intente nuevamente."); // Mensaje pantalla error datos.
        console.log("Error: Datos inválidos para crear un servicio.");// Mensaje consola error datos.
    }
}

// 6. Función para revisar todos los servicios existentes. Nota: Para la prueba de esta función, se tienen registros genéricos.
function leerServicios() {// Verifica registros array 'servicios'.
    if (servicios.length === 0) {// Si no hay servicios (array vacío), entrega mensaje alerta en pantalla y consola.
    alert("No hay servicios registrados.");
    console.log("No hay servicios registrados.");
    } else {
        let listado = "Servicios Registrados:\n"; // Si hay servicios registrados (array no vacío), crea cadena para listar los servicios.
    
        servicios.forEach((servicio, index) => { // forEach() recorre cada servicio en el array.
        let info = `${index + 1}. ${servicio.nombre} - ${CLPformato.format(servicio.precio)} - Proveedor: ${servicio.proveedor}`;// Construye una cadena de información para cada servicio, donde 'index + 1' se usa para mostrar el número de servicio comenzando desde 1 en lugar de 0 la numeración.
        listado += `${info}\n`; // Agrega info de servicio a la cadena 'listado'.
        console.log(info); // Imprime la información del servicio en consola.
        });
        alert(listado); // Muestra la lista completa en alerta.
    }
}


// 7. Función para actualizar un servicio existente.
function actualizarServicio() {
    if (servicios.length === 0) { // Servicios disponibles para mostrar.
        alert("No hay servicios disponibles para actualizar.");
        console.log("No hay servicios disponibles para actualizar.");
        return; // función termina si no hay servicios.
    }

    
    let listado = "Servicios Disponibles para Actualizar:\n"; // Lista de servicios disponibles.
    servicios.forEach((servicio, index) => {
        listado += `${index + 1}. ${servicio.nombre} - ${CLPformato.format(servicio.precio)} - Proveedor: ${servicio.proveedor}\n`;
    });
    alert(listado); // Lista en pantalla.
    console.log(listado); // Lista en consola.

    
    let index = parseInt(prompt("Ingrese el número del servicio que desea actualizar:")) - 1; // Solicita a usuario número del servicio a actualizar.

    
    if (index >= 0 && index < servicios.length) { // Verifica número sea válido.
        // Solicita actualización servicio a usuario.
        let nombre = prompt("Ingrese el nuevo nombre del servicio:", servicios[index].nombre);
        let precio = parseFloat(prompt("Ingrese el nuevo precio del servicio (en CLP):", servicios[index].precio));
        let proveedor = prompt("Ingrese el nuevo proveedor del servicio:", servicios[index].proveedor);

        if (nombre && !isNaN(precio) && proveedor) { // Verifica datos ingresados sean válidos.
            // Actualización del servicio.
            servicios[index].nombre = nombre;
            servicios[index].precio = precio;
            servicios[index].proveedor = proveedor;

            // Mensajes de confirmación de cambios por pantalla y consola.
            alert(`Servicio actualizado con éxito.\nServicio actualizado: ${nombre}.\nPrecio: ${CLPformato.format(precio)}.\nProveedor: ${proveedor}.\n`);
            console.log(`Servicio actualizado con éxito.\nServicio actualizado: ${nombre}.\nPrecio: ${CLPformato.format(precio)}.\nProveedor: ${proveedor}.\n`);
        } else {
            alert("Datos inválidos. Intente nuevamente."); // Error por datos inválidos por pantalla.
            console.log("Error: Datos inválidos para actualizar el servicio."); // Error por datos inválidos por consola.
        }
    } else {
        alert("Número de servicio inválido."); // Error por número de servicio no válido por pantalla.
        console.log("Error: Número de servicio inválido."); // Error por número de servicio no válido por consola.
    }
}

// 8. Función para eliminar un servicio.
function eliminarServicio() {

    let index = parseInt(prompt("Ingrese el número del servicio que desea eliminar:")) - 1; // Solicita a usuario número del servicio que desea eliminar y restamos 1 para que el índice coincida con la posición real en el array.

    if (index >= 0 && index < servicios.length) { // Verifica si índice es válido.
        let eliminado = servicios.splice(index, 1)[0]; // Uso de 'splice()' para eliminar un elemento del array en la posición 'index'.
        alert(`Servicio eliminado.\nServicio eliminado: ${eliminado.nombre}.\nPrecio: ${CLPformato.format(eliminado.precio)}.\nProveedor: ${eliminado.proveedor}.`); // Muestra un mensaje de confirmación y los detalles del servicio eliminado en pantalla.
        console.log(`Servicio eliminado.\nServicio eliminado: ${eliminado.nombre}.\nPrecio: ${CLPformato.format(eliminado.precio)}.\nProveedor: ${eliminado.proveedor}.`); // Muestra un mensaje de confirmación y los detalles del servicio eliminado en consola.
    } else {
        alert("Número de servicio inválido."); // Muestra un mensaje de error número servicio no válido en pantalla.
        console.log("Error: Número de servicio inválido."); // Muestra un mensaje de error número servicio no válido en consola.
    }
}


// 9. Función para filtrar servicios por rango de precios.
function filtrarPorPrecio() {
    let minPrecio = parseFloat(prompt("Ingrese el precio mínimo (en CLP):")); // Input usuario precio mínimo y lo convierte a un número.
    let maxPrecio = parseFloat(prompt("Ingrese el precio máximo (en CLP):")); // Input usuario precio máximo y lo convierte a un número.

    if (!isNaN(minPrecio) && !isNaN(maxPrecio)) { // Verifica que ambos precios ingresados sean números válidos.
        
        let serviciosFiltrados = servicios.filter(servicio => servicio.precio >= minPrecio && servicio.precio <= maxPrecio); // Usa 'filter()' para crear un nuevo array con los servicios que estén dentro del rango de valores definido por el usuario.

        if (serviciosFiltrados.length > 0) { // Si hay servicios que cumplen con condición.
            let listado = "Servicios en el rango de precio:\n"; // Inicializa una cadena con servicios.
            serviciosFiltrados.forEach(servicio => { // Recorre cada servicio filtrado y construye una cadena con su información.
                let info = `${servicio.nombre} - ${CLPformato.format(servicio.precio)} - Proveedor: ${servicio.proveedor}`;// Contenido cadena.
                listado += `${info}\n`; // Agrega la info del servicio a la cadena.
                console.log(info);// Imprime la info de cada servicio en consola.
            });
            alert(listado); // Imprime la info de cada servicio en pantalla.
        } else {
            alert("No hay servicios en este rango de precio."); // Mensaje no hay servicios en el rango de precio en pantalla.
            console.log("No hay servicios en este rango de precio."); // Mensaje no hay servicios en el rango de precio en consola.
        }
    } else {
        
        alert("Datos inválidos. Intente nuevamente.");// Error input datos en pantalla.
        console.log("Error: Datos inválidos para el rango de precio."); // Error input datos en consola.
    }
}


// 10. Función para buscar un servicio por nombre.
function buscarServicioPorNombre() {
    let nombreBuscado = prompt("Ingrese el nombre del servicio que desea buscar:").toLowerCase(); // Solicita input usuario con nombre del servicio y convierte texto a minúsculas.
    let servicioEncontrado = servicios.find(servicio => servicio.nombre.toLowerCase() === nombreBuscado);     // Usa 'find()' para buscar el primer servicio en el array 'servicios' cuyo nombre (en minúsculas) coincida con input usuario.

    if (servicioEncontrado) { // Si coincida con el nombre ingresado.
        alert(`Servicio encontrado:\nNombre: ${servicioEncontrado.nombre}\nPrecio: ${CLPformato.format(servicioEncontrado.precio)}\nProveedor: ${servicioEncontrado.proveedor}`); // Muestra detalles del servicio encontrado en pantalla.
        console.log(`Servicio encontrado: ${servicioEncontrado.nombre}, Precio: ${CLPformato.format(servicioEncontrado.precio)}, Proveedor: ${servicioEncontrado.proveedor}`); // Muestra detalles del servicio encontrado en consola.
    } else {
        alert("No se encontró un servicio con ese nombre."); // Mensaje servicio no encontrado en pantalla.
        console.log("No se encontró un servicio con ese nombre."); // Mensaje servicio no encontrado en pantalla.
    }
}

// 11. Función para que usuario puede elegir servicios disponibles y calcular el costo total de los servicios seleccionados.
function calcularCostoTotal(serviciosSeleccionados) {
    return serviciosSeleccionados.reduce((total, servicio) => total + servicio.precio, 0); // Costo total de los servicios seleccionados sumando los precios.
}

// 12. Función para calcular el porcentaje de presupuesto utilizado según los servicios elegidos por el usuario.
function calcularPorcentajeUtilizado(costoTotal, presupuesto) {
    return (costoTotal / presupuesto) * 100; //  Porcentaje del presupuesto utilizado respecto de los servicios seleccionados.
}

// 13. Función para registro de presupuesto del usuario.
function calcularPresupuesto() {
    let presupuesto = parseFloat(prompt("Ingrese su presupuesto total en CLP:")); // Ingreso presupuesto usuario.

    if (!isNaN(presupuesto) && presupuesto > 0) { // Valida presupuesto.
        let serviciosSeleccionados = []; // Array para almacenar los servicios seleccionados.
        let opcion;

        do {
            let listado = "Seleccione un servicio para agregar al cálculo:\n"; // Muestra servicios disponibles.
            servicios.forEach((servicio, index) => {
                listado += `${index + 1}. ${servicio.nombre} - ${CLPformato.format(servicio.precio)}\n`;
            });
            listado += "0. Finalizar selección.\n";
            opcion = parseInt(prompt(listado)); // Usuario selecciona un servicio.

            if (opcion > 0 && opcion <= servicios.length) { // Verifica opción sea válida.
                serviciosSeleccionados.push(servicios[opcion - 1]); // Agrega el servicio seleccionado.
                alert(`Servicio agregado: ${servicios[opcion - 1].nombre}`); // Confirma la adición.
            } else if (opcion !== 0) {
                alert("Opción no válida. Intente nuevamente."); // Maneja opción inválida.
            }
        } while (opcion !== 0); // Loop hasta que usuario finalice.

        
        let costoTotal = calcularCostoTotal(serviciosSeleccionados); // Costo total.

        let porcentajeUtilizado = calcularPorcentajeUtilizado(costoTotal, presupuesto); // Porcentaje utilizado.

        alert(`Resumen de selección:\nCosto Total: ${CLPformato.format(costoTotal)}\nPresupuesto: ${CLPformato.format(presupuesto)}\nPorcentaje Utilizado: ${porcentajeUtilizado.toFixed(2)}%`); // Entrega resultado a usuario por pantalla.
        console.log(`Resumen de selección:\nCosto Total: ${CLPformato.format(costoTotal)}\nPresupuesto: ${CLPformato.format(presupuesto)}\nPorcentaje Utilizado: ${porcentajeUtilizado.toFixed(2)}%`); // Entrega resultado a usuario por consola.
    } else {
        alert("Presupuesto inválido. Intente nuevamente."); // Error presupuesto inválido pantalla.
        console.log("Error: Presupuesto inválido ingresado."); // Error presupuesto inválido consola.
    }
}

// 14. Función principal para iniciar el simulador con validación de opción valida.
function iniciarSimulador() {
    let opcion;
    do {
        opcion = mostrarMenu();
        switch (opcion) {
            case 1:
                crearServicio();
                break;
            case 2:
                leerServicios();
                break;
            case 3:
                actualizarServicio();
                break;
            case 4:
                eliminarServicio();
                break;
            case 5:
                filtrarPorPrecio();
                break;
            case 6:
                buscarServicioPorNombre();
                break;
            case 7:
                calcularPresupuesto();
                break;
            case 0:
                alert("Saliendo del simulador.");
                console.log("Saliendo del simulador.");
                break;
            default:
                alert("Opción no válida. Intente de nuevo.");
                console.log("Opción no válida seleccionada.");
        }
    } while (opcion !== 0);
}
// 15. Iniciamos el simulador
iniciarSimulador();

