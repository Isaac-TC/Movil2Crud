import { View, Text, TextInput, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import { ref, remove, set } from 'firebase/database';
import { db } from '../config/Config';

export default function EliminarScreen() {

    const [cedula, setcedula] = useState('')
    /// GUARDAR ///
        function eliminar() {
            
            remove(ref(db, 'usuarios/' + cedula),);
            Alert.alert('Mensaje','Elemento eliminado')

        }
  return (
    <View>
      <Text>EliminarScreen</Text>
      <TextInput
      placeholder='INGRESAR CEDULA'
      onChangeText={(texto )=>setcedula(texto)}/>
      
      <Button title='ELIMINAR' onPress={()=> eliminar()}/>
    </View>
  )
}