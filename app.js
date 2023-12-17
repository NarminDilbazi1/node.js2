
const express = require('express');
const app = express();
const products = [
    {id:1 ,name:'çanta' ,price:'30 azn',quantity:'2'},
    {id:2 ,name:'köynək' ,price:'25 azn',quantity:'1'},
    {id:3 ,name:'qələm' ,price:'1 azn',quantity:'5'},
    {id:4 ,name:'ayaqqabı' ,price:'70 azn',quantity:'1'},
    {id:5 ,name:'şalvar' ,price:'40 azn',quantity:'1'},
    {id:6 ,name:'şərf' ,price:'15 azn',quantity:'1'},
    {id:7 ,name:'çanta' ,price:'30 azn',quantity:'2'},
    {id:8 ,name:'çanta' ,price:'30azn',quantity:'2'},
    {id:9 ,name:'çanta' ,price:'30azn',quantity:'2'},
    {id:10,name:'çanta' ,price:'30azn',quantity:'2'},
]
app.get('/', (req,res)=>{

    res.send("home page")
})

app.get('/products', (req,res)=>{
   
    res.send(products)
})
app.get('/products/:id', (req,res)=>{
    const productID = req.params.id;
    const selectedPorduct = products.find(product=>product.id == productID)

    if(selectedProduct){

        res.send(selectedProduct)
    }else{
        res.status(404).send('Məhsul yoxdur')
    }
})

app.listen(4000, ()=>{
    console.log("server quruldu");
})