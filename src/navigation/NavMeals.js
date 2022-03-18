import React, {useEffect} from 'react';
import {NavigationContainer, useLinkProps} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoriesMealsScreen from '../screens/CategoriesMealsScreen';
import FavouriteScreen from '../screens/FavouriteScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FilterScreen from '../screens/FilterScreen';
import HeaderButton from '../components/HeaderButton';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import 'react-native-gesture-handler';
// const favStack = createNativeStackNavigator();
import {createDrawerNavigator} from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={NavMeals} />
        <Drawer.Screen name="Filter" component={FilterStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

function FilterStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FilterScreen"
        component={FilterScreen}
        options={{
          headerRight: () => (
            <HeaderButton
              iconType="save"
              selectedBtn={() => console.log('save btn Pressed!')}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function FavStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="FavouriteScreen" component={FavouriteScreen} />
      <Stack.Screen name="MealDetailScreen" component={MealDetailScreen} />
    </Stack.Navigator>
  );
}
function NavStack() {
  var logoTitle = 'Favourites';
  return (
    <Stack.Navigator>
      <Stack.Screen name="CategoriesScreen" component={CategoriesScreen} />
      <Stack.Screen
        name="CategoriesMealsScreen"
        component={CategoriesMealsScreen}
      />
      <Stack.Screen
        name="MealDetailScreen"
        component={MealDetailScreen}
        options={{
          headerRight: () => (
            <HeaderButton
              iconType="favorite"
              selectedBtn={() => console.log('fav btn Pressed!')}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
const Tab = createBottomTabNavigator();

function NavMeals() {
  var logoTitle = 'Favourites';
  return (
    // <NavigationContainer>
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Meals') {
            iconName = focused ? 'food-bank' : 'museum';
          } else if (route.name === 'Favourite') {
            iconName = focused ? 'favorite-border' : 'favorite';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        shifting: false,
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'white',
        headerShown: false,
      })}>
      <Tab.Screen name="Meals" component={NavStack} />
      <Tab.Screen
        name="Favourite"
        component={FavStack}
        onPress={() => {
          console.log('in');
        }}></Tab.Screen>
    </Tab.Navigator>
    // </NavigationContainer>
  );
}
export default MyDrawer;
