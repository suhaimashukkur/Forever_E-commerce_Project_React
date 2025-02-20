const multer = require("multer");
const fileStorage = multer.diskStorage({
    destination:(req,file,cb) =>{
        cb(null,'images/')
    },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "" + file.originalname);
  },
});
const upload = multer({ storage: fileStorage });
module.exports = upload;
