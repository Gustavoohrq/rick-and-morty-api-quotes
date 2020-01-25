const ptBr = require("../store/pt_br.json");
const enUs = require("../store/en_us.json");

const store = {
  'pt_br': ptBr,
  'en_us': enUs
}

module.exports = {
  async index(req, res) {
    const { language } = req.params;
    const choice = store[language] || false;
    
    // Languages
    if (choice) return res.json(choice);

    return res.status(404).json({
      message: "The language does not exist"
    });
  },

  async show(req, res) {
    const { id, language } = req.params;
    const choice = store[language] || false;
    const random = Math.floor(Math.random() * choice.length) + 1;
    const idOr = id === 'random' ? random : id;

    // Languages
    if (choice)
      return res.json(choice.find(item => item.id === Number(idOr)));

    return res.status(404).json({
      message: "The language does not exist"
    });
  }
};
