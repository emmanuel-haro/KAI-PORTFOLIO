exports.errorHandler = (err, req, res, _next) => {
  const status = err?.status || 500;
  const message = err?.message || "Internal server error";
  console.error(err);
  res.status(status).json({ message });
};
