import RedditFillIcon from 'remixicon-react/RedditFillIcon';

import {
  SocialBlockSocialProps,
  SocialsBlockSocial,
} from './SocialsBlockSocial';

export type SocialsBlockRedditProps = Omit<SocialBlockSocialProps, 'Icon'>;

export function SocialsBlockReddit(props: SocialsBlockRedditProps) {
  const { label, href } = props;

  return <SocialsBlockSocial label={label} href={href} Icon={RedditFillIcon} />;
}
