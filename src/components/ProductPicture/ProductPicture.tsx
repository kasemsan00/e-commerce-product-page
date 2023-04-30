import { useEffect, useRef, useState } from "react";
import ModalPicture from "./ModalPicture";

interface DisplayPictureProps {
  showArrow: boolean;
  setShowModal: (arg0: boolean) => void;
}
const imageFile = [
  {
    name: "image-product-1.jpg",
    thumbnail: "image-product-1-thumbnail.jpg",
  },
  {
    name: "image-product-2.jpg",
    thumbnail: "image-product-2-thumbnail.jpg",
  },
  {
    name: "image-product-3.jpg",
    thumbnail: "image-product-3-thumbnail.jpg",
  },
  {
    name: "image-product-4.jpg",
    thumbnail: "image-product-4-thumbnail.jpg",
  },
];
const DisplayPicture = ({ showArrow, setShowModal }: DisplayPictureProps) => {
  const previousArrowRef = useRef<HTMLDivElement>(null);
  const nextArrowRef = useRef<HTMLDivElement>(null);
  const [selectImageIndex, setSelectImageIndex] = useState(0);
  const [selectImage, setSelectImage] = useState(imageFile[selectImageIndex]);
  const handleSelectImage = (index: number) => {
    setSelectImageIndex(index);
  };
  const handleClickNextPicture = () => {
    setSelectImageIndex((state) => state + 1);
  };
  const handleClickPreviousPicture = () => {
    setSelectImageIndex((state) => state - 1);
  };
  useEffect(() => {
    if (selectImageIndex > imageFile.length - 1) {
      setSelectImageIndex(imageFile.length - 1);
      return;
    }
    if (selectImageIndex < 0) {
      setSelectImageIndex(0);
      return;
    }
    setSelectImage(imageFile[selectImageIndex]);
  }, [selectImageIndex]);

  return (
    <>
      <div className="main-picture" onClick={() => setShowModal(true)}>
        {!showArrow ? (
          <>
            <div ref={previousArrowRef} className="icon-picture-next" onClick={handleClickNextPicture}>
              <img alt="Next" src={"../images/icon-next.svg"} />
            </div>
            <div ref={nextArrowRef} className="icon-picture-previous" onClick={handleClickPreviousPicture}>
              <img alt="Previous" src={"../images/icon-previous.svg"} />
            </div>
          </>
        ) : null}
        <div>
          <img alt="Image" src={`../images/${selectImage.name}`} />
        </div>
      </div>
      <div className="sub-picture">
        {imageFile.map((image, index) => {
          return (
            <div key={index} className={"sub-picture-items"} onClick={() => handleSelectImage(index)}>
              <img
                alt="Thumbnail"
                className={image.name === selectImage.name ? "selected" : ""}
                src={"../images/" + image.thumbnail}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default function ProductPicture() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <ModalPicture show={showModal} setShowModal={setShowModal} DisplayPicture={DisplayPicture} />
      <div className="product-picture">
        <DisplayPicture showArrow={true} setShowModal={setShowModal} />
      </div>
    </>
  );
}
