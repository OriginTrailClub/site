import Image from 'next/image';

import * as Styles from './FooterProjectInfo.styles';

import { RemixiconReactIconComponentType } from 'remixicon-react';
import TelegramFillIcon from 'remixicon-react/TelegramFillIcon';
import DiscordFillIcon from 'remixicon-react/DiscordFillIcon';
import RedditFillIcon from 'remixicon-react/RedditFillIcon';
import MediumFillIcon from 'remixicon-react/MediumFillIcon';
import GithubFillIcon from 'remixicon-react/GithubFillIcon';
import TwitterFillIcon from 'remixicon-react/TwitterFillIcon';

import { VisuallyHidden } from 'components/VisuallyHidden';

interface SocialProps {
  href: string;
  label: string;
  Icon: RemixiconReactIconComponentType;
}

function Social(props: SocialProps) {
  const { href, label, Icon } = props;

  return (
    <li className={Styles.social()}>
      <a href={href} className={Styles.socialLink()}>
        <VisuallyHidden>{label}</VisuallyHidden>
        <Icon />
      </a>
    </li>
  );
}

interface SocialsProps {
  children: React.ReactElement<SocialProps>[];
}

function Socials(props: SocialsProps) {
  const { children } = props;

  return <ul className={Styles.socials()}>{children}</ul>;
}

export interface FooterProjectInfoProps {}

export function FooterProjectInfo(props: FooterProjectInfoProps) {
  return (
    <aside className={Styles.container()}>
      <div className={Styles.contents()}>
        <div className={Styles.info()}>
          <div className={Styles.logo()}>
            <div className={Styles.aspectRatio()}>
              <Image
                src="/logo.svg"
                objectPosition="left center"
                objectFit="contain"
                layout="fill"
                alt="OriginTrail Community Hub logo"
              />
            </div>
          </div>
          <p className={Styles.description()}>
            OriginTrail is powered by an amazing community and core developers,
            Trace Labs
          </p>
        </div>
        <Socials>
          <Social
            href="https://github.com/origintrail"
            label="Github"
            Icon={GithubFillIcon}
          />
          <Social
            href="https://discord.gg/k4W8Jk9T"
            label="Discord"
            Icon={DiscordFillIcon}
          />
          <Social
            href="https://twitter.com/origin_trail"
            label="Twitter"
            Icon={TwitterFillIcon}
          />
          <Social
            href="https://www.reddit.com/r/OriginTrail/"
            label="Reddit"
            Icon={RedditFillIcon}
          />
          <Social
            href="https://t.me/OriginTrail/"
            label="Telegram"
            Icon={TelegramFillIcon}
          />
          <Social
            href="https://origintrail.medium.com/"
            label="Medium"
            Icon={MediumFillIcon}
          />
        </Socials>
      </div>
    </aside>
  );
}
