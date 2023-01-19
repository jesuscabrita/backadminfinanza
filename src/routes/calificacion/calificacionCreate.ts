import { FastifyPluginAsync } from "fastify";
import { BadRequest } from "http-errors";
import { CalificacionModel } from "../../model/calificacion.model";
import { isEmpty } from "../../util/is_empty";

export const calificacion_create: FastifyPluginAsync = async (app) => {
    app.post<{
    Body: { comentario: string; valor: number, name: string, imagen: string };
    }>("/", async (req, res) => {

        const data = req.body;
        req.log.info("Output");
        console.log(data);
        const { comentario, valor,name, imagen } = data;

        if (isEmpty(comentario)) {
        throw new BadRequest("Comentario no definido");
        }

        const doc = await CalificacionModel.create({
        comentario,
        valor,
        name,
        imagen
        });

        return doc;
    });
};