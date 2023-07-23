import { prisma } from "../../../libs/prisma.libs";
import path from "path";
import multer from "multer";

export const config = {
    api: {
        bodyParser: false,
    },
};

const upload = multer({
    storage: multer.diskStorage({
        destination: "./public/uploads",
        filename: (req, file, cb) => {
            const ext = path.extname(file.originalname);
            const name = path.basename(file.originalname, ext);
            cb(null, `${name}-${Date.now()}${ext}`);
        }
    }),
    limits: {
        fileSize: 10000000, // 1 MB
    },
});

//how to update product
export default async (req, res) => {
    if (req.method === "PUT") {
        upload.single("image")(req, res, async (err) => {
            if (err) {
                return res.status(400).json({ error: err.message });
            }
            const {visi,  misi } = req.body;
            const image = req.file ? `/uploads/${req.file.filename}` : req.body.image;
            const id = req.query.id;
            const updateKabinet = await prisma.kabinet.update({
                where: {
                    id: id,
                },
                data: {
                    visi: visi,
                    misi: misi,
                    image: image,
                },
            });
            if (updateKabinet) {
                res.status(200).json({ data: updateKabinet });
            }
        }); 
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
};