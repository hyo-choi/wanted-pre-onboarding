import React from 'react';
import MenuItem from '../MenuItem/MenuItem';
import styles from './NavBar.module.scss';
import useWindowSize from '../../hooks/useWindowSize';
import { maxMenu, minMenu } from '../../constants/menu';
import { MIN_WIDTH, MIDDLE_WIDTH } from '../../constants/size';
import Magnifier from '../../Icons/Magnifier';
import Bell from '../../Icons/Bell';
import More from '../../Icons/More';
import Badge from '../../Icons/Badge';

const NavBar = () => {
  const [width] = useWindowSize();
  return (
    <>
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
              <ul>
                <li><button type="button" className={styles.searchButton} aria-label="searchButton"><Magnifier /></button></li>
                <li>
                  <button type="button" className={styles.notiButton} aria-label="notiButton"><Bell /></button>
                  <span className={styles.badge}><Badge /></span>
                </li>
                {width > MIDDLE_WIDTH ? (
                  <>
                    <li className={styles.profileBox}>
                      <button type="button" className={styles.profileButton} aria-label="avatarButton">
                        <div>
                          <div style={{ backgroundImage: 'url(https://lh3.googleusercontent.com/a/AATXAJyy36xjbBrONz-HvRc6c9wXSH4AUrw066MAnKnu=s96-c), url(https://static.wanted.co.kr/images/profile_default.png)' }} />
                        </div>
                      </button>
                      <span className={styles.badge}><Badge /></span>
                    </li>
                    <li className={styles.leftDivision}>
                      <a className={styles.dashboardButton} href="/">기업 서비스</a>
                    </li>
                  </>
                )
                  : (<li><button type="button" className={styles.menuButton} aria-label="menuButton"><More /></button></li>)}
              </ul>
            </aside>
          </nav>
        </div>
      </div>
      <div className={styles.padding} />
    </>
  );
};

export default NavBar;
