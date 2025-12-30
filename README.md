# 🚀 Redline Portfolio | React + Vite

Redline Portfolio es un sistema de portafolio web moderno, **modular y altamente escalable** desarrollado de forma colaborativa. El diseño sigue una estética de "Glassmorphism" con un enfoque centrado en la experiencia del usuario (UX) y el rendimiento. 

Este proyecto fue concebido para que la actualización de contenido (proyectos, experiencias y habilidades) sea tan sencilla como modificar un archivo JSON, sin necesidad de reescribir componentes de React.

---

## ✨ Características Principales

* **Arquitectura Escalable:** Estructura de datos desacoplada de la interfaz para facilitar la adición de contenido.
* **Diseño Moderno:** Implementación de efectos de desenfoque, gradientes y tipografía cuidada.
* **Totalmente Responsive:** Diseño adaptado meticulosamente para dispositivos móviles y tablets.
* **Multilingüe:** Soporte nativo para internacionalización (Español/Inglés) mediante archivos JSON locales.

---

## 🛠️ Stack Tecnológico

| Capa | Tecnologías |
| :--- | :--- |
| **Frontend** | React.js, Vite |
| **Estilos** | CSS3 (Flexbox, Grid, Custom Properties) |
| **Lógica** | JavaScript (ES6+) |
| **Iconos** | SVGRepo - Lawnicons Line Brand Icons Collection|

---

#

El corazón de la escalabilidad reside en la carpeta `/src/data/`, donde se gestiona el contenido dinámico:

```text

 src/
 ├── components/    # Componentes UI reutilizables (Botones, Cards, Navbar).
 ├── contexts/      # Gestión de estado global mediante Context API (Idioma y navegación).
 │    ├── languageContext.jsx   # Lógica para el cambio dinámico entre Español/Inglés.
 │    └── ActiveSectionContext.jsx # Rastreo de la sección activa para el scroll.
 ├── data/          # El "cerebro" del portfolio. Contiene los JSON con toda la información.
 ├── sections/      # Componentes de alto nivel que representan cada bloque de la web.
 │    ├── About, Experience, Projects... # Módulos independientes y fáciles de mantener.
 ├── styles/        # Archivos de estilos globales y configuraciones de SCSS/CSS.
 ├── App.jsx        # Punto de entrada principal y orquestador de secciones.
 └── main.jsx       # Renderizado de la aplicación en el DOM.
```

---

## 🚀 Instalación y Uso Local

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

### 1. Clonar el repositorio

```bash
git clone https://github.com/AlanPLC/Portfolio2025.git
cd Portfolio2025
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Iniciar servidor de desarrollo

```bash
npm run dev
```

El proyecto estará disponible en `http://localhost:5173` (puerto por defecto de Vite).

---

## 🤝 Colaboradores

Este proyecto es el resultado del trabajo conjunto de:

* **Alan Carrizo** – [@AlanPLC](https://github.com/AlanPLC)
* **Simón Santarelli** – [@saiisanta](https://github.com/saiisanta)

---

## 🧩 Créditos e Iconografía

* **Iconos:** Obtenidos de [SVGRepo](https://www.svgrepo.com/)
* **Colección:** Lawnicons Line Brand Icons
* **Licencia:** Sujeto a los términos específicos de la colección según SVGRepo

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.

---

## 🌟 Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar el proyecto:

1. Haz un fork del repositorio
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Añade nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

---

**¿Te gusta el proyecto? ¡Dale una ⭐ en GitHub!**
