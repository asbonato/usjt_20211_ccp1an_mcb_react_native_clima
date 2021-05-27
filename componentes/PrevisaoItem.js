import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Cartao from './Cartao'

const PrevisaoItem = (props) => {
  return (
    <Cartao estilos={styles.cartao}>
      <View style={styles.tela}>
        <Image 
          style={styles.imagem}
          source={{ uri: `https://openweathermap.org/img/wn/${props.previsao.weather[0].icon}.png`}}
        />
        <View>
          <View style={styles.primeiraLinha}>
            <Text>{new Date(props.previsao.dt * 1000).toLocaleTimeString()} - {props.previsao.weather[0].description}</Text>
          </View>
          <View style={styles.segundaLinha}>
            <Text style={styles.valor}>{`Min: ${props.previsao.main.temp_min}\u00B0C`}</Text>
            <Text style={styles.valor}>{`Max: ${props.previsao.main.temp_max}\u00B0C`}</Text>
            <Text style={styles.valor}>{`Umidade: ${props.previsao.main.humidity}`}%</Text>
          </View>
        
        </View>
      </View>
    </Cartao>
  )
}

export default PrevisaoItem

const styles = StyleSheet.create({
  cartao: {
    marginBottom: 8
  },
  tela: {
    flexDirection:"row"
  },
  imagem: {
    width: 50,
    height: 50
  },
  primeiraLinha: {
    flexDirection:"row",
    justifyContent: "center"
  },
  segundaLinha: {
    flex: 1,
    flexDirection:"row",
    justifyContent: "center",
    marginTop: 4,
    borderTopWidth: 1,
    borderTopColor: "#EEE"
  },
  valor: {
    marginHorizontal: 2
  }
})
