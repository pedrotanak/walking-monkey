var guardaImg=[
    "Monkey_01.png",
    "Monkey_02.png",
    "Monkey_03.png",
    "Monkey_04.png",
    "Monkey_05.png",
    "Monkey_06.png",
    "Monkey_07.png",
    "Monkey_08.png",
    "Monkey_09.png",
    "Monkey_10.png",
];
var contador=0;
function MudarImg(){
    if (contador==9){
        contador=0;
    }
    document.getElementById("MudaImg").src=guardaImg[contador];
    contador++;
}
