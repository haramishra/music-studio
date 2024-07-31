interface SiteMetaContentTypes {
  metaTitle: string;
  metaDescription: string;
  url: string;
  ogImage: string;
  social: {
    twitter: string;
    facebook: string;
    instagram: string;
    youtube: string;
  };
}

interface MainNavTypes {
  title: string;
  href: string;
}

const siteMetaContent: SiteMetaContentTypes = {
  metaTitle: "Asitra Studio",
  metaDescription:
    "We are a creative studio that creates beautiful and unique digital experiences for brands and businesses. We specialize in creating engaging and innovative digital products that stand out from the crowd.",
  url: "https://asitra.studio",
  ogImage: "/images/header-photo-horizontal.png",
  social: {
    twitter: "@asitrastudio",
    facebook: "https://www.facebook.com/asitrastudio",
    instagram: "https://www.instagram.com/asitrastudio",
    youtube: "https://www.youtube.com/channel/UC0-0w0e-2-5-4",
  },
};

const mainNav: MainNavTypes[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/#about",
  },
  {
    title: "Services",
    href: "/#services",
  },
  {
    title: "Projects",
    href: "/#projects",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export { siteMetaContent, mainNav };
export type { SiteMetaContentTypes, MainNavTypes };
