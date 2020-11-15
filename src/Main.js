//Core
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
//Redux
import { useSelector, useDispatch } from 'react-redux';
import { authSateChangeUser } from './redux/auth/authOperations';
//Router
import { useRoute } from './router';

const Main = () => {
	const { stateChange } = useSelector(state => state.auth);
	const dispatch = useDispatch();

	useEffect(() => dispatch(authSateChangeUser()), []);

	const routing = useRoute(stateChange);

	return <NavigationContainer>{routing}</NavigationContainer>;
};

export default Main;
