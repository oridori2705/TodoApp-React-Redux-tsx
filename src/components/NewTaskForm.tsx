import styled from '@emotion/styled'
import { ChangeEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from '~/redux/tasks'

const NewTaskForm = (props: any) => {
  const [task, setTask] = useState('')
  const dispatch = useDispatch() //redux의 dispatch를 불러온다. react-redux에서 제공하는 훅

  const handleSubmit = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    dispatch(tasks.actions.add(task)) // dispatch에 acrion값을 넣으면 된다. 이를 위해서 action을 따로 만들어서 정의해줬다.
    setTask('')
  }

  return (
    <Form
      {...props}
      onSubmit={handleSubmit}>
      <Input
        type="text"
        value={task}
        onChange={e => setTask(e.target.value)}
        required
      />
      <SubmitButton>Add</SubmitButton>
    </Form>
  )
}

export default NewTaskForm

const Form = styled.form`
  width: 400px;
`

const Input = styled.input`
  width: 332px;
  height: 32px;
  padding: 4px 6px;
  border-radius: 8px;
  border: 2px solid black;
  box-sizing: border-box;
`

const SubmitButton = styled.button`
  width: 60px;
  height: 32px;
  padding: 4px 6px;
  margin-left: 8px;
  color: white;
  border-radius: 8px;
  border: none;
  background-color: black;
  box-sizing: border-box;
  cursor: pointer;
`
