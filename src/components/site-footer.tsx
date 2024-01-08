import LogoBookmark from './logo-bookmark';
import { navlinks } from '../data.json';
import SocialLinks from './social-links';

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
      <SocialLinks />
    </footer>
  );
}

export default SiteFooter;
