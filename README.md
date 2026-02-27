# 🎮 GameNode API

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MariaDB](https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=mariadb&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white)
![Railway](https://img.shields.io/badge/Railway-131415?style=for-the-badge&logo=railway&logoColor=white)

GameNode API es un backend robusto diseñado para gestionar un catálogo completo de la industria de los videojuegos. Permite la administración de **Empresas**, **Consolas** y **Videojuegos**, gestionando de forma eficiente sus relaciones a través de una base de datos relacional MariaDB.

Este proyecto ha sido desarrollado aplicando buenas prácticas de Ingeniería de Software, incluyendo **Arquitectura en Capas** (Router, Controller, Service), **Integridad Referencial**, **CI/CD** y **Testing automatizado**.

---

## 🚀 Despliegue en Producción (Live Demo)

La API está desplegada de forma continua y automatizada en **Railway**. 

* **URL Base de la API:** `https://TU-URL-DE-RAILWAY.up.railway.app` *(⚠️ Reemplaza esto con tu URL de Railway)*
* **Documentación Swagger UI:** `https://TU-URL-DE-RAILWAY.up.railway.app/api-docs`

---

## 🛠️ Stack Tecnológico

* **Core:** Node.js, Express.js
* **Base de Datos:** MariaDB (Despliegue local con Docker, Producción en Railway)
* **Query Builder:** Knex.js
* **Validaciones:** express-validator
* **Testing:** Jest, Supertest (Unitario e Integración)
* **CI/CD:** GitHub Actions (Node 20, 22, 24)
* **Documentación:** Swagger (OpenAPI 3.0), Postman

---

## ⚙️ Instalación y Entorno Local (Getting Started)

Para levantar este proyecto en tu entorno local, sigue estos pasos:

### 1. Prerrequisitos

Asegúrate de tener instalados:

* [Node.js](https://nodejs.org/) (v20 o superior)
* [Docker Desktop](https://www.docker.com/products/docker-desktop/) (Para la base de datos local)
* Git

### 2. Clonar el repositorio

```bash
git clone [https://github.com/TU-USUARIO/gamenode-api.git](https://github.com/TU-USUARIO/gamenode-api.git)
cd gamenode-api
```

### 3. Instalar dependencias

```bash
npm install
```
### 4. Configurar el Entorno

El proyecto utiliza un archivo YAML para la configuración local. Crea tu copia local a partir del archivo de muestra:

```bash
cp config.sample.yaml config.local.yaml
```
(Asegúrate de configurar los parámetros de base de datos o dejar los predeterminados para el contenedor de Docker).

### 5. Levantar la Base de Datos (Docker)

Levanta el contenedor de MariaDB en segundo plano:

```bash
docker compose -f docker-compose.dev.yaml up -d
```

💡 Nota: La estructura inicial y los datos maestros (Nintendo, Sony, juegos, etc.) se deben importar ejecutando el script ubicado en docs/database/init.sql utilizando un cliente como DBeaver o Workbench.

### 6. Ejecutar el Servidor

#### Modo desarrollo (con nodemon)

```bash
npm run dev
```

#### Modo normal

```bash
npm start
```

La API estará disponible en **http://localhost:8080** (o el puerto definido en tu configuración).

## 🧪 Testing Automático

El proyecto cuenta con una suite completa de pruebas (Unitarias y de Integración) gestionadas con Jest y Supertest.

⚠️ Importante: Para los tests de integración, es obligatorio tener la base de datos local encendida mediante Docker, ya que las pruebas validan la persistencia e integridad real en MySQL/MariaDB.

### Ejecutar toda la suite de pruebas

```bash
npm test
```

### Ejecutar SOLO las pruebas unitarias

```bash
npm run test:unit
```

### Ejecutar SOLO las pruebas de integración (Requiere DB activa)

```bash
npm run test:integration
```

(Se utiliza la librería cross-env para garantizar compatibilidad entre terminales Windows, Mac y Linux al inyectar NODE_ENV=test).

## 📚 Documentación Adicional

Para mantener la raíz del proyecto limpia, la documentación detallada se encuentra dividida en sus respectivos directorios:

* 📄 Documentación de la API y Postman: Contiene las especificaciones **OpenAPI (Swagger)**, instrucciones de uso y la **Colección de Postman con los tests preconfigurados**.

* 🗄️ Documentación de la Base de Datos: Detalles sobre el **Modelo Entidad-Relación**, el **script init.sql** y **decisiones de diseño e integridad referencial** (borrados controlados).

## 🏗️ Arquitectura del Proyecto

El código fuente sigue el patrón de diseño estructurado en capas para garantizar escalabilidad y separación de responsabilidades:

```plaintext
src/
 ├── app.js                 # Configuración de Express y middlewares globales
 ├── configuration/         # Configuración del servidor (YAML/Env) y conexión a DB
 ├── router/                # Definición de rutas (Endpoints)
 ├── controller/            # Gestión de Request/Response y llamadas a servicios
 ├── service/               # Lógica de negocio y consultas a BD (Knex)
 ├── validators/            # Reglas de validación (express-validator)
 ├── middlewares/           # Middlewares personalizados (Manejo de errores de validación)
 ├── utils/                 # Funciones auxiliares y helpers
 └── test/                  # Suite de pruebas
      ├── integration/      # Pruebas de endpoints (Supertest)
      └── unit/             # Pruebas de funciones lógicas puras
```

## ✨ Contribuciones y Flujo de Trabajo (GitFlow)

* La rama **main** contiene únicamente código de Producción (estable).

* La rama **dev** funciona como entorno de integración.

* Los despliegues se validan mediante GitHub Actions en cada Pull Request (Wait for CI) para asegurar que ningún código que rompa los tests llegue a producción.

---

*Desarrollado para el proyecto de 2ªEV Desarrollo de Aplicaciones Web (Backend).*