import { v2 as cloudinary } from 'cloudinary'

const cloud_name = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'demo'
const api_key = process.env.CLOUDINARY_API_KEY || '123456789'
const api_secret = process.env.CLOUDINARY_API_SECRET || 'secret'

cloudinary.config({
  cloud_name,
  api_key,
  api_secret,
})

export default cloudinary