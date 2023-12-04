import HeaderStyled from "../scss/header.module.scss";

const Header = () => {
  return (
    <header className={HeaderStyled["header-img"]}>
      <img src="./rct.gif" alt="" />
      <h1 className={HeaderStyled.h1}>LESSON TİME</h1>
    </header>
  );
};

export default Header;
