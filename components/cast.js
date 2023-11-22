import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import keanu from '../assets/keanu.png';

export default function Cast({cast}) {
    const [castArray, setCastArray] = useState([])
    let personName = 'Keanu Reeves';
    let characterName = 'John Wick';

    useEffect(()=>{
        console.log(cast, castArray)
        if(cast.length !== castArray.length){
            setCastArray(cast)
        }
    },[cast, castArray])

   
  return (
    <View>
      <Text>Top Cast</Text>
      <ScrollView
      horizontal
      showHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingHorizontal: 15}}
      >
        {castArray.map((person, index)=>(
            <TouchableOpacity style={{ marginRight: 30}} 
           key={index}>
                <Image style={{height: '120px', borderRadius: '8px'}}  source={keanu} />
                <Text  >
                 {characterName}
                </Text>
                <Text >
                 {personName}
                </Text>
             </TouchableOpacity>
            
       ) )}
        </ScrollView>
    </View>
  );
}