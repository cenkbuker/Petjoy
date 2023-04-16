"use strict";

const jsonschema = require("jsonschema");
const express = require("express");

const { BadRequestError } = require("../expressError");
const { ensureAdmin, ensureCorrectUserOrAdmin } = require("../middleware/auth");
const Product = require("../models/product");

const productNewSchema = require("../schemas/productNew.json");

const router = new express.Router();

router.post("/", ensureAdmin, async function (req, res, next) {
  try {
    const validator = jsonschema.validate(req.body, productNewSchema);
    if (!validator.valid) {
      const errs = validator.errors.map((e) => e.stack);
      throw new BadRequestError(errs);
    }

    const product = await Product.create(req.body);
    return res.status(201).json({ product });
  } catch (err) {
    return next(err);
  }
});

router.patch("/", async function (req, res, next) {
  try {
    const product = await Product.updateProduct(req.body);
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
router.get("/:username/saved", async function (req, res, next) {
  try {
    const products = await Product.getSavedProducts(req.params.username);
    return res.json({ products });
  } catch (err) {
    return next(err);
  }
});
router.post(
  "/:id/:username/saved",
  ensureCorrectUserOrAdmin,
  async function (req, res, next) {
    try {
      const products = await Product.saveProduct(
        req.params.id,
        req.params.username
      );
      return res.json({ products });
    } catch (err) {
      return next(err);
    }
  }
);

router.get("/:id/comments", async function (req, res, next) {
  try {
    const comments = await Product.getCommentsForProducts(req.params.id);
    return res.json({ comments });
  } catch (err) {
    return next(err);
  }
});

router.post(
  "/:id/comments",
  ensureCorrectUserOrAdmin,
  async function (req, res, next) {
    try {
      const comment = await Product.addCommentsForProducts(
        req.params.id,
        req.body
      );
      return res.status(201).json({ comment });
    } catch (err) {
      return next(err);
    }
  }
);

router.delete("/:id/comments/:commentId", async function (req, res, next) {
  try {
    const productId = req.params.id;
    const commentId = req.params.commentId;
    await Product.deleteComment(productId, commentId);
    return res.json({ deleted: commentId });
  } catch (err) {
    return next(err);
  }
});

router.get("/:id", async function (req, res, next) {
  try {
    const product = await Product.get(req.params.id);
    return res.json({ product });
  } catch (err) {
    return next(err);
  }
});

router.patch("/:id", ensureAdmin, async function (req, res, next) {
  try {
    const product = await Product.updateProduct(req.body);
    return res.json({ product });
  } catch (err) {
    return next(err);
  }
});

router.delete("/:id", ensureAdmin, async function (req, res, next) {
  try {
    await Product.remove(req.params.id);
    return res.json({ deleted: req.params.id });
  } catch (err) {
    return next(err);
  }
});

router.get("/cart", async function (req, res, next) {});
module.exports = router;
