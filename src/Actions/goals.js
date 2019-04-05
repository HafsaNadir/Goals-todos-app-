import API from 'goals-todos-api'

export const ADD_GOAL='ADD_GOAL'
export const REMOVE_GOAL='REMOVE_GOAL'

function add_goal(goal)
{
    return {
        type: ADD_GOAL,
        goal
    }
}

function remove_goal(id)
{
    return {
        type: REMOVE_GOAL,
        id
    }
}

export function handleAddGoal(name,cb)
{
    return (dispatch)=>
    {
        return API.saveGoal(name)
            .then((goal)=>
            {
                dispatch(add_goal(goal))
                cb()
            })
            .catch(()=>alert('There was an error. Try again!!'))
        
    }
}

export function handleRemoveGoal(goal)
{
    return(dispatch)=>
    {
        dispatch(remove_goal(goal.id))

        return API.deleteGoal(goal.id)
            .catch(()=>
            {
                dispatch(add_goal(goal))
                alert('There was an error. Try again!!')
            })
    }
}
