window.cipher = {

  encode: (offSet, string) => {
    let key = parseInt(offSet);
    let convertMessage = ''; 
    let result = '';  
    key = offSet % 26;
    key2 = offSet %10;
    
    for (let i = 0; i < string.length; i++) {  
      let asciiCharacter = string.charCodeAt(i);
      if (asciiCharacter >= 65 && asciiCharacter <= 90) { 
        convertMessage = (asciiCharacter - 65 + key) % 26 + 65;
      } else if (asciiCharacter >= 97 && asciiCharacter <= 122) { 
        convertMessage = (asciiCharacter - 97 + key) % 26 + 97;
      } else if (asciiCharacter >= 48 && asciiCharacter <= 57) { 
      convertMessage = (asciiCharacter - 48 + key2) % 10 + 48;
    }else {
        convertMessage = asciiCharacter; 
      } result += String.fromCharCode(convertMessage); 
    }
    return result;  
  },

  ///METODO DESCIFRAR: Declarando función para descifrar una cadena de texto
  decode: (offSet, string) => {
    let key = parseInt(offSet); 
    let convertMessage = ''; 
    let result = ''; 
    key = offSet % 26; 
    for (let i = 0; i < string.length; i++) {  
      let asciiCharacter = string.charCodeAt(i);
      if (asciiCharacter >= 65 && asciiCharacter <= 90) { 
        convertMessage = (asciiCharacter - 65 - key + 26 * 2) % 26 + 65;
      } else if (asciiCharacter >= 97 && asciiCharacter <= 122) {
        convertMessage = (asciiCharacter - 97 - key + 26 * 2) % 26 + 97;
       } else if (asciiCharacter >= 48 && asciiCharacter <= 57) {
          convertMessage = (asciiCharacter - 48 - key2 + 10 * 2) % 10 + 48;
      } else {
        convertMessage = asciiCharacter; 
      } result += String.fromCharCode(convertMessage); 
    }
    return result; 
  },

createCipherWithoffSet: (offSet) => {
  let objectCipher = {
    encode: (string) =>
      cipher.encode(offSet, string),
    decode: (string) =>
      cipher.decode(offSet, string)
  };

  return objectCipher;
}
};
