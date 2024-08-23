# Encriptador de Texto

Este proyecto, resultado de los cursos vistos en **Alura Latam** como parte del programa `Oracle Next Education` es una aplicación web simple, que permite encriptar y desencriptar textos utilizando un método básico de sustitución de caracteres. El objetivo principal es transformar las vocales del texto introducido a una serie de claves específicas para encriptar el mensaje.

## Características

- **Encriptación**: Convierte vocales en secuencias de texto según la siguiente clave:
  - `e` -> `enter`
  - `i` -> `imes`
  - `a` -> `ai`
  - `o` -> `ober`
  - `u` -> `ufat`

- **Desencriptación**: Reconvierte las secuencias de texto a las vocales originales.

- **Copiar al portapapeles**: Permite copiar el texto encriptado o desencriptado al portapapeles.

## Tecnologías Utilizadas

- **HTML5**: Estructura de la página web.
- **CSS3**: Estilos para la interfaz de usuario.
- **JavaScript**: Lógica de encriptación, desencriptación y funcionalidad de copiado.

## Cómo Usar

1. **Encriptar un mensaje**:
   - Introduce el texto en el área de texto principal.
   - Haz clic en el botón **Encriptar** para transformar el texto según la clave.

2. **Desencriptar un mensaje**:
   - Introduce el texto encriptado en el área de texto principal.
   - Haz clic en el botón **Desencriptar** para recuperar el texto original.

3. **Copiar texto al portapapeles**:
   - Después de encriptar o desencriptar un mensaje, haz clic en el botón **Copiar** para copiar el resultado al portapapeles.

## Instalación

No se requiere instalación. Simplemente clona el repositorio y abre el archivo `index.html` en tu navegador web.

```bash
git clone https://github.com/alexisarango2144/encriptador-de-texto.git