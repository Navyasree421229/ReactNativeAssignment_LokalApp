import { Text, View , StyleSheet} from "react-native";
import React from "react";


export default function Jobitems ({card}) {
  return (
    <View style={styles.card}>
      <View style={styles.flex}>
      <View style={styles.main_content}>
        <View style={styles.row}>
            <Text style={styles.label}>Title:</Text>
            <Text style={styles.value}>{card.title}</Text>
        </View>
        <View style={styles.row}>
            <Text style={styles.label}>Place:</Text>
            <Text style={styles.value}>{card.primary_details.Place}</Text>
        </View>
        <View style={styles.row}>
            <Text style={styles.label}>Salary:</Text>
            <Text style={styles.value}>{card.primary_details.Salary}</Text>
        </View>
        <View style={styles.row}>
            <Text style={styles.label}>Contact:</Text>
            <Text style={styles.value}>{card.whatsapp_no}</Text>
        </View>
        </View>

      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    color:"white",
    backgroundColor:"#D3D3D3",
    padding:8,
    paddingHorizontal:15,
    marginTop:10,
    borderRadius:6,
    elevation: 5,
  },
  profile: {
    width:40,
    height:90,
    display:"flex",
    justifyContent:"center",
    alignContent:"center",
    borderRadius:50,
    backgroundcolor:"red"
  },
  flex:{
    justifyContent:"space-between",
    display:"flex",
    flex:1,
    flexDirection:'row',
    marginRight:'40%'
  },
  name:{
    color:"#000",
    fontSize:16,
    fontFamily:'Montserrat'
  },
  location:{
    color:"#000",
    fontSize:16,
    fontFamily:'Montserrat'
  },
  place:{
    color:"#000",
    fontSize:16,
    fontFamily:'Montserrat'
  },
  salary:{
    color:"#000",
    fontSize:16,
    fontFamily:'Montserrat'
  },
  Contact:{
    color:"#000",
    fontSize:16,
    fontFamily:'Montserrat'
  },
  main_content: {
    width: "160%",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 2,
  },
  label: {
    color: "blue",
    fontWeight: "bold",
    width: 70, 
  },
  value: {
    color: "#000",
    flex: 1,
  },

})