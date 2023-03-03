import TodoCard from "../TodoCard/TodoCard";



const List=({list,handleDone,search,handleDelete,currentEdit,handleChangeCurrent,handleEdit,handleCancel})=>{
    return(
        <div >
            <div >
                {list.filter((todo)=>
                    todo.title.toLowerCase().includes(search.toLowerCase())).map((todo) =>
                    <TodoCard
                        key={todo.id}
                        todo={todo}
                        handleDone={handleDone}
                        handleDelete={handleDelete}
                        currentEdit={todo.id===currentEdit}
                        handleChangeCurrent={handleChangeCurrent}
                        handleEdit={handleEdit}
                        handleCancel={handleCancel}


                    />)}
            </div>

        </div>

    )
}
export default List;