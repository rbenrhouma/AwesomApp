import React, { useState } from "react";
import { Test, StyleSheet, View } from "react-native";
import GradientButton from "react-native-gradient-buttons";

export default AwesomButton = props => {
  const { code, caption, onFilterPress } = props;
  const [selected, setSelected] = useState(false);
  return (
    <>
      <GradientButton
        style={{}}
        textStyle={{ fontSize: 14 }}
        gradientDirection="diagonal"
        height={50}
        width={"22%"}
        radius={12}
        impact
        impactStyle="Light"
        onPressAction={onFilterPress}
      >
        {caption}
      </GradientButton>
    </>
  );
};

const styles = StyleSheet.create({
  container: {}
});
