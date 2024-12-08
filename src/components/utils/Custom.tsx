import { Button } from 'antd';

type CustomButtonProps = {
    title: string,
    divStyling?: string,
    buttonStyling?: string,
    onClickFunction?: () => void,
    disable?: boolean,
    children?: any
}

export function CustomButton({ title, divStyling, buttonStyling, onClickFunction, disable = false, children }: CustomButtonProps) {
    return (
        <div className={divStyling}>
            <Button type="primary" className={buttonStyling} onClick={onClickFunction} disabled={disable}>
                {title}
                {children}
            </Button>
        </div>
    );
}