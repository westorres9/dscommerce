import './styles.css';

type Props = {
    textButton: string;
}

export default function ButtonInverse({textButton}: Props) {
    return (
        <div className="dsc-btn dsc-btn-white">
            {textButton}
        </div>
    );
}