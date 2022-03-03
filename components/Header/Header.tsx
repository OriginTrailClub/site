import Image from 'next/image';
import Link from 'next/link';

import { ButtonProps } from 'components/Button';

import * as Styles from './Header.styles';

export interface HeaderProps {
  CallToAction?: React.ReactElement<ButtonProps>;
}

export function Header(props: HeaderProps) {
  const { CallToAction } = props;

  return (
    <header className={Styles.container()}>
      <div className={Styles.contents()}>
        <Link passHref href={{ pathname: '/' }}>
        <a className={Styles.logo()}>
          <Image
            priority
            src="/logo.svg"
            objectPosition="left center"
            objectFit="contain"
            layout="fill"
            alt="OriginTrail Community Hub logo"
          />
        </a>
        </Link>


        <div className={Styles.callToAction()}>{CallToAction}</div>
      </div>
    </header>
  );
}
