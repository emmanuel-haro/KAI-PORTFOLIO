const service = require("../services/portfolioService");

exports.list = async (_req, res, next) => {
  try {
    const items = await service.listItems();
    res.json(items);
  } catch (err) {
    next(err);
  }
};

exports.getById = async (req, res, next) => {
  try {
    const item = await service.getItem(req.params.id);
    if (!item) return res.status(404).json({ message: "Not found" });
    res.json(item);
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const payload = sanitizeBody(req.body);
    if (!payload.title) return res.status(400).json({ message: "title is required" });

    const created = await service.createItem(payload);
    res.status(201).json(created);
  } catch (err) {
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    const payload = sanitizeBody(req.body);
    const updated = await service.updateItem(req.params.id, payload);
    if (!updated) return res.status(404).json({ message: "Not found" });
    res.json(updated);
  } catch (err) {
    next(err);
  }
};

exports.remove = async (req, res, next) => {
  try {
    const removed = await service.deleteItem(req.params.id);
    if (!removed) return res.status(404).json({ message: "Not found" });
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};

const sanitizeBody = (body = {}) => {
  const technologies = Array.isArray(body.technologies) ? body.technologies : [];
  const tags = Array.isArray(body.tags) ? body.tags : [];

  return {
    title: body.title,
    description: body.description,
    imageUrl: body.imageUrl,
    liveUrl: body.liveUrl,
    githubUrl: body.githubUrl,
    technologies,
    tags,
  };
};
