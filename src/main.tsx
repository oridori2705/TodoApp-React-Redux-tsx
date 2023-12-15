import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './redux'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* redux를 사용하기 위해 Proivder 사용 */}
    <Provider store={store}>
      {/* redux-persist사용하기위해 persistGate 사용*/}
      <PersistGate
        loading={null}
        persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
