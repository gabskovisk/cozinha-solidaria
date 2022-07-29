const CozinhaSchema = require('../models/cozinhaSchema');

// GET
const getAllInputs = async (req, res) => {    
    try {
        CozinhaSchema.find(function(err, cozinha) {
            if (err) {
                res.status(500).send({
                    message: err.message
                })
            }
            return res.status(200).json(cozinha)
        })
    } catch (err) {
        console.error(err);
        res.status(500)        
    };
};

const getInputById = async (req, res) =>  {
    try {
        const findInput = await CozinhaSchema.getInputById(req.params.id)
        res.status(200).send({
            "Message":"Input found:",
            findInput
        })
        
    } catch (err) {
        console.error(err)
        res.status(404).json({ 
            message: err.message 
        });
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





//DELETE
    const deleteInput = async (req,res) => {
        try {
            const deletedInput = await CozinhaSchema.deleteInput(req.params.id)
    
            res.status(200).send({
                "message": "Input deleted successfully",
                deletedInput
            })
        } catch(err) {
            console.error(err);
        };
    };


module.exports = {
    getAllInputs,
    getInputById,
    createInput,
    deleteInput
}