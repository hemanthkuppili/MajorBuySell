const cloundinary = require("cloudinary").v2;
const fs = require("fs");
const path = require("path");

cloundinary.config({
    could_name:"dy21tqocb",
    api_key:"418582597657657",
    api_secret: "oPko-I0S9amXpdykpN1jRhF2Za0",
});
const uploadOnCloudinary = async(localFilePath)=>{
    try{
        const formattedPath = path.resolve(localFilePath).replace(/\\/g, "/");
        const result = await cloundinary.uploader.upload(formattedPath,{resource_type:"image",})
        fs.unlinkSync(formattedPath);

        return result;
    }catch(error){
        console.error("Cloundinary upload error:", error)
         if (fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath); // Cleanup even on failure
    }
    return null;
    }
};
module.exports = uploadOnCloudinary;