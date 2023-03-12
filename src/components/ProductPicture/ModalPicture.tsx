interface Props {
  show: boolean;
  setShowModal: (arg0: boolean) => void;
  DisplayPicture: any;
}

export default function ModalPicture({ show, setShowModal, DisplayPicture }: Props) {
  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <>
      <div className="modal-section" style={{ display: !show ? "none" : "" }}>
        <div className="modal-head">
          <div className="modal-close" onClick={handleClose}>
            X
          </div>
        </div>
        <div className="modal-content" onClick={handleClose}>
          <DisplayPicture setShowModal={setShowModal} />
        </div>
      </div>
      <div className="modal-backdrop" style={{ display: !show ? "none" : "" }} />
    </>
  );
}
