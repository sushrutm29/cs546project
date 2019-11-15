const express = require('express');
const router = express.Router();
const data = require('../data');
const userPrefData = data.userPreferences;

router.get('/preferences', async(req,res) => {
    try {
        res.status(200).render('pages/userPreferencesForm' , {partial: "preferences-scripts"});
    } catch (e) {
        return res.status(404).json({error: e.message});
    }
})

router.post('/home', async(req,res) => {
    try {
        let userPrefInput = req.body;
        let specialNeeds;
        if(!userPrefInput.specialNeeds) {
            specialNeeds = [];
        } else {
            specialNeeds = userPrefInput.specialNeeds;
        }
        const userPref = await userPrefData.addUserPreferences(userPrefInput.gender,userPrefInput.dob,userPrefInput.mealPref,userPrefInput.tourType,userPrefInput.nTravelers, specialNeeds, userPrefInput.budget,userPrefInput.city, userPrefInput.travelDateStart, userPrefInput.travelDateEnd, req.session.userID);
        if(userPref!==true) {
            return res.status(400).json({error: userPref});
        } else {
            return res.status(200).json({inserted: true});
        }
    } catch (e) {
        return res.status(400).json({error: e.message});
    }
})

module.exports = router;