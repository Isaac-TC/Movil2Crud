import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { ref, set } from 'firebase/database'
import { db } from '../config/Config'

export default function EditarScreen() {


    const [cedula, setcedula] = useState('')
    const [nombre, setnombre] = useState('')
    const [edad, setedad] = useState(0)
    const [correo, setcorreo] = useState('')

    /// EDITAR ///
    function editar() {

        set(ref(db, 'usuarios/' + cedula), {
            name: nombre,
            age: edad,
            email: correo
        });

    }

        return (
            <View>
                <Text>EditarScreen</Text>
                <TextInput
                    placeholder='Ingresar cedula'
                    style={styles.input}
                    onChangeText={(texto) => setcedula(texto)} />

                <TextInput
                    placeholder='Ingrese Nombre'
                    style={styles.input}
                    onChangeText={(texto) => setnombre(texto)}
                />


                <TextInput
                    placeholder='Ingrese Edad'
                    style={styles.input}
                    onChangeText={(texto) => setedad(+texto)}
                />


                <TextInput
                    placeholder='Ingrese Correo'
                    style={styles.input}
                    onChangeText={(texto) => setcorreo(texto)}
                />
                <Button title='Editar' onPress={() => editar()} />


            </View>
        )
    }

    const styles = StyleSheet.create({
        input: {
            height: 50,
            fontSize: 30,
            backgroundColor: '#99ac95cf',
            margin: 10,
            borderRadius: 10,
            paddingHorizontal: 20
        }
    })