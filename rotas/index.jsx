import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Detalhe } from '../telas/Detalhe'
import { Principal} from '../telas/Principal'

const stack = createNativeStackNavigator()

export function Rotas() {
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{headerShown: false}}>
        <stack.Screen name="Principal" component={Principal} />
        <stack.Screen name="Detalhe" component={Detalhe} />
      </stack.Navigator>
    </NavigationContainer>
  )
}