import { useState } from "react"
import Button from "../components/Button"
import NavListItem from "../components/NavListItem"
import Search from "../components/Search"
import navListData from "../data/navListData"
import "./header.css"

const Header = ({ scroll }) => {
  const [navList, setNavList] = useState(navListData)

  const handelNavOnClick = (id) => {
    const newList = navList.map((nav) => {
      nav.active = false
      if (nav._id === id) {
        nav.active = true
      }
      return nav
    })
    setNavList(newList)
  }

  return (
    <header className={`${scroll > 100 ? "scrolled" : undefined}`}>
      <a href="/" className="logo">
        Cinema
      </a>
      <ul className="nav">
        {navList.map((nav) => (
          <NavListItem nav={nav} key={nav._id} navOnClick={handelNavOnClick} />
        ))}
      </ul>
      <Search />
      <Button icon={<ion-icon name="log-in-outline"></ion-icon>} name="Sign" />
    </header>
  )
}

export default Header
