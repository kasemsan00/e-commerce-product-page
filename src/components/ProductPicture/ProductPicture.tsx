import { useState } from "react";
import ModalPicture from "./ModalPicture";

interface Image {
    name: string;
    thumbnail: string;
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
const DisplayPicture = ({ setShowModal }: any) => {
    const [selectImageIndex, setSelectImageIndex] = useState(0);
    const [selectImage, setSelectImage] = useState(imageFile[selectImageIndex]);
    const handleSelectImage = (image: Image) => {
        setSelectImage(image);
    };
    const handleShowModal = () => {
        setShowModal(true);
    };
    const handleNextPicture = () => {
        setSelectImageIndex((state) => state + 1);
    };
    const handlePreviousPicture = () => {};
    return (
        <>
            <div className="main-picture" onClick={handleShowModal}>
                <div className={"icon-picture-next"} onClick={handlePreviousPicture}>
                    <img alt="Next" src={"../images/icon-next.svg"} />
                </div>
                <div className={"icon-picture-previous"} onClick={handleNextPicture}>
                    <img alt="Previous" src={"../images/icon-previous.svg"} />
                </div>
                <img alt="Image" src={`../images/${selectImage.name}`} />
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
    const handleShowModal = () => {
        setShowModal((state) => !state);
    };

    return (
        <>
            <ModalPicture show={showModal} setShowModal={setShowModal} DisplayPicture={DisplayPicture} />
            <div className="product-picture">
                <DisplayPicture setShowModal={setShowModal} />
            </div>
        </>
    );
}
