const alphabet = [
    'A','B','C','D','E','F',
    'G','H','I','J','K','L',
    'M','N','O','P','Q','R',
    'S','T','U','V','W','X',
    'Y','Z'
  ];

var flag = "caesar";

function setflag(f){
    if (f == 1){
        flag = "pig"
        document.getElementById("type").innerHTML = "Pig Latin Encoding"
    }
    else if(f == 2) {
        flag = "caesar"
        document.getElementById("type").innerHTML = "Caesar Cipher Encoding"
    }
}

function incrChar(ch, i) {
    return String.fromCharCode(ch[i] + 1);            
}

function encoder () {
    var text = document.getElementById("message").value;
    var output = "";
    if (flag == "pig"){
        output = pig(text);
    }
    // var text = [...text];
    // var newText = []; 
    // //create loop w/ incr
    // for (let i = 0; i < text.length; i++) {
    //     newText[i] = String.fromCharCode(text[i].charCodeAt() + 1);
    // }
    
    // newText = incrChar(newText, 3);
    // newText = newText.join('');
    console.log(output);
    document.getElementById("out").innerHTML = output;
    // document.getElementById("message").innerHTML = Array.from(newText);

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

function caesar(word, key){
    console.log("yeet");
}