import React from "react";
import {View, Text, FlatList} from 'react-native';
import ListItem from "../components/ListItem";

const Prueba = () => {

        const animales = [
            {
                nombre: 'Perro',
                raza: 'Rotwiler',
                id: '001',
            },
            {
                nombre: 'Gato',
                raza: 'Angora',
                id: '002',
            },
            {
                nombre: 'Ave',
                raza: 'Perico',
                id: '003',
            },
            {
                nombre: 'Reptil',
                raza: 'Cocodrilo',
                id: '004',
            },
        ]


    return (
        <View>

            <FlatList 
                ListHeaderComponent = { () => <Text style ={{marginTop: 10,fontSize: 20,marginBottom :15}}> Lista de Animales</Text>}
                data = {animales} 
                keyExtractor = { (item) => item.id } 
                renderItem = { ({item,index}) => <ListItem item = {item} /> }
                
            />

        </View>
    )
}


export default Prueba;