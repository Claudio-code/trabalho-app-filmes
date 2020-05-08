import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';

import ItemListDashboard from '../../components/ItemListDashboard';

import { Container } from './styles';
import api from '../../services/api';

export default ({ navigation }) => {
  const [allMovies, setAllMovies] = useState({});
  useEffect(() => {
    async function getAllMovies() {
      try {
        const response = await api.get('list_movies.json');
        console.log(response);
        
        setAllMovies(response.data.data.movies);
      } catch (error) {
        console.log(error);
        
      }
    }

    getAllMovies();
  }, []);

  return (
    <Container>
      <FlatList 
        data={allMovies}
        key={item => String(item.id)}
        renderItem={item => <ItemListDashboard item={item.item} navigation={navigation} />}
      />
    </Container>
  );
}