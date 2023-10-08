
// db.transaction(tx => {
//   tx.executeSql(
//     'INSERT INTO items (name, description) VALUES (?, ?)',
//     ['Item 1', 'This is item 1 description'],
//     (_, result) => {
//       // You can handle success or error here
//       if (result.rowsAffected > 0) {
//         console.log('Data inserted successfully!');
//       } else {
//         console.log('Failed to insert data.');
//       }
//     }
//   );
// });
// db.transaction(tx => {
//   tx.executeSql(
//     'SELECT * FROM items',
//     [],
//     (_, result) => {
//       const items = result.rows._array;
//       console.log('Fetched items:', items);
//     },
//     (_, error) => {
//       console.log('Error fetching items:', error);
//     }
//   );

import { TextInput } from "react-native";
import { Text, View } from "react-native";
import Database from "./database/Database";
import { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { FlatList } from "react-native";

// });
export default function App(){
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [data, setData] = useState([]);
    useEffect(()=>{Display},[])
    const saveData=()=>{
      if(username==''||password=='') {
     alert('Please Fill empty fields');
      }
      else{  Database.transaction((tx)=>{
        tx.executeSql("INSERT INTO items (name, description) VALUES (?, ?)",[username,password]
        ,(err, data)=>{if(data.rowsAffected>0){alert(username+'saved successfully')}else{console.log(err)}});
    });}
    }
    const renderItem=({item})=>{
      return(
        <View >
          
        <View style={{backgroundColor:'black',padding:5,borderWidth:1,borderColor:'white'}}>
         <Text style={{color:'white',fontWeight:'bold'}}>Name: {item.name}</Text>
       </View>
        
       </View>
      )
    }
    const Display=()=>{
        Database.transaction((tx) => {
              tx.executeSql(
                'SELECT * FROM items',
                [],
                (_, result) => {
                  setData(result.rows._array);
                },
                (_, error) => {
                  console.log('Error fetching items:', error);
                }
              )}
              );
    }
    return(
      <View>
        <Text>
            Name:
        </Text>
        <TextInput style={{borderWidth:1}} onChangeText={(txt)=>{setUsername(txt)}}></TextInput>
        <Text>
            Description:
        </Text>
        <TextInput style={{borderWidth:1}} onChangeText={(txt)=>{setPassword(txt)}}></TextInput>
        <TouchableOpacity onPress={saveData}>
            <Text>Save Data</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={Display}>
            <Text>Display</Text>
        </TouchableOpacity>
        <FlatList 
              data={data} style={{marginTop:15}}
               renderItem={renderItem}
               keyExtractor={(item) => item.id}
        >

        </FlatList>
      </View>
    )
}
