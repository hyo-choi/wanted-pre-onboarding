import React from 'react';
import { MIN_WIDTH } from '../../constants/size';
import useWindowSize from '../../hooks/useWindowSize';
import styles from './MenuItem.module.scss';

export interface MenuItemProps {
  label: string,
  kind: string,
  isNew?: boolean,
  isBeta?: boolean,
}

const MenuItem = ({
  label, kind, isNew, isBeta,
}:MenuItemProps) => {
  const [width] = useWindowSize();
  return (
    <li className={styles.menuItem} data-attribute-id="gnb" data-gnb-kind={kind}>
      <a href="/">
        {label}
        {((isNew && width > MIN_WIDTH) && (
          <em>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="11" viewBox="0 0 18 11"><g fill="none" fillRule="evenodd" fontFamily="AppleSDGothicNeo-SemiBold, Apple SD Gothic Neo" fontSize="9" fontWeight="500"><g fill="#36F"><g><g><g><g><g><g><text transform="translate(-931.000000, -13.000000) translate(224.000000, 7.000000) translate(210.000000, 6.000000) translate(350.000000, 0.000000) translate(147.000000, 0.000000)"><tspan x="0" y="8">New</tspan></text></g></g></g></g></g></g></g></g></svg>
          </em>
        ))}
        {((isBeta && width > MIN_WIDTH) && (<span><svg xmlns="http://www.w3.org/2000/svg" width="18" height="11" viewBox="0 0 18 11"><g fill="none" fillRule="evenodd" fontFamily="AppleSDGothicNeo-SemiBold, Apple SD Gothic Neo" fontSize="9" fontWeight="500"><g fill="#36F"><g><g><g><g><g><g><text transform="translate(-931.000000, -13.000000) translate(224.000000, 7.000000) translate(210.000000, 6.000000) translate(350.000000, 0.000000) translate(147.000000, 0.000000)"><tspan x="0" y="8">Beta</tspan></text></g></g></g></g></g></g></g></g></svg></span>))}
      </a>
    </li>
  );
};

MenuItem.defaultProps = {
  isNew: false,
  isBeta: false,
};

export default MenuItem;
