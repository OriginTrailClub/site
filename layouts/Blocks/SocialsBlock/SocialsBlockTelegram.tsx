import TelegramFillIcon from 'remixicon-react/TelegramFillIcon';

import {
  SocialBlockSocialProps,
  SocialsBlockSocial,
} from './SocialsBlockSocial';

export type SocialsBlockTelegramProps = Omit<SocialBlockSocialProps, 'Icon'>;

export function SocialsBlockTelegram(props: SocialsBlockTelegramProps) {
  const { label, href } = props;

  return (
    <SocialsBlockSocial label={label} href={href} Icon={TelegramFillIcon} />
  );
}
