#  BULLETS DIAGRAMATION
El componente bullets-diagramation crea listas de imágenes de productos que se pueden agregar, reordenar o eliminar mediante Site Editor. Esta aplicación tiene como objetivo ser utilizada con otras aplicaciones para crear nuevas interfaces que utilicen el contexto de las imágenes del producto. Por ejemplo: list-context.image-list, implementado por vtex.store-image, y list-context.product-list, implementado por vtex.product-summary..

- ![image](https://user-images.githubusercontent.com/107804493/219083528-d3d29856-109d-4feb-a1da-42a3b23b8611.png)


## Configuración
 ### Paso 1 - Configuración Básica 
- verificar en el package.json en la carpeta raiz y en la carpeta react
- name: debe tener el nombre del componente a usar
- version: 0.01
- ![image](https://user-images.githubusercontent.com/107804493/219083843-7d059bf6-a3f7-4e74-a9a7-9ab074602efa.png)


### Paso 2 - Clonación del repositorio
- Clona el repositorio a tu maquina local
- ![image](https://user-images.githubusercontent.com/107804493/219084064-3f513fd5-766a-4d7e-915a-29ee20a8b71b.png)


### Paso 3 - Editar el Manifest.json 
- Deberas editar el campo vendor que se refiere al  cliente que se este trabajando y en name el nombre del componente  custom
- ![image](https://user-images.githubusercontent.com/107804493/219084285-d7b81c0a-2d61-4ac4-9ab0-61a59b182a3c.png)


### Paso 4 - Instalar apps necesarias
 Nos Ubicamos en la carpeta react
```bash
cd react
```
Se ejecuta yarn para que se instalen las dependencias necesarias para que react funcione correctamente
```bash
yarn
```



### Paso 5 - Desinstalar el store-theme predeterminado
Al entrar por primera vez a la tienda, se tendra un store-theme inicial que debera ser desinstalado
- Ejecutamos vtex list para ver las apps instaladas
- identificamos  vtex.store-theme@0.0.1 y copiamos
- Ejecutamos 
```bash
vtex unistall vtex.store-theme@0.0.1
 ```
### Paso 6 - Ejecute un preview de la tienda
- Una vez ya hayas hecho login y hayas creado tu workspace para ejecutar tu tienda, deberas ejecutar vtex link en el workspace donde quieras usar tu componente custom
```bash
vtex link
```
Este permitira sincronizar los archivos de tu computadora con una direccion web que te permitira visualizar la pagina en el navegador.
- Luego ejecutaras 
```bash
vtex browse
```
Este comando sirve para abrir el navegador en la url destinada para visualizar tu tienda


### Dependencies
- manifest.json
![image](https://user-images.githubusercontent.com/107804493/219074632-1504d762-a317-4f63-838e-d97e2848c588.png)
- package.json en la carpeta raiz
```bash
"dependencies": {
    "vtex.native-types": "0.x",
    "vtex.list-context": "0.x",
    "vtex.device-detector": "0.x",
    "vtex.css-handles": "0.x"
  },
```
- package.json en la carpeta react
```bash
"dependencies": {
    "apollo-client": "^2.6.8",
    "react": "^16.12.0",
    "react-apollo": "^3.1.3",
    "react-dom": "^16.12.0",
    "react-intl": "^3.12.0"
  },
  "devDependencies": {
    "@apollo/react-testing": "^3.1.3",
    "@types/jest": "^25.1.4",
    "@types/node": "^13.9.8",
    "@types/react": "^16.9.31",
    "@vtex/test-tools": "^3.3.2",
    "@vtex/tsconfig": "^0.4.4",
    "apollo-cache-inmemory": "^1.6.5",
    "graphql": "^14.6.0",
    "typescript": "3.9.7"
  }
  ```



### Contributors
1. MAICOL ALEXIZ ORITZ HERNANDEZ
2. Desde forma indirecta con sus consejos y recomendaciones, mis tutores Luis Felipe Cerero García, David Mosquera y Julio César Arroyave 
