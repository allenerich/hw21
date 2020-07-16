const router = require("express").Router();
const bookController = require("../../controllers/bookController");

// Matches with "/api/books"
router.route("/")
  .get(bookController.findAll)
  .post(bookController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(bookController.findById)
  .put(bookController.update)
  .delete(bookController.remove);

module.exports = router;
//makes api calls for the book db and sets up routes
//I see what it is doing by setting up the router connections and using get and post and put requests.  
//I even understand what these mean.  A get is a call for info or to find it.  the post is to make a 
//new entry into the database and the put is to update.  Once again, CRUD