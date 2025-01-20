import React, { useState } from 'react'

const ImageUpload = () => {
    const [uploadImage, setUploadImage] = useState(null);
    const changeHandler = (event) => {
        const file = event.target.files[0];
        if (file) {
            const image = URL.createObjectURL(file);
            setUploadImage(image);
        }
    };

    return (
        <>
            <input
                accept="image/*"
                type="file"
                id="my-file"
                onChange={changeHandler}
                hidden
            />
            <label htmlFor="my-file">Upload</label>
            {uploadImage && (
                <img
                    src={uploadImage}
                    alt="Uploaded"
                />
            )}
        </>
    )
}


export default ImageUpload