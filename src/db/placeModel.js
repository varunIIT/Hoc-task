const mongoose=require('mongoose')
const Schema=mongoose.Schema

const placeSchema= new Schema({
    name:{
        type:String,
        required:true
    },
    latitude:{
        type:String,
        required:true
    },
    longitude:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    startMonth:{
        type:String,
        required:true
    },
    lastMonth:{
        type:String,
        required:true
    }
})

const PlaceModel=mongoose.model('PlaceModel',placeSchema)

module.exports={
    PlaceModel
}