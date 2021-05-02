const placeRoutes=require('express').Router()
const {PlaceModel}=require('./../db/placeModel')

placeRoutes.post('/addPlace',async (req,res)=>{
    const addedPlace=await PlaceModel.create(req.body)
    res.send(addedPlace)
})

placeRoutes.get('/allPlace',async (req,res)=>{
    const allPlace=await PlaceModel.find({})
    res.send(allPlace)
})
placeRoutes.delete('/deletePlace/:id',async(req,res)=>{
    const deletedPlace=await PlaceModel.findByIdAndRemove(req.params.id)
    res.send(deletedPlace)
})
placeRoutes.get('/getPlace/:id',async(req,res)=>{
    const gotPlace=await PlaceModel.findById(req.params.id)
    res.send(gotPlace)
})

placeRoutes.patch('/updatePlace/:id',async(req,res)=>{
    const prePlace=await PlaceModel.findByIdAndUpdate(req.params.id,req.body)
    res.send(prePlace)
})
module.exports={
    placeRoutes
}
