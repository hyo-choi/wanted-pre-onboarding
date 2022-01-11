import { MenuItemProps } from '../components/MenuItem/MenuItem';

export const maxMenu: MenuItemProps[] = [
  {
    label: '채용',
    kind: 'jobs',
  },
  {
    label: '이벤트',
    kind: 'event',
  },
  {
    label: '직군별 연봉',
    kind: 'salary',
  },
  {
    label: '이력서',
    kind: 'resume',
  },
  {
    label: '커뮤니티',
    kind: 'community',
    isNew: true,
  },
  {
    label: '프리랜서',
    kind: 'freelancer',
  },
  {
    label: 'AI 합격예측',
    kind: 'aiScore',
    isBeta: true,
  },
];

export const minMenu: MenuItemProps[] = [
  {
    label: '홈',
    kind: 'home',
  },
  {
    label: '채용',
    kind: 'jobs',
  },
  {
    label: '이벤트',
    kind: 'event',
  },
];
