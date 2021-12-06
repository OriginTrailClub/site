import TwitterFillIcon from 'remixicon-react/TwitterFillIcon';

import {
  SocialBlockSocialProps,
  SocialsBlockSocial,
} from './SocialsBlockSocial';

export type SocialsBlockTwitterProps = Omit<SocialBlockSocialProps, 'Icon'>;

export function SocialsBlockTwitter(props: SocialsBlockTwitterProps) {
  const { label, href } = props;

  return (
    <SocialsBlockSocial label={label} href={href} Icon={TwitterFillIcon} />
  );
}
