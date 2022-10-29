import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ListItem = ({item}) => {

        const { nombre, raza, id} = item
    return (

        <View style = {styles.container}>
            <Text style={styles.textstyle}> {raza} : {nombre} </Text>
        </View>

    )

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000000',
        marginBottom: 5,
        borderRadius: 10,
        padding: 6,
    },
    textstyle: { 
        color: "white",
    },
})

export default ListItem;