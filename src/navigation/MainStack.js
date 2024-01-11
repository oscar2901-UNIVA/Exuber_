import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { screens } from './screens'

const StackMain = createNativeStackNavigator();

export default function MainStack () {
  return (
   <NavigationContainer>
        <StackMain.Navigator initialRouteName='Login'>
            {screens.map((item) => (
                <StackMain.Screen key={item} 
                    name={item.component.name} component={item.component}
                />

            ))}  
        </StackMain.Navigator>  
   </NavigationContainer>
  )
}