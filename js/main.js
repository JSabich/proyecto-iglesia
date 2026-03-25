document.addEventListener("DOMContentLoaded", () => {

    let index = 0;
    const eventos = document.querySelectorAll(".evento");

    if (eventos.length === 0) return;

    setInterval(() => {

        eventos[index].classList.remove("active");

        index = (index + 1) % eventos.length;

        eventos[index].classList.add("active");

    }, 3000);

});
