const UserModel = require("../model/UserModel");

const createUser = async (request, response) => {
  try {
    const newUser = await UserModel.create(request.body);
    if (!newUser) {
      return response.status(500).json({
        message: "user is not created",
      });
    } else {
      return response.status(201).json({
        message: "user is created",
        data: newUser,
      });
    }
  } catch (error) {
    return response.status(500).json({
      message: error.message,
    });
  }
};

const getUsers = async (request, response) => {
  try {
    const getAllUsers = await UserModel.find({});
    if (!getAllUsers) {
      return response.status(500).json({
        message: "error occured",
      });
    } else {
      return response.status(200).json({
        message: "All users is fetching",
        data: getAllUsers,
      });
    }
  } catch (error) {
    return response.status(500).json({
      message: error.message,
    });
  }
};

const getOneUser = async (request, response) => {
  const { id } = request.params;
  try {
    const getOneUser = await UserModel.findById(id);
    if (!getOneUser) {
      return response.status(404).json({
        message: "no user found this id",
      });
    } else {
      return response.status(200).json({
        message: "User is fetching",
        data: getOneUser,
      });
    }
  } catch (error) {
    return response.status(500).json({
      message: error.message,
    });
  }
};

const updateUser = async (request, response) => {
  const { id } = request.params;
  try {
    const updateUser = await UserModel.findByIdAndUpdate(id, request.body);
    if (!updateUser) {
      return response.status(500).json({
        message: "Error occured",
      });
    } else {
      return response.status(201).json({
        message: "User is updated",
        data: updateUser,
      });
    }
  } catch (error) {
    return response.status(500).json({
      message: error.message,
    });
  }
};

const deleteUser = async (request, response) => {
  const { id } = request.params;
  try {
    const deleteUser = await UserModel.findByIdAndDelete(id);
    if (!deleteUser) {
      return response.status(500).sjon({
        message: "error",
      });
    } else {
      return response.status(200).json({
        data: deleteUser,
        message: "user is deleted",
      });
    }
  } catch (error) {
    return response.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { createUser, getUsers, getOneUser, updateUser, deleteUser };
