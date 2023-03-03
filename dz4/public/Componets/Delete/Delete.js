import classes from '../Delete/Delete.module.css'

const Delete=( {onClick,children,id})=>{
    return(
        <button onClick={() => onClick(id)} className={classes.delete}>{children}</button>
    )
}
export default Delete;
Footer