function percentual(alunosPresent){
    let totalAlunos = 19;
    let percentualFaltas = (totalAlunos - alunosPresent)*100/totalAlunos;
    
    document.write("O percentual de alunos que faltaram foi de " + percentualFaltas.toFixed(1) + "%.");

    return percentualFaltas;
   
   
};
percentual(11);