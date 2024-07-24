import { UnauthenticatedError } from '../errors/customError.js';
import { verifyJWT } from '../utils/tokenUtils.js';

export const authenticateUser = async (req, res, next) => {
  const { token } = req.cookies;
    console.log('Token from cookies:', token);
  if (!token) throw new UnauthenticatedError('authentication invalid');
  
  try {
    const { userId, role } = verifyJWT(token);
    console.log('Decoded token:', { userId, role });
    req.user = { userId, role };
    next();
  } catch (error) {
    console.error('Token verification failed:', error);
    throw new UnauthenticatedError('authentication invalid');
  }
};



