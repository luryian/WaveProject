export function selectMoedas(index: string) {
    var moeda: string = ""
    if(index == 'design' ){
        moeda = 'moedaDesign'
    }
    if (index == 'sistema'){
        moeda = 'moedaSistema'
    }
    if (index == 'audiovisual'){
        moeda = 'moedaAudiviusal'
    }
    if (index == 'jogos'){
        moeda = 'moedaJogos'
    }
    index = moeda;
    return moeda
}