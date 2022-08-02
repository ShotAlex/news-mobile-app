import styled from 'styled-components/native';
import { truncTitle, normalizeDate } from '../helpers/helpers';


const PostView = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 0 10px 8px;
  padding: 10px;
  border-radius: 5px;
  border-width: 2px;
  border-color: #ccc;
  border-style: solid;
`;

const PostImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  margin-right: 12px;
`;

const PostDetails = styled.View`
  flex: 1;
`;

const PostTitle = styled.Text`
  font-size: 18px;
  margin-bottom: 4px;
`;

const PostDate = styled.Text`
  font-size: 12px;
`;


export const Post = ({ title, imageUrl, createdAt}) => {

  return (
      <PostView>
        <PostImage source={{ uri: imageUrl }} />
        <PostDetails>
          <PostTitle>{truncTitle(title)}</PostTitle>
          <PostDate>{normalizeDate(createdAt)}</PostDate>
        </PostDetails>
      </PostView>
  );
}