import React from "react"
import {
 FaTwitterSquare,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa"
const SocialLinks = ({ styleClass }) => {
  return (
    <ul className={styleClass}>
     <li>
        <a href="https://github.com/adan206" target="_blank">
          <FaGithub className="social-icon facebook-icon"></FaGithub>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/adan-abbi-57391848/" target="_blank">
          <FaLinkedinIn className="social-icon dribble-icon"></FaLinkedinIn>
        </a>
      </li>
      <li>
        <a href="https://twitter.com/abbiadan" target="_blank">
          <FaTwitterSquare className="social-icon twitter-icon"></FaTwitterSquare>
        </a>
      </li>
    </ul>
  )
}
export default SocialLinks
