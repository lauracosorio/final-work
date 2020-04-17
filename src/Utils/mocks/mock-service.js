import { Server } from "miragejs";

export default () => {
  let server = new Server({
    routes() {
      this.namespace = "api";
    }
  });

  server.db.loadData({
    usuarios: [
      {
        fullname: "Laura Osorio",
        password: "123456",
        email: "laurisosorio7@hotmail.com"
      },
    //   {
    //     fullname: "Maria Restrepo",
    //     password: "123456",
    //     email: "mclarea021@gmail.com"
    //   }
    ]
  });

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
    const usuario = schema.sb.usuarios.findBy({ email: estadoAsesoria.email });

    if (usuario) {
      return Object.assign(
        {},
        usuario,
            {
            email: ""
          },
        {
          mensaje: "Asesoria"
        }
      );
    }
    return "Tú asesoría fue solicitada con éxito, pronto nos estaremos poniendo en contacto contigo.";
  });
};
