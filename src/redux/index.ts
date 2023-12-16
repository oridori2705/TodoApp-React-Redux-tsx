import { combineReducers } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
// import storage from 'redux-persist/lib/storage' // Local storage를 사용함
import { tasks } from './tasks'
import session from 'redux-persist/lib/storage/session' // Session Storage를 사용함
import { configureStore } from '@reduxjs/toolkit'

//redux-persist를 사용하기위해 설정 객체가 필요하다.
const persistConfig = {
  key: 'root',
  storage: session, // storage와 session이라는 게있다.
  whitelist: ['tasks'] // 어떤 reducer을 허용해 줄 것인가를 지정해줘야한다.(명시하지 않으면 모든 reducer가 지정된다.)
}

const combinedReducer = combineReducers({ tasks: tasks.reducer })

export const rootReducer = persistReducer(persistConfig, combinedReducer)

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }),
  devTools: true
})

export const persistor = persistStore(store as any) // localStorage나 sessionStorage의 값들을 빼오기위해 사용한다. 타입을 자동으로 지정한다.(안되면 as any 로함)

export type RootState = ReturnType<typeof store.getState> // useSelector사용시 나타나는 ('DefaultRootState' 형식에 'tasks' 속성이 없습니다.) 에러를 해결한다.

/*
rootReducer을 만들어줘야함
먼저 최상위에 있는 main.tsx에 전역 <Provider store={}></Provider> 를 context를 통해 넘겨줘야한다.
그리고 store={}에 들어갈 값을 만들기위해 reducer을 합쳐주는 로직이 필요하다.
그 로직이 위 코드에 해당된다.
*/

/*
//createStore에 취소선 문제
@deprecated
We recommend using the configureStore method of the @reduxjs/toolkit package, which replaces createStore.

Redux Toolkit is our recommended approach for writing Redux logic today, including store setup, reducers, data fetching, and more.

For more details, please read this Redux docs page: https://redux.js.org/introduction/why-rtk-is-redux-today

configureStore from Redux Toolkit is an improved version of createStore that simplifies setup and helps avoid common bugs.

@reduxjs/toolkit 패키지의 configureStore 메소드를 사용하라는 경고를 받았습니다. 
이 경고는 기존의 Redux에서 사용되던 createStore 대신에 @reduxjs/toolkit 패키지의 configureStore를 사용하라는 것입니다. 
Redux Toolkit은 현재까지의 Redux 로직을 작성하는 권장 방법이며, 스토어 설정, 리듀서, 데이터 가져오기 등을 단순화하는 데 도움이 되는 유틸리티와 추상화를 제공합니다.
*/

/*
redux-logger
상태가 변경될 때 console에 로그를 찍어주는 middleware 라이브러리
npm i redux-logger 
npm i -D @types/redux-logger
*/

/*
redux-devtools-extension
Chrome 플러그인 devtools
디버깅을 편리하게 한다.
따로 typescript 패키지를 설치안해도된다.
npm i @redux-devtools/extension
 */

/*
redux-persist
redux의 상태가 로컬스토리지나 세션스토리지에 남아있을 수록하는 라이브러리
npm i redux-persist
npm i -D @types/redux-persist

 */
