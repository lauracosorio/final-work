import { Server } from "miragejs";
import Swal from 'sweetalert2'

export default () => {
  let server = new Server({
    routes() {
      this.namespace = "api";
    }
  });

 //server.db.loadData carga un objeto de datos en la BD.  

  server.db.loadData({
    usuarios: [
      {
        fullname: "Laura Osorio",
        password: "123456",
        email: "laurisosorio7@hotmail.com"
      },
      {
        fullname: "Maria Restrepo",
        password: "123456",
        email: "mclarea021@gmail.com"
      }
    ],

    asesorias: [
      {
        fullname: "Laura Osorio",
        email: "laurisosorio7@hotmail.com"
      },
     
    ],

    pagos: [
      {
        fullname: "Laura Osorio",
        email: "laurisosorio7@hotmail.com",
        date: "23-2020",
        code: "0000"
      }
    ],

  });


  //schema.db permite acceder a la BD
  //JSON.parse analiza los datos y los convierte en un objeto
  //db.usuarios.insert inserta datos al array
  //objecti.assign para que muestre todo el array completo 




  server.post("/registrarse", (schema, request) => {
    const estadoFormulario = JSON.parse(request.requestBody);

    schema.db.usuarios.insert(estadoFormulario);

    return Object.assign(
      {},
      estadoFormulario,
      {
        password: undefined
      },
      {
        mensaje: "Bienvenido"
      }
    );
  });

  server.post("/login", (schema, request) => {
    const estadoLogin = JSON.parse(request.requestBody);
    const usuario = schema.db.usuarios.findBy({ email: estadoLogin.email });

    if (usuario) {
      return Object.assign(
        {},
        usuario,
        {
          password: undefined
        },
        {
          mensaje: "Bienvenido"
        }


      );
    }

    return {
      mensaje: "No está registrado"
    };
  });

  server.post("/asesorias", (schema, request) => {
    const estadoAsesoria = JSON.parse(request.requestBody);
    const asesoria = schema.db.asesorias.findBy({ email: estadoAsesoria.email });

    if (asesoria) {
      return Object.assign(
        {},
        asesoria,
          // {
          //   email: ''
          // },
          {
            mensaje: "Asesoria"
          }
      );
    }
    return {mensaje: "No se pudo realizar la solicitud"}
  });

  server.post("/pago", (schema, request) => {
    const estadoPago = JSON.parse(request.requestBody);
    const pago = schema.db.pagos.findBy({ email: estadoPago.email });

    if (pago) {
      return Object.assign(
        {},
        pago,
        {
          code: undefined
        },
          {
            mensaje: "Pago"
          }
      );
    }
    return{
      mensaje: "No se pudo realizar el pago"
    }
  });

};

