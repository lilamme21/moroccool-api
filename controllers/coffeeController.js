import Cafe from '../models/Cafe.js';

/////////////////////////*Making of the CRUD*////////////////////

//Create new Cafe//
export const createCafe = async (req, res, next) => {
  const newCafe = new Cafe(req.body);

  try {
    const savedCafe = await newCafe.save();
    res.status(200).json(savedCafe);
  } catch (err) {
    next(err);
  }
};

//Update Cafe//
export const updateCafe = async (req, res, next) => {
  const id = req.params.id;

  try {
    const updatedCafe = await Cafe.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(updatedCafe);
  } catch (err) {
    next(err);
  }
};

//Delete Cafe//
export const deleteCafe = async (req, res, next) => {
  const id = req.params.id;

  try {
    await Cafe.findByIdAndDelete(id);

    res.status(200).json({ message: 'Cafe Deleted Successfully' });
  } catch (err) {
    next(err);
  }
};

//Get Single Cafe//
export const getSingleCafe = async (req, res, next) => {
  const id = req.params.id;

  try {
    const singleCafe = await Cafe.findById(id);

    res.status(200).json(singleCafe);
  } catch (err) {
    res.status(500).json({ message: 'Cafe Not Found' });
  }
};

//Get All Cafes Cafe//
export const getAllCafes = async (req, res, next) => {
  const AllCafes = await Cafe.find({});
  try {
    res.status(200).json(AllCafes);
  } catch (err) {
    res.status(500).json({ message: "Can't Get Cafes" });
  }
};
