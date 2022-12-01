import './styles.css';

type Props = {
    name: string;
}

export default function ProductCategory({name}: Props) {
    return (
        <div className="dsc-category">{name}</div>
    )
}