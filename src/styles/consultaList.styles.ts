import { StyleSheet } from "react-native";
import { colors } from "./colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
  },
  card: {
    backgroundColor: colors.card,
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  titulo: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.text,
  },
  subtitulo: {
    color: colors.textSecondary,
  },
});

export default styles;