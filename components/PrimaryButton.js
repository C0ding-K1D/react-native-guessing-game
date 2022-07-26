import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.btnOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.pressed, styles.container] : styles.container
        }
        onPress={onPress}
        android_ripple={{ color: "#640233" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  btnOuterContainer: {
    margin: 4,
    borderRadius: 28,
    overflow: "hidden",
  },
  container: {
    backgroundColor: "#72063c",
    borderRadius: 28,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
    margin: 4,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});

export default PrimaryButton;
