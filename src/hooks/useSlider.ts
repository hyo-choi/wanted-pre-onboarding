import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import { SlideItemProps } from '../components/SlideItem/SlideItem';
import { calcTotalWidth } from '../utils/calcWidth';

interface SliderHookProps {
  content: SlideItemProps[];
  width: number;
}

const useSlider = ({
  content, width,
}: SliderHookProps) => {
  const timer = useRef<ReturnType<typeof setInterval> >();
  const [isAnimating, setAnimating] = useState(true);
  const [selected, setSelected] = useState(0);
  const [totalWidth, setTotalWidth] = useState(calcTotalWidth(width, content));

  const setTimer = useCallback(() => {
    timer.current = setInterval(() => {
      setSelected((prev) => (prev === content.length - 1 ? 0 : prev + 1));
    }, 5000);
  }, [timer, selected]);

  const clearTimer = useCallback(() => {
    clearInterval(timer.current as unknown as number);
  }, [timer]);

  const goNext = useCallback(() => {
    setSelected((prev) => {
      if (prev === content.length - 1) {
        setTimeout(() => {
          setAnimating(false);
          setSelected(0);
        }, 500);
      }
      setAnimating(true);
      return prev + 1;
    });
  }, [selected]);

  const goPrev = useCallback(() => {
    setSelected((prev) => {
      if (prev === 0) {
        setTimeout(() => {
          setAnimating(false);
          setSelected(content.length - 1);
        }, 400);
      }
      setAnimating(true);
      return prev - 1;
    });
  }, [selected]);

  const handleClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    clearTimer();
    if (e.currentTarget.name === 'prev') goPrev();
    else goNext();
    setTimer();
  }, [width, selected, timer]);

  useEffect(() => {
    setTotalWidth(calcTotalWidth(width, content));
  }, [width]);

  useEffect(() => {
    setTimer();
    return () => clearTimer();
  }, []);

  return {
    goPrev,
    goNext,
    setTimer,
    clearTimer,
    handleClick,
    isAnimating,
    totalWidth,
    selected,
  };
};

export default useSlider;
