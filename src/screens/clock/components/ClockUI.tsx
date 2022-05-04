import React, { useEffect, useRef } from "react";
import { Animated, Dimensions, StyleSheet, View } from "react-native";
import Svg, { Circle } from "react-native-svg";
import dayjs from "dayjs";

import AppColors from "../../../constants/Theme";

const width = Dimensions.get("window").width;
const SIZE = width * 0.8;
const TICK_INTERVAL = 1000;

const ClockUI = () => {
  const index = useRef(new Animated.Value(0)).current;
  const tick = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const current = dayjs();
    const diff = current.endOf("day").diff(current, "seconds");
    const oneDay = 24 * 60 * 60;
    let timer = oneDay - diff;

    tick.setValue(timer);
    index.setValue(timer - 1);

    animate();

    const ticker = setInterval(() => {
      timer += 1;
      tick.setValue(timer);
    }, TICK_INTERVAL);

    return () => {
      clearInterval(ticker);
    };
  }, []);

  const animate = () => {
    Animated.timing(index, {
      duration: TICK_INTERVAL / 2,
      toValue: tick,
      useNativeDriver: true,
    }).start();
  };

  const interpolated = {
    inputRange: [0, 360],
    outputRange: ["0deg", "360deg"],
  };

  const rotateSeconds = Animated.multiply(index, 6);
  const transFormSecond = {
    transform: [{ rotate: rotateSeconds.interpolate(interpolated) }],
  };

  const rotateMinutes = Animated.divide(rotateSeconds, new Animated.Value(60));
  const transFormMinutes = {
    transform: [{ rotate: rotateMinutes.interpolate(interpolated) }],
  };

  const rotateHours = Animated.divide(rotateMinutes, new Animated.Value(12));
  const transFormHours = {
    transform: [{ rotate: rotateHours.interpolate(interpolated) }],
  };

  return (
    <View style={styles.clockContainer}>
      <View style={styles.outerCircle} />

      <Animated.View style={[styles.mover, transFormHours]}>
        <View style={styles.hour} />
      </Animated.View>

      <Animated.View style={[styles.mover, transFormMinutes]}>
        <View style={styles.minutes} />
      </Animated.View>

      <Animated.View style={[styles.mover, transFormSecond]}>
        <View style={styles.second} />
      </Animated.View>
      <View style={styles.centerCircle} />
      <Svg width={SIZE} height={SIZE} style={{ position: "absolute" }}>
        <Circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={SIZE * 0.42}
          stroke={AppColors.secondary}
          strokeWidth="22"
          strokeDasharray={"5,30"}
        />
      </Svg>
    </View>
  );
};

export default ClockUI;

const styles = StyleSheet.create({
  clockContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 80,
    marginBottom: 60,
  },
  outerCircle: {
    width: SIZE * 0.7,
    height: SIZE * 0.7,
    borderRadius: SIZE * 0.35,
    backgroundColor: AppColors.secondary,
    borderWidth: 12,
    borderColor: AppColors.border,
  },
  mover: {
    position: "absolute",
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  hour: {
    width: 10,
    height: "20%",
    backgroundColor: AppColors.hourbg,
    marginTop: "34%",
    borderRadius: 20,
  },
  minutes: {
    width: 8,
    height: "25%",
    backgroundColor: AppColors.minbg,
    marginTop: "28%",
    borderRadius: 20,
  },
  second: {
    width: 4,
    height: "28%",
    backgroundColor: AppColors.secbg,
    marginTop: "26%",
    borderRadius: 20,
  },
  centerCircle: {
    width: SIZE * 0.08,
    height: SIZE * 0.08,
    borderRadius: SIZE * 0.05,
    backgroundColor: AppColors.gray,
    position: "absolute",
  },
});
