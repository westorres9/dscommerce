export default function FormInput(props: any) {

    const { validation, ...inputProps } = props;

    return (
        <input { ...inputProps }/>
    );
}