import { FastifyInstance } from "fastify";
import orderEventsHandler from "../controller/uber.events.controller";


export async function uberEventRoutes(app: FastifyInstance){
    app.post('/', orderEventsHandler);
}