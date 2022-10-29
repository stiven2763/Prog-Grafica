import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, StyleSheet, Button, Alert, TouchableHighlight, Image, ScrollView} from 'react-native';

export default App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  

  const getInfo = async () => {
     try {
      const response = await fetch('https://fakerapi.it/api/v1/persons');
      const json = await response.json();
      setData(json.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getInfo();
  }, []);

  return (
    
    <View style = {styles.container}>

      <View >
      <Image
        source={{
          uri: 'https://portal.uip.edu.pa/resources/images/institutions/banner_uip.png',
        }}
        style={{width: 400, height: 100 }}
      />

        {isLoading ? <ActivityIndicator/> : (
          
          <FlatList
          ListHeaderComponent = { () => <Text style ={{marginTop: 10,fontSize: 20,marginBottom :15}}> Lista de Personas </Text>
          }
              data={data}
              keyExtractor={({ id }, index) => id}
              renderItem={({ item }) => (
                <>
                    
                  <Image source={{uri: item.image}} style={{ width: 70, height: 70, borderRadius: 37.5 }}/>
                    <TouchableHighlight onPress={() => Alert.alert(` telefono: ${item.phone}, \n Correo: ${item.email} `)}> 
                      <Text Text style={styles.textstyle}>Nombre: {item.firstname} {item.lastname} </Text>                 
                    </TouchableHighlight>

                </>
              )}
          />
        )}

      </View>
      <Button
        title="Contactenos"
        onPress={() => Alert.alert('Ahh no te creas xd \n No sea curioso')}
      />
    
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#000000',
      marginBottom: 1,
      borderRadius: 10,
      padding: 10,
      
  },
  textstyle: { 
      color: "black", //texto
      backgroundColor: '#ffffff', //boton
      marginVertical: 10, //hacia afuera
      paddingHorizontal: 20, //hacia adentro
  },
  

})