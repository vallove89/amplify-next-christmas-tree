import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "Making the Holidays Easier – Order Your Christmas Tree & We'll Deliver!",
    quickLinks: [
        {
            text: "How It Works",
            url: "#process"
        },
        {
            text: "FAQ",
            url: "#faq"
        },
        {
            text: "Gallery",
            url: "#gallery"
        }
    ],
    email: 'DFWChristmasTrees@outlook.com',
    telephone: '+1 (123) 456-7890',
    socials: {
        // github: 'https://github.com',
        // x: 'https://twitter.com/x',
        twitter: 'https://twitter.com/Twitter',
        facebook: 'https://facebook.com',
        // youtube: 'https://youtube.com',
        linkedin: 'https://www.linkedin.com',
        // threads: 'https://www.threads.net',
        instagram: 'https://www.instagram.com',
    }
}