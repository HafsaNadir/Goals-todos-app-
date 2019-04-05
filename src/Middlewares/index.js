import {applyMiddleware} from 'redux'
import checker from './checker'
import  logger  from './logger'
import thunk from 'redux-thunk'

const middlewares= applyMiddleware(
    thunk,
    checker,
    logger
)

export default middlewares