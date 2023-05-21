import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15202B", // color de fondo oscuro de Twitter
    padding: 20,
  },
  text: {
    color: "#F5F8FA", // texto blanco
    fontFamily: "Helvetica",
    fontSize: 16,
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: 'center', // centra los elementos verticalmente
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: "#38444D", // color de borde más oscuro
    borderWidth: 1,
    borderRadius: 5, // esquinas redondeadas
    paddingLeft: 15, // más relleno a la izquierda
    paddingRight: 15, // relleno a la derecha
    backgroundColor: "#192734", // color de fondo de la caja de texto
    color: "#F5F8FA", // color de texto
    fontSize: 18,
    fontFamily: "Helvetica",
    marginLeft: 10,
    
  },
  pickerContainer: {
    height: 40,
    width: 100,
    borderColor: "#38444D",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#192734",
    color: "#F5F8FA",
    
  },
  picker: {
    flex: 1, // ocupa todo el espacio del View
    color: "#F5F8FA",
    fontSize: 16, // disminuye el tamaño del texto
},
});
