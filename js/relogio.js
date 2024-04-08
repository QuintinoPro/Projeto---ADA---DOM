const atualizarTempo = () => {
    const data = new Date();
    let horas = data.getHours().toString().padStart(2, '0');
    let minutos = data.getMinutes().toString().padStart(2, '0');
    let segundos = data.getSeconds().toString().padStart(2, '0');

    horas = horas < 10 ? `0${horas}` : horas;
    minutos = minutos < 10 ? `${minutos}` : minutos;
    segundos = segundos < 10 ? `${segundos}` : segundos;

    const tempo = `${horas}:${minutos}:${segundos}`;
    document.getElementById("relogio").innerText = tempo;
}


const atualizarData = () => {
    
    const dataAtual = new Date();
   
    const diaSemana = dataAtual.toLocaleDateString('pt-BR', { weekday: 'long' });
    const diaMes = dataAtual.getDate();
    const mes = dataAtual.toLocaleDateString('pt-BR', { month: 'long' });
    const ano = dataAtual.getFullYear();
    
    
    const novaData = diaSemana + ', ' + diaMes + ' de ' + mes + ' de ' + ano;
    
    
    document.getElementById('current-date').textContent = novaData;
}

atualizarData();

setInterval(atualizarTempo, 1000);
