import { StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";

import AppLayout from "../../layout/AppLayout";

import { Header, RenderClock } from "./components";
import dayjs from "dayjs";

const Clock = () => {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setCurrentTime(dayjs().format("hh:mm"));
    }, 1000);
    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  return (
    <AppLayout heading="Clock">
      {/* Time and min container */}
      <Header heading={currentTime} subHeading={dayjs().format("ddd, d MMM")} />

      {/* Clock container */}
      <RenderClock />

      {/* Timezone container */}
      <Header
        heading="Timezone"
        headingSize={24}
        subHeadingSize={16}
        subHeading={`UTC ${dayjs().format("Z")} (IST)`}
        marginTop={5}
      />
    </AppLayout>
  );
};

export default Clock;

const styles = StyleSheet.create({});
