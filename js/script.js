let messageText = document.getElementById("result").innerText
let result;

const elementA = document.getElementById("a");
elementA.addEventListener('input', verify);

const elementB = document.getElementById("b");
elementB.addEventListener('input', verify);

const elementC = document.getElementById("c");
elementC.addEventListener('input', verify);

const elementD = document.getElementById("d");
elementD.addEventListener('input', verify);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', send)


function verify() {
    let a = parseFloat(elementA.value);
    let b = parseFloat(elementB.value);
    let c = parseFloat(elementC.value);
    let d = parseFloat(elementD.value);

    if ((a <= c && b <= d) || (a <= d && b <= c)){
        result = " Прямоугольник со сторонами a,b может поместиться в премоугольник со сторонами c, d"
        document.getElementById("result").innerText = messageText + result;
    } else {
        result = " Прямоугольник со сторонами a,b НЕ может поместиться в премоугольник со сторонами c, d"
        document.getElementById("result").innerText = messageText + result;
    }

}

function send() {
        let textCondition = document.getElementsByTagName('p')[0].innerText
        document.getElementsByName('formulation')[0].value = textCondition;
        document.getElementsByName('result')[0].value = result;
        document.getElementById("UserEnter").submit();
}




