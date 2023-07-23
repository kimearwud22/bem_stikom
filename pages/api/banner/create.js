import { prisma } from "../../../libs/prisma.libs";
import path from "path";
import multer from "multer";

export const config = {
  api: {
    bodyParser: false,
  },
};
 
const uploads = multer({
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

export default async function handler(req, res) {
  if (req.method === "POST") {
    uploads.single("image")(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ error: err.message });
      }
      const image = `/uploads/${req.file.filename}`;
      try {
        const banner = await prisma.banner.create({
          data: {
            image,
          },
        });
        res.status(201).json({ data: banner });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}