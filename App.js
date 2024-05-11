import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer,useNavigation,DrawerActions} from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon  from 'react-native-vector-icons/Entypo';


import VisLogin from './Vistas/VisLogin';
import VisInicio from './Vistas/VisInicio';

const StackNav=()=>{
  const Stack = createStackNavigator();
  const navigation=useNavigation();
  return(
    <Stack.Navigator screenOptions={{
      statusBarcoloe: '#0163d2',
      headerStyle: {
        backgroundColor: '#0163d2'    
      },
      headerTintColor:'#fff',
      headerTitleAlign:'center',
      headerTitle:'Inicio', 
      headerLeft:()=>{
        return(
         <Icon
         name="menu"
         onPress={()=>navigation.dispatch(DrawerActions.openDrawer(DrawerNav))}
         size={30}
         color="900"
         />
        ) 
     },
    }}>
          <Stack.Screen name="VLogin" component={VisLogin}  />
          <Stack.Screen name="VInicio" component={VisInicio}  />
         
     </Stack.Navigator> 
  )
}



function App() {
  
        return(
          <NavigationContainer>
            <StackNav/>
          </NavigationContainer>
        );

}


export default App;