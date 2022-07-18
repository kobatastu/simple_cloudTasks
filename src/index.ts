import express from 'express'

import { createHttpTaskWithToken } from './createTask'

const QUEUE_NAME = 'simple-cloudtask';
const QUEUE_LOCATION= 'asia-northeast1';
const FUNCTION_URL= 'cloud runのURLを設定';
const GOOGLE_CLOUD_PROJECT = 'PROJECT IDを設定'
const SERVER_PORT = '8080'

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json()); 

app.post('/enqueue-task', (req,res) => {
  const { name, date } = req.body
  const data = { text: `僕の名前は、${name}です`, birthday: date }
  createHttpTaskWithToken(
    GOOGLE_CLOUD_PROJECT,
    QUEUE_NAME,
    QUEUE_LOCATION,
    FUNCTION_URL,
    data
  );
  return res.status(200).send('enqueue task!');
})

app.post('/task-handler', (req,res) => {
  const { text, birthday } = req.body
  console.log(text, birthday)
  return res.status(200).send('task handler called!!')
})

app.listen(SERVER_PORT, () => {
  console.log(`server is started at port: ${SERVER_PORT}`)
})