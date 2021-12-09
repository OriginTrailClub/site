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
        <Image
          alt={alt}
          src={src}
          width={161}
          height={90}
          layout="fill"
          objectFit="contain"
        />
      </div>
    </li>
  );
}
