import React from 'react';
import styled from 'styled-components';

class Project extends React.Component {
  render() {
    return (
      <Container>
        <Divider />
        <Image
          source={{
            uri:
              'https://www1.plasticsurgery.org/include/images/photogallery/cases/1418/7391-66867b.jpg'
          }}
        />
        <Title>Before</Title>
      </Container>
    );
  }
}

export default Project;

const Divider = styled.View`
  border: 13px solid #fc0;
  width: 5px;
  height: 300px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
`;

const Container = styled.View`
  width: 315px;
  height: 100%;
  /* background-color: white; */
  z-index: 100;
  position: relative;
  /* left: 0; */
`;

const Cover = styled.View`
  /* height: 290px; */
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

const Title = styled.Text`
  position: absolute;
  bottom: 20px;
  left: 20px;
  font-size: 16px;
  color: #fff;
`;

const Text = styled.Text`
  font-size: 17px;
  margin: 20px;
  line-height: 24;
  color: #3c4560;
`;

const Author = styled.Text`
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: rgba(255, 255, 255, 0.8);
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 600;
`;
