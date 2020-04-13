import carrusel1 from "../../Images/carrusel1.jpg";
import carrusel2 from "../../Images/carrusel2.jpg";
import carrusel3 from "../../Images/carrusel3.jpg";
import curso1 from "../../Images/Curso1.png";
import curso2 from "../../Images/Curso2.jfif";
import curso3 from "../../Images/Curso3.jfif";
import buscar from "../../Images/buscar.png";
import agrega from "../../Images/cerebro.png";
import aprende from "../../Images/ajuste.png";
import mejora from "../../Images/gorra.png";
import libro1 from "../../Images/libro1.jpg";
import libro2 from "../../Images/libro2.jfif";
import libro3 from "../../Images/libro3.jpg";

export const data = {
  Header: [
    {
      name: "Iniciar Sesión",
      link: "/Iniciar"
    },
    {
      name: "Registrarse",
      link: "/Registrese"
    }
  ],

  Despliegue: [
    {
      title: "Cursos",
      link: "/Cursos"
    },
    {
      title: "Libros",
      link: "/Libros"
    }
  ],

  Footer: [
    {
      name: "Facebook",
      link: "",
      icon: "fab fa-facebook-f"
    },
    {
      name: "LinkedIn",
      link: "",
      icon: "fab fa-twitter"
    },
    {
      name: "Twitter",
      link: "",
      icon: "fab fa-linkedin-in"
    }
  ],

  Carousel: [
    {
      slide: "0"
    },
    {
      slide: "1"
    },
    {
      slide: "2"
    }
  ],

  Carousel2: [
    {
      image: carrusel1,
      title: "Nombre pag",
      description: "Encuentra los mejores cursos para hacer crecer tu empresa.",
      button: "Unirme gratis"
    },
    {
      image: carrusel2,
      title: "Nombre pag",
      description: "Encuentra los mejores cursos para hacer crecer tu empresa.",
      button: "Unirme gratis"
    },
    {
      image: carrusel3,
      title: "Nombre pag",
      description: "Encuentra los mejores cursos para hacer crecer tu empresa.",
      button: "Unirme gratis"
    }
  ],

  box: [
    {
      image: curso1,
      title: "Curso de Marketing",
      description:
        "El Marketing Digital o Marketing Online es el conjunto de estrategias direccionadas a la comunicación y comercialización electrónica de productos y servicios.Ahora voy a explicarte qué es este concepto.",
      button: "Añadir a Favoritos"
    },
    {
      image: curso2,
      title: "Curso de Manejo del Tiempo",
      description:
        "Al momento de trabajar intentamos hacer todo lo posible por ser productivos en nuestro día a día, y muchas veces no lo logramos. Pero ahora ya puedes serlo con este curso virtual.",
      button: "Añadir a Favoritos"
    },
    {
      image: curso3,
      title: "Curso de Manejo del Personal",
      description:
        " El manejo de personal es lo más importante en una empresa, define el éxito que pueda llegar a tener una empresa, por tanto es necesario que la empresa sepa manejar el personal adecuadamente.",
      button: "Añadir a Favoritos"
    }
  ],

  span: [
    {
      image: buscar,
      title: "BUSCA"
    },
    {
      image: agrega,
      title: "AGREGA TUS CURSOS"
    },
    {
      image: aprende,
      title: "APRENDE"
    },
    {
      image: mejora,
      title: "MEJORA"
    }
  ],

  book: [
    {
      image: libro1,
      title: "Marketing Extraordinario",
      button: "Añadir a favoritos",
      description:
        "Las pequeñas y medianas empresas son fundamentales en el desarrollo económico de un país, principalmente porque tienen una  facilidad natural para generar empleo, distribuir a nivel regional, entre otras virtudes. Por ello es necesario promover el desarrollo de las pymes. Sin embargo, muy pocas empresas logran superar los tres años de vida y fracasan. Ante este escenario, el autor decide buscar las estructuras del mercado y las dinámicas bajo las cuales surgen y mueren tantas pymes. "
    },
    {
      image: libro2,
      title: "Mañanas Milagrosas",
      button: "Añadir a favoritos",
      description:
        "Para tener éxito y lograr la mejor versión de ti mismo debes asumir toda la responsabilidad por tus acciones y enfocar una parte de tu tiempo y esfuerzo cada dia en tu desarrollo personal. La “Mañana Milagrosa” es un método para crear ese tiempo y desarrollar las áreas que forman tu vida (Fisica, Intelectual, Emocional y Espiritual). El método consiste de 6 herramientas: Silencio, Afirmaciones, Visualizar, Ejercicio, Leer y Escribir."
    },
    {
      image: libro3,
      title: "El arte de gestionar el tiempo",
      button: "Añadir a favoritos",
      description:
        " En este libro, Gustavo Piera te invita a una de las reuniones de trabajo más importantes de tu vida, una reunión contigo mismo y con el siguiente orden del día: decidir sin interferencias ni imposiciones cuáles son tus objetivos en la vida y cómo vas a invertir tu tiempo para lograrlos. Dado que el tiempo es un bien limitado, resulta sensato reflexionar en qué vale la pena invertirlo para obtener los máximos beneficios personales."
    }
  ],

//   formGroup: [
// //     {
//       type: "text",
//       name: "fullname",
//       dpurpose: "fullname",
//       placeholder: "Nombre completo",
//       id: "id_fullname"
//     },
//     {
//         type: "email",
//         name: "email",
//         dpurpose: "fullemail",
//         placeholder: "Correo Electrónico",
//         id: "id_email"
//     },
//     {
//         type: "password",
//         name: "password",
//         purpose: "password",
//         placeholder: "Contraseña",
//         id: "id_password"
//     }
//   ]
};
