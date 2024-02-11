import { FastifyInstance } from "fastify";
import orderEventsHandler from "../controller/deliveroo.events.controller";


export async function deliverooEventRoutes(app: FastifyInstance){
    app.post('/', orderEventsHandler);
}