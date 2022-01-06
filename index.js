const express = require('express');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const serviceAccount = require('./.veg-non-veg-api-firebase-adminsdk-kjam0-03680b2f9a.json');
initializeApp({credential: cert(serviceAccount)});
const db = getFirestore();
const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

async function fetchData(db) {
    try {
        const dbRef = db.collection('database').doc('shoes');
        const doc = await dbRef.get();
        if (!doc.exists) {
            return {'status': 'failed'};
        } else {
            console.log('GET:getProductList.do | SUCCESS');
            let dataArray = [];
            for (const keys in doc.data()){
                dataArray.push(doc.data()[keys]);
            }
            return dataArray;
        }
    } catch(err) {
        console.log('GET:getProductList.do | FAILED');
        console.log(err);
    }
}

async function fetchCartItemsForUser(db, user_id){
    try {
        const dbRef = db.collection('database').doc('users');
        const doc = await dbRef.get();
        if (!doc.exists){
            return {'status' : 'failed'};
        } else {
            console.log('GET:fetchCartItemsForUser.do | SUCCESS')
            return doc.data()[0]['cart_items'];
        }
    } catch(err) {
        console.log('GET:fetchCartItemsForUser.do | FAILED')
    }
}

async function fetchWishlistItemsForUser(db, user_id) {
    try {
        const dbRef = db.collection('database').doc('users');
        const doc = await dbRef.get();
        if (!doc.exists){
            return {'status' : 'failed'};
        } else {
            console.log('GET:getWishlistItems.do | SUCCESS')
            return doc.data()[0]['wishlist_items'];
        }
    } catch(err) {
        console.log('GET:getWishlistItems.do | FAILED')
    }
}

async function fetchUserDetails(db, user_id){
    try {
        const dbRef = db.collection('database').doc('users');
        const doc = await dbRef.get();
        if (!doc.exists){
            return {'status' : 'failed'};
        } else {
            console.log('GET:fetchUserDetails.do | SUCCESS')
            return doc.data();
        }
    } catch(err) {
        console.log('GET:fetchUserDetails.do | FAILED')
    }
}

app.get('/getProductList.do', async (req, res) => {
    const data = await fetchData(db);
    res.send(data);
});

app.get('/getCartItems.do', async (req, res) => {
    const user_id = '0';
    const data = await fetchCartItemsForUser(db, user_id);
    res.send(data);
})

app.get('/getWishlistItems.do', async (req, res) => {
    const user_id = '1';
    const data = await fetchWishlistItemsForUser(db, user_id);
    res.send(data);
})

app.get('/getUserDetails.do', async (req, res) => {
    const user_id = '1';
    const data = await fetchUserDetails(db, user_id);
    res.send(data);
})

const port = process.env.PORT || 8081;
app.listen(port, () => console.log(`api listening on http://localhost:${port} `));