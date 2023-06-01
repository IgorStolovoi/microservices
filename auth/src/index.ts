import express  from "express";


const app = express();

app.use(express.json());

app.get('/',()=>{
    console.log('here')
})

app.listen(3000, ()=>{
    console.log('listening on port 3000')
});
