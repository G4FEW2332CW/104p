// geração do valor aleatório
var y = Math.floor(Math.random() * 10 + 1);
// contagem de tentativas
// até acerto    
  if(x == y)
{
alert("PARABES!!!"+playername+", voce acertou em "
         + guess + " tentativa(s)!");
guess= 1;





}

// função para o número enviado pelo usuário
else if(x > y)
{
    guess++;
    alert("Opa, resposta errada!! Tente um numero menor")
}
else 
{
    guess++;
    alert("Opa, resposta errada!! Tente um numero maior")
}