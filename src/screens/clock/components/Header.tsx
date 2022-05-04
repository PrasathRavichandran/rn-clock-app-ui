import { StyleSheet, Text, View } from "react-native";
import React from "react";

import AppColors from "../../../constants/Theme";

type Props = {
  heading: string;
  headingSize?: number;
  subHeading: string;
  subHeadingSize?: number;
  marginTop?: number;
};

const Header = ({
  heading,
  headingSize = 60,
  subHeading,
  subHeadingSize = 22,
  marginTop,
}: Props) => {
  return (
    <View style={styles.tmContainer}>
      <Text style={[styles.minText, { fontSize: headingSize }]}>{heading}</Text>
      <Text style={[styles.secText, { fontSize: subHeadingSize, marginTop }]}>
        {subHeading}
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  tmContainer: {
    marginTop: 24,
  },
  minText: {
    fontWeight: "bold",
    color: AppColors.white,
    marginBottom: 4,
  },
  secText: {
    fontWeight: "500",
    color: AppColors.gray,
  },
});
