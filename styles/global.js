import {StyleSheet} from 'react-native';

const globalStyles = StyleSheet.create({
    contenedor: {
      flex: 1,
    },
    contenido: {
      flexDirection: 'column',
      justifyContent: 'center',
      marginHorizontal: '2.5%',
      flex: 1,
    },
    titulo: {
      textAlign: 'center',
      marginBottom: 20,
      fontSize: 36,
      fontWeight: 'bold',
      color: '#FFF',
      fontFamily: 'Ubuntu-Regular', 
    },
    input: {
      backgroundColor: '#FFF',
      marginBottom: 20,
    },
    boton: {
      backgroundColor: '#0D41A9',
      marginTop: 20,
    },
    botonTexto: {
      textTransform: 'uppercase',
      fontWeight: 'bold',
      color: '#FFF',
      fontFamily: 'Ubuntu-Regular', 
    },
    enlace: {
      color: '#686868',
      marginTop: 60,
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 18,
      textTransform: 'uppercase',
      fontFamily: 'Ubuntu-Regular', 
    },
    subtitulo: {
      textAlign: 'center',
      marginBottom: 20,
      fontSize: 26,
      fontWeight: 'bold',
      color: '#FFF',
      marginTop: 20,
      fontFamily: 'Ubuntu-Regular', 
    },
    slider: {
      width: 300,
      opacity: 1,
      height: 50,
      marginTop: 50,
    },
  });

export default globalstyles;