import React, { useContext, useState } from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { Button } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';
import UsersContext from '../context/UsersContext';

export default ({route, navigation}) => {
    //console.warn(Object.keys(props.route.params));

    const [user, setUser] = useState(route.params ? route.params : {});
    const {dispatch} = useContext(UsersContext)

    return (
        <View style={[styles.container, styles.form]}>
            <Text>Avatar Url:</Text>
            <TextInput 
                style={styles.input}
                onChangeText={avatarUrl => setUser({...user ,avatarUrl})}
                value={user.avatarUrl}
                placeholder="Informe a url do Avatar"/>
            <Text>Nome:</Text>
            <TextInput 
                style={styles.input}
                onChangeText={name => setUser({...user ,name})}
                value={user.name}
                placeholder="Informe seu nome"/>
            <Text>Email:</Text>
            <TextInput 
                style={styles.input}
                onChangeText={email => setUser({...user ,email})}
                value={user.email}
                placeholder="Informe seu email"/>
            <Button title="Salvar" onPress={() => {
                    dispatch({
                        type: user.id ? 'updateUser' : 'createUser',
                        payload:user
                    })
                    navigation.goBack()
                }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 15
    },
    form: {
        padding: 15,
    },
    input:{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10
    }
})
