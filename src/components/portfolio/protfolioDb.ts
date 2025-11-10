import type { IPortfolioItemsDb } from './type';

export const portfolioDbNav = [
  {
    title: 'All Works',
  },
  {
    title: 'Print',
  },
  {
    title: 'Identity',
  },
  {
    title: 'Branding',
  },
  {
    title: 'HTML',
  },
  {
    title: 'Wordpress',
  },
];

export const hoverBtnsDb = [
  {
    title: 'Share',
    aria: 'share btn',
    className: 'portfolio-item__hover-btn-link',
    icon: '/image/global-icons/link-icon.svg',
  },
  {
    title: 'Like',
    aria: 'like',
    className: 'portfolio-item__hover-btn-like',
    icon: '/image/global-icons/heart-icon.svg',
  },
];

export const portfolioItemsDb: IPortfolioItemsDb[] = [
  {
    category: 'Print',
    image: '/image/portfolio/portfolio-1.webp',
    imageSize: [268, 358], // width, height
  },
  {
    category: 'Identity',
    image: '/image/portfolio/portfolio-2.webp',
    imageSize: [268, 277],
  },
  {
    category: 'Print',
    image: '/image/portfolio/portfolio-3.webp',
    imageSize: [268, 298],
  },
  {
    category: 'HTML',
    image: '/image/portfolio/portfolio-4.webp',
    imageSize: [268, 358],
  },
  {
    category: 'Identity',
    image: '/image/portfolio/portfolio-5.webp',
    imageSize: [268, 358],
  },
  {
    category: 'Branding',
    image: '/image/portfolio/portfolio-6.webp',
    imageSize: [268, 341],
  },
  {
    category: 'Branding',
    image: '/image/portfolio/portfolio-7.webp',
    imageSize: [268, 371],
  },
  {
    category: 'Branding',
    image: '/image/portfolio/portfolio-8.webp',
    imageSize: [268, 267],
  },
  {
    category: 'Branding',
    image: '/image/portfolio/portfolio-9.webp',
    imageSize: [268, 207],
  },
  {
    category: 'Wordpress',
    image: '/image/portfolio/portfolio-10.webp',
    imageSize: [268, 354],
  },
  {
    category: 'Web',
    image: '/image/portfolio/portfolio-11.webp',
    imageSize: [268, 253],
  },
  {
    category: 'Web',
    image: '/image/portfolio/portfolio-12.webp',
    imageSize: [268, 298],
  },
];
