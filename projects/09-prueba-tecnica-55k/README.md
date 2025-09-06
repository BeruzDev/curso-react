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

- [x] Allow the data to be sorted by country as demonstrated in the example.
    - Usamos el estado user y lo ordenamos con [...user].sort() o con user.toSorted(), para no mutar el array original y ordenar una copia del array, si lo mutas nunca vuelve a desordenarse, y luego simplemente hacemos una funcion con prevState => !prevState y lo aplicamos al boton.

- [x] Enable the ability to delete a row as shown in the example.
    -Lo primero es que en el .map() de listsOfUsers.jsx debe utilizarse un elemento unico como key y no el index, usar el user.email. HandleDelete -> guardamos en una const filteredUsers con user.filter() -> siempre que el usuario tenga un email diferente del email que le pasamos por parametro. -> setUsers(filteredUsers).

- [x] Implement a feature that allows the user to restore the initial state, meaning that all deleted rows will be recovered.
    -En un useRef() guardamos el valor users que queremos que se utilice entre renderizados, pero que al cambiar no vuelva a renderizar el componente. Lo guardamos en el useEffect para guardar el primer estado original con .current y asi ya lo tenemos guardado.

- [x] Handle any potential errors that may occur.
    -Se ha ido haciendo sobre la marcha:
        -Utilizar para la key del .map() un elemento unico como el email y no el index
        -Ordenar el array sin mutarlo para poder volver al estado previo.
        -Guardar el estado inicial en un useRef() para resetear al estado sin volver a renderizar.

- [x] Implement a feature that allows the user to filter the data by country.
    -Recogemos el valor del input con .target.value -> lo guardamos en un estado -> creamos una constante filteredUsers que devuelve usuarios filtrados por el valor del estado que guarda el pais introducido por el usuario y lo comparamos con user.location.country

- [x] Avoid sorting users again the data when the user is changing filter by country.
    -Usando el useMemo(), evitamos que se vuelva a recalcular a no ser que cambien las dependencias del mismo hook. Primero manejamos el filtrado por pais, si no hay filtrado devolvemos los usuarios tal cual, y luego esos usuarios los ordenamos, en caso de que el estado de orderByCountry sea true, sino se pasan al componente tal y como esta.

- [x] Sort by clicking on the column header.
    -Tipamos SortBy y en la funcion sortedUsers hacemos distintos if para cada caso.
