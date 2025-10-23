// controllers/homeController.js
exports.getHome = (req, res) => {
  const filmes = [
    { id: 1, titulo: "Interestelar", ano: 2014, assistido: true },
    { id: 2, titulo: "Oppenheimer", ano: 2023, assistido: false },
    { id: 3, titulo: "Duna", ano: 2021, assistido: true },
    { id: 4, titulo: "Matrix", ano: 1999, assistido: false }
  ];

  const mostrarMensagem = filmes.length > 0;

  res.render('home', {
    filmes,
    mostrarMensagem
  });
};