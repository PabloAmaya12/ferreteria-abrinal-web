# Guía segura para separar `v2-laravel` a un nuevo repositorio

Objetivo: mover `v2-laravel` a un repositorio independiente **con historial de Git**, sin perder información.

---

## ¿La guía que te pasaron es correcta?

Sí, la idea base es correcta: usar `git filter-repo` para conservar historial de una subcarpeta.

Pero tiene 2 riesgos:

1. Ejecutarla sobre tu clon de trabajo puede reescribir historial de forma peligrosa.
2. Asume que la rama principal se llama `main` (puede ser `master` u otra).

Por eso, esta guía usa una **copia temporal** del repo para extraer `v2-laravel` con seguridad.

---

## Requisitos previos

1. Tener cambios guardados en el repo original:
   - Haz commit de lo pendiente o guarda un backup.
2. Tener `git filter-repo` instalado:

```bash
pip install git-filter-repo
```

Verificación:

```bash
git filter-repo --help
```

---

## Paso a paso (método recomendado y seguro)

> Ejecuta estos comandos desde la carpeta **padre** de tu repo actual.

### 1) Ir al directorio padre

```bash
cd C:\Users\amaya\OneDrive\Documentos
```

**Qué hace**
- `cd`: cambia de directorio.

### 2) Crear una copia temporal del repositorio

```bash
git clone --no-local ferreteria-abrinal-web ferreteria-abrinal-web-v2-extract
```

**Qué hace**
- `git clone`: clona el repositorio.
- `--no-local`: fuerza una copia real de objetos (más seguro para reescrituras de historial).
- `ferreteria-abrinal-web`: repositorio origen local.
- `ferreteria-abrinal-web-v2-extract`: nombre de la copia temporal.

### 3) Entrar a la copia temporal

```bash
cd ferreteria-abrinal-web-v2-extract
```

### 4) (Opcional) Crear rama de trabajo para extracción

```bash
git switch -c extract-v2-laravel
```

**Qué hace**
- `git switch -c`: crea y cambia a una rama nueva.
- `extract-v2-laravel`: nombre de rama temporal.

### 5) Filtrar historial para dejar solo `v2-laravel`

```bash
git filter-repo --path v2-laravel/ --path-rename v2-laravel/:
```

**Qué hace**
- `git filter-repo`: reescribe historial.
- `--path v2-laravel/`: conserva solo esa carpeta en todos los commits.
- `--path-rename v2-laravel/:`: quita ese prefijo para que su contenido quede en la raíz del nuevo repo.

> Nota: en clon temporal normalmente no necesitas `--force`.

### 6) Apuntar al nuevo repositorio remoto (GitHub vacío)

Primero crea en GitHub un repo vacío (sin README, sin .gitignore).

Luego:

```bash
git remote remove origin
git remote add origin https://github.com/TU_USUARIO/ferreteria-abrinal-v2.git
```

**Qué hace**
- `git remote remove origin`: elimina enlace al remoto anterior.
- `git remote add origin ...`: agrega el nuevo remoto destino.

### 7) Subir al nuevo repositorio

Si quieres publicar la rama actual como `main`:

```bash
git push -u origin HEAD:main
```

**Qué hace**
- `git push`: sube commits al remoto.
- `-u`: deja configurado upstream para futuros push/pull.
- `HEAD:main`: publica tu rama actual como rama `main` en remoto.

---

## Limpieza en el repositorio original (monorepo)

Vuelve a tu repo original y elimina la subcarpeta `v2-laravel` para que quede separada.

### 8) Ir al repo original

```bash
cd C:\Users\amaya\OneDrive\Documentos\ferreteria-abrinal-web
```

### 9) Cambiar a tu rama principal real

```bash
git branch
```

Luego cambia a la principal (ejemplo `main`):

```bash
git switch main
git pull
```

**Qué hace**
- `git branch`: lista ramas locales.
- `git switch main`: cambia a rama `main`.
- `git pull`: trae últimos cambios del remoto.

### 10) Eliminar carpeta del monorepo y confirmar

```bash
git rm -r v2-laravel
git commit -m "Remove v2-laravel (moved to standalone repository)"
git push
```

**Qué hace**
- `git rm -r`: borra carpeta del control de versiones (recursivo).
- `git commit -m`: guarda el cambio localmente.
- `git push`: publica el commit en remoto.

---

## Validación final (recomendado)

1. Nuevo repo (`ferreteria-abrinal-v2`) contiene solo proyecto Laravel en raíz.
2. Historial del nuevo repo incluye commits antiguos de `v2-laravel`.
3. Repo original conserva `frontend` y `backend`, sin `v2-laravel`.

---

## Errores comunes y solución rápida

- **`git filter-repo: command not found`**
  - Instala con `pip install git-filter-repo`.

- **La rama principal no es `main`**
  - Usa `git branch` para ver nombre real (`main`, `master`, etc).

- **Empujaste a un repo GitHub con README inicial**
  - Mejor crear el remoto vacío. Si ya existe contenido, haz pull/rebase antes de push.

- **Quiero máxima seguridad**
  - Antes de extraer, crea ZIP del repo original o un commit/tag de respaldo.

