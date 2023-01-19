import { Document, model, Schema } from "mongoose";

export interface CalificacionDocument extends Document {
    comentario: string;
    valor: number;
    name:string;
    imagen: string;
}

const schema = new Schema(
    {
        comentario: { type: String, required: true },
        valor: { type: Number, required: true },
        name: {type: String},
        imagen: {type: String},
    },
    { timestamps: true }
);

export const CalificacionModel = model<CalificacionDocument>("calificacion", schema);