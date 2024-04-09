import "./footer.css";
import {
  FaYoutube,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="colone">
            <h5 className="foot">©2022 iNovitas AG. All Rights Reserved.</h5>
          </div>
          <div className="col">
            <ul className="navf">
              <li>
                <a href="https://www.inovitas.ch/de/allgemeine-geschaftsbedingungen-der-inovitas-ag">
                  AGB
                </a>
              </li>
              <li>
                <a href="https://www.inovitas.ch/de/impressum-rechtliches">
                  Impressum &amp; Rechtliches
                </a>
              </li>
            </ul>
          </div>
          <div className="list">
            <ul className="social">
              <li>
                <a href="https://twitter.com/iNovitasAG">
                  <FaTwitter size="30px" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/inovitas/">
                  <FaLinkedin size="30px" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/iNovitasAG/">
                  <FaFacebook size="30px" />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UCSF1J-UfIGC6v67zhJDW-qw/featured">
                  <FaYoutube size="30px" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/inovitasag/">
                  <FaInstagram size="30px" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
