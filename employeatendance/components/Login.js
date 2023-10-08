import { useState,useEffect } from "react";
import { ScrollView, Text } from "react-native";
import { Dimensions} from "react-native";
import { TextInput } from "react-native";
import { SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';
import QRCodeScanner from "./QLCOdeScanner";
import Database from "../database/Database";


const windowWidth=Dimensions.get('screen').width;
const windowHeight=Dimensions.get('screen').height;

const LogIn=()=>{
  const [userName,setUsername]=useState('');
  const [password,setPassword]=useState('');
  const navigator=useNavigation();
  const [hasLoginSuccessfull,setHasLoginSuccessfull]=useState(false);

  const data={
    username:userName,
    password:password
  }
  function logInValidation()
  { 
    if(data.username==''){alert("Username Field must not be empty");}
    else if(data.password==''){alert("Passwor Field must not be empty");}
    else{
       Database.transaction(
        (tx)=>{
          tx.executeSql('select * from Employeer ',[],
          (_, result) => {
            console.log('result.rows._array');
          },
          (_, error) => {
            console.log('Error fetching items:', error);
          });
        }
       )
      // setHasLoginSuccessfull(true);
    }

  }
    return(
   <>
    {hasLoginSuccessfull?<QRCodeScanner userName={userName}/>:
        <LinearGradient colors={['#A9289F','#14FF51']} style={styles.container} 
        start={{ x: 0, y: 0}}
        end={{x: 0.9, y: 1}}>
            <SafeAreaView>
            <ScrollView>
                <View style={styles.logInTextView}>
                  <View style={{backgroundColor:'white',borderRadius:50,padding:10}}>
                    <Image style={{width:50,height:50,borderRadius:50}} source={require('../assets/business-people.png')}/>
                  </View>
                  <View style={{backgroundColor:'white',borderRadius:10,padding:10}}>
                      <Text style={styles.loginText}>Log In Form</Text>
                  </View>
                </View>
                <View style={styles.logInView}>
                    <View style={styles.logInContainer}>
                      <Image style={styles.image} source={require('../assets/account.png')}></Image>
                      <Text style={styles.label}>Employee management System</Text>
                        <View style={{marginTop:windowHeight*0.04}}>
                            <View>
                            <Text style={styles.label}>User Name</Text>
                            <TextInput onChangeText={(text)=>{setUsername(text)}} style={styles.Loginput} placeholder="Enter username"></TextInput>
                            </View>
                            <View>
                            <Text style={styles.label}>Password</Text>
                            <TextInput onChangeText={(text)=>{setPassword(text)}} style={styles.Loginput} placeholder="Enter password"></TextInput>
                            <Text style={styles.label} onPress={()=>{
                              navigator.navigate("signup");
                            }}>Create Account?</Text>
                            <TouchableOpacity style={styles.logInbtnn} onPress={()=>{ logInValidation();}}>
                                <Text style={styles.label}>Log In</Text>
                            </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
            </SafeAreaView>
        </LinearGradient>
        }
   </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      logInView:{
        flex: 1,
        width:'80%',
        position:'relative',
        alignSelf: 'center',
      },
      image:{
        width:windowWidth*0.4,
        height:windowWidth*0.4,
        alignSelf: 'center',
      },
      logInTextView:{
        alignItems: 'center',
        alignSelf:'center',
        flexDirection:'row',
        marginTop:windowHeight*0.08,
        marginBottom:windowHeight*0.01,

      },
      logInContainer:{
        backgroundColor:'rgba(99, 84, 64, 0.425)',
        borderWidth:1,
        borderColor:'white',
        borderRadius:10,
        padding:(windowHeight/windowWidth)*10,
        marginTop:windowHeight*0.1,
        marginBottom:windowHeight*0.1
      },
      loginText:{
        fontSize:windowWidth*0.09
      },
      Loginput:{
        width:'100%',
        borderBottomWidth:1,
        marginTop:windowHeight*0.01   
      },
      label:{
        fontWeight:'bold',
        paddingTop:5
      },
      logInbtnn:{
        backgroundColor:'rgba(179, 123, 50, 0.486)',
        alignSelf: 'center',
        width:'100%',
        alignItems:'center',
        padding:'3%',
        marginTop:windowHeight*0.02,
        marginBottom:windowHeight*0.02,
        borderRadius:10,
        
      }
})
export default LogIn;