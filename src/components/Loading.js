import React from 'react';
import { ActivityIndicator, Text } from 'react-native';
import styled from 'styled-components/native';


const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const LoadingText = styled.Text`
  height: 40px;
  font-size: 18px;
  line-height: 24px;
  margin-top: 40px;
`;


export const Loading = () => {
  return (
    <LoadingContainer>
      <ActivityIndicator
        size={'large'}
      />
      <LoadingText>
        Loading...
      </LoadingText>
    </LoadingContainer>
  );
};