window.cipher = {
  encode: (offSet,string)=>{
    let show = '';
    let asciiCode;
    let convertMessage;

    //let convertMessage = 0;

    for (let i=0; i < string.length; i++){

    asciiCode=string.charCodeAt(i);

  //mayusculas
    if (asciiCode >=65 && asciiCode <=90){
      convertMessage = ((asciiCode - 65 + offSet) %26+65);
      show+=String.fromCharCode(convertMessage);

  //minusculas
    }else if (asciiCode >=97 && asciiCode <=122) {
      convertMessage = (asciiCode - 97 + offSet)%26+97;
      show+=String.fromCharCode(convertMessage);
  // numeros
    }else if (asciiCode >=48 && asciiCode <=57) {
      convertMessage = (asciiCode -48 + offSet)%10+48;
      show+=String.fromCharCode(convertMessage);
  //otro caracter
    }else{
      show+=String.fromCharCode(asciiCode);
    }
    }
    return show;
  },

  decode: (offSet,string)=>{
    let show = '';
    let convertMessage = 0;
    let asciiCode;

    for (let i=0; i < string.length; i++){

    asciiCode=string.charCodeAt(i);

   //mayusculas
    if (asciiCode >=65 && asciiCode <=90){

      convertMessage = (asciiCode - 90 - offSet) % 26 + 90;


      show+=String.fromCharCode(convertMessage);


  //minusculas
    }else if (asciiCode >=97 && asciiCode <=122) {

      convertMessage = (asciiCode - 122 - offSet) % 26 + 122;


      show+=String.fromCharCode(convertMessage);

    }else if (asciiCode >=48 && asciiCode <=57) {
      convertMessage = (asciiCode -57 - offSet)%10+57;
      show+=String.fromCharCode(convertMessage);

  //otro caracter
    }else{
      show+=String.fromCharCode(asciiCode);
    }

    }
    return show;
  },


  createCipherWithOffset: (offSet)=> {
      let objectCipher = {
        encode: (string) =>
          cipher.encode(offSet,string),
        decode: (string) =>
          cipher.decode(offSet,string)

      };

     return objectCipher;
  }
};
