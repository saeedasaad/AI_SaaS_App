import express from "express";
import { auth } from "../middlewares/auth.js";
import { generateArticle, generateBlogTitle, generateImage, resumeReview } from "../controllers/aicontroller.js";
import { upload } from "../configs/Multer.js";

const aiRouter = express.Router();

aiRouter.post('/generate-article', auth, generateArticle)
aiRouter.post('/generate-blog-title', auth, generateBlogTitle)
aiRouter.post('/generate-image', auth, generateImage)
aiRouter.post('/remove-image-background', upload.single('image'), auth, generateImage)
aiRouter.post('/remove-image-object', upload.single('image'), auth, generateImage)
aiRouter.post('/resume-review', upload.single('resume'), auth, resumeReview)

export default aiRouter

