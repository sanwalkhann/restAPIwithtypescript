import express from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUiExpress from 'swagger-ui-express';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Your API Documentation',
            version: '1.0.0',
            description: 'API documentation for your backend server.',
        },
    },
    apis: ['./src/router/authentication.ts', './src/router/users.ts'], 
};

const swaggerSpec = swaggerJsdoc(options);

export const setupSwagger = (app: express.Application) => {
    app.use('/api-docs', swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerSpec));
};
