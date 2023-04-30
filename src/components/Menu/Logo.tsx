interface Props {
  setIsLeftMenuOpen: (arg0: boolean) => void;
}

export default function Logo({ setIsLeftMenuOpen }: Props) {
  const handleShowMenu = () => {
    setIsLeftMenuOpen(true);
  };
  return (
    <div className="logo">
      <div onClick={handleShowMenu}>
        <img alt="menu" src={"../../images/icon-menu.svg"} />
      </div>
      <div>
        <img alt="logo" src={"../../images/logo.svg"} />
      </div>
    </div>
  );
}
