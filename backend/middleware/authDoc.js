import jwt from 'jsonwebtoken'

// doctor authentication middleware

const authDoc = async (req, res, next) => {
    try {
        const {dtoken} = req.headers
        if (!dtoken) {
            return res.json({success:false,messase:'Not Authorized Login Again'})
        }
        const dtoken_decode = jwt.verify(dtoken, process.env.JWT_SECRET)
        req.body.docId = dtoken_decode.id
        next()

    } catch (error) {
        console.log(error);
        res.json({success:false,messase:error.messase})
        
    }
}

export default authDoc