# Vuelos-fe
En el archivo enviroment.ts se encuentra la direccion de la api que deberan reemplazar por la url donde esta el backend.
Despues ejecutar el comando ng serve el cual ejecutara el servicio y podra usarse la aplicacion.

Al momento de realizar la aplicacion la URL desde donde se deberia consultar los vuelos estaba caida, por lo que se consultan en la base creada.
Para probar la funcionalidad con la URL solicitada se debera cambiar la linea dentro del archivo 'components/home/home.component.ts', linea 86, dentro de la funcion 'searchFlights', getByFilter() por search().

Falta agregar la posibilidad de descargar un PDF.
