export default function Footer() {
  return (
    <>
      <div className="side-menu__footer">
        <div className="side-menu__footer-links">
          <ul className="side-menu__footer-list">
            <li className="side-menu__footer-item">
              <a className="side-menu__footer-link" href="#">
                About
              </a>
            </li>
            <li className="side-menu__footer-item">
              <a className="side-menu__footer-link" href="#">
                Help
              </a>
            </li>
            <li className="side-menu__footer-item">
              <a className="side-menu__footer-link" href="#">
                Privacy
              </a>
            </li>
            <li className="side-menu__footer-item">
              <a className="side-menu__footer-link" href="#">
                Terms
              </a>
            </li>
            <li className="side-menu__footer-item">
              <a className="side-menu__footer-link" href="#">
                Top Accounts
              </a>
            </li>
          </ul>
        </div>
        <span className="side-menu__footer-copyright">&copy; 2021 instagram from facebook</span>
      </div>
    </>
  );
}
