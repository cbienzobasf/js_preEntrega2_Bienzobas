# Pre-entrega 02

# Simulador de Gestión de Servicios para Bodas

**Autor:** Carlos Biénzobas

## Tecnologías Utilizadas
- **HTML5**: Estructura de la página.
- **JavaScript**: Lógica del simulador.

## Descripción del Proyecto
Este proyecto es un simulador desarrollado en JavaScript y HTML que permite gestionar servicios relacionados con matrimonios o bodas. Los usuarios pueden realizar operaciones CRUD de creación, revisión, actualización y eliminación. Adicionalmente búsqueda de servicios y filtro de servicios por rango de precios.

Esta entrega corresponde a la segunda simulación de un sitio para gestión de servicios de matrimonios, cubriendo los requisitos presentados para la Pre-entrega 02.

## Conocimientos Aplicados
El desarrollo de este proyecto integra en su gran mayoria los conceptos enseñados en clase, aplicados en un contexto de simulación que es solicitado para la presente entrega.

## Estructura del Proyecto
1. **index.html**: Estructura básica de la página con un título estático.
2. **simulador.js**: Lógica en lenguage JavaScript del simulador de servicios.

## Funcionalidades Principales
1. **Crear Servicio**:
   - El usuario puede crear un nuevo servicio ingresando su nombre, precio y proveedor.
   - Se verifica que todos los datos registrados sean válidos.
   - Se utiliza `alert()` y `console.log()` para mostrar mensajes de éxito o error.

2. **Revisar Servicios**:
   - Lista de servicios disponibles.
   - Los datos se muestran en `alert()` y se imprimen en `console.log()`. En caso de no haber servicios registrados, se informa al usuario.

3. **Actualizar Servicio**:
   - Usuario selecciona un servicio por su número y actualiza sus datos de nombre, precio o proveedor.
   - Los detalles actualizados se muestran en `alert()` y se registran en `console.log()`, previo a que se valide que los datos ingresados sean correctos.

4. **Eliminar Servicio**:
   - El usuario puede eliminar un servicio específico seleccionándolo por su número.
   - Se muestra una confirmación del servicio eliminado con detalles en `alert()` y `console.log()`.

5. **Filtrar Servicios por Rango de Precio**:
   - El usuario puede ingresar un rango de precios para filtrar los servicios disponibles mediante la definición de un precio mínimo y máximo.
   - Como consecuencia de esa acción, se presenta una lista de servicios que cumplen con el criterio o un mensaje si no hay servicios en ese rango en pantalla con `alert()` y en la consola con `console.log()`.

6. **Buscar Servicio por Nombre**:
   - El usuario puede buscar un servicio por nombre.
   - Si el servicio existe, se muestran los detalles, si no, se informa al usuario.
   - Los resultados se muestran en `alert()` y se registran en la consola con `console.log()`.

7. **Salir del Simulador**:
   - Opción 0 para usuario para salir del simulador.

## Criterios de Evaluación
1. **Funcionalidad**:
   - El simulador funciona en base a definición de funciones y operaciones CRUD para crear, actualizar, leer y eliminar registros, junto con funciones de orden superior para extender dichas funcionalidades como `forEach()`, `filter()` y `find()` para búsqueda y filtrado por rango de precio.

2. **Interactividad**:
   - Captura de entradas usuario con `prompt()`.
   - Las salidas se muestran mediante `alert()` y `console.log()`.

3. **Escalabilidad**:
   - Uso de arrays,objetos y funciones.

1. **Legibilidad y Comentarios**:
   - Dentro del archivo `simulador.js` se encuentra un código estructurado en 15 partes junto con comentarios a nivel de linea detallando los aspectos relevantes de la funcionalidad propuesta para facilitar la comprensión.
