function verificar() {
    var val = document.getElementById('valor') // campo onde o usuário irá colocar o valor 
    var res = document.getElementById('result') // div para exibir o resultado 
     if (val.value.length == 0) { //condição em caso de ausência de dados
        alert('Por favor insira um valor a ser convertido!')
     } else {
        var valor = Number(val.value) //conversão de valores
        var moedaorg = document.getElementsByName('moedaorg') // variavel das caixas seletoras de moeda e moeda de origem  
        var moeda = document.getElementsByName('moeda')
        var thi = '' 
        var converted = Number(thi.value) // variável convertida para número que irá exibir o valor do calculo
        valor.toFixed(2) // formtação do valor para o formato de duas casas decimais 
        var gal = '' //variaveis vazias para inserção do nome e simbolo das moedas 
        var gali = '' 
        if (moedaorg[0].checked) { //condições para cada posição na caixa seletora de moeda original e dentro dela as 3 variáveis possiveis para as posições
            gal = 'R$ reais'
            if (moeda[0].checked) {
                converted = valor 
                gali = 'R$ reais'
            } else if (moeda[1].checked) {
                converted = valor * 0.20
                gali = '$$ dólares'
            } else if (moeda[2].checked) {
                converted = valor * 0.18                
                gali = '€ euros'
            }
         } if (moedaorg[1].checked) {
            gal = '$$ dólares'
            if (moeda[0].checked) {
                converted = valor * 5.12
                gali = 'R$ reais'
            } else if (moeda[1].checked) {
                converted = valor 
                gali = '$$ dólares'
            } else if (moeda[2].checked) {
                converted = valor * 0.92
                gali = '€ euros'           
            }
         }  if (moedaorg[2].checked) {
            gal = '€ euros'
            if (moeda[0].checked) {
                converted = valor * 5.55
                gali = 'R$ reais'
            } else if (moeda[1].checked) {
                converted = valor / 0.92 
                gali = '$$ dólares'
            } else if (moeda[2].checked) {
                converted = valor 
                gali = '€ euros'
            }
         }
     } res.innerHTML = `${valor.toFixed(2)} ${gal} valem: ${converted.toFixed(2)} ${gali}` //exibição do resultado com o valor inserido pelo usuário, nome das moedas e valor formatado 
}