import { StyleSheet } from "react-native";
import { colors } from "./colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.primary,
  },
});

export default styles;