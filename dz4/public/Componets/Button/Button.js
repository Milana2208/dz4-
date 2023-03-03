import classes from '../Button/Button.module.css'

const Button = ({ children,onClick}) => {
    return (
        <button onClick={() => onClick()} className={classes.addButton}>{children}</button>
    )
}

export default Button;