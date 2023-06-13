import Hotel from '../models/Hotel.js'

/////////////////////////*Making of the CRUD*//////////////////// 

//Create new Hotel//
export const createHotel = async (req,res,next)=>{
    const newHotel = new Hotel(req.body);

    try{
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
    }
    catch(err){
        next(err);
    }
}

//Update Hotel//
export const updateHotel = async (req,res,next)=>{
    const id = req.params.id

    try{
        const updatedHotel = await Hotel.findByIdAndUpdate(id, {
            $set : req.body
        }, {new:true})

        res.status(200).json(updatedHotel);
    }
    catch(err){
        next(err);
    }
}

//Delete Hotel//
export const deleteHotel = async (req,res,next)=>{

    const id = req.params.id

    try{
        await Hotel.findByIdAndDelete(id)

        res.status(200).json({message:"Hotel Deleted Successfully"});
    }
    catch(err){
        next(err);
    }
}

//Get Single Hotel//
export const getSingleHotel = async (req,res,next)=>{
    const id = req.params.id

    try{
        const singleHotel = await Hotel.findById(id)

        res.status(200).json(singleHotel);
    }
    catch(err){
        next(err);
    }
}

//Get All Hotels Hotel//
export const getAllHotels = async (req,res,next)=>{

    try{

    }
    catch(err){
        next(err);
    }
}

