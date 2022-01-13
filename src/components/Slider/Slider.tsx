import React from 'react';
import classnames from 'classnames';
import { MAX_WIDTH } from '../../constants/size';
import slideContent from '../../constants/slide';
import useSlider from '../../hooks/useSlider';
import useSwipe from '../../hooks/useSwipe';
import useWindowSize from '../../hooks/useWindowSize';
import NextArrow from '../../Icons/NextArrow';
import PrevArrow from '../../Icons/PrevArrow';
import { calcRotation } from '../../utils/calcWidth';
import SlideItem from '../SlideItem/SlideItem';
import styles from './Slider.module.scss';

const Slider = () => {
  const [width] = useWindowSize();

  const {
    goPrev, goNext, setTimer, clearTimer, isAnimating, totalWidth, handleClick, selected,
  } = useSlider({ content: slideContent, width });

  const {
    handleTouchStart, handleTouchMove, handleTouchEnd,
    handleMouseDown, handleMouseMove, handleMouseUp, handleMouseLeave,
    diff,
  } = useSwipe(goPrev, goNext, setTimer, clearTimer);

  return (
    <div className={styles.topBanner}>
      <div className={styles.slider}>
        <div style={{ padding: `0px ${width >= MAX_WIDTH ? 50 : 40}px` }}>
          { /* eslint-disable-next-line jsx-a11y/no-static-element-interactions */ }
          <div
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            className={classnames({ [styles.transition]: isAnimating })}
            style={{ width: `${totalWidth}px`, transform: `translate3d(${-calcRotation(width, selected) - diff}px, 0px, 0px)` }}
          >
            {slideContent.slice(slideContent.length - 2).map(({
              title, description, img, kind,
            }, idx) => (
              <SlideItem
                key={title}
                title={title}
                description={description}
                img={img}
                kind={kind}
                hidden={idx - 2 !== selected}
              />
            ))}
            {slideContent.map(({
              title, description, img, kind,
            }, idx) => (
              <SlideItem
                key={title}
                title={title}
                description={description}
                img={img}
                kind={kind}
                hidden={idx !== selected}
                edge={!isAnimating}
              />
            ))}
            {slideContent.slice(0, 2).map(({
              title, description, img, kind,
            }, idx) => (
              <SlideItem
                key={title}
                title={title}
                description={description}
                img={img}
                kind={kind}
                hidden={idx + slideContent.length !== selected}
              />
            ))}
          </div>
        </div>
      </div>
      {(width >= MAX_WIDTH) && (
        <>
          <button type="button" name="prev" className={classnames(styles.arrow, styles.prevArrow)} onClick={handleClick}>
            <span>
              <PrevArrow />
            </span>
          </button>
          <button type="button" name="next" className={classnames(styles.arrow, styles.nextArrow)} onClick={handleClick}>
            <span>
              <NextArrow />
            </span>
          </button>
        </>
      )}
    </div>
  );
};

export default Slider;
