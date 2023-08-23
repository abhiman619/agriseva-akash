const express = require('express');
const Land = require('../models/land');

const router = express.Router();

router.post('/send', async (req, res) => {
  try {
    const landData = req.body;
    const land = new Land(landData);
    await land.save();
    res.status(201).json({ message: 'Land information saved successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while saving land information.' });
  }
});
router.delete('/delete', async (req, res) => {
    const landName = req.params.name;
    try {
      const result = await Land.deleteOne({ landName });
      console.log(result)
      if (result.deletedCount === 0) {
        res.status(404).json({ message: 'Land not found.' });
      } else {
        res.json({ message: 'Land deleted successfully.' });
      }
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while deleting land.' });
    }
  });



router.put('/update', async (req, res) => {
  const landName = req.params.name;
  const updatedData = req.body;
  try {
    const result = await Land.updateOne({landName}, { $set: updatedData });

    if (result.nModified === 0) {
      res.status(404).json({ message: 'Land not found.' });
    } else {
      res.json({ message: 'Land updated successfully.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while updating land.' });
  }
});

module.exports = router;

  
router.get('/all', async (req, res) => {
  try {
    const lands = await Land.find();
    res.json(lands);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching land information.' });
  }
});

module.exports = router;
