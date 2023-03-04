const controller = async (req, res, next) => {
  const query = req.query.language.toLowerCase();
  
  if(query === "english") return res.send(`<h1>Hello Word</h1>`)
  else if(query === "hindi") return res.send(`<h1>Namastey Sansar</h1>`);
  else if(query === "french") return res.send(`<h1>Bonjour le monde</h1>`);
  return res.send(`<h1">Something went wrong!!!</h1>`);
};

module.exports = controller;
