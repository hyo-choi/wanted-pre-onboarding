import React from 'react';
import MenuItem from '../MenuItem/MenuItem';
import styles from './NavBar.module.scss';
import useWindowSize from '../../hooks/useWindowSize';
import { maxMenu, minMenu } from '../../constants/menu';
import { MIN_WIDTH } from '../../constants/size';

const NavBar = () => {
  const [width] = useWindowSize();
  return (
    <div className={styles.navBar}>
      <div className={styles.mainBar}>
        <nav className={styles.nav}>
          <div className={styles.navTop}>
            <div>
              <button type="button">
                <img src="https://static.wanted.co.kr/images/icon-menu.png" alt="hamberger menu" style={{ width: '17px', height: '14px', objectFit: 'contain' }} />
              </button>
              <a href="/">
                <img src="https://www.wantedlab.com/img/logo.png" alt="wanted logo" />
              </a>
            </div>
          </div>
          <ul className={styles.menu}>
            {(width > MIN_WIDTH ? maxMenu : minMenu).map(({
              label, kind, isNew, isBeta,
            }) => (
              <MenuItem key={kind} label={label} kind={kind} isNew={isNew} isBeta={isBeta} />
            ))}
          </ul>
          <aside className={styles.aside}>
            aside
          </aside>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
