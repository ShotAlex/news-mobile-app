import { useState, useEffect } from 'react';
import {
  Alert,
  View,
  FlatList,
  RefreshControl,
  TouchableOpacity
} from 'react-native';

import { Post } from '../components/Post';
import { Loading } from '../components/Loading';
import { getAllPosts } from '../api/fetch';


export const HomeScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getPosts = async () => {
    setIsLoading(true)

    try {
      const response = await getAllPosts()
      setPosts(response.data)
    } catch (error) {
      console.log(error)
      Alert.alert('Error', 'Something went wrong')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getPosts()
  }, [])

  if (isLoading) {
    return (
      <Loading />
    );
  }

  return (
    <View>
      <FlatList
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={getPosts} />}
        data={posts}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Post', { id: item.id, title: item.title })
            }}
          >
            <Post
              title={item.title}
              imageUrl={item.imageUrl}
              createdAt={item.createdAt}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
