import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    bottomContainer:{
        padding:10,
    },
    searchRideText:{
        fontSize:22,
        fontWeight:"700",
        alignSelf:"center"
    },
    searchInputContainer:{
        flexDirection:'row',
        alignItems:'center',
        // justifyContent:"center",
        backgroundColor:'#E5E4E2',
        padding:5,
        marginTop:10,
        borderRadius:10,
        paddingHorizontal:20,
    },
    textInput:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        fontSize:20,
        fontWeight:"500",
        padding:10,
        width:"100%",
        paddingHorizontal:20,
    },
    buttonContainer:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
         margin:10,
         backgroundColor:"#89CFF0",
         padding:10,
       },
       buttonText:{
        textAlign:"center",
        fontWeight:"800",
        fontSize:18,
        color:"#ffffff",
        letterSpacing:2,
       },
       arrowLeft:{
        position:"absolute",
        right:10,
       },
       downArrow:{
        padding:10,
       }
});

export default styles;