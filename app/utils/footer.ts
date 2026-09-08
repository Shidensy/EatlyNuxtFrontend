import type {SocialLink} from "~/types/social-link";
import Twitter from "~/assets/icons/twitter.svg";
import LinkedIn from "~/assets/icons/in.svg";
import Facebook from "~/assets/icons/fb.svg";
import Instagram from "~/assets/icons/inst.svg";

export const socials: SocialLink[] = [
    {name: "Instagram", url: "https://instagram.com", icon: Instagram},
    {name: "LinkedIn", url: "https://linkedin.com", icon: LinkedIn},
    {name: "Facebook", url: "https://facebook.com", icon: Facebook},
    {name: "Twitter", url: "https://x.com", icon: Twitter},
];
