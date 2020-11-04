import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Header = ({ siteTitle, siteDescription }) => (
  <header id="site-header" role="banner">
    <div>
      <Link to="/">
        <img
          src="/singh.png"
          width="500"
          height="500"
          alt="Legend"
        />
        <div>{siteTitle}</div>
        <div>{siteDescription}</div>
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  siteDescription: ``,
}

export default Header
