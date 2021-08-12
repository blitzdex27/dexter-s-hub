const express = require("express");

function middlewares() {
  const wares = [express.json(), express.urlencoded({ extended: true })];
  return wares;
}

module.exports = middlewares;
