import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import UserList from './views/UserList';
import UserForm from './views/UserForm';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { UsersProvider } from './context/UsersContext';

const Stack = createStackNavigator()

export default props => {
    return (
        <UsersProvider>
            <NavigationContainer>
                <Stack.Navigator 
                    initialRouteName="UserList"
                    screenOptions={screenOptions}>
                    
                    <Stack.Screen 
                        name="UserList" 
                        component={UserList}
                        options={ ({navigation}) => {
                                    return{
                                        title: 'Lista de Usuários',
                                        headerRight: () => (
                                            <Button
                                                onPress={() => navigation.navigate("UserForm")}
                                                type='clear'
                                                icon={<Icon name="add" size={25} color="white"/>} />
                                        )
                                    }
                                }
                            } >
                    </Stack.Screen>

                    <Stack.Screen 
                        name="UserForm" 
                        component={UserForm}
                        options={{title: 'Formulário de Usuários'}}>
                    </Stack.Screen>

                </Stack.Navigator>
            </NavigationContainer>
        </UsersProvider>
    )
}

const screenOptions = {
    headerStyle: {
        backgroundColor: '#f4511e'
    },
    
    headerTintColor: '#ffffff',
    headerTitleStyle: {
        fontWeight: 'bold'
    }
}