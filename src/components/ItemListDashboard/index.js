import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

import { Container, MoiveBackground, MoiveInfo, Title } from './styles';

const ItemListDashboard = ({ item, navigation }) => {
  useEffect(() => {
  
  }, []);

  function goToDetails() {
    console.log(item);
    navigation.navigate('Details', {
      movie: item
    })
  }

  return(
    <Container onPress={goToDetails}>
      <MoiveBackground 
        style={{ resizeMode: 'contain' }}
        source={{ uri: item.medium_cover_image }} 
      />
      <MoiveInfo>
        <Title>Title: {item.title}</Title>
        <Text>Year: {item.year}</Text>
        <Text>Rating: {item.rating}</Text>
      </MoiveInfo>
    </Container>
  );
}

export default ItemListDashboard;