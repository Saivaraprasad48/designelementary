const hostname = "http://localhost:8080";

export const endpoints = {
  login: `${hostname}/user/login`,
  signup: `${hostname}/user/signup`,
  getReaminders: `${hostname}/remainder/`,
  createRemainder: `${hostname}/remainder/new`,
  updateRemainder: `${hostname}/remainder/update/`, //add id of the remainder at last
  deleteRemainder: `${hostname}/remainder/delete/`, //add id of the remainder at last
};
