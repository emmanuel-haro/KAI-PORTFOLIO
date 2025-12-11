const { PortfolioItem } = require("../models/portfolioItem.model");

const listItems = async () => PortfolioItem.find().sort({ createdAt: -1 }).exec();

const getItem = async (id) => PortfolioItem.findById(id).exec();

const createItem = async (data) => PortfolioItem.create(data);

const updateItem = async (id, data) =>
  PortfolioItem.findByIdAndUpdate(id, data, { new: true }).exec();

const deleteItem = async (id) => PortfolioItem.findByIdAndDelete(id).exec();

module.exports = {
  listItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
};
