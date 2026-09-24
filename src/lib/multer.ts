import multer from 'multer';



const storage = multer.memoryStorage();

export const uploadCourierDocs = multer({
  storage,
  limits: {
    fileSize: 6 * 1024 * 1024, 
  },
  fileFilter: (req, file, cb) => {
   
   
  },
}).fields([
  { name: 'drivingLicense', maxCount: 1 },
  { name: 'nidCard', maxCount: 1 },
]);