import React, { Component } from "react";
import { View, Text, TouchableHightlight } from "react-native";
import Padrao from "../styles";

class Contador extends Component {
  state = {
    numero: 0
  };

  maisUm = () => {
    this.setState({ numero: this.state.numero + 1 });
  };

  limpar = () => {
    this.setState({ numero: 0 });
  };
  render() {
    return (
      <View style={Padrao.ex}>
        <Text style={{ fontSize: 40 }}>{this.state.numero}</Text>
        <Text style={{ fontSize: 40 }}>text</Text>
        <TouchableHightlight onPress={this.maisUm} onLongPress={this.limpar}>
          <Text>Incrementar/Zerar</Text>
        </TouchableHightlight>
      </View>
    );
  }
}

export default Contador;