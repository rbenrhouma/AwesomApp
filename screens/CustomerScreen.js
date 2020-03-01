import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Button,
  ListItem,
  Text,
  Icon,
  Left,
  Body,
  Right,
  Switch,
  View,
  Item,
  Input
} from "native-base";
export default class CustomerScreen extends Component {
  render() {
    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Rechercher un client" />
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
            <Text>Rechercher</Text>
          </Button>
        </Header>
        <View>
          <Text>Cette page sera reservé pour.</Text>
          <Text>Mes clients en mode :</Text>
          <Text>- Liste détaillé</Text>
          <Text>- Map avec card</Text>
          <Text>- Planning de la journée de mes tâches</Text>
        </View>
        <Content>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#FF9501" }}>
                <Icon active name="airplane" />
              </Button>
            </Left>
            <Body>
              <Text>Mode ....</Text>
            </Body>
            <Right>
              <Switch value={false} />
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active name="wifi" />
              </Button>
            </Left>
            <Body>
              <Text>....</Text>
            </Body>
            <Right>
              <Text>GeekyAnts</Text>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active name="bluetooth" />
              </Button>
            </Left>
            <Body>
              <Text>Bluetooth</Text>
            </Body>
            <Right>
              <Text>Ouvrir</Text>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
        </Content>
      </Container>
    );
  }
}
