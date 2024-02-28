import { FastifyInstance } from "fastify";
import orderEventsRedirectHandler from "../controller/uber.redirect.controller";


export async function uberOrderEventsRedirectRoutes(app: FastifyInstance){
    app.post('/', orderEventsRedirectHandler);
}