// 3. Nullish Coalescing (??)


//6. Complete o código para mostrar "Não informado" quando nome for null ou undefined.


const nome = null;


console.log(nome ?? "Não informado");


// 7. Qual será o resultado?


const idade = null;


console.log(idade ?? 18);


// (c) 18






//  8. Qual será a saída? Atenção ao valor 0.


const estoque = 0;


console.log(estoque ?? 10);


// (a) 0




// 9. Explique por que os dois resultados são diferentes.


const quantidade = 0;


console.log(quantidade || 10);
console.log(quantidade ?? 10);


// Os resultados são diferentes porque || considera 0 como um valor falsy e, por isso, retorna 10. 
// Já ?? só substitui o valor quando ele é null ou undefined. Como 0 é um valor válido, ?? mantém o 0.




// 10. Complete usando o operador adequado.


const usuario = {
  apelido: undefined
};


const nomeExibido = usuario.apelido ?? "Visitante";
console.log(nomeExibido);