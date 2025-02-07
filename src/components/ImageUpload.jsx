import { useState } from "react"

const ImageUpload = () => {

    const [image, setImage] = useState()

    const changeImageHandler = (event) => {
        const fileImage = event.target.files[0]
        if (fileImage) {
            const img = URL.createObjectURL(fileImage)
            setImage(img)
        }
    }

    return (
        <>
            <div>
                <input type="file" id="img" hidden onChange={changeImageHandler} />
                <label htmlFor="img">Upload Image</label>
                {image &&
                    <img src={image} alt="upload img" />
                }
            </div>
        </>
    )
}


export default ImageUpload