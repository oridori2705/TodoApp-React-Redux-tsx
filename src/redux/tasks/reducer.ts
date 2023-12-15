import { Action, Task } from './types'

//state: Task[] = []에서 [] 빈 배열로 default값을 줘야한다. 명시하지않으면 상태가 undefined가 되어 오류가 발생한다.
export const tasks = (state: Task[] = [], action: Action): Task[] => {
  switch (action.type) {
    case 'ADD_TASK': {
      const newTask = action.payload
      return [...state, newTask]
    }
    case 'UPDATE_TASK': {
      const updatedTask = action.payload
      return state.map(oldTask =>
        oldTask.id === updatedTask.id ? updatedTask : oldTask
      )
    }
    case 'REMOVE_TASK': {
      const removedTask = action.payload
      return state.filter(task => task.id !== removedTask.id)
    }
    default: {
      return state
    }
  }
}

/*
여기서 Reducer로 만들어진 tasks는 index.ts에 보내져서 combineReducer로 뭉쳐진다.
그래서 tasks에 접근하려면 dispatch로 action을 보내면 된다.
*/
