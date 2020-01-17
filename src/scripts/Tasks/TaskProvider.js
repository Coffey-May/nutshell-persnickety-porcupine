// created by Adrian

let tasks = []

export const useTasks = () => {
    return tasks;
};
export const editTasks = (tasksObject) => {
  return fetch(`http://localhost:8088/tasks/${tasksObject.id}`, {
      method: "PUT",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(tasksObject)
  })
      .then(getTasks)

}

export const deleteTasks = (tasksId) => {
  return fetch(`http://localhost:8088/tasks/${tasksId}`, {
      method: "DELETE"
  })
  .then(getTasks)
}

export const getTasks = () => {
    return fetch('http://localhost:8088/tasks', {
        method: "GET",
}
    ).then(response => response.json())
    .then(parsedtasks => {
            // console.table(parsedtasks);
            tasks = parsedtasks.slice()
        })

    }

export const saveTask = task => {
    fetch('http://localhost:8088/tasks', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(task)
    })
    .then(getTasks)
}