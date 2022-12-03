import {  createSlice } from "@reduxjs/toolkit";

const initialState=[];

const addTodoReducer=createSlice({
    name:'todos',
    initialState,
    reducers:{
        //adding todos
        addTodos:(state,action)=>{
            state.push(action.payload);
            return state;
        },
        //remove todo
        deleteTodos:(state,action)=>{
            return state.filter(item=>item.id !== action.payload);
        },
        //update Todo
        updateTodos:(state,action)=>{
            return state.map(todo => {
                if(todo.id===action.payload.id){
                    return {
                        ...todo,
                        item:action.payload.item,
                    }
                }
                return todo;
            })
        },
        //completed
        completeTodos:(state,action)=>{
            return state.map((todo)=>{
                if(todo.id===action.payload){
                    return {
                        ...todo,
                        completed:true,
                    };
                }
                return todo;
            });
        }
    }
})

export const{addTodos,deleteTodos,updateTodos,completeTodos}=addTodoReducer.actions;
export const reducer=addTodoReducer.reducer;