import { FastifyPluginAsync } from "fastify";
import { CalificacionModel } from "../../model/calificacion.model";

export const calificacion_Edit: FastifyPluginAsync = async (app) => {
    app.put<{ Body: { comentario: string; valor: number, name: string, imagen: string }
    }>("/",
        async (req, res) => {

            const data = req.body;
            req.log.info("Editado");
            console.log(data);
            const { comentario, valor,name, imagen } = data;

            const doc = await CalificacionModel.updateOne({
                comentario,
                valor,
                name,
                imagen
            },{ comentario,
                valor,
                name,
                imagen
            });

            return {
                status: "Editado",
            };
        }
    )
}