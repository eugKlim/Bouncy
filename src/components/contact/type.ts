export type ContactItem =
  | {
      type: 'email';
      value: string;
      ariaLabel: string;
    }
  | {
      type: 'phone';
      value: string;
      ariaLabel: string;
      title: string;
    }
  | {
      type: 'text';
      value: string;
    };

export type ContactCard = {
  id: number;
  imgSrc: string;
  imgAlt: string;
  title: string;
  items: ContactItem[];
};
