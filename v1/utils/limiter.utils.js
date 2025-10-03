import rateLimit from "express-rate-limit";

export const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 1000,                 
  message: "Demasiadas peticiones, intente más tarde.",
  handler: (req, res, next, options) => {
    res.status(options.statusCode).json({
        error: "Too many requests",
        limit: options.max,
        windowMs: options.windowMs,
        retryAfter: Math.ceil(options.windowMs / 1000) + "s"
    });
  }
});