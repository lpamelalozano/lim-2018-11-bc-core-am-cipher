# Cipher

## Objetivo

Cipher es tu mensajero confidencial. Una herramienta que permitirá a los usuarios proteger la privacidad de sus mensajes, al contar con una plataforma capaz de cifrar y descifrar texto mediante la sustitución alfabética simple.

## Introducción

No, no estamos hablando de un cifrado digital que no pueda romper la NSA, vamos a algo mucho más simple y es la posibilidad de enviar mensajes mediante WhatsApp u otra red social evitando
que nadie, que no queramos, pueda leer.

Cipher va dirigido a los jóvenes que tienen un particular interés de comunicarse mediante textos cifrados, ya sea para organizar un evento, o simplemente para mantener la privacidad del contenido de los mismos, para posteriormente ser enviados al destinatario con la seguridad de que sólo este podrá conocer el mensaje oculto a través de un código secreto.

Esta aplicación web es la solución al problema de aquellos que sientan preocupación por el hecho de que un tercero pueda leer sus conversaciones privadas, ya que al cifrar el mensaje, en pantalla solo aparecerá una sucesión de números o caracteres sin sentido, y para poder interpretar el mensaje recibido (descifrado) será necesario conocer el código secreto.

![chat-friends](https://foroalfa.org/imagenes/ilustraciones/shutterstock_222136330.jpg)

Principales usuarios:
  - Jóvenes

Objetivo del usuario:
  - Permita cifrar y descifrar textos para luego ser enviados.
  - Contar con una interfaz agradable, práctico y fácil de usar.
  - Que la funcionalidad sea del 100%
  - Fácil. No hay nada donde tenga que iniciar sesión, y no hay ningún servicio nuevo al que tengan que unirse sus amigos.

## Decisiones de diseño
Para laptops, computadoras:

![for-laptopss](https://i.ibb.co/zFF7qpr/for-laptop.png)

Para celulares:

![caeser-cipher](https://i.ibb.co/mNKk4h4/C-Users-Pamela-Documents-javascript-lim-2018-11-bc-core-am-cipher-src-index-html-i-Phone-6-7-8-1.png)

Se utilizó la siguiente paleta de colores:
![palette-colours](https://i.ibb.co/mTKy9Nm/palette-colours.png)

Cada color provoca en las personas unas sensaciones determinadas, asociadas a distintas emociones con la que se quiere llegar al usuario, influyendo en la manera en la que se sienten y comportan en la web, con el objetivo de presentar una interfaz amigable y juvenil.


## HTML

En relacion al HTML, manejé una estructura básica de entrada y salida de texto, contiene 2 input y 4 botones.

- Input 'offset'--> Contiene el valor del numero de desplazamiento offset "entered text" W--> Contiene el valor de la entrada de texto 'enter-text'--> Contiene el valor de la salida de texto

- Botón 'cifrar' --> Para invocar a la funcion del cifrado
- Botón 'descifrar' para invocar a la funcion del descifrado.
- Botón 'limpiar-o-reset' --> Para borrar el texto de los input.
- Botón 'copiar' --> Para copiar el texto del resultado ('result')

## JS

Contiene la funcion del cifrado y el descifrado y los eventos DOM,

- Funciones: . Valor de entrada (enter-text) y como valor del retorno (result). Se utilizó la herramienta del bucle para el recorrido de la cadena. Se utilizó una fórmula matemática para aplicar el 'Crifrado de cesar' ((x- 65 + offSet) % 26 + 65). Esta realizado en funcion al ASCCI

## CSS

Basado en un diseño práctico, interfaz fresca, juvenil y amigable.

Se utilizo responsive para equipos moviles, teniendo en cuenta que el aplicativo web sera usada en celulares.

## Test

Para se utilizó el Node JS, implemantando los posibles escenarios en base a la usuabilidad del aplicativo web.

Obteniendo el siguiente resultado:
![test](https://i.ibb.co/PNtMd1d/test-node.png)

## Instalación / Uso

Puedes acceder a la aplicación desde tu laptop / tablet o celular desde el siguiente link:
https://lpamelalozano.github.io/lim-2018-11-bc-core-am-cipher/src/

Te invito a seguir los siguientes pasos para mejorar tu experiencia utilizando Cipher:

1- Ingresa tu mensaje :)
2- Crea / Ingresa tu Clave secreta: Esta será la llave necesaria para que tu destinatario pueda descifrar el contenido e interprete tu mensaje oculto!
3- Presiona cifrar y luego envía el mensaje codificado a tus amigos!

Recuerda que para descifrarlo, tendrán que utilizar la misma clave utilizada para el cifrado.
¡Que te diviertas!  
