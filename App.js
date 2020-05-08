
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// import { Container } from './styles';
import Routes from './src/routes';
export default function Index() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}