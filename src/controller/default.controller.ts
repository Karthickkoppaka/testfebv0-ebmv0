import { FastifyReply, FastifyRequest } from "fastify";
import { logger } from "../utils/logger";

export default async function defaultHandler(
    request: FastifyRequest,
    reply: FastifyReply
){
    console.log('request data', request);
    console.log('request data headers', request.headers);
    console.log('request data body', request.body);
    console.log('reply data', reply);
    logger.info(request, 'orderEventsHandler request data');
    logger.info(request.headers, 'orderEventsHandler request headers');
    logger.info(request.body, 'orderEventsHandler request body');
    logger.info(reply, 'orderEventsHandler reply data');
    return reply.code(200).send('default handler request');
}