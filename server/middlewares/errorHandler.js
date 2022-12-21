const errorHandler = async (fn) => {
     return async (req,res,next) => {
        try{
            await fn(req,res,next);
        }catch(err) {
            console.log('Internal server ',err.stack)
            res.status(500).json({
                status: false,
                msg: 'error.message',
                error: err
            })
        }
     }
}

module.exports = { errorHandler };