import { StyleSheet } from "react-native";
import { colors } from "./colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: "center",
    padding: 16,
  },
  input: {
    backgroundColor: colors.card,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    color: colors.text,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: colors.card,
    fontWeight: "bold",
  },
});

export default styles;