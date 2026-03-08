import { cloudinary } from '../config';
import { Readable } from 'stream';

interface CloudinaryUploadResult {
    secure_url: string;
    public_id: string;
    width: number;
    height: number;
    format: string;
    bytes: number;
}

/**
 * Upload a file buffer to Cloudinary
 * @param file - Multer file object with buffer
 * @param folder - Cloudinary folder to upload to (e.g. 'products', 'avatars')
 * @returns Upload result with secure_url and public_id
 */
export const uploadToCloudinary = (
    file: Express.Multer.File,
    folder: string = 'uploads'
): Promise<CloudinaryUploadResult> => {
    return new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
            {
                folder: `ahigem/${folder}`,
                resource_type: 'image',
                transformation: [
                    { quality: 'auto', fetch_format: 'auto' },
                ],
            },
            (error, result) => {
                if (error) {
                    return reject(error);
                }
                if (!result) {
                    return reject(new Error('No result from Cloudinary'));
                }
                resolve({
                    secure_url: result.secure_url,
                    public_id: result.public_id,
                    width: result.width,
                    height: result.height,
                    format: result.format,
                    bytes: result.bytes,
                });
            }
        );

        // Stream the buffer to Cloudinary
        const readableStream = new Readable();
        readableStream.push(file.buffer);
        readableStream.push(null);
        readableStream.pipe(uploadStream);
    });
};

/**
 * Delete an image from Cloudinary by its public_id
 * @param publicId - The public_id of the image to delete
 * @returns Cloudinary deletion result
 */
export const deleteFromCloudinary = async (
    publicId: string
): Promise<{ result: string }> => {
    return cloudinary.uploader.destroy(publicId);
};

/**
 * Upload multiple files to Cloudinary
 * @param files - Array of Multer file objects
 * @param folder - Cloudinary folder to upload to
 * @returns Array of upload results
 */
export const uploadMultipleToCloudinary = async (
    files: Express.Multer.File[],
    folder: string = 'uploads'
): Promise<CloudinaryUploadResult[]> => {
    const uploadPromises = files.map((file) => uploadToCloudinary(file, folder));
    return Promise.all(uploadPromises);
};
