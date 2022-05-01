import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants";

type AppLayoutProps = {
  children: JSX.Element[];
  heading: string;
};

export default function AppLayout({ children, heading }: AppLayoutProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.heading}>{heading}</Text>
        {children}
      </View>
      <StatusBar style="inverted" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  wrapper: {
    padding: 24,
  },
  heading: {
    fontSize: 28,
    color: Colors.white,
    fontWeight: "bold",
  },
});
