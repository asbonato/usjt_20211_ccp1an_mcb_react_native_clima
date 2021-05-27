import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Cartao = (props) => {
  return (
    <View style={{...styles.cartao, ...props.estilos}}>
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  cartao: {
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 8,
    padding: 12,
    borderRadius: 12
  }
})

export default Cartao;
