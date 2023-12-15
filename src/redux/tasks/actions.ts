import { v4 } from 'uuid'
import type { Action } from './types'

export const addTask = (content: string): Action => {
  return {
    type: 'ADD_TASK',
    payload: {
      id: v4(),
      content,
      complete: false
    }
  }
}

export const updateTask = (
  id: string,
  content: string,
  complete: boolean
): Action => {
  return {
    type: 'UPDATE_TASK',
    payload: {
      id,
      content,
      complete
    }
  }
}

export const removeTask = (id: string): Action => {
  return {
    type: 'REMOVE_TASK',
    payload: {
      id,
      content: '',
      complete: false //id만 적으면 되지만 Typescript로 인해서 content와 complete도 추가해줘야한다.
    }
  }
}

/*
main.tsx에서 Provide로 감싸줬기 때문에 action을 이용해서 Reducer에 접근한다.
*/
