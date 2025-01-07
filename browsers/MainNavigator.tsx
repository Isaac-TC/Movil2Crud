import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";

import WelcomeScreen from "../screens/WelcomeScreen";
import FormularioScreen from "../screens/FormularioScreen";
import UsuariosScreen from "../screens/UsuariosScreen";
import EditarScreen from "../screens/EditarScreen";
import EliminarScreen from "../screens/EliminarScreen";

const Top = createMaterialTopTabNavigator();

function MyTops(){
    return(
        <Top.Navigator initialRouteName="Guardar">
            <Top.Screen name="Welcome" component={WelcomeScreen}/>
            <Top.Screen name="Guardar" component={FormularioScreen}/>
            <Top.Screen name="Leer" component={UsuariosScreen}/>
            <Top.Screen name="Editar" component={EditarScreen}/>
            <Top.Screen name="Eliminar" component={EliminarScreen}/>
        </Top.Navigator>

    );
}

export default function MainNavigador(){
    return(
        <NavigationContainer>
            <MyTops/>
        </NavigationContainer>
    )
}