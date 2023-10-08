import { StyleSheet } from "react-native";
import { StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { Dimensions } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
const windowWidth=Dimensions.get('screen').width;
const windowHeight=Dimensions.get('screen').height;
const Home=()=>{
  const navigator=useNavigation();
    return(
 <LinearGradient colors={['red', 'orange']}
        start={{ x: 0, y: 0}}
        end={{x: 1.5, y: 0.5}} 
        style={styles.container}>
<View style={styles.employeeDefView}>
    <Image style={styles.employeeImage} source={require('../assets/business-people.png')}>
    </Image>
    <Text style={styles.ems}>Employee Attendance System</Text>
</View>
<View style={styles.buttonView}>
    <TouchableOpacity style={styles.button} onPress={()=>{
      navigator.navigate('login');
    }}>
        <Text>Log In</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={()=>{
      navigator.navigate('signup');}}>
        <Text>Sign Up</Text>
    </TouchableOpacity>
</View>
</LinearGradient>
    );
}
const styles = StyleSheet.create({
container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
  },
 
    employeeDefView:{
       width:'90%',
       alignSelf: 'center',
       alignItems:'center', 
       marginTop:windowHeight*0.08
    },
    employeeImage:{
        width:windowWidth*0.2,
        height:windowWidth*0.2,
        alignSelf:'center',
        marginTop:windowHeight*0.09
    },
    ems:{
        fontWeight:'bold',
        fontSize:windowWidth*0.05
    },
    buttonView:{
        flex:1,
        justifyContent:'center',
        alignContent:'center',
        width:windowWidth*0.6,
        alignSelf:'center',
        marginTop:windowHeight*0.4
    },
    button:{
        backgroundColor:'#FFFFFF',
        padding:10,
        marginTop:windowHeight*0.02,
        borderRadius:50,
        alignItems:'center'
    }
  });
export default Home;