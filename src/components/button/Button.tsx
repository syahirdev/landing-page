import "./Button.scss";

interface ButtonProps {
    name: string,
    border?: boolean
}

export const Button = ({name, border}: ButtonProps) => {
    return (
        <div className={`${border && "border"} button`}>
            {name}
        </div>
    );
};
