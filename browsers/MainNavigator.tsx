import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";

import WelcomeScreen from "../screens/WelcomeScreen";
import FormularioScreen from "../screens/FormularioScreen";

const Top = createMaterialTopTabNavigator();

function MyTops(){
    return(
        <Top.Navigator initialRouteName="Guardar">
            <Top.Screen name="Welcome" component={WelcomeScreen}/>
            <Top.Screen name="Guardar" component={FormularioScreen}/>
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