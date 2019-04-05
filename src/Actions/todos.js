import API from 'goals-todos-api'

export const ADD_TODO='ADD_TODO'
export const REMOVE_TODO='REMOVE_TODO'
export const TOGGLE_TODO='TOGGLE_TODO'

function add_todo(todo)
{
    return {
        type: ADD_TODO,
        todo
    }
}

function remove_todo(id)
{
    return {
        type: REMOVE_TODO,
        id
    }
}
function toggle_todo(id)
{
    return{
        type: TOGGLE_TODO,
        id
    }
}
export function handleAddTodo(name,cb)
{
    return (dispatch)=>
    {
        return API.saveTodo(name)
            .then((todo)=>
            {
                dispatch(add_todo(todo))
                cb()
            })
            .catch(()=> {alert('There was an error. Try again!!')})
        
    }
}

export function handleRemoveTodo(todo)
{
    return(dispatch)=>
    {
        dispatch(remove_todo(todo.id))

        return API.deleteTodo(todo.id) 
            .catch(()=>
            {
                dispatch(add_todo(todo))
                alert('There was an error. Try again!!')
            })
    }
}

export function handleToggleTodo(id)
{
    return(dispatch)=>
    {
        dispatch(toggle_todo(id))

        return API.saveTodoToggle(id)
            .catch(()=>
            {
                dispatch(toggle_todo(id))
                alert('There was an error. Try again!!')
            })
    }
}