import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Simples from './src/components/Simples'
import Parimpar from './src/components/Parimpar'
import {Inverter, MegaSena} from './src/components/Multi'

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	  }
	
	  static getDerivedStateFromError(error) {
		// Atualiza o state para que a próxima renderização mostre a UI alternativa.
		return { hasError: true };
	  }
	render() {
		return (
			<View style={styles.container}>
				<Simples text="Ola Mundo!" />
				<Parimpar numero={33} />
				<Inverter texto="Ola mundo!!!" />
				<MegaSena />
			</View>
		)
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	f20: {
		fontSize: 30
	}
})

export default App