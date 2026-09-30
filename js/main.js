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


  // Aparición suave de las secciones al entrar en pantalla
  const secciones = document.querySelectorAll(".section");
  const sinAnimacion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (secciones.length && !sinAnimacion && "IntersectionObserver" in window) {
    secciones.forEach((seccion) => seccion.classList.add("reveal"));

    const observador = new IntersectionObserver((entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("is-visible");
          observador.unobserve(entrada.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });

    secciones.forEach((seccion) => observador.observe(seccion));
  }


  // Barra de navegación: sombra al hacer scroll y enlace activo
  const navbar = document.getElementById("navbar");
  const enlacesNav = document.querySelectorAll(".nav a");

  const marcarActivo = (id) => {
    enlacesNav.forEach((enlace) => {
      enlace.classList.toggle("is-active", enlace.getAttribute("href") === "#" + id);
    });
  };

  if (navbar) {
    const actualizarNavbar = () => {
      navbar.classList.toggle("is-stuck", window.scrollY > navbar.offsetTop);
    };
    actualizarNavbar();
    window.addEventListener("scroll", actualizarNavbar, { passive: true });
  }

  if (enlacesNav.length && secciones.length && "IntersectionObserver" in window) {
    const observadorNav = new IntersectionObserver((entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          marcarActivo(entrada.target.id);
        }
      });
    }, { rootMargin: "-40% 0px -55% 0px" });

    secciones.forEach((seccion) => observadorNav.observe(seccion));
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
