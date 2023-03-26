"use strict";

const jsonschema = require("jsonschema");
const express = require("express");

const { BadRequestError } = require("../expressError");
const { ensureAdmin } = require("../middleware/auth");
const Product = require("../models/product");

const productNewSchema = require("../schemas/productNew.json");

const router = new express.Router();


router.post("/", ensureAdmin, async function (req, res, next) {
    try {
      const validator = jsonschema.validate(req.body, productNewSchema);
      if (!validator.valid) {
        const errs = validator.errors.map(e => e.stack);
        throw new BadRequestError(errs);
      }
  
      const product = await Product.create(req.body);
      return res.status(201).json({ product });
    } catch (err) {
      return next(err);
    }
  });

  router.get("/", async function (req, res, next) {
    try {
      const products = await Product.findAll();
      return res.json({ products });
    } catch (err) {
      return next(err);
    }
  });
  
  router.get("/:name", async function (req, res, next) {
    try {
      const product = await Product.get(req.params.name);
      return res.json({ product });
    } catch (err) {
      return next(err);
    }
  });

  router.patch("/:name", ensureAdmin, async function (req, res, next) {
    try {
      const product = await Product.update(req.params.name, req.body);
      return res.json({ product });
    } catch (err) {
      return next(err);
    }
  });

  router.delete("/:name", ensureAdmin, async function (req, res, next) {
    try {
      await Product.remove(req.params.name);
      return res.json({ deleted: req.params.name });
    } catch (err) {
      return next(err);
    }
  });
  
  
  module.exports = router;
  