import type { Task } from './types'  
import './App.css' //always import the App.css styling in App.tsx

const initialTasks: Task[] = [        //Task[] is array of tasks
  { id: 1, title: 'Learn useState', done: false },
  { id: 2, title: 'Add first task form', done: false },
  { id: 3, title: 'Read React docs 15 min', done: true },
]

function App() {

  return (
    <>
      <main className="page1">
        <h1>Task Tracker</h1>
        <ul className="list">
          {initialTasks.map((task) => (
            <li key={task.id} className={task.done ? 'item done' : 'item'}>     
              <span>{task.title}</span>   
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}

//{task.id} => React needs a stable key per row. Use `id`, never array index for task
// ? is for conditional class, done tasks look diff later

export default App  //will be rendered on main.tsx
