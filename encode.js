const alphabet = [
    'A','B','C','D','E','F',
    'G','H','I','J','K','L',
    'M','N','O','P','Q','R',
    'S','T','U','V','W','X',
    'Y','Z'
  ];

var flag = "pig";
var keys = 1;
function setflag(f){
    document.getElementById("type").style.visibility = 'visibile';
    if (f == 1){
        flag = "pig";
        document.getElementById("type").innerHTML = "Pig Latin Encoding";
    }
    else if(f == 2) {
        flag = "caesar";
        document.getElementById("type").innerHTML = "Caesar Cipher Encoding";
    }   
}

function key(){
    keys = document.getElementById("key").value;
}

function encoder () {
    var text = document.getElementById("message").value;
    var output = "";
    if (flag == "pig"){
        output = pig(text);
    }
    if(flag = "caesar"){
        output = caesar(text, keys);
    }
    console.log(output);
    document.getElementById("out").innerHTML = output;

}
function pig(word){
    var arr = word.split(" ");
    var code = ""
    if(word.length > 1)
        for (let i = 0; i < arr.length; i++){
            code += arr[i].substring(1,arr[i].length) + arr[i].charAt(0) + "ay ";
        }
    else {
        code = word;
    }
    return code;
}

//check if letter is uppercase
function isUpperCase(str) {
    return str === str.toUpperCase();
}

//decipher the string
let caesar = (str, key) => {
  let decipher = '';
  
  //decipher each letter
  for(let i = 0; i < str.length; i++){
    
    //if letter is uppercase then add uppercase letters
    if(isUpperCase(str[i])){
      decipher += String.fromCharCode((str.charCodeAt(i) + key - 65) % 26 + 65);
    }else{
      //else add lowercase letters
      decipher += String.fromCharCode((str.charCodeAt(i) + key - 97) % 26 + 97);
    }
  }
  
  
  return decipher;
}