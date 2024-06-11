import { Link } from 'react-router-dom';

import classes from './Header.module.css';

function Header() {
    return (
      <header className={classes.header}>
        <h1>Zaszyfruj Tekst</h1>
        <nav>
          <ul>
            <li>
              <Link to="/" data-cy="header-home-link">Główna</Link>
            </li>
            <li>
              <Link to="/about" data-cy="header-about-link">O nas</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
}

export default Header;