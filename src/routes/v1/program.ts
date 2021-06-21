import express, {Response} from "express";
import {ProgramModel} from "../../database/model/Program";
import {fileToJson} from "../../utils/Jsonizer";
import {uploader} from "../../core/Uploader";

const router = express.Router();

router.post(
    '/upload',
    uploader.single('file'),
    async (req: any, res: Response): Promise<void> => {
        try {
            // @ts-ignore
            const array = await fileToJson(req.file.path);
            const data: any = {
                programFullName: req.body.programFullName,
                programShortName: req.body.programShortName.toLowerCase(),
                instituteShortName: req.body.instituteShortName,
                sem1: Object.values(array.Лист1[0]),
                sem2: Object.values(array.Лист1[1]),
                sem3: Object.values(array.Лист1[2]),
                sem4: Object.values(array.Лист1[3]),
                sem5: Object.values(array.Лист1[4]),
                sem6: Object.values(array.Лист1[5]),
                sem7: Object.values(array.Лист1[6]),
                sem8: Object.values(array.Лист1[7])
            }
            await ProgramModel.create(data);

            res.json({
                status: 'True',
                data
            })
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error,
            });
        }
    }
);

router.get(
    '/',
    async (req: any, res: Response): Promise<void> => {
        try {
            console.log(req.query.name);
            const programShortName = req.query.name;
            const program = await ProgramModel.findOne({programShortName}).exec();

            if (!program) {
                res.status(404).send();
                return;
            }

            res.json({
                status: 'success',
                data: program,
            });
        } catch (error) {
            res.status(500).json({
                status: "error",
                error: error
            })
        }
    }
)

export default router;