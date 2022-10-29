import React, { useState } from "react";
import {Text, StyleSheet, View, Image} from 'react-native';

const url =
    'https://www.travelbutlers.com/images/450px/dreamstime_xxl_27555664_-_kruger.jpg'

const data =
{
    "name": "Impala",
    "latin_name": "Aepyceros melampus",
    "animal_type": "Mammal",
    "active_time": "Diurnal",
    "length_min": "4.2",
    "length_max": "4.7",
    "weight_min": "99",
    "weight_max": "132",
    "lifespan": "15",
    "habitat": "Savannah and woodland",
    "diet": "Grasses and leaves",
    "geo_range": "Southern and East Africa",
    "image_link": "https://upload.wikimedia.org/wikipedia/commons/e/e1/Trotting_impala_ram%2C_crop.jpg",
    "id": 91
}; /* Data del Animal en Json*/


const Animal = () => {

/*     const datapi, setdatapi != useState={};

    userEffect  */


    return (
        <View style={styles.container}>
            <Text style={styles.blue}> Imagen de un Impala </Text>
            <Image source={{uri: url}} style={styles.image} />
            <Text style={styles.blue}> Nombre: {data.name}</Text>
            <Text style={styles.blue}> Tipo de Animal: {data.animal_type}</Text>
            <Text style={styles.blue}> Habitath: {data.habitat}</Text>

            <Text style={styles.blue}> Imagen de un carro </Text>
            <Image source={require('../../assets/img/Carro.jpg')} style={styles.image} />

        </View>
    );
};
  
const styles = StyleSheet.create({
    image: {width: 200, height: 200},
    blue: {color: 'blue'},
});


export default Animal;
