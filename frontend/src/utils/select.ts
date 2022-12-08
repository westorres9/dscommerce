export const SelectStyles = {
    control: (provided: any) => ({
        ...provided,
        minHeight: "40px",
        border: "none",
        boxShadow: "none",
        "&:hover": {
            border: "none",
        },
    }),
    placeholder: (provided: any) => ({
        ...provided,
        color: "var(--dsc-color-font-placeholder)",
    }),
    option: (provided: any) => ({
        ...provided,
        color: "var(--dsc-color-font-primary)",
    })
};