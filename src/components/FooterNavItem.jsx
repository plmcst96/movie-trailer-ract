import "./footerNavItem.css"

const FooterNavItem = ({ name }) => {
  return (
    <li>
      <ion-icon name="chevron-forward-outline"></ion-icon>{" "}
      <a href="/">{name}</a>
    </li>
  )
}

export default FooterNavItem
