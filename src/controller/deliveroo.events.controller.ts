import { FastifyReply, FastifyRequest } from "fastify";
import { logger } from "../utils/logger";


export default async function orderEventsHandler(
    request: FastifyRequest,
    reply: FastifyReply
){
    // console.log('request data', request);
    // console.log('reply data', reply);
    // logger.info(request, 'orderEventsHandler request data');
    // logger.info(reply, 'orderEventsHandler reply data');
    return reply.code(200).send('orderEventsHandler request received');
}