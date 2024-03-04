function media(nota1, nota2, nota3){
    let notaTeorica = nota1*2;
    let notaPratica = nota2 + nota3;
    let media = (notaTeorica + notaPratica)/4;
    document.write("A média foi " + media)    
    return media;
}
media(9, 10, 8);