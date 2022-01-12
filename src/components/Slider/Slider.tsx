import classnames from 'classnames';
import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import { MAX_WIDTH } from '../../constants/size';
import slideContent from '../../constants/slide';
import useSwipe from '../../hooks/useSwipe';
import useWindowSize from '../../hooks/useWindowSize';
import NextArrow from '../../Icons/NextArrow';
import PrevArrow from '../../Icons/PrevArrow';
import { calcRotation, calcTotalWidth } from '../../utils/calcWidth';
import SlideItem from '../SlideItem/SlideItem';
import styles from './Slider.module.scss';

const firstItem = slideContent[0];
const lastItem = slideContent[slideContent.length - 1];

const Slider = () => {
  const [width] = useWindowSize();
  const timer = useRef<ReturnType<typeof setInterval> >();
  const [selected, setSelected] = useState(0);
  const [totalWidth, setTotalWidth] = useState(calcTotalWidth(width, slideContent));

  const setTimer = useCallback(() => {
    timer.current = setInterval(() => {
      setSelected((prev) => (prev === slideContent.length - 1 ? 0 : prev + 1));
    }, 5000);
  }, [timer, selected]);

  const clearTimer = useCallback(() => {
    clearInterval(timer.current as unknown as number);
  }, [timer]);

  const goNext = useCallback(() => {
    setSelected((prev) => (prev === slideContent.length - 1 ? 0 : prev + 1));
  }, [selected]);

  const goPrev = useCallback(() => {
    setSelected((prev) => (prev === 0 ? slideContent.length - 1 : prev - 1));
  }, [selected]);

  const handleClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    clearTimer();
    if (e.currentTarget.name === 'prev') goPrev();
    else goNext();
    setTimer();
  }, [width, selected, timer]);

  const {
    handleTouchStart, handleTouchMove, handleTouchEnd,
    handleMouseDown, handleMouseMove, handleMouseUp, handleMouseLeave,
    diff,
  } = useSwipe(goPrev, goNext, setTimer, clearTimer);

  useEffect(() => {
    setTotalWidth(calcTotalWidth(width, slideContent));
  }, [width]);

  useEffect(() => {
    setTimer();
    return () => clearTimer();
  }, []);

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
            style={{ width: `${totalWidth}px`, transform: `translate3d(${-calcRotation(width, selected) - diff}px, 0px, 0px)` }}
          >
            <SlideItem
              key={lastItem.title}
              title={lastItem.title}
              description={lastItem.description}
              img={lastItem.img}
              kind={lastItem.kind}
            />
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
              />
            ))}
            <SlideItem
              key={firstItem.title}
              title={firstItem.title}
              description={firstItem.description}
              img={firstItem.img}
              kind={firstItem.kind}
            />
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
