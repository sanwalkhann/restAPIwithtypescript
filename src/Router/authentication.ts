import express from 'express';

import { login, register } from '../controllers/authetication';

export default (router: express.Router) => {
  /**
   * @swagger
   * /auth/register:
   *   post:
   *     summary: Register a new user
   *     description: Register a new user with provided username and password
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               username:
   *                 type: string
   *               password:
   *                 type: string
   *     responses:
   *       '200':
   *         description: Registration successful
   *       '400':
   *         description: Bad request
   */
  router.post('/auth/register', register);

  /**
   * @swagger
   * /auth/login:
   *   post:
   *     summary: Login
   *     description: Login with username and password
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               username:
   *                 type: string
   *               password:
   *                 type: string
   *     responses:
   *       '200':
   *         description: Login successful
   *       '401':
   *         description: Unauthorized
   */
  router.post('/auth/login', login);
};