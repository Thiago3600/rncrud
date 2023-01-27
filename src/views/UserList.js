import { getActionFromState } from '@react-navigation/core';
import React, { useContext } from 'react';
import {Text, View, FlatList, StyleSheet, Alert} from 'react-native';
import { ListItem } from 'react-native-elements';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';
import UsersContext from '../context/UsersContext';



export default props => {

    const {state, dispatch} = useContext(UsersContext)

    function confirmUserDeletion(user) {
        Alert.alert(
            "Excluir usuario",
            "Deseja excluir usuario",
            [
              {
                text: "Sim",
                onPress: () => dispatch({type: "deleteUser", payload: user}),
              },
              { text: "Não", onPress: () => console.log("Não") }
            ]
          );
    }

    function getUserItem({ item: user }){
        return (
            <ListItem bottomDivider  onPress={() => props.navigation.navigate('UserForm', user)} >
                <Avatar  title={user.name} rounded source={{uri: user.avatarUrl }} />
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron
                    onPress={() => navigation.navigate('userForm', user)}
                    iconProps={{name: "edit"}}
                    iconStyle={{fontSize: 25, color: "orange"}}
                />
                <ListItem.Chevron
                    onPress={() => confirmUserDeletion(user)}
                    iconProps={{name: "delete"}}
                    iconStyle={{fontSize: 25, color: "red"}}
                />
            </ListItem>
        ) 
    }

    return (
        <View>
            <FlatList
                // keyExtractor={users => users.id.toString}
                data={state.users}
                renderItem={getUserItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    itemView: {
        flex: 1,
        borderColor: 'black',
        borderWidth: 1,
        padding: 15
    },
    itemTxt:{
        fontSize: 16,
    },
    img:{
        marginTop: 0,
    }
})