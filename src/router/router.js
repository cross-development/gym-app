//Core
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//Screens
import LoginScreen from '../screens/authScreens/LoginScreen';
import RegisterScreen from '../screens/authScreens/RegisterScreen';
import NotificationScreen from '../screens/mainScreens/NotificationScreen';
import RemainderScreen from '../screens/mainScreens/RemainderScreen';
import SettingsScreen from '../screens/mainScreens/SettingsScreen';
import ProfileScreen from '../screens/mainScreens/ProfileScreen';
//Icons
import { MaterialCommunityIcons } from '@expo/vector-icons';

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

export const useRoute = isAuth => {
	if (!isAuth) {
		return (
			<AuthStack.Navigator>
				<AuthStack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />

				<AuthStack.Screen
					options={{ headerShown: false }}
					name="Register"
					component={RegisterScreen}
				/>
			</AuthStack.Navigator>
		);
	}

	return (
		<MainTab.Navigator tabBarOptions={{ showLabel: false }}>
			<MainTab.Screen
				options={{
					tabBarIcon: ({ focused, size, color }) => (
						<MaterialCommunityIcons name="bell-ring" size={size} color={color} />
					),
				}}
				name="Notification"
				component={NotificationScreen}
			/>
			<MainTab.Screen
				options={{
					tabBarIcon: ({ focused, size, color }) => (
						<MaterialCommunityIcons name="clock-outline" size={size} color={color} />
					),
				}}
				name="Remainder"
				component={RemainderScreen}
			/>
			<MainTab.Screen
				options={{
					tabBarIcon: ({ focused, size, color }) => (
						<MaterialCommunityIcons name="settings" size={size} color={color} />
					),
				}}
				name="Settings"
				component={SettingsScreen}
			/>
			<MainTab.Screen
				options={{
					tabBarIcon: ({ focused, size, color }) => (
						<MaterialCommunityIcons name="face-profile" size={size} color={color} />
					),
				}}
				name="Profile"
				component={ProfileScreen}
			/>
		</MainTab.Navigator>
	);
};
