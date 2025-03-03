// Fuso horário: Brasil
const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

// Fuso horário: Japão
const horasJapao = document.getElementById("horasJapao");
const minutosJapao = document.getElementById("minutosJapao");
const segundosJapao = document.getElementById("segundosJapao");

// Fuso horário: Inglaterra
const horasInglaterra = document.getElementById("horasInglaterra");
const minutosInglaterra = document.getElementById("minutosInglaterra");
const segundosInglaterra = document.getElementById("segundosInglaterra");

function time() {
    const dataAtual = new Date();

    // Fuso horário do Brasil
    const hora = dataAtual.getHours().toString().padStart(2, "0");
    const minuto = dataAtual.getMinutes().toString().padStart(2, "0");
    const segundo = dataAtual.getSeconds().toString().padStart(2, "0");

    horas.textContent = hora;
    minutos.textContent = minuto;
    segundos.textContent = segundo;

    // Fuso horário do Japão
    const horarioJapao = new Intl.DateTimeFormat("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZone: "Asia/Tokyo",
        hour12: false
    });
    const dataJapao = horarioJapao.format(dataAtual);
    const [horaJapao, minutoJapao, segundoJapao] = dataJapao.split(":");

    horasJapao.textContent = horaJapao;
    minutosJapao.textContent = minutoJapao;
    segundosJapao.textContent = segundoJapao;

    // Fuso horário da Inglaterra
    const horarioInglaterra = new Intl.DateTimeFormat("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZone: "Europe/London",
        hour12: false
    });

    const dataInglaterra = horarioInglaterra.format(dataAtual);
    const [horaInglaterra, minutoInglaterra, segundoInglaterra] = dataInglaterra.split(":");

    horasInglaterra.textContent = horaInglaterra;
    minutosInglaterra.textContent = minutoInglaterra;
    segundosInglaterra.textContent = segundoInglaterra;
}

setInterval(time, 1000);
