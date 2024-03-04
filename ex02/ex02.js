function calcularIdade(anoNasc){
    let data = new Date()
    let ano = data.getFullYear()
    let idade = ano - anoNasc
    document.write("A idade de Thiago é " + idade + " anos.")
};
calcularIdade(1993);