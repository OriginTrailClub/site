import * as Styles from './List.styles';

import { ListItem } from "./ListItem";

export type ListProps = {
    children: React.ReactNode;
    style?: 'unordered' | 'ordered';
}

export function List(props: ListProps) {
    const { children, style = 'unordered' } = props;

    const ElementType = style === 'unordered' ? 'ul' : 'ol';

    return (
        <ElementType className={Styles.container()}>
            {children}
        </ElementType>
    );
}

List.Item = ListItem;