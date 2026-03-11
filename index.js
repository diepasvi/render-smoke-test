const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>¡Hola desde Renderizado! 🚀</h1><p>El smoke test ha funcionado correctamente. Eres un crack!!</p>');
});

app.listen(PORT, () => {
  console.log(`Servidor activo en puerto ${PORT}`);
});
