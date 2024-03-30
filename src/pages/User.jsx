import ToDos from "../components/ToDoList";
import PomodoroTimer from "../components/Timer";

function User(){
  return( 
    <div>
    <h1>User Space</h1>
    <PomodoroTimer/>
    <ToDos/>
    </div>
  )
}


export default User;