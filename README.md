# Backend Sequelize

## 🚀 Descripción

Proyecto de backend construido con **Node.js**, **Express** y **Sequelize**. Está enfocado en mostrar un enfoque limpio y modular para administrar datos en bases de datos SQL (como PostgreSQL, MySQL o SQLite), utilizando el patrón **Repository** y **TypeScript**.

**Puntos clave:**
- Organización mediante modelo-repositorio-controlador.
- Se usa el patrón *Repository* para separar la lógica de acceso a datos de los modelos y controladores, lo que mejora la mantenibilidad del código.
- Soporta asociaciones entre modelos, migraciones, hooks y transacciones con Sequelize v6 ([documentación](https://sequelize.org/docs/v6/)).

---

## 📁 Estructura del proyecto

```text
.
├── src/
│   ├── models/           # definición de modelos con Sequelize
│   ├── repositories/     # clases de acceso a datos (repository pattern)
│   ├── controllers/      # lógica de negocio y endpoints
│   ├── routes/           # definición de rutas HTTP
│   ├── migrations/       # archivos para esquema de base de datos
│   ├── seeders/          # datos de prueba
│   └── config/           # configuración de conexión, variables de entorno, etc.
├── .sequelizerc
├── config.js/.ts
├── package.json
└── tsconfig.json
```
---

## ⚙️ Instalación y uso
- Clona el repositorio:

```bash
git clone https://github.com/muke78/Backend_Sequelize.git
cd Backend_Sequelize
```
- Instala dependencias:
```bash
  pnpm i
```
- Levanta el servidor en modo desarrollo:
```bash
pnpm dev
```

---

## ⚖️ Patrones de desarrollo utilizados
- Repository pattern: abstrae la lógica de operaciones CRUD del acceso directo a los modelos.
- Hooks de Sequelize: lógica que se ejecuta antes o después de eventos como create, update, destroy.
- Transacciones: operaciones atómicas con manejo de errores.
- Relaciones entre modelos: uso de asociaciones hasMany, belongsTo, many-to-many.
---

## 🧑‍💻 Ejemplo de uso
```js
// src/controllers/UserController.ts

import { Request, Response } from 'express';
import { UserRepository } from '../repositories/UserRepository';

export const getUsers = async (req: Request, res: Response) => {
  const repo = new UserRepository();
  const users = await repo.findAll({ include: ['profile', 'roles'] });
  res.json(users);
};

```


