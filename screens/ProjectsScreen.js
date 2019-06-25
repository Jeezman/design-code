import React from 'react';
import styled from 'styled-components';
// import Project from "../components/Project";
import { PanResponder, Animated, View, Text } from 'react-native';
import { connect } from 'react-redux';
import Project from './Project';

function mapStateToProps(state) {
  return {
    action: state.action
  };
}

function getNextIndex(index) {
  var nextIndex = index + 1;
  if (nextIndex > projects.length - 1) {
    return 0;
  }
  return nextIndex;
}

class ProjectsScreen extends React.Component {
  // static navigationOptions = {
  //   header: null
  // };

  state = {
    pan: new Animated.ValueXY()
  };

  componentDidMount() {
    console.log(this.state.pan);
  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      // needed in order to move the card as we drag it\
      // removing dy makes it not to move horizontally
      onPanResponderMove: Animated.event([null, { dx: this.state.pan.x }]),

      onPanResponderRelease: () => {
        Animated.spring(this.state.pan, {
          toValue: { x: 0, y: 0 }
        }).start();
      }
    });
  }

  render() {
    return (
      <Container>
        <Animated.View
          style={{
            transform: [
              { translateX: this.state.pan.x },
              { translateY: this.state.pan.y }
            ],
            zIndex: 100,
            position: 'absolute',
            left: 0,
            height: '100%'
          }}
          {...this._panResponder.panHandlers}
        >
          {/* <Divider /> */}
          <Project
            title="Price Tag"
            image={require('../assets/background5.jpg')}
            author="Liu Yi"
            text="Massive thanks to Olutobi Adeyemi, I have improved my design skills. Great guy, down to earth and immensely professional too. I think he is the G.O.A.T"
          />
        </Animated.View>
        <ViewStyle>
          <Image
            source={{
              uri:
                'https://www1.plasticsurgery.org/include/images/photogallery/cases/1418/7391-66867a.jpg'
            }}
          />
          <Text>Hello World</Text>
        </ViewStyle>
      </Container>
    );
  }
}

// const Divider = styled.View`
//   border: 13px solid #fc0;
//   width: 5px;
//   height: 100%;
//   /* position: absolute; */
//   top: 0;
//   bottom: 0;
// `;

export default connect(mapStateToProps)(ProjectsScreen);

const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

const ViewStyle = styled.View`
  width: 315px;
  height: 100%;
  position: absolute;
  right: 0;
  z-index: 90;
`;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #f0f3f5;
  flex-direction: row;
  padding: 0 10px;
`;

const projects = [
  {
    title: 'Price Tag',
    image: require('../assets/background5.jpg'),
    author: 'Liu Yi',
    text:
      'Thanks to Design+Code, I improved my design skill and learned to do animations for my app Price Tag, a top news app in China. Thanks to Design+Code, I improved my design skill and learned to do animations for my app Price Tag, a top news app in China.'
  },
  {
    title: 'The DM App - Ananoumous Chat',
    image: require('../assets/background6.jpg'),
    author: 'Chad Goodman',
    text:
      'Design+Code was the first resource I used when breaking into software. I went from knowing nothing about design or code to building a production ready app from scratch. '
  },
  {
    title: 'Nikhiljay',
    image: require('../assets/background7.jpg'),
    author: "Nikhil D'Souza",
    text:
      "Recently finished the React course by @Mengto, and I 10/10 would recommend. I already rewrote my personal website in @reactjs and I'm very excited with it."
  }
];
