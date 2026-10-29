// 11. Qual será a saída?


const logado = true;


logado && console.log("Bem-vindo!");


// (c) Bem-vindo!




//12. O que será exibido agora?


const logado = false;


logado && console.log("Bem-vindo!");


// Como logado é false, o operador && não executa o segundo comando. Portanto, "Bem-vindo!" não será exibido.




// 13. Complete para mostrar a mensagem apenas quando idade for maior ou igual a 18.


const idade = 20;


idade >= 18 && console.log("Maior de idade");