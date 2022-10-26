# Todo-App-List
We create an app or program to add our movements or works then we compete,edit or delete them..

For that we are using react-redux templates react-icons,functions,redux-toolkit,reduxjs..

lets start the project..

For this we crearte sub functions..we create sub files with functons..

Like Components->Todos.js,TodoItem.js,DisplayTodo.js

    css->main.css

    redux->store.js,reducer.js
     
     App.js,index.js are react functions..

First we import useful functions of react and redux..

npm install react-redux frame-motion @reduxjs/toolkt functions react-icons..

After all this we create an input and a button in Todos.js..

    const Todos=(props)=>{
          const [todo,setTodo]=useState('');->import from 'react'
       const handleChange=(e)=>{
              e.preventDefault();
              setTodo(e.target.value);
                }                                ->Todos.js
       const add=()=>{
            if(todo===''){
                alert('input is empty');
                 }else{
                    props.addTodo({
                        id:Math.floor(Math.random()*1000),
                        item:todo,
                        completed:false,
                        })
                        }
                     setTodo('');
                     }
              return(
                  <div classname='addtodos'>
                  <input type='text' onChange={(e)=>handleChange(e)}
                          placeholder='add todo' className='todo-input' value={todo}/>
                  <motion button whileHover={{scale:1.1}} whileTap={{scal=0.9}}
                  className='add-btn' onClick={()=>add()}><GoPlus/></motion.button>
                  </div>
                  )}
         export default Todos;
         
         
Then create actions and reducer in reducer.js..

For that we import createSlice() method from @reduxjs/toolkit..

and create reducer with its name,initialState,reducer functions..

In this reducers we create our functions (addTodos,DeleteTodos,updateTodos,completeTodos)

      intialState=[];
      
      const addTodoReducer=createSlice({
            name:'todos',
            initialState,
            reducers:{
                  addTodos:(state,action)={
                        state.push(action.payload);         ->reducer.js
                        return state;
                      }
                  deleteTodos:(state,action)=>{
                        return state.filter(item=>item.id!==action.payload);
                        }
                  updateTodos:(state,action)=>{
                        return state.map(todo=>{
                              if(item.id===action.payload.id){
                                  return{
                                        ..todos,
                                        item:action.payload.item,
                                        }} return todo;  })  }
                   completeTodos:(state,action)=>{
                          return state.map(todo=>{
                                if(todo.id===action.payload){
                                    return{
                                        ...todo,
                                        completed:true,
                                        }; }
                                        return todo;
                                        }) } })  
         export const{addTodos,deleteTodos,updateTodos,completeTodos}=addtodoReducer.actions,
         export reducer=addTodoReducer.reducer,
         
  After that we import all the functions and reducer from addTodoReducer..
  
  Then we import reducer in store for convert redux functions to react component
  
  For this we import configureStore from @reduxjs/toolkit and import reducer from ./reducer
  
          const store=configureStore({
                  reducer=reducer,           
                  })                        ->Store.js
                  export default store;
                  
Then we import Provider from react-redux to store the store to convert react component connect 
to redux component.

And import store from './redux/store';and ReactDOM from 'react-dom'

            
              const root=ReactDOM.createRoot(document.getElementById('root);
              root.render(
                    <React.StrictMode>
                      <Provider store={store}>
                            <App/>                 ->from App.js
                         <Provider/></React.StrictMode>
                         );
                         
 After that we add connect() method to Todos.js Component..it has two input functions those are 

mapStateToProps & mapDispatchToProps..

mapStateToProps function is for use the redux state in  react and take state as a props or parameter..

mapDispatchToProps is for use actions&reducers from redux in react Component and take dispatch 
method as a parameter..

        const mapStateToProps=(state)=>{
              return{todos:state, } }
              
        const mapDispatchToProps=(dispatch)=>{
              return {
              addtodos:(obj)=>dispatch(addtodos(obj)), }  }
              
           export default connect(mapStateToProps,mapDispatchToProps)(Todos);         
  
 Then we crete 2Compponents named DisplayTodos.js & TodoItem.js...
 
 TodoItem.js is to display the functions of todos like update,delte,complete..
 
 we take this functions as props..
 
        const TodoItem=(props)=>{
            const{item,updateTodo,removeTodo,completeTodo}=props;
            const inputRef=useRef(true);
            
        const changeFocus=()=>{
                inputRef.current.disabled=false;
                inputRef.current.focus();
                }
        const update=(id,value,e)=>{
                if(e.which===13){
                      updateTodo({id,item:value});
                      inputRef.current.disabled=true;
                      }}
          return(
       <motion.li key={item.id} className='card'>
              <textarea ref={inputRef} disabled={inputRef} defaultValue={item.item}
                          onClick={(e)=>update(item.id,inputRef.current.value,e)} />
          <div className='btns'>
              <motion.button onClick={()=>changeFocus()}><FiEdit/></button>
         { 
          item.completed===false&&(
               <motion.button onClick={()=>completeTodo(item.id)}><ToMdDoneAll/></motion.button>
                        )}
                <motion.button onClick={()=>deleteTodo(item.id)}><FiDelete/></motion.button>
           </div>
           {item.completed && <span classname='completed' >Done</span>}
       <motion.li>  ) }
       
       export default TodoItem;
                          
 Then we create DisplayTodo.js to display the compete,all and active todos..
 
 And we import todoitem.js to displaying the functions of todos and we use connet()method also..
 
 we import all functions from reducer.js deleteTodos,completeTodos,updateTodos
 
          const mapStateToProps=(state)=>{
                 return { todo:state,}}
          const mapDspatchToProps=(dispatch)=>{
              return {
                updateTodo:(obj)=>dispatch(updatetodos(obj)),
                deleteTodo:(id)=>dispatch(deleteTodos(id)),
                completeTodo:(id)=>dispatch(completeTodos(id)), } 
                }
           const DspayTodo=(props)=>{
              const[sort,setSort]=useState('active')
              return(
               <div classaName='displayTodos'>
                     <motion.button onClick={()=>setSort('active')}>Active</motion.button>
                     <motion.button onClick={()=>setSort('completed')}>Completed</motion.button>
                     <motion.button onClick={()=>setSort('all')}>All</motion.button>
                     </div>
              <ul>
                 <AnimatePresence>
               //for active items
                   {
                   props.todos.lenght>0 && sort==='active' ?
                     props.todos.map(item=>{
                      return(
                        item.completed===false &&
                          <TodoItem key={item.id} deleteTodo={props.deleteTodo}
                              updateTodo={props.updateTodo} completeTodo={props.completeTodo}/>
                              ) }) :null}
                 //for complete item
                 {
                     props.todos.length>0 && sort==='completed' ?
                        props.todo.map(item=>{
                          return(
                          item.completed===true &&
                            <TodoItem key={item.id} deleteTodo={deleteTodo} 
                              updateTodo={props.updatetodo} completeTodo={props.completeTodo}/>
                              ) }) :null}
                  //for all items
                  {
                      props.todos.length>0 && sort==='all ?
                        props.todo.map(item=>{
                            return(
                                item.completed===false &&
                                <TodoItem key={item.id} deleteTodo={props.deleteTodo}
                                  updateTodo={props.updatedo} completeTod={props.completeTodo}/>
                                  ) }) :null}
                   </AnimatePressence>
             </ul      
             </div> ) }
        export default connect(mapStateToProps,mapDispatchToProps)(connect);      
        
        
 And we import Todos.js and DisplayTodo.js in our main react component App.js
 
        
         function App(){
          return(
              <div className='app'>
                  <motion.h1> Todo App List</motion.h1>
                  <motion.div>
                      <Todos/>
                      <DisplayTodo/>
                  </motion.div>
               </div>
               )}  
        export default App;
        
           
 Then we give some css styles and animations for looking good program.
 
 For that we use motion from 'framer-motion' 
      
                         
                         
                         
            
        
                                        
                                    
                                        
                                     
                                        
                                        
                             
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
