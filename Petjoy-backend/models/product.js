"use strict";

const db = require("../db");
const { BadRequestError, NotFoundError } = require("../expressError");


class Product {

  static async create({ name, description, count_in_stock, price, imgUrl }) {

    const result = await db.query(
          `INSERT INTO products
           (name, description, count_in_stock, price, img_url)
           VALUES ($1, $2, $3, $4, $5)
           RETURNING name, description, count_in_stock, price, img_url AS "imgUrl"`,
        [
          name,
          description,
          count_in_stock,
          price,
          imgUrl,
        ],
    );
    const product = result.rows[0];

    return product;
  }

  static async get(name) {
    const productRes = await db.query(
          `SELECT name, 
                description, 
                count_in_stock, 
                price, 
                img_url AS "imgUrl"
           FROM products
           WHERE name = $1`,
        [name]);

    const product = productRes.rows[0];

    return product;
  }
  static async findAll() {
    const productRes = await db.query(
          `SELECT name, 
                description, 
                count_in_stock, 
                price, 
                img_url AS "imgUrl"
           FROM products`);

    return productRes.rows;
  }


  static async remove(name) {
    const result = await db.query(
          `DELETE
           FROM products
           WHERE name = $1
           RETURNING name`,
        [name]);
    const company = result.rows[0];

    if (!company) throw new NotFoundError(`No product: ${name}`);
  }
}


module.exports = Product;
