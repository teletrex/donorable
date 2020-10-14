/* CSS styles for Login Screen */
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    marginTop: 30,
    marginBottom: 40,
    marginLeft: 50,
    maxWidth: 310,
    maxHeight: 140,
  },
  label: {
    fontFamily: "Montserrat_400Regular",
    color: "#5e5e5e",
    fontSize: 26,
    textAlign: "center",
    marginTop: 10,
  },
  inputLabel: {
    fontFamily: "Montserrat_400Regular",
    color: "#6200ee",
    fontSize: 26,
    marginLeft: 35,
    marginTop: 50,
    marginBottom: 10,
    padding: 12,
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    borderWidth: 1,
    marginLeft: 47,
    marginRight: 47,
    borderColor: "#5e5e5e",
  },
  input: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 16,
    height: 35,
    overflow: "hidden",
    backgroundColor: "white",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    marginTop: 40,
  },
  backButton: {
    backgroundColor: "#03dac5",
    marginLeft: 50,
    //marginRight: 50,
    padding: 10,
    height: 48,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  loginButton: {
    backgroundColor: "#6200ee",
    //marginLeft: 50,
    //marginRight: 50,
    height: 48,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTitle: {
    fontFamily: "Montserrat_400Regular",
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
