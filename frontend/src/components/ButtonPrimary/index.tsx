import './styles.css';


type Props = {
    textButton: string;
}

export default function ButtonPrimary({textButton}: Props) {
    return (
        <div className="dsc-btn dsc-btn-blue">
            {textButton}
        </div>
    );
}