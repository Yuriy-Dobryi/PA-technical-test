import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
import Photos from "./Photos";
import Favorites from "./Favorites";

const Tabs = createBottomTabNavigator();

const Home = () => {
  console.log('hello');
  return (
      <Tabs.Navigator
        initialRouteName='Photos'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            const iconName =
              route.name === "Photos" ? "images" : "hand-holding-heart";
            return <FontAwesome5 name={iconName} size={size} color={color} />;
          },
          tabBarStyle: {
            backgroundColor: "#fff",
            borderTopColor: "white",
            borderTopWidth: 2,
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
          tabBarShowLabel: false,
        })}
      >
        <Tabs.Screen
          name='Photos'
          component={Photos}
          options={{ headerShown: false }}
        />
        <Tabs.Screen
          name='Favorites'
          component={Favorites}
          options={{ headerShown: false }}
        />
      </Tabs.Navigator>
  );
};

export default Home;