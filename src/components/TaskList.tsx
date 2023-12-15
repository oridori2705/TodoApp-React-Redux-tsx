import styled from '@emotion/styled'
import { useSelector } from 'react-redux'
import { RootState } from '../redux' // TypeScript이기 때문에 useSelector을 사용했을 때 에러가 발생하는데 이를 해결한다. ('DefaultRootState' 형식에 'tasks' 속성이 없습니다.)
import Task from './Task'
import { Task as TaskType } from '../redux/tasks/types'
const TaskList = (props: any) => {
  //Reducer을 이용하기 위해서 Dispatch를 사용했다면
  //값을 보여주기 위해서는 Selector을 사용한다.
  //type은 redux/index.ts에서 선언해줬다.
  const tasks = useSelector((store: RootState) => store.tasks)

  return (
    <UnorderedList {...props}>
      {tasks.map((item: TaskType) => (
        <Task
          key={item.id}
          id={item.id}
          content={item.content}
          complete={item.complete}
        />
      ))}
    </UnorderedList>
  )
}

export default TaskList

const UnorderedList = styled.ul`
  width: 400px;
  margin: 0;
  padding: 0;

  & > li {
    &:not(:first-of-type) {
      margin-top: 8px;
    }
  }
`
