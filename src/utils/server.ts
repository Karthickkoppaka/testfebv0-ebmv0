import fastify from 'fastify';
import { logger } from './logger';
import { deliverooEventRoutes } from '../routes/deliveroo.events.routes';
import { defaultRoutes } from '../routes/default.routes';
import { uberEventRoutes } from '../routes/uber.events.routes';

export async function buildServer(){
    const app = fastify({logger,});

    app.register(uberEventRoutes, {prefix:'/api/v1/order/uber/events'});
    app.register(deliverooEventRoutes, {prefix:'/api/v1/order/deliveroo/events'});
    app.register(defaultRoutes, {prefix:'/api/v1'});

    return app;
}