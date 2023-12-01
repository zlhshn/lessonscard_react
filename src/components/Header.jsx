import HeaderStyled from "../scss/header.module.scss"

const Header = () => {
  return (
    <header className={HeaderStyled["header-img"]}>
        <img src="./react.gif" alt="" />
    </header>
  )
}

export default Header