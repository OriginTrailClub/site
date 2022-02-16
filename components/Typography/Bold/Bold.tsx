import * as Styles from './Bold.styles';

export type BoldProps = {
    children: React.ReactNode;
}

export function Bold(props: BoldProps) {
    const { children } = props;

    return (<strong className={Styles.container()}>{children}</strong>);
}