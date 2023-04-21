const express = require('express')
const cors=require('cors')
const mongoose=require('mongoose');
const Products = require('./Products');
const stripe = require('stripe')(
    'sk_test_51MuThVSGOV4tg1qmAUDhlDOP5LXOMRchQiRvLuqkocAL2jB2rEYypocsjjQek72qtjp0XDQLvXuuykH8LsVx3dfr00C9TTONai'
);
const app=express();
const port=3001;


//Middlewares
app.use(express.json());
app.use(cors());


//connection

const connection_url="mongodb://localhost:27017";

mongoose.connect(connection_url,{
    useNewUrlparser: true,
    useUnifiedTopology: true,
})
//API

app.get('/',(req,res)=>res.status(200).send('Hello World'));

//add product

app.post('/products/add',(req,res)=>{
    const productDetail = req.body;

    console.log('Product Details>>>',productDetail);
    const pr=new Products({
        title: productDetail.title,
        imageURL:productDetail.imageURL,
        price:productDetail.price,
        rating:productDetail.rating,
    })
    pr.save().then(()=>{
        res.status(200).send("Saved")
    }).catch((err)=>{
        res.status(500).send(err.message);
    })

});

//api for payment

app.post('/payment/create', async(req,res)=>{
    const total=req.body.amount;
    console.log('Payment Request recieved for this rupees',total);

    const payment = await stripe.paymentIntents.create({
        amount:total,
        currency:'inr',
    });

    res.status(201).send({
        clientSecret:payment.client_secret,
});
});

app.listen(port,()=>console.log('Listening on port ',port));