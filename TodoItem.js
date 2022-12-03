import { motion } from 'framer-motion';
import React, { useRef } from 'react'
import {FiEdit,FiDelete} from 'react-icons/fi';
import {IoMdDoneAll} from 'react-icons/io';


const TodoItem = (props) => {
    const {item,updateTodo,deleteTodo,completeTodo}=props;
    const inputRef=useRef(true);
    
    const changeFocus=()=>{
        inputRef.current.disabled=false;
        inputRef.current.focus();
    }
    
    const update=(id,value,e)=>{
        if(e.which===13){
            //here 13 is key code for enter key
            updateTodo({id,item:value });
            inputRef.current.disabled=true;
        }
    }
    
    return (
    <motion.li 
    initial={{x:'150vw',
    transition:{type:'spring',duration:2},}}
    animate={{x:'0',
    transition:{type:'spring',duration:2},}}
    whileHover={{scale:0.9,transition:{type:'spring',duration:0.1}}}
    exit={{
        x:'-60vw',scale:[1, 0],transition:{duration:0.5},backgroundColor:'rgba(255,0,0,0.1)',
    }}
    key={item.id} className='card'>
        <textarea ref={inputRef}
        disabled={inputRef}
        defaultValue={item.item}
        onKeyPress={(e)=>update(item.id,inputRef.current.value,e)}
        />
        <div className='btns'>
            <motion.button 
            whileHover={{scale:1.4}}
            whileTap={{scale:0.9}}
            onClick={()=>changeFocus()} ><FiEdit/></motion.button>
            {
            item.completed===false&& (
            <motion.button 
            whileHover={{scale:1.4}}
            whileTap={{scale:0.9}}
            style={{color:'green'}} variant="outline-success" onClick={()=>completeTodo(item.id)}><IoMdDoneAll/></motion.button>
            )}
            <motion.button
            whileHover={{scale:1.4}}
            whileTap={{scale:0.9}}
            style={{color:'red'}} variant="outline-danger" onClick={()=>deleteTodo(item.id)}><FiDelete/></motion.button>{" "}
        </div>
        {item.completed && <span className='completed'>Done</span>}
    </motion.li>
  )
}

export default TodoItem;
