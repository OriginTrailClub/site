import * as React from 'react';

import { RemixiconReactIconComponentType } from 'remixicon-react';

import * as Styles from './SocialsBlockSocial.styles';

export interface SocialBlockSocialProps {
  href: string;
  label: string;
  Icon: RemixiconReactIconComponentType;
}

export function SocialsBlockSocial(props: SocialBlockSocialProps) {
  const { href, label, Icon } = props;

  return (
    <li className={Styles.container()}>
      <a href={href} className={Styles.contents()}>
        <div className={Styles.inner()}>
          <div className={Styles.icon()}>
            <Icon />
          </div>
          <span className={Styles.label()}>{label}</span>
        </div>
      </a>
    </li>
  );
}
