import React from "react";
import { TouchableOpacity, StyleSheet, Text, Dimensions } from "react-native";

const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4;

interface IButton {
  onPress: any,
  text: string,
  size: string,
  theme: string
}

export default ({ onPress, text, size, theme }: IButton) => {
  
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, theme === "secondary" ? styles.buttonSecondary : theme === "accent" && styles.buttonAccent, size === "double" && styles.buttonDouble]}>
      <Text style={[styles.text, theme === "secondary" && styles.textSecondary]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontSize: 25
  },
  textSecondary: {
    color: "#060606"
  },
  button: {
    backgroundColor: "#333333",
    flex: 1,
    height: Math.floor(buttonWidth - 10),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Math.floor(buttonWidth),
    margin: 5
  },
  buttonDouble: {
    width: Math.floor(buttonWidth * 2 - 10),
  },
  buttonSecondary: {
    backgroundColor: "#a6a6a6"
  },
  buttonAccent: {
    backgroundColor: "#f09a36"
  }
});