import { Image, View, Text, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Dimensions } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

var { width, height} = Dimensions.get('window');

export default function Movielist({title, data}) {
    let movieName = 'Dirty Dancing';
    const navigation = useNavigation();
  return (
    <View>
        <View>
      <Text>{title}</Text>
      <TouchableOpacity>
        <Text>See All</Text>
      </TouchableOpacity>
      </View>
      <ScrollView
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingHorizontal: 15}}
      >
        
            {Array.isArray(data) &&
          data.map((item, index)=> (
                    <TouchableWithoutFeedback
                        key={index}
                        onPress={()=> navigation.navigate('Movie', item)}
                    >
                        <View>
                            <Image
                                source={require('../assets/background-image.jpg')} 
                                style={{width: width*0.33, height: height*0.22}}/>
                                <Text>
                                    {movieName.length>14? movieName.slice(0, 14)+'...': movieName}
                                </Text>
                        </View>
                    </TouchableWithoutFeedback>
                )
            )}
        
        </ScrollView>
    </View>

  )
}