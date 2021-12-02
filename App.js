import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ScreenComponent from "./src/screens/ScreenComponent";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import ImageGallery from "./src/screens/ImageGallery";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";
import SquareScreen from "./src/screens/SquareScreen";
import ColorReducer from "./src/screens/ColorReducer";
import TextScreen from "./src/screens/TextScreen";
import LayoutScreen from "./src/screens/LayoutScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ScreenComponent,
    ScreenComponent: ListScreen,
    ImageScreen: ImageScreen,
    ImageGallery: ImageGallery,
    Counter: CounterScreen,
    Colors: ColorScreen,
    Square: SquareScreen,
    Reducer: ColorReducer,
    Text: TextScreen,
    Layout: LayoutScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
