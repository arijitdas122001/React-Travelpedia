import Razorpay from 'razorpay';
export const OrderCreation=async(req,res,next)=>{
    try {
        const body=req.body;
        const instance=new Razorpay({
            key_id:process.env.RAZORPAY_KEY_ID,
            key_secret:process.env.RAZORPAY_SECRET,
        });
        const optons=body;
        const order=await instance.orders.create(optons);
        if(!order){
            return res.status(400).send({"success":false,"message":"Payment failed"});
        }
        res.status(200).send(order);
    } catch (error) {
        next(error);
    }
}