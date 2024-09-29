import multer from 'multer';
import path from 'path';

// Configure Multer Storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadPath = path.resolve(__dirname, '../../../public/data/uploads'); // Ensure this path is correct
        cb(null, uploadPath); // Specify the upload path
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname)); // Create unique filename
    }
});

// Create the upload middleware
const upload = multer({ storage: storage, limits: { fileSize: 3e7 } }); // 30 MB limit

export default upload;
