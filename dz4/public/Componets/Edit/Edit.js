import classes from './Edit.module.css'

const Edit=({handleClick,todo,children})=>{
    return(
        <button className={classes.edit}
                onClick={()=>handleClick(todo.id)}>
            {children}
        </button>
    )
}
export default Edit;