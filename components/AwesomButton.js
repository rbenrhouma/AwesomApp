import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import GradientButton from "react-native-gradient-buttons";

export default AwesomButton = props => {
  const { code, caption, onFilterPress } = props;
  const [selected, setSelected] = useState(false);

  const onLocalFilterPress = () => {
    setSelected(!selected);
  };

  return (
    <>
      {selected && <View style={styles.checkedBtn}></View>}
      <GradientButton
        style={{}}
        textStyle={{ fontSize: 14 }}
        //gradientDirection="diagonal"
        height={50}
        width={"22%"}
        radius={12}
        impact
        impactStyle="Light"
        onPressAction={
          code === "FILTER-GLOBAL" ? onFilterPress : onLocalFilterPress
        }
      >
        {caption}
      </GradientButton>
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
  checkedBtn: {
    width: 12,
    height: 12,
    left: 14,
    top: -19,
    position: "relative",
    zIndex: 10,
    borderColor: "rgb(255,0,255)",
    borderWidth: 6,
    borderTopLeftRadius: 6
  }
});
