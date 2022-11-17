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

Then create actions and reducer in reducer.js..

For that we import createSlice() method from @reduxjs/toolkit..

and create reducer with its name,initialState,reducer functions..

In this reducers we create our functions (addTodos,DeleteTodos,updateTodos,completeTodos)

         
  After that we import all the functions and reducer from addTodoReducer..
  
  Then we import reducer in store for convert redux functions to react component
  
  For this we import configureStore from @reduxjs/toolkit and import reducer from ./reducer
                  
Then we import Provider from react-redux to store the store to convert react component connect 
to redux component.

And import store from './redux/store';and ReactDOM from 'react-dom'
                         
 After that we add connect() method to Todos.js Component..it has two input functions those are 

mapStateToProps & mapDispatchToProps..

mapStateToProps function is for use the redux state in  react and take state as a props or parameter..

mapDispatchToProps is for use actions&reducers from redux in react Component and take dispatch 
method as a parameter..       
  
 Then we crete 2Compponents named DisplayTodos.js & TodoItem.js...
 
 TodoItem.js is to display the functions of todos like update,delte,complete..
 
 we take this functions as props.
                          
 Then we create DisplayTodo.js to display the compete,all and active todos..
 
 And we import todoitem.js to displaying the functions of todos and we use connet()method also..
 
 we import all functions from reducer.js deleteTodos,completeTodos,updateTodos  
        
 And we import Todos.js and DisplayTodo.js in our main react component App.js
           
 Then we give some css styles and animations for looking good program.
 
 For that we use motion from 'framer-motion' 
      
                         
                         
                         
            
        
                                        
                                    
                                        
                                     
                                        
                                        
                             
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
