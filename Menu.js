import React from "react";
import { createDrawerNavigator } from "react-navigation";

import Simples from "./src/components/Simples";
import Parimpar from "./src/components/Parimpar";
import { Inverter, MegaSena } from "./src/components/Multi";
import Contador from "./src/components/Contador";

export default createDrawerNavigator({
  Contador: {
    screen: () => <Contador />
  },
  MegaSena: {
    screen: () => <MegaSena />,
    navigationOptions: { title: "Mega Sena" }
  },
  Inverter: {
      screen: () => <Inverter texto='React Native!' />
  },
  ParImpar: {
      screen: () => <Parimpar numero={30} />,
      navigationOptions: {title: 'Par & Impar'}
  },
  Simples: {
      screen: () => <Simples texto='Hello World' />
  }
}, {drawerWidth: 300, drawerPosition: 'left'});
