import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const randomName = uuidv4();
    cb(null, `${randomName}.${file.mimetype.split('/')[1]}`);
  },
});

export default multer({ storage: storage });