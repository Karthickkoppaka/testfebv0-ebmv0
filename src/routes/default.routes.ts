import { FastifyInstance } from "fastify";
import defaultHandler from "../controller/default.controller";


export async function defaultRoutes(app: FastifyInstance){
    app.post('/', defaultHandler);
    app.get('/', defaultHandler);
}