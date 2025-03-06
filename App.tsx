import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { enableScreens } from "react-native-screens";
import { StatusBar } from "expo-status-bar";
import MainHome from "./components/MainHome";
import PaintingX from "./components/PaintingX";
import Login from "./components/Login";
import Madrasati from "./components/Madrasati";
import Calendar from "./components/Calendar";
import Books from "./components/Books/Books";
import BookDetail from "./components/Books/BookDetail";
import HomeScreen from "./components/HomeScreen";
import Knowledge from "./components/Knowledge";
import Notes from "./components/Notes";
import Remembrances from "./components/Remembrances/Remembrances";
import Night from './components/Remembrances/night';
import Morning from "./components/Remembrances/Morning";
import Duty from "./components/duty";

enableScreens();
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden={true} />
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="MainHome" component={MainHome} />
        <Stack.Screen name="PaintingX" component={PaintingX} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Madrasati" component={Madrasati} />
        <Stack.Screen name="Calendar" component={Calendar} />
        <Stack.Screen name="Books" component={Books} />
        <Stack.Screen name="BookDetail" component={BookDetail as React.ComponentType<any>} />
        <Stack.Screen name="Knowledge" component={Knowledge} />
        <Stack.Screen name="Notes" component={Notes} />
        <Stack.Screen name="Morning" component={Morning} />
        <Stack.Screen name="Night" component={Night} />
        <Stack.Screen name="Remembrances" component={Remembrances} />
        <Stack.Screen name="Duty" component={Duty} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

//;;;;;;;;;;;;;;;;;;;;;
//))))))))))))))))))))