import GithubFillIcon from 'remixicon-react/GithubFillIcon';

import {
  SocialBlockSocialProps,
  SocialsBlockSocial,
} from './SocialsBlockSocial';

export type SocialsBlockGithubProps = Omit<SocialBlockSocialProps, 'Icon'>;

export function SocialsBlockGithub(props: SocialsBlockGithubProps) {
  const { label, href } = props;

  return <SocialsBlockSocial label={label} href={href} Icon={GithubFillIcon} />;
}
