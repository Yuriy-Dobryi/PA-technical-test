import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";

import Photos from "./Photos";
import Favorites from "./Favorites";

const Tabs = createBottomTabNavigator();

const Home = () => {
  return (
    <Tabs.Navigator
      initialRouteName='Photos'
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
        showLabel: false,
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const iconName =
            route.name === "Photos" ? "images" : "hand-holding-heart";
          return <FontAwesome5 name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tabs.Screen name='Photos' component={Photos} />
      <Tabs.Screen name='Favorites' component={Favorites} />
    </Tabs.Navigator>
  );
};

export default Home;