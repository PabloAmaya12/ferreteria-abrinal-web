export const errorHandler = (error, req, res, next) => {
  if (error?.name === 'ZodError') {
    return res.status(400).json({
      message: 'Validation error',
      issues: error.issues,
    });
  }

  const status = error.status || 500;
  res.status(status).json({
    message: error.message || 'Server error',
  });
};
