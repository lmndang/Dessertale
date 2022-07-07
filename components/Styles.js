import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
  },
  column: {
    flexDirection: "column",
    alignItems: "center",
  }, 
  text: {
     color: '#FF869E',
     fontSize: 15,
     letterSpacing: 2,
     textAlign: 'center',
  },
  button: {
        flexDirection: 'row', 
        height: 20, 
        backgroundColor: 'yellow',
        alignItems: 'right',
        justifyContent: 'center',
        marginTop: 50,
        elevation:3,
    },
});

export default styles; 