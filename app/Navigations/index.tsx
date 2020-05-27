import React from 'react';
import { Icon } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ShopContainer from '../Containers/Browse/Shop.container';
import CartContainer from '../Containers/Cart/Cart.container';

export const routes = {
  Browse: 'Browse',
  Shop: 'Shop',
  Detail: 'Detail',
  Orders: 'Orders',
  Cart: 'Cart',
  Checkout: 'Checkout'
};

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Browse = (): JSX.Element => (
  <Stack.Navigator initialRouteName={routes.Shop}>
    <Stack.Screen name={routes.Shop} component={ShopContainer} />
    <Stack.Screen name={routes.Detail} component={() => <></>} />
  </Stack.Navigator>
);

const Orders = (): JSX.Element => (
  <Stack.Navigator initialRouteName={routes.Cart}>
    <Stack.Screen name={routes.Cart} component={CartContainer} />
    <Stack.Screen name={routes.Checkout} component={() => <></>} />
  </Stack.Navigator>
);

const tabIcons = {
  [routes.Browse]: 'shopping-bag',
  [routes.Orders]: 'shopping-cart'
};

const Navigation = (): JSX.Element => (
  <Tab.Navigator
    screenOptions={({ route }): object => ({
      tabBarIcon: ({
        color,
        size
      }: {
        color: string;
        size: number;
      }): JSX.Element => (
        <Icon
          name={tabIcons[route.name]}
          type="font-awesome-5"
          size={size}
          color={color}
        />
      )
    })}>
    <Tab.Screen name={routes.Browse} component={Browse} />
    <Tab.Screen name={routes.Orders} component={Orders} />
  </Tab.Navigator>
);

export default Navigation;
