import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

class Resultado extends React.Component {

    constructor(){
        super();
    }

    render(){
        //const [result, setResult] = useState('');

        return (
            <View style={styles.contenedor}>
                <Text style={styles.resultado}>0</Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    contenedor:{
        flexDirection: 'row',
        padding: 16,
        justifyContent: 'flex-end'
    },
    resultado: {
        fontSize: 48,
        fontWeight: 'bold'
    }
});

export default Resultado;
