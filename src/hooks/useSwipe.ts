import React, { useState } from 'react';

export const SWIPE_X = 75;
const INIT = -1;

interface SwipeHookArgs {
  goPrev: Function;
  goNext: Function;
  setTimer: Function;
  clearTimer: Function;
  isMoved: boolean;
  setMovedTimer: Function;
}

const useSwipe = ({
  goPrev, goNext, setTimer, clearTimer, isMoved, setMovedTimer,
}: SwipeHookArgs) => {
  const [isMouseDown, setMouseDown] = useState(false);
  const [start, setStart] = useState(INIT);
  const [end, setEnd] = useState(INIT);

  const handleTouchStart = (e: React.TouchEvent) => {
    clearTimer();
    if (isMoved) {
      setStart(INIT);
      setEnd(INIT);
      return;
    }
    setStart(e.targetTouches[0].clientX);
    setEnd(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isMoved) {
      setStart(INIT);
      setEnd(INIT);
      return;
    } if (!isMoved && start === INIT) {
      setStart(e.targetTouches[0].clientX);
    }
    setEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    setStart(INIT);
    setEnd(INIT);
    if (isMoved) return;
    setTimer();
    if (start - end > SWIPE_X) {
      goNext();
    } else if (start - end < -SWIPE_X) {
      goPrev();
    }
    setMovedTimer();
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    clearTimer();
    if (isMoved) {
      setStart(INIT);
      setEnd(INIT);
      return;
    }
    setMouseDown(true);
    setStart(e.clientX);
    setEnd(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMoved) {
      setStart(INIT);
      setEnd(INIT);
      return;
    } if (!isMoved && start === INIT) {
      setStart(e.clientX);
    }
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
    diff: start !== INIT && end !== INIT ? (start - end) : 0,
  };
};

export default useSwipe;
