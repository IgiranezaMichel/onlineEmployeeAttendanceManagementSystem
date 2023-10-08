import { ScrollView, Text } from "react-native";
import { Dimensions } from "react-native";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import Database from "../database/Database";

const windowWidth=Dimensions.get('screen').width;
const windowHeight=Dimensions.get('screen').height;
const SignUp=()=>{
  const navigator=useNavigation();
  const[name,setName]=useState('');
  const[password,setPassword]=useState('');
  const[email,setEmail]=useState('');
  const[phoneNumber,setPhoneNumber]=useState('');
  const saveData=()=>{
    if(name==''||email==''||password==''||phoneNumber=='')
       {alert('Please all fill all fields ');}
    else
    { 
      Database.transaction((tx)=>{
        tx.executeSql('INSERT INTO Employeer (name,phoneNumber,email,password) values(?,?,?,?) ',[name,phoneNumber,email,password]
        ,(err,result)=>{
          alert('w');
          if(result.rowsAffected>0){alert(name+' Credentials saved successfully')}else{alert('Row not affected')}});
      });
    }
  }

    return(
        <LinearGradient style={styles.container} colors={['#66B2B7','#104133']}>
            <ScrollView>
              <View style={styles.SignInTextView}>
                <View style={{backgroundColor:'white',borderRadius:50,padding:10}}>
                   <Image style={{width:50,height:50,borderRadius:50}} source={require('../assets/business-people.png')}/>
                </View>
                <View style={{backgroundColor:'white',borderRadius:10,padding:10}}>
                    <Text style={styles.signUpText}>Sign In Form</Text>
                </View>
                </View>
                <View style={styles.sigUpView}>
                    <View style={styles.logInContainer}>
                        <View style={{marginTop:windowHeight*0.01}}>
                         <Text style={{alignSelf:'center',fontWeight:'bold'}}>Employee management System</Text>
                        <View>
                            <Text style={styles.label}>Name</Text>
                            <TextInput onChangeText={(text)=>setName(text)} style={styles.signUpInput} placeholder="Enter Your name"></TextInput>
                            </View>
                            <View>
                            <Text  style={styles.label}>Phone Number</Text>
                            <TextInput onChangeText={(text)=>setPhoneNumber(text)} style={styles.signUpInput} placeholder="Enter Phonr Number"></TextInput>
                            </View>
                            <View>
                            <Text  style={styles.label}>Email</Text>
                            <TextInput onChangeText={(text)=>setEmail(text)} style={styles.signUpInput} placeholder="Enter Email"></TextInput>
                            </View>
                            <View>
                            <Text  style={styles.label}>Password</Text>
                            <TextInput onChangeText={(text)=>setPassword(text)} style={styles.signUpInput} placeholder="Enter password"></TextInput>
                            </View>
                            <View>
                            <Text style={styles.label}>Retype Password</Text>
                            <TextInput style={styles.signUpInput} placeholder="Enter password"></TextInput>
                            </View>
                            <Text style={styles.label} onPress={()=>{navigator.navigate("login")}}>Already have Account?</Text>
                            <TouchableOpacity style={styles.logInbtnn} onPress={saveData}>
                                <Text style={styles.label}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
  
        </LinearGradient>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      sigUpView:{
        flex: 1,
        width:'80%',
        position:'relative',
        alignSelf: 'center',
      },

      SignInTextView:{
         alignItems: 'center',
        alignSelf:'center',
        flexDirection:'row',
        marginTop:windowHeight*0.08,
        marginBottom:windowHeight*0.01,

      },
      logInContainer:{
        backgroundColor:'rgba(255, 255, 255, 0.644)',
        borderRadius:10,
        padding:(windowHeight/windowWidth)*10,
        marginTop:windowHeight*0.02,
        marginBottom:windowHeight*0.1
      },
      signUpText:{
        fontSize:windowWidth*0.09
      },
      signUpInput:{
        width:'100%',
        borderBottomWidth:1,
        marginTop:windowHeight*0.01   
      },
      label:{
        fontWeight:'bold',
        paddingTop:5
      },
      logInbtnn:{
        backgroundColor:'#FFFFFF',
        alignSelf: 'center',
        width:'100%',
        alignItems:'center',
        padding:'2%',
        marginTop:windowHeight*0.02,
        marginBottom:windowHeight*0.01,
        borderRadius:10
      }
})
export default SignUp;