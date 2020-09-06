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
    keys = parseInt(document.getElementById("key").value);
    console.log(keys);
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
    console.log(str);
    
    var result = "";
	for (var i = 0; i < str.length; i++) {
		var c = str.charCodeAt(i);
        if (65 <= c && c <=  90) 
            result += String.fromCharCode((c - 65 + keys) % 26 + 65);  // Uppercase
        else if (97 <= c && c <= 122) 
            result += String.fromCharCode((c - 97 + keys) % 26 + 97);  // Lowercase
        else
            result += str.charAt(i);  // Copy
	}
	return result;
  
}