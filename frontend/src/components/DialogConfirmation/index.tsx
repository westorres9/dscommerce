import ButtonPrimary from "../ButtonPrimary";
import ButtonInverse from "../ButtonInverse";

type Props = {
    message:string;
    onDialogAnswer: Function;
}

export default function DialogConfirmation({ message, onDialogAnswer }: Props) {
    return(
        <div className="dsc-dialog-background" onClick={() => onDialogAnswer(false)}>
            <div className="dsc-dialog-box" onClick={(event) => event.stopPropagation()}>
                <h2>{message}</h2>
                <div className="dsc-dialog-btn-container" onClick={() => onDialogAnswer(false)}>
                    <div onClick={() => onDialogAnswer(false)}>
                        <ButtonInverse textButton="Não"/>
                    </div>
                    <div onClick={() => onDialogAnswer(true)}>
                        <ButtonPrimary textButton="Sim"/>
                    </div>
                </div>
            </div>
        </div>
    )
}