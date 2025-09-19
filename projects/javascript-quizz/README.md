# 🧠 JavaScript Quiz App

Una aplicación interactiva de quiz para evaluar conocimientos de JavaScript, construida con React y TypeScript. Ideal para desarrolladores que quieren poner a prueba su comprensión de conceptos avanzados de JavaScript.

## 🚀 Demo

[Ver Demo en Vivo](tu-url-de-deploy) <!-- Actualiza con tu URL de deployment -->

## 📋 Características

- ✅ **50 preguntas** de JavaScript con código real
- 🎯 **Feedback inmediato** - respuestas correctas/incorrectas con colores
- 🔄 **Navegación fluida** entre preguntas
- 💾 **Estado persistente** - conserva progreso al recargar
- 🎲 **Preguntas aleatorias** en cada sesión
- 📱 **Diseño responsive** para móviles y desktop
- 🌙 **Tema oscuro** para mejor experiencia visual
- 🎨 **Sintaxis highlighting** para código JavaScript

## 🛠️ Tecnologías Utilizadas

### Frontend

- **React 18** - Biblioteca principal para UI
- **TypeScript** - Tipado estático para mejor desarrollo
- **Vite** - Build tool y dev server ultra-rápido
- **Material-UI (MUI)** - Componentes y sistema de diseño

### Estado y Datos

- **Zustand** - Gestión de estado global minimalista
- **Zustand Persist** - Persistencia automática del estado
- **JSON local** - Base de datos de preguntas

### Estilo y UX

- **react-syntax-highlighter** - Highlighting de código JavaScript
- **MUI Icons** - Iconografía consistente
- **CSS-in-JS** - Estilos con sx prop de MUI

### Herramientas de Desarrollo

- **ESLint** - Linting y calidad de código
- **pnpm** - Gestor de paquetes eficiente

## 🏗️ Arquitectura

```
src/
├── components/          # Componentes React
├── store/              # Estado global (Zustand)
├── types.d.ts          # Definiciones de TypeScript
├── hooks/              # Hooks personalizados
└── assets/             # Recursos estáticos
```

### Patrones Implementados

- **Custom Hooks** para lógica reutilizable
- **TypeScript Interfaces** para tipado fuerte
- **Immutable Updates** con structuredClone
- **Component Composition** para reutilización
- **State Management** centralizado con Zustand

## 🤝 Contribuir

1. Fork el proyecto
2. Crea tu rama de feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 👨‍💻 Autor

**BeruzDev** - [GitHub](https://github.com/BeruzDev)

---

⭐ Si te gustó este proyecto, ¡dale una estrella en GitHub!
