



function incrChar(ch, i) {
    return String.fromCharCode(ch[i] + 1);            
}

function encoder () {

    var text = document.getElementById("message").value;
    var text = [...text];
    var newText = []; 
    //create loop w/ incr
    for (let i = 0; i < text.length; i++) {
        newText[i] = String.fromCharCode(text[i].charCodeAt() + 1);
    }
    newText = newText.join('');

    document.getElementById("demo").innerHTML = text;
    document.getElementById("message").innerHTML = Array.from(text)

}