import userModel from '../models/userModel.js';
import FormData from 'form-data';
import axios from 'axios';


export const generateImage = async (req, res) => {
    try{
        const {userId, prompt} = req.body;
        const user=await userModel.findById(userId);
        if(!user || !prompt){
            return res.json({success:false, message:"Missing Details"});
        }

        if(user.creditBalance===0||userModel.creditBalance<0){
            return res.json({success:false, message:"No Credits Available",creditBalance:user.creditBalance});
        }

        const formData= new FormData();
        formData.append('prompt', prompt);

        const {data} = await axios.post('https://clipdrop-api.co/text-to-image/v1',formData,{
            headers: {
                'x-api-key': "41eec7f6c9e80344282ea65b77f2e0548be3630eb7fd562e0c6e4f0f3691a0750e7ac29955b1c838b41f81b2480999a5",
                },
                responseType: 'arraybuffer',
        })

        const base64Image = Buffer.from(data, 'binary').toString('base64');
        const resultImage= `data:image/png;base64,${base64Image}`;

        await userModel.findByIdAndUpdate(userId, {creditBalance: user.creditBalance - 1});

        res.json({success:true,message:"Image Generated Successfully", creditBalance:user.creditBalance - 1,resultImage});

    }catch(error){
        console.log(error.message);
        res.json({success:false, message:error.message});
    }
}