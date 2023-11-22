import { View, Text, Dimensions, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import Carousel from 'react-native-reanimated-carousel';
import { styles } from '../theme';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window')

const MovieCard = ({item, handleClick})=>{
    return (
        <TouchableWithoutFeedback onPress={handleClick}>
            <Image 
                source={require('../assets/moviePoster2.png')}
                style={{ width: '100%', height: '200%', borderRadius: '8px', marginRight: '30px', marginLeft: '30px'}}
                />
        </TouchableWithoutFeedback>
    )
}
export default function TrendingMovies({ data }) {
    const navication = useNavigation();
    const handleClick = () => {
        navication.navigate('Movie', item)
    }
  return (
    <View>
      <Text style={styles.text}>Trending</Text>
      <View style={{ flex: 1 }}>
            <Carousel
                loop
                width={width}
                height={width / 2}
                autoPlay={true}
                data={[...new Array(6).keys()]}
                scrollAnimationDuration={1000}
                onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={({ index }) => (
                    <MovieCard/>
                     
                )}
            />
        </View>
     
    </View>
  );
}


