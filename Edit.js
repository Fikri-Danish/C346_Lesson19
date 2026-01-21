import React,{useState} from 'react';
import { StatusBar, View, Button, Text, TextInput, Alert } from 'react-native';

const Edit = ({navigation, route}) => {
  const[name,setName] = useState(route.params.name);
  const[pic,setPic] = useState(route.params.pic);
  return (
    <View>
      <StatusBar/>
      <Text>Card Name:</Text>
      <TextInput style={{borderWidth:1}} onChangeText={(text)=>setName(text)} value={name}/>
      <Text>Card Pic URL:</Text>
      <TextInput style={{borderWidth:1}} onChangeText={(text)=>setPic(text)} value={pic}/>
      <Text> </Text>
      <Button title='Update'
      onPress={()=>{
          let item = {card_name:name, card_pic:pic};
          fetch('https://onlinecardappwebservice-2v9d.onrender.com/editcard/'+route.params.id,
            {
              method:"PUT",
              headers:{"Content-Type":"application/json"},
              body:JSON.stringify(item)
            }
          )
          .then((response)=>{
            navigation.navigate("Home");
          })
        }
      }
      />
      <Text> </Text>
      <Button title='Delete'
      onPress={()=>{
        Alert.alert(
          "Are you sure?",
          "",
          [
            {text: "Yes",onPress:()=>{
              fetch('https://onlinecardappwebservice-2v9d.onrender.com/deletecard/'+route.params.id,
                {
                  method:"DELETE",
                }
              )
              .then((response)=>{
                navigation.navigate("Home");
              })
            }},
          {text: "No"}
          ]
        )
        }
      }
      />
    </View>
  );
};

export default Edit;