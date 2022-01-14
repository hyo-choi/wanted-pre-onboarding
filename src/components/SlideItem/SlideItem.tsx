import classnames from 'classnames';
import React from 'react';
import { MAX_WIDTH } from '../../constants/size';
import useWindowSize from '../../hooks/useWindowSize';
import NextArrow from '../../Icons/NextArrow';
import { calcImageWidth } from '../../utils/calcWidth';
import styles from './SlideItem.module.scss';

export interface SlideItemProps {
  preventHref?: boolean;
  edge?: boolean;
  hidden?: boolean;
  title: string;
  description: string;
  url?: string;
  img: string;
  kind: 'EVENT_DETAIL' | 'CUSTOM_LINK';
}

const SlideItem = ({
  preventHref, edge, hidden, title, description, url, img, kind,
}: SlideItemProps) => {
  const [width] = useWindowSize();
  return (
    <div
      className={styles.item}
      style={{ width: `${calcImageWidth(width)}px` }}
    >
      <div>
        <div data-landing-url={url} data-link-kind={kind} data-content-title={title}>
          <div className={classnames(styles.image, {
            [styles.active]: !hidden, [styles.preventHref]: preventHref,
          })}
          >
            <a href={url} draggable={false} onDragStart={(e) => e.preventDefault()}>
              <img
                src={img}
                alt={title}
                draggable={false}
                onDragStart={(e) => e.preventDefault()}
              />
            </a>
          </div>
          <div className={
            classnames(styles.information, { [styles.active]: !hidden, [styles.edge]: edge })
          }
          >
            <h2>{title}</h2>
            <h3>{description}</h3>
            {(width >= MAX_WIDTH) && <hr />}
            <a href={url} className={styles.directButton}>
              <span className={styles.buttonLabel}>
                바로가기
                <span>
                  <span>
                    <NextArrow />
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

SlideItem.defaultProps = {
  preventHref: false,
  edge: false,
  hidden: true,
  url: '/',
};

export default SlideItem;
