const express = require("express");
const router = express.Router();
const db = require("../base-orm/sequelize-init");
const { Op, ValidationError } = require("sequelize");

router.get("/api/farmacias", async function (req, res) {
  // consulta de farmacias con filtros y paginacion

  let where = {};
  if (req.query.Descripcion != undefined && req.query.Descripcion !== "") {
    where.Descripcion = {
      [Op.like]: "%" + req.query.Descripcion + "%",
    };
  }
  let items = await db.farmacias.findAndCountAll({
    attributes: [
      "IdFarmacia",
      "Descripcion",
      "Sucursales",
    ],
    order: [["Descripcion", "ASC"]],
    where,
  });

  res.json(items.rows);
});

module.exports = router;
