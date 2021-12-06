import DiscordFillIcon from 'remixicon-react/DiscordFillIcon';

import {
  SocialBlockSocialProps,
  SocialsBlockSocial,
} from './SocialsBlockSocial';

export type SocialsBlockDiscordProps = Omit<SocialBlockSocialProps, 'Icon'>;

export function SocialsBlockDiscord(props: SocialsBlockDiscordProps) {
  const { label, href } = props;

  return (
    <SocialsBlockSocial label={label} href={href} Icon={DiscordFillIcon} />
  );
}
