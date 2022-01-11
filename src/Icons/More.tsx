import React from 'react';

const More = () => (
  <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg">
    <defs><path d="M9 7.5a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 9 7.5zm5.05 0a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 14.05 7.5zM4 7.5a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 4 7.5z" id="a" /></defs>
    <g fill="none" fillRule="evenodd">
      <mask id="b" fill="#fff"><use xlinkHref="#a" /></mask>
      <use fill="#333" xlinkHref="#a" />
      <g mask="url(#b)" fill="#333"><path d="M0 0h18v18H0z" /></g>
    </g>
  </svg>
);

export default More;
