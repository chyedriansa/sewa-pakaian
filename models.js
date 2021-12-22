import mongoose from 'mongoose'

const Customer = mongoose.model('Customer', mongoose.Schema({
    name: String,
    phone_number: Number,
    address: String,
    created_at : Date,
}))

const Item = mongoose.model('Item', mongoose.Schema({
    name: String,
    price: Number,
    qty: Number,
    size: String,
    address: String,
    created_at: Date,
}))

const Transaction = mongoose.model('Transaction', mongoose.Schema({
    transaction_date: Date,
    total: Number,
    payment_price: Number,
    change: Number,
    customer_id: Number,
    created_at: Date,
}))

const TransactionDetail = mongoose.model('TransactionDetail', mongoose.Schema({
    transaction_id: Number,
    item_id: Number,
    start: Date, 
    end: Date,
    subtotal:Number,
    created_at: Date,
}))

export {Customer, Item, Transaction, TransactionDetail}