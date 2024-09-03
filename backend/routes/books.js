const express = require ("express");
const booksController=require("../controller/booksController");
const router= express.Router();
const upload = require('../middleware/upload');

router.post("/create",upload.single('image'),booksController.createBook);
router.delete("/delete/:id",booksController.deleteBook);
router.get("/getAllBooks",booksController.getAllBooks)

module.exports= router;  