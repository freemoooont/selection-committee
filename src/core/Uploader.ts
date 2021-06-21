import multer from 'multer';

export const uploader = multer({
    storage: multer.diskStorage({
        destination: function (_, __, cb) {
            cb(null, 'files');
        },
        filename: function (_, file, cb) {
            cb(null, file.fieldname  + '.' + file.mimetype.split('/').pop());
        },
    }),
});
