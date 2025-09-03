# Prueba técnica con TypeScript y React

Esto es una prueba técnica de una empresa europea para un sueldo de 55000 €/anuales.

El objetivo de esta prueba técnica es crear una aplicación similar a la que se proporciona en este enlace: https://midu-react-11.surge.sh/. Para lograr esto, debe usar la API proporcionada por https://randomuser.me/.

Los pasos a seguir:

- [x] Fetch 100 rows of data using the API.
    -Simplemente un useEffect que hace un fetch a la api (https://randomuser.me/api?results=100) y un useState que muestra el resultado.
    -Para tipar los usuarios, el archivo json de la api, en raw lo pasamos por quicktype.com -> selecciona typescript y listos!

- [x] Display the data in a table format, similar to the example.
    -Creamos un componente en forma de tabla donde pondremos las props del type User del archivo types.d.ts
    -.map() para representarlo

- [x] Provide the option to color rows as shown in the example.
    -Creamos un estado para saber si las filas tienen color de fondo o no, y una funcion para invertir valores, lo pasamos al componente usersList. El backgroundcolor sera de color -> si el indx es % 2 ? sera un color : otro para alternar entre filas, y luego si el estado es true ? el style = backgroundcolor -> color : transparente

- [] Allow the data to be sorted by country as demonstrated in the example.

- [] Enable the ability to delete a row as shown in the example.

- [] Implement a feature that allows the user to restore the initial state, meaning that all deleted rows will be recovered.

- [] Handle any potential errors that may occur.

- [] Implement a feature that allows the user to filter the data by country.

- [] Avoid sorting users again the data when the user is changing filter by country.

- [] Sort by clicking on the column header.
