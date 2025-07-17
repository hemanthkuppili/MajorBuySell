const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix =`${Date.now()}-${file.originalname}`
    cb(null,uniqueName)
  },
});
const fileFilter = (req,file,cb)=>{
    const allowedTypes =/jpeg|jpg|png|webp/;
    const ext = path.extname(file.originalname).toLowerCase();
    if(!allowedTypes.test(ext)){
        return cb(newError("on;y image files are allowed "),false);
    }
    cb(null,true);
};

const upload =  multer({
    storage,
    fileFilter,
    limits:{
        fileSize:10*1024*1024,
    },
});
module.exports = upload;
