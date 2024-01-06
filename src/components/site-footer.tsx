import LogoBookmark from './logo-bookmark';
import { navlinks, socials } from '../data.json';

function SiteFooter() {
  return (
    <footer className="site-footer">
      <LogoBookmark />
      <nav aria-labelledby="footer-label">
        <h2 id="footer-label" className="visually-hidden">
          Footer
        </h2>
        <ul role="list">
          {navlinks.map((navlink) => (
            <li key={navlink}>
              <a href="#">{navlink}</a>
            </li>
          ))}
        </ul>
      </nav>
      <ul role="list" className="socials" aria-label="Socials">
        {socials.map((social) => (
          <li key={social.name}>
            <a href="#">
              <span className="visually-hidden">{social.name}</span>
              <img src={social.icon} alt="" />
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}

export default SiteFooter;
