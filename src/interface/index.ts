import express from 'express';
import { configureDependencies } from '../infrastructure/utils/config';
import { connectDB } from '../infrastructure/database/connection'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config();


const app = express();
connectDB(); 

app.use(express.json());
app.use(cors());

const { despesaController, chatController } = configureDependencies();

app.post('/despesas', (req, res) => despesaController.create(req, res));
app.get('/despesas/:userId', (req, res) => despesaController.findAll(req, res));
app.post('/chat', (req, res) => chatController.open(req, res));
 

if (require.main === module) {
  const PORT = process.env.PORT || 3333;
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  })
}

export default app;