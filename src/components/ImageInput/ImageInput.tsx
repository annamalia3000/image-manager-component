import { UploadImages } from "../UploadImages/UploadImages";
import { useState } from "react";
import classes from "./imageInput.module.css";

type FileData = {
  name: string;
  id: number;
  src: string;
};

export const ImageInput: React.FC = () => {
  const [images, setImages] = useState<FileData[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const filesArray = Array.from(files);

      filesArray.forEach((file) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          setImages((prevImages) => [
            ...prevImages,
            {
              name: file.name,
              id: Math.random(),
              src: event.target?.result as string,
            },
          ]);
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const handelRemoveImg = (id: number): void => {
    setImages((prevImages) => prevImages.filter((file) => file.id !== id));
  };

  return (
    <div className={classes["container"]}>
      <div className={classes["image-input-container"]}>
        <input
          className={classes["image-input"]}
          type="file"
          accept="image/*"
          onChange={handleInputChange}
          multiple
        />
        <div className={classes["img-input-click"]}>Click to select</div>
      </div>
      <div className={classes["images-container"]}>
        {images.map((file) => (
          <UploadImages
            key={file.id}
            file={file}
            handleRemoveImg={handelRemoveImg}
          />
        ))}
        <div className={classes["image-pre"]}>
        <button
        className={classes["remove-btn"]}
        type="button"
      >
        <i className="fa fa-times"></i>
      </button>
        </div>
      </div>
    </div>
  );
};
