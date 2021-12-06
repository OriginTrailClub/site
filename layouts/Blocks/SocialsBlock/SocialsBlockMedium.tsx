import MediumFillIcon from 'remixicon-react/MediumFillIcon';

import {
  SocialBlockSocialProps,
  SocialsBlockSocial,
} from './SocialsBlockSocial';

export type SocialsBlockMediumProps = Omit<SocialBlockSocialProps, 'Icon'>;

export function SocialsBlockMedium(props: SocialsBlockMediumProps) {
  const { label, href } = props;

  return <SocialsBlockSocial label={label} href={href} Icon={MediumFillIcon} />;
}
