import { useRef, useState } from "react";
import ModalPicture from "./ModalPicture";

interface Image {
  name: string;
  thumbnail: string;
}
interface DisplayPictureProps {
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
const DisplayPicture = ({ setShowModal }: DisplayPictureProps) => {
  const previousArrowRef = useRef<HTMLDivElement>(null);
  const nextArrowRef = useRef<HTMLDivElement>(null);
  const [selectImageIndex, setSelectImageIndex] = useState(0);
  const [selectImage, setSelectImage] = useState(imageFile[selectImageIndex]);
  const handleSelectImage = (image: Image) => {
    setSelectImage(image);
  };
  const handleNextPicture = () => {
    setSelectImageIndex((state) => state + 1);
  };
  const handlePreviousPicture = () => {};
  const handleControlPicture = (event: string) => {
    if (event === "MouseOver") {
      nextArrowRef.current?.classList.remove("hidden");
      previousArrowRef.current?.classList.remove("hidden");
    }
    if (event === "MouseLeave") {
      nextArrowRef.current?.classList.add("hidden");
      previousArrowRef.current?.classList.add("hidden");
    }
  };
  return (
    <>
      <div className="main-picture" onClick={() => setShowModal(true)}>
        <div ref={previousArrowRef} className="icon-picture-next hidden" onClick={handlePreviousPicture}>
          <img alt="Next" src={"../images/icon-next.svg"} />
        </div>
        <div ref={nextArrowRef} className="icon-picture-previous hidden" onClick={handleNextPicture}>
          <img alt="Previous" src={"../images/icon-previous.svg"} />
        </div>
        <div onMouseOver={() => handleControlPicture("MouseOver")} onMouseLeave={() => handleControlPicture("MouseLeave")}>
          <img alt="Image" src={`../images/${selectImage.name}`} />
        </div>
      </div>
      <div className="sub-picture">
        {imageFile.map((image, index) => {
          return (
            <div key={index} className={"sub-picture-items"} onClick={() => handleSelectImage(image)}>
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
        <DisplayPicture setShowModal={setShowModal} />
      </div>
    </>
  );
}
