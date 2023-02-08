import { createError } from "./error.js";
import jwt from "jsonwebtoken";


export const verifyTokenAccess = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(createError(401,"you are not authenticated"));
  }

  jwt.verify(token, process.env.JWT ,(err, user) => {
    if (err) { 
      return next(createError(402, "token is invalid"));
    }
    req.user = user;
    next();
  })
}

export const verifyUser = (req, res, next) => {
  verifyTokenAccess(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "you are not authenticated"));
    }
  });
}

export const verifyAdmin = (req, res, next) => {
  verifyTokenAccess(req, res, next, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "you are not admin"));
    }
  });
}