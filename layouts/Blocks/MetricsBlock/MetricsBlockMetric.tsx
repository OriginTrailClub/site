import * as Styles from './MetricsBlockMetric.styles';
import { useNumberFormatter } from '@react-aria/i18n';
import Image from 'next/image';

export interface MetricsBlockMetricProps {
  label: string;
  value: number;
  currency?: string;
  style?: 'decimal' | 'currency';
  icon: string;
}

export function MetricsBlockMetric(props: MetricsBlockMetricProps) {
  const { label, value, currency, style = 'decimal', icon } = props;

  let formatter = useNumberFormatter({
    notation: 'compact',
    compactDisplay: 'short',
    style,
    currency,
    maximumFractionDigits: 2,
  });

  return (
    <li className={Styles.metric()}>
      <div className={Styles.icon()}>
        <div className={Styles.aspectRatioBox()}>
          <div className={Styles.aspectRatioBoxInside()}>
            <Image src={icon} alt={label} layout="fill" objectFit="contain" />
          </div>
        </div>
      </div>
      <div className={Styles.info()}>
        <span className={Styles.value()}>{formatter.format(value)}</span>
        <span className={Styles.label()}>{label}</span>
      </div>
    </li>
  );
}
