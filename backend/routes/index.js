const express = require("express");
const userRouter = require("./user");
const booksRouter=require("./books")
const router = express.Router();

router.use("/users", userRouter);
router.use("/books",booksRouter)

module.exports = router;
