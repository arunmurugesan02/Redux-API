import { View, Text } from 'react-native'
import React from 'react'
import Home from './src/Home/Home'
import { Provider } from 'react-redux'
import store ,{persistor}from './src/Redux/Store'
import { PersistGate } from 'redux-persist/integration/react'

const App = () => {
  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>

      <Home />
    </PersistGate>
    </Provider>
  )
}

export default App