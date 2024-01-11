
export const AddTask = ({ taskList, setTaskList, task, setTask }) => {

  const handleSubmit = (e) => {

    e.preventDefault();

    if (task.id) {

      const date = new Date();
      const updateTaskList = taskList.map((todo) => (
        todo.id === task.id ? { id: task.id, name: task.name, time: `${date.toLocaleTimeString()}  ${date.toLocaleDateString()}` } : todo)
      )

      setTaskList(updateTaskList)

      setTask({})

    }

    else {

      const date = new Date();

      const newTask = {

        id: Math.floor(Math.random() * 10000),
        name: e.target.task.value,
        time: `${date.toLocaleTimeString()}  ${date.toLocaleDateString()}`

      }

      setTaskList([...taskList, newTask])

      setTask({})

    }



  }

  return (
    <section className='addTask'>
      <form onSubmit={handleSubmit} >
        <input type="text" value={task.name || ""} name='task' placeholder='TaskMate' autoComplete='off' maxLength='20' onChange={e => setTask({ ...task, name: e.target.value })} />
        <button type='submit'>{task.id ? 'UPDATE' : 'ADD'}</button>
      </form>
    </section>
  )
}
