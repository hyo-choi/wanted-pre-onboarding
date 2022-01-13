import { SlideItemProps } from '../components/SlideItem/SlideItem';
import { MAX_WIDTH } from '../constants/size';

export const calcImageWidth = (width: number): number => (
  width >= MAX_WIDTH ? 1060 : width - 80
);

const calcSlideItemWidth = (width: number): number => (
  width >= MAX_WIDTH ? calcImageWidth(width) + 24 : calcImageWidth(width)
);

export const calcRotation = (width: number, selected: number) => {
  const itemWidth = calcSlideItemWidth(width);
  const padding = width >= MAX_WIDTH ? 50 : 40;
  const startPoint = width / 2 - itemWidth / 2 - padding;
  return (selected + 2) * itemWidth - startPoint;
};

export const calcTotalWidth = (width: number, content: SlideItemProps[]): number => {
  const itemWidth = calcSlideItemWidth(width);
  const length = content.length + 4;
  const padding = width >= MAX_WIDTH ? 100 + 24 : 80;
  return (itemWidth + padding) * length;
};
