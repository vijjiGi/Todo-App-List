import './css/main.css';
import DisplayTodo from './components/DisplayTodo';
import Todos from './components/Todos';
import {motion} from 'framer-motion';

function App() {
  return (
    <div className="app">
      <motion.h1 
      initial={{y:-200}}
      animate={{y:0}}
      transition={{type:'spring',duration:.5}}
      whileHover={{scale:1.1}}>Todo App List
      </motion.h1>
      <motion.div
        initial={{y:1000}}
        animate={{y:0}}
        transition={{type:'spring',duration:1}}
      >
        <Todos/>
        <DisplayTodo/>
        </motion.div>
    </div>
  );
}

export default App;
