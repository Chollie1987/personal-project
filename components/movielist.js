import React from 'react';
import { Image, View, Text, TouchableOpacity, FlatList, Dimensions, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const Movielist = ({ title, data }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={styles.movieItem}
            onPress={() => navigation.navigate('Movie', item)}
          >
            <View>
              <Image
                source={require('../assets/moviePoster1.png')}
                style={styles.movieImage}
              />
              <Text style={styles.movieName}>
              {item.name}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAll: {
    color: 'blue', // You can customize the color
  },
  movieItem: {
    marginRight: 15,
  },
  movieImage: {
    width: width * 0.33,
    height: height * 0.55,
    borderRadius: 8,
   
  },
  movieName: {
    marginTop: 5,
    fontSize: 12,
    textAlign: 'center',
  },
});

export default Movielist;

// import { Image, View, Text, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Dimensions } from 'react-native'
// import React from 'react'
// import { useNavigation } from '@react-navigation/native';

// var { width, height} = Dimensions.get('window');

// export default function Movielist({title, data}) {
//     let movieName = 'Dirty Dancing';
//     const navigation = useNavigation();
//   return (
//     <View>
//         <View>
//       <Text>{title}</Text>
//       <TouchableOpacity>
//         <Text>See All</Text>
//       </TouchableOpacity>
//       </View>
//       <ScrollView>
        
//             {Array.isArray(data) &&
//           data.map((item, index)=> (
//                     <TouchableWithoutFeedback
//                         key={index}
//                         onPress={()=> navigation.navigate('Movie', item)}
//                     >
//                         <View>
//                             <Image
//                                 source={require('../assets/moviePoster1.png')} 
//                                 style={{width: width*0.33, height: height*0.22}}/>
//                                 <Text>
//                                     {movieName.length>14? movieName.slice(0, 14)+'...': movieName}
//                                 </Text>
//                         </View>
//                     </TouchableWithoutFeedback>
//                 )
//             )}
        
//         </ScrollView>
//     </View>

//   )
// }