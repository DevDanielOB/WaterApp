// index.ts
import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('API está funcionando!');
});

app.get('/dados', async (req, res) => {
  try {
    // Sua lógica para obter dados da API externa usando Axios
    res.send('Rota /dados');
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao obter dados da API externa');
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
