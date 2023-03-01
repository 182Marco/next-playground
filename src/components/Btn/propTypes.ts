export interface BtnStyleProps {
    col: string;
    bg: string
    size: 's' | 'm' | 'l'
}

export interface BtnProps extends BtnStyleProps {
    text: string;
    handleClick: () => null
}
