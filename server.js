import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express'
const app = express()
import morgan from 'morgan';
import { nanoid } from 'nanoid';


let jobs = [
  { id: nanoid(), company: 'apple', position: 'front-end' },
  { id: nanoid(), company: 'google', position: 'back-end' },
]

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}


app.use(express.json());

app.get('/', (req,res) => {
    res.send('Hello World');
});


app.post('/', (req,res) =>{
    console.log(req);
    res.json({message:'data received', data:req.body })
})


//Get all jobs
app.get('/api/v1/jobs', (req, res) => {
  res.status(200).json({ jobs });
});

// Create jobs

app.post('/api/v1/jobs', (req, res) => {
    const { company, position } = req.body;
  if (!company || !position) {
    return res.status(400).json({ msg: 'please provide company and position' });
  }
});

const port = process.env.PORT || 5100


app.listen(port, () => {
    console.log(`server running on PORT ${port}...`);
})