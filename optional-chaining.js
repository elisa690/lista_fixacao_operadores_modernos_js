// 16. Complete os espaços para que o resultado seja Maria.


const usuario = {
  perfil: {
    nome: "Maria"
  }
};


const nome = usuario.perfil?.nome?? "Sem nome";
console.log(nome);


// 17. Faça o código mostrar "Cidade não informada" sem gerar erro.


const usuario = {};


const cidade = usuario.cidade ?? "Cidade não informada";
console.log(cidade);




// 18. Sem executar, diga as duas saídas e explique a diferença.


//R: A primeira saída é 10 porque o operador || considera 0 como falsy. 
// A segunda saída é 0 porque o operador ?? só substitui valores null ou undefined.






//19. Encontre o problema e reescreva a linha de cidade corretamente.
const usuario = {};


const cidade = usuario.cidade ?? "Não informada";
console.log(cidade);
//O problema é que usuario.endereco não existe. Então o JavaScript tenta acessar .cidade de undefined, causando um erro.




// 20. Complete usando ?. e ?? para exibir o telefone ou "Telefone não informado".


const pedido = {
  cliente: {
    nome: "Pedro"
  }
};


const telefone = pedido.cliente?.telefone ?? "Telefone não informado";
console.log(telefone);