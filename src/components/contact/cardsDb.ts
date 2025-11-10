import type { ContactCard } from './type';

export const contactCardsDb: ContactCard[] = [
  {
    id: 1,
    imgSrc: '/image/contact/contact-email.webp',
    imgAlt: 'Email image',
    title: 'EMAIL',
    items: [
      {
        type: 'email',
        value: 'hello@codecafe.com',
        ariaLabel: 'link to email hello@codecafe.com',
      },
      {
        type: 'email',
        value: 'Personal@codecafe.com',
        ariaLabel: 'link to email Personal@codecafe.com',
      },
    ],
  },
  {
    id: 2,
    imgSrc: '/image/contact/contact-address.webp',
    imgAlt: 'address image',
    title: 'OUR OFFICE',
    items: [
      {
        type: 'text',
        value: '240 Bhatikhana, 8200 Barisal',
      },
      {
        type: 'text',
        value: 'Bangladesh',
      },
    ],
  },
  {
    id: 3,
    imgSrc: '/image/contact/contact-phone.webp',
    imgAlt: 'phone image',
    title: 'PHONE',
    items: [
      {
        type: 'phone',
        value: '+00 11 66 99 66 44',
        ariaLabel: 'link to number +001166996644',
        title: 'link to number',
      },
      {
        type: 'phone',
        value: '11 99 66 44 065',
        ariaLabel: 'link to number 11 99 66 44 065',
        title: 'link to number',
      },
    ],
  },
];
