import React, { Component } from "react";
import { Theme } from "../appConstants/AppConstants";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Segment,
  Content,
  Text,
  Title,
  Spinner,
  Dimensions
} from "native-base";

import { TabView, SceneMap } from "react-native-tab-view";

const MyAccountRoute = () => (
  <View style={[styles.scene, { backgroundColor: "red" }]} />
);

const MyGoodsRoute = () => (
  <View style={[styles.scene, { backgroundColor: "blue" }]} />
);

const MyServicesRoute = () => (
  <View style={[styles.scene, { backgroundColor: "silver" }]} />
);

export default PlusScreen => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "accountRoute", title: "Mon compte" },
    { key: "servicesRoute", title: "Mes services" },
    { key: "goodsRoute", title: "Mes biens" }
  ]);

  const initialLayout = { width: Dimensions.get("window").width };

  const renderScene = SceneMap({
    accountRoute: MyAccountRoute,
    servicesRoute: MyServicesRoute,
    goodsRoute: MyGoodsRoute
  });
  return (
    <Container>
      <Header hasSegment>
        <Left>
          <Button transparent>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Segments</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name="search" />
          </Button>
        </Right>
      </Header>
      <Segment>
        <Button first>
          <Text>Bricolage</Text>
        </Button>
        <Button>
          <Text>Ménage</Text>
        </Button>
        <Button last active>
          <Text>Check-in-out</Text>
        </Button>
        <Button last>
          <Text>Toutes</Text>
        </Button>
      </Segment>
      <Content padder>
        <Text>Segments</Text>
        <Spinner color={Theme.AppColor} />
      </Content>
    </Container>
  );
};
