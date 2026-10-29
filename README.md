# Widget: Avance de Obra 3D para ArcGIS Experience Builder

Widget personalizado para **ArcGIS Experience Builder (v1.17 - v1.21)** diseñado para el seguimiento 4D y control de avance de obra en escenas 3D (WebScene).

## 🚀 Registro en ArcGIS Enterprise Portal o ArcGIS Online

Para agregar este widget a tu organización de ArcGIS:

1. Inicia sesión en **ArcGIS Enterprise Portal** o **ArcGIS Online**.
2. Ve a la pestaña **Contenido** ➔ **Nuevo elemento** ➔ **Aplicación** ➔ **Widget de Experience Builder**.
3. Pega la URL del manifiesto público alojado en GitHub Pages:

```text
https://dureyes97.github.io/avance-obra-3d/manifest.json
```

4. Haz clic en **Guardar**. El widget quedará registrado y disponible en el constructor de Experience Builder para todos los usuarios de la organización.

---

## 📁 Estructura del Widget

```text
avance-obra-3d/
├── manifest.json              # Manifiesto y metadatos oficiales del widget
├── config.json                # Configuración inicial del widget
├── icon.svg                   # Ícono oficial para la paleta de herramientas
├── dist/                      # Código JavaScript compilado para producción
│   ├── runtime/
│   │   ├── widget.js          # Lógica principal del widget en ejecución
│   │   └── translations/      # Textos localizados
│   └── setting/
│       ├── setting.js         # Panel de configuración en Experience Builder
│       └── translations/      # Textos del panel de configuración
├── src/                       # Código fuente original en TypeScript / React
└── .nojekyll                  # Configuración para servir archivos estáticos en GitHub Pages
```

---

## 🛠️ Tecnologías y Compatibilidad
* **ArcGIS Maps SDK for JavaScript**: 4.31+
* **ArcGIS Experience Builder**: 1.17 a 1.21
* **UI**: React 18, Jimu Core, Calcite Design System
* **Autor**: Esri Colombia / EMB
