# Ferretería Abrinal v2 — Laravel 12 + Vue 3 + Inertia

Versión robusta del sitio web de Ferretería Abrinal, construida con **Laravel 12**, **Vue 3**, **Inertia.js** y **Tailwind CSS v4**.

## Requisitos

- PHP 8.2+
- Composer
- Node.js 18+
- MySQL 8+ (o MariaDB 10.6+)

## Instalación

```bash
# 1. Ir al directorio del proyecto
cd v2-laravel

# 2. Instalar dependencias PHP
composer install

# 3. Instalar dependencias JS
npm install

# 4. Copiar el archivo de entorno
cp .env.example .env

# 5. Generar la llave de la aplicación
php artisan key:generate

# 6. Crear la base de datos (MySQL)
#    Crear manualmente la BD "ferreteria_abrinal" y configurar .env

# 7. Ejecutar migraciones y seeders
php artisan migrate --seed

# 8. Levantar el servidor de desarrollo
#    Terminal 1:
php artisan serve

#    Terminal 2:
npm run dev
```

## Estructura del proyecto

```
v2-laravel/
├── app/
│   ├── Http/Controllers/     # Controladores Inertia
│   ├── Http/Middleware/       # HandleInertiaRequests
│   └── Models/               # Brand, Category
├── database/
│   ├── migrations/            # Tablas: categories, brands
│   └── seeders/               # 67 marcas + 17 categorías pre-cargadas
├── resources/
│   ├── css/app.css            # Tailwind con paleta de colores personalizada
│   ├── js/
│   │   ├── app.js             # Entry point Inertia + Vue
│   │   ├── Components/        # Header, Footer
│   │   ├── Layouts/           # AppLayout
│   │   └── Pages/             # Home, Catalog, Contact
│   └── views/app.blade.php    # Shell HTML
├── routes/web.php             # 3 rutas: /, /catalogo, /contacto
└── vite.config.js             # Vite + Vue + Tailwind
```

## Paleta de colores

| Color    | Hex       | Uso                              |
|----------|-----------|----------------------------------|
| Primary  | `#0067ff` | Botones, links, acentos          |
| Yellow   | `#feb60d` | Estadísticas, badges             |
| Purple   | `#9900ff` | Gradientes, acentos secundarios  |
| Iris     | `#01b5c5` | Gradientes, highlights           |
| Heading  | `#181a1e` | Títulos, footer background       |
| Text     | `#4e545f` | Texto general                    |

## Tecnologías

- **Backend**: Laravel 12, Eloquent ORM, MySQL
- **Frontend**: Vue 3 (Composition API), Inertia.js v2
- **Estilos**: Tailwind CSS v4, Manrope font
- **Build**: Vite 6
