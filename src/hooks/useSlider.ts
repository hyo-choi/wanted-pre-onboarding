import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import { SlideItemProps } from '../components/SlideItem/SlideItem';
import { calcTotalWidth } from '../utils/calcWidth';

const getRandomIndex = () => Math.floor(Math.random() * 12);

interface SliderHookProps {
  content: SlideItemProps[];
  width: number;
}

const useSlider = ({
  content, width,
}: SliderHookProps) => {
  const timer = useRef<ReturnType<typeof setInterval> >();
  const [isAnimating, setAnimating] = useState(false);
  const [selected, setSelected] = useState(getRandomIndex());
  const [totalWidth, setTotalWidth] = useState(calcTotalWidth(width, content));
  const [isMoved, setMoved] = useState(false);

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

  const setTimer = useCallback(() => {
    timer.current = setInterval(() => {
      goNext();
    }, 5000);
  }, [timer, selected]);

  const clearTimer = useCallback(() => {
    clearInterval(timer.current as unknown as number);
  }, [timer]);

  const setMovedTimer = useCallback(() => {
    setMoved(true);
    setTimeout(() => {
      setMoved(false);
    }, 600);
  }, [isMoved]);

  const handleClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    if (isMoved) return;
    clearTimer();
    if (e.currentTarget.name === 'prev') goPrev();
    else goNext();
    setTimer();
    setMovedTimer();
  }, [width, selected, timer, isMoved]);

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
    setMovedTimer,
    handleClick,
    isAnimating,
    totalWidth,
    selected,
    isMoved,
  };
};

export default useSlider;
