interface Props {
  onClose: (arg0: boolean) => void;
  show: boolean;
}

export default function LeftMenu({ onClose, show }: Props) {
  return (
    <>
      <div className="left-menu" style={{ left: !show ? "-300px" : 0, display: !show ? "none" : "block" }}>
        <div
          className="left-menu-close"
          onClick={() => {
            onClose(false);
          }}
        >
          X
        </div>
        <ul className="left-menu-list">
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="left-menu-backdrop" style={{ display: !show ? "none" : "block" }}></div>
    </>
  );
}
