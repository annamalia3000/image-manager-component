import classes from "./uploadImages.module.css";

type UploadImageProps = {
  file: {
    name: string;
    id: number;
    src: string;
  };
  handleRemoveImg: (id: number) => void;
};

export const UploadImages: React.FC<UploadImageProps> = ( {file, handleRemoveImg}) => {

  return (
    <div className={classes["img-container"]} key={file.id}>
      <img
        src={file.src}
        alt={file.name}
        className={classes["uploaded-image"]}
      />
      <button
        className={classes["remove-btn"]}
        type="button"
        onClick={() => handleRemoveImg(file.id)}
      >
        <i className="fa fa-times"></i>
      </button>
    </div>
  );
};
