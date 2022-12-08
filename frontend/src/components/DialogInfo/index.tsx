import ButtonPrimary from "../ButtonPrimary";

type Props = {
    message:string;
    onDialogClose: Function;
}

export default function DialogInfo({ message, onDialogClose }: Props) {
    return(
        <div className="dsc-dialog-background" onClick={() => onDialogClose()}>
            <div className="dsc-dialog-box" onClick={(event) => event.stopPropagation()}>
                <h2>{message}</h2>
                <div className="dsc-dialog-btn" onClick={() => onDialogClose()}>
                    <ButtonPrimary textButton="Ok"/>
                </div>
            </div>
        </div>
    )
}