let Blog = require("./models/Blog");
let rotas = require("express").Router();

rotas.get("/", async (req, res) => {
  const getAll = await Blog.find();

  return res.json(getAll).status(200);
});

rotas.get("/:id", async (req, res) => {
  const { id } = req.params;
  const getBlog = await Blog.findById(id);
  return res.json(getBlog).status(200);
});

rotas.post("/", async (req, res) => {
  const createBlog = new Blog({
    title: req.body.title,
    description: req.body.description,
  });
  await createBlog.save();
  return res.status(201).json({ sucess: createBlog });
});

module.exports = rotas;
