window.cipher = {
  encode: (offSet,string)=>{
    let show = '';

    //let convertedLetter = 0;

    for (let i=0; i < string.length; i++){

    const asciiCode=string.charCodeAt(i);

  //mayusculas
    if (asciiCode >=65 && asciiCode <=90){
      convertedLetter= ((asciiCode - 65 + offSet)%26+65);
      show+=String.fromCharCode(convertedLetter);

  //minusculas
    }else if (asciiCode >=97 && asciiCode <=122) {
      convertedLetter = (asciiCode - 97 + offSet)%26+97;
      show+=String.fromCharCode(convertedLetter);

  //otro caracter
    }else{
      show+=String.fromCharCode(asciiCode);
    }
    }
    return show;
  },

  decode: (offSet,string)=>{
    let show = '';
    let convertedLetter = 0;

    for (let i=0; i < string.length; i++){

    const asciiCode=string.charCodeAt(i);

   //mayusculas
    if (asciiCode >=65 && asciiCode <=90){

      convertedLetter = (asciiCode - 90 - offSet) % 26 + 90;


      show+=String.fromCharCode(convertedLetter);


  //minusculas
    }else if (asciiCode >=97 && asciiCode <=122) {

      convertedLetter = (asciiCode - 122 - offSet) % 26 + 122;


      show+=String.fromCharCode(convertedLetter);


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
