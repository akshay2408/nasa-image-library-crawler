export declare type Component<P = {}> = (props: P) => JSX.Element;

export interface globalProps {
    hide?: boolean;
    hideBorder?: boolean;
}

export interface Props extends globalProps {
    children?: React.ReactNode;
}
