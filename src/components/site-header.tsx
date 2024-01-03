import IconMenu from './icon-menu';
import LogoBookmark from './logo-bookmark';

function SiteHeader() {
  return (
    <header className="site-header wrapper">
      <LogoBookmark />
      <IconMenu />
    </header>
  );
}

export default SiteHeader;
