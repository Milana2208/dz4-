import { useState } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import classes  from "../TodoList/TodoList.module.css"
import Modal from "../../components/Modal/Modal";
import List from "../../components/List/List";





const TodoList=()=>{
    const [ isShow, setIsShow ] = useState(false);
    const [ newTitle, setNewTitle ] = useState('');
    const[search,setSearch]=useState('');
    const [currentEdit,setCurrentEdit]=useState('');



    const [list,setList]=useState([ {
        title: 'coding',
        id:1 ,
        completed:false,

    },
        {
            title: 'homework',
            id:2,
            completed:false,

        },
        {
            title:'read',
            id:3,
            completed:false,

        },
        {
            title: 'sleep',
            id:4,
            completed:false,

        },
        {
            title: 'cook',
            id:5,
            completed:false,

        }
    ])
    localStorage.setItem('list', JSON.stringify(list));

    const storedList = JSON.parse(localStorage.getItem('list'));
    console.log(storedList)



    const handleShow = () => {
        setIsShow(!isShow);
        setSearch('')
        setNewTitle('')
    };
    const handleAdd=()=>{
        setList((prevTodo)=>{
            return [...prevTodo,{id:list.length +1,title:newTitle,completed:false}]
        })
        handleShow()


    }

    const handleDone = (id) => {
        const currentIndex = list.findIndex((todo) => todo.id === id);
        list[currentIndex].completed = !list[currentIndex].completed;
        setList([...list]);
    }
    const handleChangeText = (event) => {
        setNewTitle(event.target.value);
        // setAdd(event.target.value)
    }
    const handeSearch=(event)=>{
        setSearch(event.target.value)
    }
    console.log(list)
    const handleDelete = (id) =>
    {
        let newList = list.filter(todo => todo.id !== id)
        setList(newList)
    }

    const handleEdit=(editTodo)=>{
        const editList=list.map(todo=>{
            if (editTodo.id===todo.id){
                return{...todo,title:editTodo.title}
            }
            return todo
        })
        setList([...editList]);
        setCurrentEdit()
    }
    // const handleCancel=(cancelTodo)=>{
    //     const cancelList=list.map(todo=>{
    //         if (cancelTodo.id===todo.id){
    //             return{...todo,title:cancelTodo.title}
    //         }
    //         return todo
    //     })
    //     setList([...cancelList]);
    //
    //
    // }






    return (
        <div className={classes.wrapper}>
            <Button onClick={handleShow}>
                Добавить
            </Button>
            <Input
                type={'text'}
                placeholder={'Search...'}
                onChange={handeSearch}
                name={'search'}
                value={search}
            />



            { isShow && <Modal handleShow={handleShow}>
                <p>{newTitle}</p>
                <Input
                    type={'text'}
                    placeholder={"Add new task"}
                    onChange={handleChangeText}
                    name={'add'}
                    value={newTitle}/>
                <Button onClick={handleAdd}>
                    Добавить
                </Button>


                <p>{search}</p>
                <button  className={classes.button} onClick={handleShow}>Close</button>
            </Modal> }
            <List list={list}
                  handleDone={handleDone}
                  search={search}
                  handleDelete={handleDelete}
                  currentEdit={currentEdit}
                  handleChangeCurrent={setCurrentEdit}
                  handleEdit={handleEdit}




            />

        </div>

    )
}

export default TodoList;