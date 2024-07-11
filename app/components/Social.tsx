"use client"
import {
    IoCall,
    IoGlobeOutline,
    IoLocation,
    IoLogoBehance,
    IoLogoBitbucket,
    IoLogoCodepen,
    IoLogoDiscord,
    IoLogoDribbble,
    IoLogoFacebook,
    IoLogoFoursquare,
    IoLogoGithub,
    IoLogoGitlab,
    IoLogoInstagram,
    IoLogoLinkedin,
    IoLogoMedium,
    IoLogoPinterest,
    IoLogoReddit,
    IoLogoRss,
    IoLogoSkype,
    IoLogoSlack,
    IoLogoSnapchat,
    IoLogoSoundcloud,
    IoLogoTiktok,
    IoLogoTumblr,
    IoLogoTwitter,
    IoLogoVimeo,
    IoLogoWhatsapp,
    IoLogoYoutube,
    IoMail,
} from "react-icons/io5";
import { FaTelegram } from 'react-icons/fa';

import React from 'react';

const socialIcons = {
    'facebook': (facebook: string) => <li key={'facebook'} className="inline-block">
        <a
            aria-label="facebook"
            href={facebook}
            target="_blank"
            rel="noopener noreferrer nofollow"
        >
            <IoLogoFacebook/>
        </a>
    </li>,
    'twitter': (twitter: string) => <li key={'twitter'} className="inline-block">
        <a
            aria-label="twitter"
            href={twitter}
            target="_blank"
            rel="noopener noreferrer nofollow"
        >
            <IoLogoTwitter/>
        </a>
    </li>,
    'instagram': (instagram: string) => <li key={'instagram'} className="inline-block">
        <a
            aria-label="instagram"
            href={instagram}
            target="_blank"
            rel="noopener noreferrer nofollow"
        >
            <IoLogoInstagram/>
        </a>
    </li>,
    'youtube': (youtube: string) => <li key={'youtube'} className="inline-block">
        <a
            aria-label="youtube"
            href={youtube}
            target="_blank"
            rel="noopener noreferrer nofollow"
        >
            <IoLogoYoutube/>
        </a>
    </li>,
    'linkedin': (linkedin: string) => <li key={'linkedin'} className="inline-block">
        <a
            aria-label="linkedin"
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer nofollow"
        >
            <IoLogoLinkedin/>
        </a>
    </li>,
    'github': (github: string) => <li key={'github'} className="inline-block">
        <a
            aria-label="github"
            href={github}
            target="_blank"
            rel="noopener noreferrer nofollow"
        >
            <IoLogoGithub/>
        </a>
    </li>,
    'gitlab': (gitlab: string) => <li key={'gitlab'}  className="inline-block">
        <a
            aria-label="gitlab"
            href={gitlab}
            target="_blank"
            rel="noopener noreferrer nofollow"
        >
            <IoLogoGitlab/>
        </a>
    </li>,
    'discord': (discord: string) => <li key={'discord'} className="inline-block">
        <a
            aria-label="discord"
            href={discord}
            target="_blank"
            rel="noopener noreferrer nofollow"
        >
            <IoLogoDiscord/>
        </a>
    </li>,
    'slack': (slack: string) => <li key={'slack'}  className="inline-block">
        <a
            aria-label="slack"
            href={slack}
            target="_blank"
            rel="noopener noreferrer nofollow"
        >
            <IoLogoSlack/>
        </a>
    </li>,
    'medium': (medium: string) => <li key={'medium'} className="inline-block">
        <a
            aria-label="medium"
            href={medium}
            target="_blank"
            rel="noopener noreferrer nofollow"
        >
            <IoLogoMedium/>
        </a>
    </li>,
    'codepen': (codepen: string) => <li key={'codepen'} className="inline-block">
        <a
            aria-label="codepen"
            href={codepen}
            target="_blank"
            rel="noopener noreferrer nofollow"
        >
            <IoLogoCodepen/>
        </a>
    </li>,
    'bitbucket': (bitbucket: string) => <li key={'bitbucket'}  className="inline-block">
        <a
            aria-label="bitbucket"
            href={bitbucket}
            target="_blank"
            rel="noopener noreferrer nofollow"
        >
            <IoLogoBitbucket/>
        </a>
    </li>,
    'dribbble': (dribbble: string) => <li key={'dribbble'} className="inline-block">
        <a
            aria-label="dribbble"
            href={dribbble}
            target="_blank"
            rel="noopener noreferrer nofollow"
        >
            <IoLogoDribbble/>
        </a>
    </li>,
    'behance': (behance: string) => <li key={'behance'} className="inline-block">
        <a
            aria-label="behance"
            href={behance}
            target="_blank"
            rel="noopener noreferrer nofollow"
        >
            <IoLogoBehance/>
        </a>
    </li>,
    'pinterest': (pinterest: string) => <li key={'pinterest'} className="inline-block">
        <a
            aria-label="pinterest"
            href={pinterest}
            target="_blank"
            rel="noopener noreferrer nofollow"
        >
            <IoLogoPinterest/>
        </a>
    </li>,
    'soundcloud': (soundcloud: string) => <li key={'soundcloud'} className="inline-block">
        <a
            aria-label="soundcloud"
            href={soundcloud}
            target="_blank"
            rel="noopener noreferrer nofollow"
        >
            <IoLogoSoundcloud/>
        </a>
    </li>,
    'tumblr': (tumblr: string) => <li key={'tumblr'} className="inline-block">
        <a
            aria-label="tumblr"
            href={tumblr}
            target="_blank"
            rel="noopener noreferrer nofollow"
        >
            <IoLogoTumblr/>
        </a>
    </li>,
    'reddit': (reddit: string) => <li key={'reddit'} className="inline-block">
        <a
            aria-label="reddit"
            href={reddit}
            target="_blank"
            rel="noopener noreferrer nofollow"
        >
            <IoLogoReddit/>
        </a>
    </li>,
    'whatsapp': (whatsapp: string) => <li key={'whatsapp'} className="inline-block">
        <a
            aria-label="whatsapp"
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer nofollow"
        >
            <IoLogoWhatsapp/>
        </a>
    </li>,
    'snapchat': (snapchat: string) => <li key={'snapchat'} className="inline-block">
        <a
            aria-label="snapchat"
            href={snapchat}
            target="_blank"
            rel="noopener noreferrer nofollow"
        >
            <IoLogoSnapchat/>
        </a>
    </li>,
    'vimeo': (vimeo: string) => <li key={'vimeo'} className="inline-block">
        <a
            aria-label="vimeo"
            href={vimeo}
            target="_blank"
            rel="noopener noreferrer nofollow"
        >
            <IoLogoVimeo/>
        </a>
    </li>,
    'tiktok': (tiktok: string) => <li key={'tiktok'} className="inline-block">
        <a
            aria-label="tiktok"
            href={tiktok}
            target="_blank"
            rel="noopener noreferrer nofollow"
        >
            <IoLogoTiktok/>
        </a>
    </li>,
    'foursquare': (foursquare: string) => <li key={'foursquare'} className="inline-block">
        <a
            aria-label="foursquare"
            href={foursquare}
            target="_blank"
            rel="noopener noreferrer nofollow"
        >
            <IoLogoFoursquare/>
        </a>
    </li>,
    'skype': (skype: string) => <li key={'skype'} className="inline-block">
        <a
            aria-label="skype"
            href={skype}
            target="_blank"
            rel="noopener noreferrer nofollow"
        >
            <IoLogoSkype/>
        </a>
    </li>,
    'website': (website: string) => <li key={'website'} className="inline-block">
        <a
            aria-label="website"
            href={website}
            target="_blank"
            rel="noopener noreferrer nofollow"
        >
            <IoGlobeOutline/>
        </a>
    </li>,
    'rss': (rss: string) => <li key={'rss'} className="inline-block">
        <a
            aria-label="rss feed"
            href={rss}
            target="_blank"
            rel="noopener noreferrer nofollow"
        >
            <IoLogoRss/>
        </a>
    </li>,
    'email': (email: string) => <li key={'email'}  className="inline-block">
        <a aria-label="email" href={`mailto:${email}`} onClick={(e) => {
            e.preventDefault()
            window.open( "mailto:" + atob(email), '_blank', "noopener")?.focus();
        }}>
            <IoMail/>
        </a>
    </li>,
    'phone': (phone: string) => <li key={'phone'} className="inline-block">
        <a aria-label="telephone" href={`tel:${phone}`}>
            <IoCall />
        </a>
    </li>,
    'address': (address: string) => <li key={'address'} className="inline-block">
        <a
            aria-label="location"
            href={address}
            target="_blank"
            rel="noopener noreferrer nofollow"
        >
            <IoLocation/>
        </a>
    </li>,
    'telegram': (telegram: string) => <li key={'telegram'} className="inline-block">
        <a
            aria-label="location"
            href={telegram}
            target="_blank"
            rel="noopener noreferrer nofollow"
        >
            <FaTelegram/>
        </a>
    </li>,
} as Record<string, (item: string) => React.ReactNode>

const Social = ({ source, className }: { className: string, source: Record<string, string> }) => {

    return (
        <ul className={className}>
            {
                Object.keys(source).map((item, index) => {
                    if (source[item] && socialIcons[item]) {
                        return socialIcons[item](source[item]);
                    }
                    return '';
                })
            }
        </ul>
    );
};

export default Social;
