function quantAcessos(horario){
       let hora = horario
    if (hora >= 5 && hora <12) {
        document.write("Acesso registrado pela manhã.<br>")
    } else if (hora >= 12 && hora <18) {
        document.write("Acesso registrado pela tarde.<br>");
    } else {
        document.write("Acesso registrado pela noite.<br>");
    }
}

let horarios = [7, 9, 10, 11, 14, 15, 17, 19, 20, 22];

horarios.forEach(horario => {
    quantAcessos(horario);
});


