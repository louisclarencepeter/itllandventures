import {
  faFacebook,
  faInstagram,
  faWhatsapp,
  faXTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

export const contact = {
  email: 'info@itllandventures.com',
  whatsapp: 'https://wa.me/255768779517',
};

export const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/itllandventures/',
    icon: faInstagram,
    label: 'Follow the updates',
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/itllandventures',
    icon: faFacebook,
    label: 'Join the community',
  },
  {
    name: 'WhatsApp',
    href: contact.whatsapp,
    icon: faWhatsapp,
    label: 'Message the team',
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@itllandventures',
    icon: faYoutube,
    label: 'Watch the channel',
  },
  {
    name: 'X',
    href: 'https://x.com/ITL_LANDVENTURE',
    icon: faXTwitter,
    label: 'Latest posts',
  },
];
