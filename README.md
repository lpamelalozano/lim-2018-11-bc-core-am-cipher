# Hidden

## Objetivo

Hidden es tu mensajero confidencial. Una herramienta que permitirá a los usuarios proteger la privacidad de sus mensajes, al contar con una plataforma capaz de cifrar y descifrar texto mediante la sustitución alfabética simple.

## Introducción
No, no estamos hablando de un cifrado digital que no pueda romper la NSA, vamos a algo mucho más simple y es la posibilidad de enviar mensajes mediante WhatsApp u otra red social evitando que nadie que no queramos, pueda leer.

Hidden va dirigido a los jóvenes que tienen un particular interés de comunicarse mediante textos cifrados, ya sea para organizar un evento, o simplemente para proteger su privacidad. Esta aplicación web es la solución al problema de aquellos que sientan preocupación por el hecho de que un tercero pueda leer sus conversaciones privadas, ya que al cifrar el mensaje, en pantalla solo aparecerá una sucesión de números o caracteres sin sentido, y para poder interpretarlo (descifrarlo) será necesario conocer el código secreto.

![chat-friends](https://cdn.dribbble.com/users/810959/screenshots/3912934/secure-messaging-hero-dribbble.jpg)

Principales usuarios:
  - Jóvenes

Objetivo del usuario:
  - Permita cifrar y descifrar textos para luego ser enviados.
  - Contar con una interfaz agradable, práctico y fácil de usar.
  - Que la funcionalidad sea del 100%
  - Fácil. No hay nada donde tenga que iniciar sesión, y no hay ningún servicio nuevo al que tengan que unirse sus amigos.

## Proceso de diseño
### Descubrimiento e investigación
![descubrimiento-e-investigacion](https://i.ibb.co/1R2n00V/Descubrimiento-e-investigaci-n-02.png)

Dado que la información que se envía a través de Internet en algunos casos puede ser accedida por intrusos, el cifrado de datos es una alternativa para mantener la privacidad. Por lo tanto, este concepto puede aplicarse en las distintas actividades que un usuario realiza todos los días. Cuando se navega por Internet, algunos sitios web ofrecen una conexión cifrada, de tal modo que los datos que se envían desde y hacia el sitio se encuentran cifrados, y son ilegibles para intrusos que puedan estar escuchando la comunicación. Sin embargo, los sitios que proveen servicios de correo electrónico, mensajería instantánea, o cualquier otro tipo de comunicación, sí tienen acceso al contenido de los mensajes enviados. Por eso, una medida adicional que los usuarios pueden tomar para mantener su privacidad, consiste en cifrar los mensajes por su cuenta. Vale la pena aclarar que, para que esto último sea de utilidad, el receptor deberá estar en condiciones de descifrar el mensaje recibido, por ejemplo, a través de la clave.

Cifrando tus mensajes, evita otro tipo de ataques como el robo de identidad, fraudes bancarios, además de brindar un mecanismo de protección ante el robo o pérdida de dispositivos con información sensible.

### Síntesis y definición
![sintesis-y-definicion](https://i.ibb.co/QKbbd6J/sintesis-y-definicion.png)

#### Problema a resolver: Vulnerabilidad de mensajes privados entre jóvenes

En esta fase usamos los datos coleccionados en la fase de investigación y descubrimiento buscando tendencias e insights valiosos para el desarrollo de Hidden App. Entendiendo los deseos y necesidades de nuestros usuarios, se desarrolló una plataforma simple y didactica, en la cual para cifrar un texto simplemente se tiene que ingresar el mensaje que deseas cifrar y una contraseña, luego aparecerá el texto cifrado disponible para copiar o enviarlo mediante WhatsApp.
Este resultado sirve para envíar mensajes con contenido delicado o guardarlo en un documento de texto en donde todos los datos importantes están cifrados. Ofrenciendo la seguridad de que nadie que no sepa la contraseña podrá leerlo y la comodidad de tener un pequeño código que podemos pegar donde sea y descifrar desde la plataforma de Hidden App.

![Problemática](https://cdn.dribbble.com/users/2424870/screenshots/4879139/_________-1.jpg)

### Ideación
¡Se utilizaron sketches, y fluyeron las ideas! Se tuvo como propósito construir una web con un diseño práctico, interfaz juvenil, didáctica, fácil de usar y amigable, la cual pueda cifrar/descifrar texto con fin de cifrar contenido delicado y posteriormente envíar el resultado a sus contactos con total seguridad, utilizando una clave secreta.

![Brainstorming](https://www.brooksbell.com/wp-content/uploads/2015/06/brainstorm_600x400.jpg)

### Prototipado

![Prototipado](https://i.ibb.co/BjSBkrK/prototipado.png)

Se elaboró un prototipo práctico, se tuvo como finalidad cumplir con los siguientes objetivos:

- Permitir al usuario cifrar y descifrar textos para luego ser enviados.
- Contar con una interfaz agradable, práctica y fácil de usar.
- Que la funcionalidad sea del 100%
- Fácil. No hay nada donde tenga que iniciar sesión, y no hay ningún servicio nuevo al que tengan que unirse sus amigos.
- Didáctica
- Indicaciones de Uso
- Responsive

#### Diseño final
Para laptops, computadoras:

![for-laptops](https://i.ibb.co/BC6p8D3/hidden-app.png)

Para celulares:

![for-phone](https://i.ibb.co/4pLWLyv/Iphone-6-hidden.png)

Se utilizó responsive para dispositivos móviles, cuenta con un botón de refrescar, copiar y envíar por WhatsApp que es el servicio de mensajería más común y usado actualmente entre los jóvenes, el cual envía el mensaje cifrado adjuntando el link de Hidden App, para que la persona que lo reciba, ingrese a la aplicación y pueda descifrar el contenido ingresando la clave secreta.

![responsive](https://i.ibb.co/TBScsCg/Responsive-i-Phone-6.png)

Se empleó la siguiente paleta de colores:

![palette-colours](https://i.ibb.co/mTKy9Nm/palette-colours.png)

Cada color provoca en las personas unas sensaciones determinadas, asociadas a distintas emociones con la que se quiere llegar al usuario, influyendo en la manera en la que se sienten y comportan en la web, con el objetivo de presentar una interfaz amigable y juvenil.


## HTML

En relacion al HTML, manejé una estructura básica de entrada y salida de texto, contiene 2 input y 6 botones.

> **Input 'enter-text'** Contiene el valor de la entrada de texto

    <form class="input-text">
      <textarea id ="enter-text" placeholder="Ingresa tu mensaje"
      rows="10" cols="100"></textarea>
    </form>

> **input-offset** Contiene el valor de la entrada de texto

    <div id="input-offset">
        <label for="offset">Ingresa tu clave secreta</label>
        <input type="number" min="0" id ="offset">
    </div>

> **'resultt'** Contiene el valor de la salida de texto

        <form class="input-text">
          <textarea id ="result" placeholder="Aqui aparecerá tu texto cifrado/descifrado"
          rows="10" cols="100"></textarea>
        </form>

> **Boton 'Cifrar'** Para invocar a la función encode

    <button id="encode"> <img src="../imagenes/candado.png" alt = "" class="img-encode-and-decode">CIFRAR</button>

> **Boton 'Descifrar'** Para invocar a la función decode

    <button  id="decode"> <img src="../imagenes/candado2.png" alt = "" class="img-encode-and-decode">DESCIFRAR</button>

> Botones limpiar, copiar y compartir por WhatsApp**  
- Boton 'Limpiar' Para borrar el texto de los input
- Boton 'Copiar' Para copiar el texto del resultado ('result')
- Boton 'WhatsApp' Para copiar el texto del resultado ('result') y enviarlo por WhatsApp al contacto que desees


    <button id="clean" ></button>
    <button id="copy" ></button>
    <button type="button" id="btn-whatsapp" class="icons"></button>


## JS

Contiene la funcion del cifrado y el descifrado y los eventos DOM

- Funciones:
Encode y Decode: Se considera valor de entrada (enter-text) y como valor del retorno (result). Se utilizó la herramienta del bucle para el recorrido de la cadena. Se utilizó una fórmula matemática para aplicar el 'Crifrado de cesar' ((x- 65 + offSet) % 26 + 65). Esta realizado en funcion al ASCCI

      encode: (offSet, string) => {
        let show = '';
        let asciiCode;
        let convertMessage;

        //let convertMessage = 0;
        for (let i=0; i < string.length; i++) {
            asciiCode=string.charCodeAt(i);
            //mayusculas
            if (asciiCode >= 65 && asciiCode <= 90) {
                convertMessage = ((asciiCode - 65 + offSet) % 26 + 65);
                show+=String.fromCharCode(convertMessage);
            }
            //minusculas
            else if (asciiCode >= 97 && asciiCode <= 122) {
                      convertMessage = ((asciiCode - 97 + offSet) % 26 + 97);
                      show+=String.fromCharCode(convertMessage);
            }
            // numeros
            else if (asciiCode >= 48 && asciiCode <= 57) {
                      convertMessage = ((asciiCode - 48 + offSet) % 10 + 48);
                      show+=String.fromCharCode(convertMessage);
            }
            //otro caracter
            else {
              show+=String.fromCharCode(asciiCode);
            }
        }
        return show;
      },

      decode: (offSet,string) => {
        let show = '';
        let convertMessage = 0;
        let asciiCode;

        for (let i=0; i < string.length; i++) {
            asciiCode=string.charCodeAt(i);

            if (asciiCode >= 65 && asciiCode <= 90) {
                convertMessage = (asciiCode - 90 - offSet) % 26 + 90;
                show+=String.fromCharCode(convertMessage);
            }
            else if (asciiCode >= 97 && asciiCode <= 122) {
                    convertMessage = (asciiCode - 122 - offSet) % 26 + 122;
                    show+=String.fromCharCode(convertMessage);
            }
            else if (asciiCode >= 48 && asciiCode <= 57) {
                    convertMessage = (asciiCode - 57 - offSet) % 10 + 57;
                    show+=String.fromCharCode(convertMessage);
            }
            else {
              show+=String.fromCharCode(asciiCode);
            }
        }
        return show;
      },


## CSS

Basado en un diseño práctico, interfaz fresca, juvenil y amigable.

Se utilizo responsive para equipos moviles, teniendo en cuenta que el aplicativo web sera usada en celulares.

## Test

Para se utilizó el Node JS, implementando los posibles escenarios en base a la usuabilidad del aplicativo web.

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
