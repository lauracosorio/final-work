import {Server} from "miragejs";

export default () => {
    let server = new Server({
        routes() {
            this.namespace = "api";
        },
    });

    server.db.loadData({
        usuarios: [
            {
                fullname: "Oscar",
                password: "123456",
                email: "oscar@gmail.com"
            }
        ],
    });

    server.post("/registrarse", (schema, request) => {
        const estadoFormulario = JSON.parse(request.requestBody);

        schema.db.usuarios.insert(estadoFormulario);

        return Object.assign({},
            estadoFormulario,
            {
                password: undefined
            },
            {
                mensaje: "Bienvenido"
            }
        )
    });

    server.post("/login", (schema, request) => {
        const estadoLogin = JSON.parse(request.requestBody);
        const usuario = schema.db.usuarios.findBy({email:estadoLogin.email});
   
        if(usuario){
            return (
                Object.assign({},
                    usuario,
                    {
                        password: undefined
                    },
                    {
                        mensaje: "Bienvenido"
                    }
                )
            )
            
        }

        return {
            mensaje: "No está registrado"
        }
    })
};