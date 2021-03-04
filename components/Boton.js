import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

class Boton extends React.Component{
    
    constructor(props){
        super(props);
    }

    clickButton(value){
        console.log(value);
    }

    render(){

        const {value} = this.props;
        const {large} = this.props;

        return (    
            <View style={large ? styles.botonLargo : styles.boton}>
              <TouchableHighlight onPress={() => this.clickButton(value)} activeOpacity={0.6} underlayColor="#DDDDDD">
                  <Text style={styles.textoBoton}>{value}</Text>
              </TouchableHighlight>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    boton: {
        backgroundColor: '#CCD1D1',
        borderRadius: 8,
        flexBasis: '22%',
        height: 60,
        marginVertical: 4
    },
    botonLargo: {
        backgroundColor: '#CCD1D1',
        borderRadius: 8,
        flexBasis: '46%',
        height: 60,
        marginVertical: 4
    },
    textoBoton: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 60,
        fontSize: 18
    }
});

export default Boton;
