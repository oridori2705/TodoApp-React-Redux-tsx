export interface Task {
  id: string
  content: string
  complete: boolean
}

export type Type = 'ADD_TASK' | 'UPDATE_TASK' | 'REMOVE_TASK'

export type Action = { type: Type; payload: Task }
