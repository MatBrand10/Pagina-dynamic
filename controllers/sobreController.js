// controllers/sobreController.js
exports.getSobre = (req, res) => {
  const appName = 'Catálogo de Filmes';
  const descricao = 'Este projeto demonstra um pequeno catálogo de filmes usando Node.js, Express e Handlebars.';
  const features = [
    'Listagem de filmes com each',
    'Condicionais (if/else) para mostrar status',
    'Estilização com CSS',
    'Interações simples com JavaScript'
  ];
  const mostrarContato = true;

  res.render('sobre', {
    appName,
    descricao,
    features,
    mostrarContato
  });
};