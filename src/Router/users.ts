import express from 'express';
import { getAllUsers, deleteUser, updateUser } from '../controllers/Users';
import { isAuthenticated, isOwner } from '../Middlewares';

export default (router: express.Router) => {
    /**
     * @swagger
     * /users:
     *   get:
     *     summary: Retrieve all users
     *     description: Retrieve a list of all users
     *     responses:
     *       '200':
     *         description: A list of users
     *       '401':
     *         description: Unauthorized
     */
    router.get('/users', isAuthenticated, getAllUsers);

    /**
     * @swagger
     * /users/{id}:
     *   delete:
     *     summary: Delete a user
     *     description: Delete a user by ID
     *     parameters:
     *       - in: path
     *         name: id
     *         schema:
     *           type: string
     *         required: true
     *         description: ID of the user to delete
     *     responses:
     *       '204':
     *         description: User deleted successfully
     *       '401':
     *         description: Unauthorized
     *       '403':
     *         description: Forbidden, user not allowed to delete this user
     *       '404':
     *         description: User not found
     */
    router.delete('/users/:id', isAuthenticated, isOwner, deleteUser);

    /**
     * @swagger
     * /users/{id}:
     *   patch:
     *     summary: Update a user
     *     description: Update a user by ID
     *     parameters:
     *       - in: path
     *         name: id
     *         schema:
     *           type: string
     *         required: true
     *         description: ID of the user to update
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               firstName:
     *                 type: string
     *               lastName:
     *                 type: string
     *     responses:
     *       '200':
     *         description: User updated successfully
     *       '400':
     *         description: Bad request, invalid data
     *       '401':
     *         description: Unauthorized
     *       '403':
     *         description: Forbidden, user not allowed to update this user
     *       '404':
     *         description: User not found
     */
    router.patch('/users/:id', isAuthenticated, isOwner, updateUser);
};
