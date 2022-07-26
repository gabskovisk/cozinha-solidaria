const CozinhaSchema = require('../models/cozinhaSchema');

// GET
const getAllInputs = async (req, res) => {    
    try {
        CozinhaSchema.find(function(err, cozinha) {
            if (err) {
                res.status(500).send({
                    message: err.message
                });
            };
            return res.status(200).json(cozinha)
        });
    } catch (err) {
        console.error(err);
        res.status(500)        
    };
};

 // POST
const createInput = async (req, res) => {
    try {
        if(!req.body.name || !req.body.amount || !req.body.expire) {
            res.status(404).send({
                "message": "Mandatory fields need to be filled",
                "statusCode": 404
            });
        };

        const newInput = new CozinhaSchema(req.body);

        const savedInput = await newInput.save();

        res.status(201).send({
            "message": "Input created successfully",
            savedInput
        });
    } catch(err) {
        console.error(err);
        res.status(500).json({
            message: err.message
        });
    };
};
// PUT
const updateInput = async (req, res) => {    
    try {
        const inputFound = await CozinhaSchema.findById(req.params.id);

        inputFound.amount = req.body.amount || inputFound.amount;
        inputFound.expire = req.body.expire || inputFound.expire;

        const savedInputUpdate = await inputFound.save();
        res.status(200).send({
            "message": "Input updated successfully",
            savedInputUpdate
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: err.message
        });
    };    
};

//DELETE
const deleteInput = async (req,res) => {
    try {
        const deletedInput = await CozinhaSchema.findByIdAndDelete(req.params.id)    
        res.status(200).send({
            "message": "Input deleted successfully",
            deletedInput           
        });

    } catch(err) {
        console.error(err);
        res.status(500).send({
            message: err.message
        });
    };
};


module.exports = {
    getAllInputs,
    createInput,
    updateInput,
    deleteInput
}