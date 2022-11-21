const { submitContact } = require("../controllers/contactController");
const express = require("express");
const contactRouter = express.Router();

contactRouter.post("/contact", async (req, res) => {
  try {
    const contact = await submitContact(
      req.body.name, req.body.email, req.body.message
    )
    res.json(contact);
  } catch (err) {
    res.status(409).send(err.message);
  }
  
});

module.exports = contactRouter;
