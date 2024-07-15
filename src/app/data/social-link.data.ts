import { SocialLinkSchema } from "@data/schema/social-links.schema";
import { envelope } from '@icon/solid.icon'
import { github, linkedin } from '@icon/brand.icon'


const socialLinkData: SocialLinkSchema[] = [
  {
    name: 'Github',
    path: github,
    link: 'https://github.com/Mahmoud-Fawzi-Fayed',
    color: '#c3c3c3',
  },
  {
    name: 'LinkedIn',
    path: linkedin,
    link: 'https://www.linkedin.com/in/mahmoud-fawzy%F0%9F%87%B5%F0%9F%87%B8-81b870235/',
    color: '#1469C7',
  },
  {
    name: 'Message',
    path: envelope,
    link: 'mailto:mahmoud.fawzy11122@gmail.com?subject=Hi Mahmoud!',
    color: '#e74c3c',
  },
];

export default socialLinkData;
