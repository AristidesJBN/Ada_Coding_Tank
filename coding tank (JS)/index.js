console.log("questão 1:")
// 1. Desafio: Conversor de Horários

var resposta;
var s;

function conversorHora(h, m, sR){
    if (separaSegundo_Referência(sR)){
        resposta = `${h+12}:${m}:${s}`
    }else{
            resposta = `${h}:${m}:${s}`
    }
    console.log(resposta)
    return resposta
}

function separaSegundo_Referência(sR){
    
    var ref = (sR.charAt(2) + sR.charAt(3)).toUpperCase();

    switch (ref){
        case "PM":
            return true;
        case "AM":
            return false;
    }
    console.log(ref)
}

function validaHora(h, m, sR){
    s = Number.parseFloat(sR);
    const validação =   !(h == 12)
    const validação2 =   (h < 13) &&
                        (m < 60) &&
                        (s   < 60);

    if (validação){
        if (validação2){
            conversorHora(h, m, sR);
        }
        else{
            console.log("O horário não existe");
        }
    }else{
        console.log("O horário não existe");
    }
}

validaHora(11, 59, "59pm")

console.log("questão 2:")
// 2. Desafio: Quantidade de Palavras

var frase = "façaMercadoNoIfoodEntregamosTudoOQueVocêPrecisaNaPortaDaSuaCasa";
var letrasUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

function qtdPalavras(fraseParametro){
    let i = 0;
    let j = 0;
    contador = 1;
    const tamanhoFrase = fraseParametro.length;

    while (i < tamanhoFrase){
        const letra = fraseParametro.charAt(i);
        j = 0;
        while (j < 25){
            if (letra == letrasUpper[j]){
                contador++
            }
        j++
        }
    i++
    }
    console.log(`a frase possui${contador} palavras`);
    return contador;
}

qtdPalavras(frase);

console.log("questão 3:")
// 3.Desafio: Número Solitário

var num = [12, 17, 15, 19, 22, 17, 19, 12];
var qtdNum = num.length
var i = 0;

for (i; i<=qtdNum; i++){
    if (num[i] != null){
        for (var j = 0; j<=qtdNum; j++){
            if (num[j] != null){
                if (i != j){
                    if (num[i] == num[j]){
                        console.log(`Existe um par de ${num[j]}`);
                        num[i] = null;
                        num[j] = null;
                    }
                }
            }
        }
    }
}

for (var k = 0; k<=qtdNum; k++){
    if (num[k] != null){
        console.log(`O número ${num[k]} não possui par`)
    }
}


/* 4. Qual é a saída do código a seguir?

Resposta E
 1 1 2 1 2 3 1 2 3 4

5. Qual é o resultado da expressão booleana abaixo?

Resposta A
 !false = true 

6. Qual o valor da saída do código abaixo?

Resposta B
 2


*/
console.log("questão 4: E")
console.log("questão 5: A")
console.log("questão 6: B")
