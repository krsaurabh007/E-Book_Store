const Book = require('../model/Books');

const createBook = async (req, res) => {
  try {
    const { title, author, price, category, language, rating } = req.body;
    const existingBook = await Book.findOne({ title });
    if (existingBook) {
      return res.status(400).json({ message: 'Book already Present' });
    }
    const book = new Book({
      title: title,
      author: author,
      price: price,
      category: category,
      language: language,
      rating: rating,
      image: req.file ? `/uploads/${req.file.filename}` : '',
    });
    const createdBook = await book.save();
    res
      .status(200)
      .json({ message: 'book added successfully', data: createdBook });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByIdAndDelete(id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json({ message: 'Deleted Successfully' });
  } catch (error) {
    res.status(500).json({ message: 'server error', error });
  }
};

const getAllBooks = async(req,res)=>{
try{
    const books=await Book.find();
    res.status(200).json({message:'Books fetched sccessfully',data:books});
}
catch(err){
res.status(500).json({message:'server error',err});
}
}

module.exports = {
  createBook,
  deleteBook,
  getAllBooks
};
