import React, {useState } from 'react'
import { connect } from 'react-redux';
import { addTodos } from '../redux/reducer';
import {GoPlus} from 'react-icons/go';
import { motion } from 'framer-motion';

const mapStateToProps=(state)=>{
    return {
        todos:state,
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        addTodo:(obj)=>dispatch(addTodos(obj)),
    }}

const Todos = (props) => {
    const [todo,setTodo]=useState('')
    
    const handleChange=(e)=>{
        e.preventDefault();
        setTodo(e.target.value);
    }
    const add=()=>{
        if(todo===''){
            alert('input is empty')
        }
        else{
            props.addTodo({
                //here we will write object/todo
                id:Math.floor(Math.random()*1000),
                item:todo,
                completed:false,
            })
        }
    setTodo("");
}
//console.log('props from store',props);
return (
<div className='addtodos'>
    <input type='text'
    onChange={(e)=>handleChange(e)}
    placeholder='add todo'
    className='todo-input'
    value={todo}/>
    <motion.button 
    whileHover={{scale:1.1}}
    whileTap={{scale:0.9}}
    className='add-btn' onClick={()=>
    add() } ><GoPlus/>
    </motion.button>
    <br/>
</div>
  )
}
//now we use connect method to connect this component with redux store

export default connect(mapStateToProps,mapDispatchToProps)(Todos) ;
