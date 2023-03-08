const { Contact } = require('../models/contact');
const { HttpError, ctrlWrapper } = require('../helpers');

const getList = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const skip = (page - 1) * limit;
  const { _id: owner } = req.user;
  const list = await Contact.find({ owner }, '-createdAt -updatedAt', { skip, limit });
  res.json(list);
};
const getById = async (req, res) => {
  const contactById = await Contact.findById(req.params.contactId);
  if (!contactById) {
    throw HttpError(404, 'not found');
  }
  res.json(contactById);
};
const add = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await Contact.create({ ...req.body, owner });
  console.log(result);
  res.status(201).json(result);
};
const del = async (req, res) => {
  const deletedContact = await Contact.findByIdAndDelete(req.params.contactId);
  if (!deletedContact) {
    throw HttpError(404, 'Not found');
  }
  res.json({ message: 'contact deleted' });
};
const update = async (req, res) => {
  const { contactId } = req.params;
  const updatedContact = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  res.json(updatedContact);
};
const updateFavorite = async (req, res) => {
  const { contactId } = req.params;
  const updatedContact = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  res.json(updatedContact);
};

module.exports = {
  getList: ctrlWrapper(getList),
  getById: ctrlWrapper(getById),
  add: ctrlWrapper(add),
  del: ctrlWrapper(del),
  update: ctrlWrapper(update),
  updateFavorite: ctrlWrapper(updateFavorite),
};
