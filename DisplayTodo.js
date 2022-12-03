import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodos, completeTodos, deleteTodos, updateTodos } from '../redux/reducer';
import TodoItem from './TodoItem';
 


const mapStateToProps=(state)=>{
    return {
        todos:state,
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        addTodo:(obj)=>dispatch(addTodos(obj)),
        deleteTodo:(id)=>dispatch(deleteTodos(id)),
        updateTodo:(obj)=>dispatch(updateTodos(obj)),
        completeTodo:(id)=>dispatch(completeTodos(id)),
    }
}

const DisplayTodo = (props) => {
    const [sort,setSort]=useState('active')
  return (
    <div className='displayTodos'>
        <div className='buttons'>
             <motion.button
             whileHover={{scale:1.1}}
             whileTap={{scale:0.9}}
             onClick={()=>setSort('active')}>Active
             </motion.button>
             <motion.button 
             whileHover={{scale:1.1}}
             whileTap={{scale:0.9}}
             onClick={()=>setSort('completed')}>Completed
             </motion.button>
             <motion.button
             whileHover={{scale:1.1}}
             whileTap={{scale:0.9}}
             onClick={()=>setSort('all')}>All</motion.button>
        </div>
        <ul>
            <AnimatePresence>    
                {
                props.todos.length>0 && sort==='active' ?
                props.todos.map(item=>{
                    return (
                        item.completed===false &&
                        <TodoItem
                        key={item.id}
                        item={item}
                        deleteTodo={props.deleteTodo}
                        updateTodo={props.updateTodo}
                        completeTodo={props.completeTodo}
                        />
                        )
                    })
                    :null}
                    {/* for omplete items */}
                    { props.todos.length>0 && sort==='completed' ?
                    props.todos.map(item=>{
                        return (
                            item.completed===true &&
                            <TodoItem
                            key={item.id}
                            item={item}
                            deleteTodo={props.deleteTodo}
                            updateTodo={props.updateTodo}
                            completeTodo={props.completeTodo}
                            />
                            )
                        })
                        :null}
                        {/* for all items */}
                        {props.todos.length>0 && sort==='all' ?
                        props.todos.map(item=>{
                            return (
                            <TodoItem
                            key={item.id}
                            item={item}
                            deleteTodo={props.deleteTodo}
                            updateTodo={props.updateTodo}
                            completeTodo={props.completeTodo}
                            />
                            )
                        })
                        :null}
            </AnimatePresence>
        </ul>
    </div>
  )
}

export default connect(mapStateToProps,mapDispatchToProps)(DisplayTodo);
