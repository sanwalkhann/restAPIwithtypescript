import express from 'express';

import { getAllUsers, deleteUser, updateUser } from '../controllers/Users';
import { isAuthenticated, isOwner } from '../Middlewares';

export default (router: express.Router) => {
  router.get('/users',  getAllUsers);
  router.delete('/users/:id', isAuthenticated, isOwner, deleteUser);
  router.patch('/users/:id', isAuthenticated, isOwner, updateUser);
};