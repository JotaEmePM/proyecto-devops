import express from "express";
import fs from 'fs'

import { dividir, multiplicar, restar, sumar } from "./calcular.js";

//dotenv.config();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hola mundo");
});

app.post("/calcular", (req, res) => {
  const operacion = req.body;
  if (operacion.operacion === "add") {
    return res.send({ resultado: sumar(operacion.num1, operacion.num2) });
  } else if (operacion.operacion === "min") {
    return res.send({ resultado: restar(operacion.num1, operacion.num2) });
  } else if (operacion.operacion === "div") {
    return res.send({ resultado: dividir(operacion.num1, operacion.num2) });
  } else if (operacion.operacion === "mul") {
    return res.send({ resultado: multiplicar(operacion.num1, operacion.num2) });
  }
  return res.send({ resultado: "hola mundo" });
});

app.get("/info", (req, res) => {
  return res.send(`AMBIENTE: ${process.env.AMBIENTE}`)
})

app.get('/api', (req, res) => {
  const apikey = fs.readFileSync(process.env.API_KEY || '', 'utf8');
  return res.send(`APIKEY: ${apikey}`)
})

export default app;