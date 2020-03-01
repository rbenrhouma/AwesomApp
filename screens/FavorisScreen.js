import React, { Component } from "react";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Content,
  SwipeRow,
  View,
  Text
} from "native-base";
export default class FavorisScreen extends Component {
  render() {
    return (
      <Container>
        <Header style={{ height: 30, padding: 25 }}>
          <Left>
            <Button transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Titre page</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="search" />
            </Button>
            <Button transparent>
              <Icon name="heart" />
            </Button>
            <Button transparent>
              <Icon name="more" />
            </Button>
          </Right>
        </Header>
      </Container>
    );
  }
}
