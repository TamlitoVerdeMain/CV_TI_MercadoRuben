document.addEventListener("DOMContentLoaded", () => {

  
  const yearSpan = document.getElementById("anio-actual");
  if (yearSpan) {
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
  }

 
  const btnIrArriba = document.getElementById("btn-ir-arriba");
  if (btnIrArriba) {
    btnIrArriba.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

 
  const proyectosSection = document.getElementById("proyectos");
  const contador = document.querySelector("#contador-proyectos span");

  if (proyectosSection && contador) {
    const proyectos = proyectosSection.querySelectorAll(".card");
    contador.textContent = proyectos.length.toString();
  }

 
  emailjs.init("KTkARAhq1Jt04nlJS");

  const form = document.getElementById("contactForm");

  if(form){
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      emailjs
        .sendForm("service_5ssnvzc", "template_ezwxami", form)
        .then(() => {
          alert("Mensaje enviado correctamente");
          form.reset();
        })
        .catch((error) => {
          console.error("EmailJS error:", error);
          alert("Error al enviar el mensaje");
        });
    });
  }

});