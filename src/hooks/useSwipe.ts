import React, { useState } from 'react';

const SWIPE_X = 75;

const useSwipe = (goPrev: Function, goNext: Function, setTimer: Function, clearTimer: Function) => {
  const [isMouseDown, setMouseDown] = useState(false);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setStart(e.targetTouches[0].clientX);
    setEnd(e.targetTouches[0].clientX);
    clearTimer();
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    setStart(0);
    setEnd(0);
    setTimer();
    if (start - end > SWIPE_X) {
      goNext();
    } else if (start - end < -SWIPE_X) {
      goPrev();
    }
    return false;
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setMouseDown(true);
    setStart(e.clientX);
    setEnd(e.clientX);
    clearTimer();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMouseDown) setEnd(e.clientX);
  };

  const handleMouseUp = () => {
    if (isMouseDown) handleTouchEnd();
    setMouseDown(false);
  };

  const handleMouseLeave = handleMouseUp;

  return {
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleMouseLeave,
    diff: (start - end),
  };
};

export default useSwipe;
