const { saveData } = require("../repositories/user.repository");
const { getAllData } = require("../repositories/user.repository");
const { getDataById } = require("../repositories/user.repository");
const { deleteDataById } = require("../repositories/user.repository");
const { updateDataById } = require("../repositories/user.repository");



const addUser = (user) => {
  if (user) {
    return saveData(user);
  } else {
    return null;
  }
};

const getAllUsers = () => {
  return getAllData();
};

const getUserById = (id) => {
  const result = getDataById(id);
  
  if(result){
    return result;
  } else {
    return null;
  }
};

const deleteUserById = (id) => {
  const result = deleteDataById(id);
  return result;
};

const updateUserById = (id, data) => {
  const result = updateDataById(id, data);
  
  if(result){
    return result;
  } else {
    return null;
  }
};

module.exports = {
  addUser,
  getAllUsers,
  getUserById,
  deleteUserById,
  updateUserById
};