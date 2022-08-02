import { useState, useEffect } from 'react';
import styled from 'styled-components/native';

import { Loading } from '../components/Loading';

import { normalizeDate } from '../helpers/helpers';
import { getPostById } from '../api/fetch';


const Wrapper = styled.View`
  padding: 20px 10px;
`;

const PostImage = styled.Image`
  width: 100%;
  height: 200px;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const PostTitle = styled.Text`
  font-size: 24px;
  line-height: 28px;
  margin-bottom: 8px;
`;

const PostDate = styled.Text`
  font-size: 14px;
  line-height: 16px;
  margin-bottom: 12px;
  color: darkgray;
`;

const PostText = styled.Text`
  font-size: 18px;
  line-height: 24px;
`;

export const PostScreen = ({ route, navigation }) => {
  const [post, setPost] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const { id, title } = route.params

  const getPost = async () => {
    navigation.setOptions({ title: title })

    setIsLoading(true)
    try {
      const response = await getPostById(id)
      setPost(response.data)
    } catch (error) {
      console.log(error)
      Alert.alert('Error', 'Something went wrong')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getPost()
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <Wrapper>
      <PostImage source={{ uri: post.imageUrl }} />
      <PostTitle>{post.title}</PostTitle>
      <PostDate>{normalizeDate(post.createdAt)}</PostDate>
      <PostText>{post.text}</PostText>
    </Wrapper>
  );
};
