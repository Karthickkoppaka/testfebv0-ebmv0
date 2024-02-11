import fastify from 'fastify';
import { logger } from './logger';
import { deliverooEventRoutes } from '../routes/deliveroo.events.routes';
import { defaultRoutes } from '../routes/default.routes';

export async function buildServer(){
    const app = fastify({logger,});

    app.register(deliverooEventRoutes, {prefix:'/api/v1/order/deliveroo/events'});
    app.register(defaultRoutes, {prefix:'/api/v1'});

    return app;
}