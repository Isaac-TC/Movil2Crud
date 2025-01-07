import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

//FIREBASE
import { db } from '../config/Config';
import { onValue, ref } from 'firebase/database';
import { useSafeAreaFrame } from 'react-native-safe-area-context';

export default function UsuariosScreen() {

    const [datos,setdatos] = useState([])

    //LEER LOS DATOS
    useEffect(() => {
        function leer() {
            const starCountRef = ref(db, 'usuarios/');
            onValue(starCountRef, (snapshot) => {
                const data = snapshot.val();

                let arregloTemp : any = Object.keys(data).map( cedula =>({
                    cedula, ...data[cedula]
                }))
                setdatos(arregloTemp)
                //setdatos(data)
                console.log(datos);

                

            });
        }
        leer()

    }, [])

/////////
type Usuario ={
    cedula : string,
    edad: Number,
    name: string,
    email:string
}

    return (
        <View>
            <Text>UsuariosScreen</Text>
            <FlatList
            data = {datos}
            renderItem={({item}:{item:Usuario}) => 
            <View>
                <Text>{item.cedula}</Text>
                <Text>{item.name}</Text>
                <Text>{item.email}</Text>
            </View>}/>
        </View>
    )
}

const styles = StyleSheet.create({})