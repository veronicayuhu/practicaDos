import React from 'react';
import {StyleSheet,View,} from 'react-native';

import Boton from './Boton';

class Botones extends React.Component{

    constructor(){
        super();
    }
    
    render(){
        return (
            <View style={styles.contenedor}>
        
                <Boton value={"C"} large={false}/>
                <Boton value={"*"} large={false}/>
                <Boton value={"√"} large={false}/>
                <Boton value={"/"} large={false}/>

                <Boton value={"7"} large={false}/>
                <Boton value={"8"} large={false}/>
                <Boton value={"9"} large={false}/>
                <Boton value={"x"} large={false}/>

                <Boton value={"4"} large={false}/>
                <Boton value={"5"} large={false}/>
                <Boton value={"6"} large={false}/>
                <Boton value={"-"} large={false}/>

                <Boton value={"1"} large={false}/>
                <Boton value={"2"} large={false}/>
                <Boton value={"3"} large={false}/>
                <Boton value={"+"} large={false}/>

                <Boton value={"0"} large={true}/>
                <Boton value={"."} large={false}/>
                <Boton value={"="} large={false}/>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
  contenedor: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly'
  }
});

export default Botones;
