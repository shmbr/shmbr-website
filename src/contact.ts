import { assetUrls } from "./assetUrls";

export const CONTACT_EMAIL = "ura.shambora@gmail.com";
export const GITHUB_URL = "https://github.com/shmbr";
export const INSTAGRAM_URL = "https://www.instagram.com/_shmbr";
export const TELEGRAM_URL = "https://t.me/shambora";

export interface IContactLink {
  external?: boolean;
  href: string;
  iconSrc: string;
  label: string;
}

export const CONTACT_LINKS: IContactLink[] = [
  {
    external: true,
    href: TELEGRAM_URL,
    iconSrc: assetUrls.telegramIcon,
    label: "tg",
  },
  {
    href: `mailto:${CONTACT_EMAIL}`,
    iconSrc: assetUrls.mailIcon,
    label: "mail",
  },
  {
    external: true,
    href: GITHUB_URL,
    iconSrc: assetUrls.githubIcon,
    label: "gh",
  },
  {
    external: true,
    href: INSTAGRAM_URL,
    iconSrc: assetUrls.instagramIcon,
    label: "instagram",
  },
];
