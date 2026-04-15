import { StyleSheet } from "react-native";
import { colors } from "./colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.text,
    marginBottom: 10,
  },
  info: {
    color: colors.textSecondary,
    marginBottom: 6,
  },
});

export default styles;