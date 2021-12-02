import React, { useReducer } from "react";
import { View, StyleSheet, Text } from "react-native";
import ColorCounter from "../components/ColorCounter";

const reducer = (state, action) => {
  //state === {red: 0, green: 0, blue: 0};
  //action === colorToChange ex: red, green, blue
  switch (action.colorToChange) {
    case "red":
      return state.red + action.amount > 255 || state.red + action.amount < 0
        ? state
        : { ...state, red: state.red + action.amount };
    case "green":
      return state.green + action.amount > 255 ||
        state.green + action.amount < 0
        ? state
        : { ...state, green: state.green + action.amount };
    case "blue":
      return state.blue + action.amount > 255 || state.blue + action.amount < 0
        ? state
        : { ...state, blue: state.blue + action.amount };
    default:
      return state;
  }
};

const ColorReducer = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;
  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={() => dispatch({ colorToChange: "red", amount: 15 })}
        onDecrease={() => dispatch({ colorToChange: "red", amount: -1 * 15 })}
      />
      <ColorCounter
        color="Green"
        onIncrease={() => dispatch({ colorToChange: "green", amount: 15 })}
        onDecrease={() => dispatch({ colorToChange: "green", amount: -1 * 15 })}
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => dispatch({ colorToChange: "blue", amount: 15 })}
        onDecrease={() => dispatch({ colorToChange: "blue", amount: -1 * 15 })}
      />
      <View
        style={{
          height: 200,
          width: 200,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorReducer;
