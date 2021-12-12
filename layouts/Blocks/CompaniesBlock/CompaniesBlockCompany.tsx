import * as Styles from './CompaniesBlockCompany.styles';

import Image from 'next/image';

export interface CompaniesBlockCompanyProps {
  src: string;
  alt: string;
}

export function CompaniesBlockCompany(props: CompaniesBlockCompanyProps) {
  const { src, alt } = props;

  return (
    <li className={Styles.container()}>
      <div className={Styles.contents()}>
        <div className={Styles.image()}>
          <Image
            alt={alt}
            src={src}
            layout="fill"
            objectPosition="center"
            objectFit="contain"
          />
        </div>
      </div>
    </li>
  );
}
