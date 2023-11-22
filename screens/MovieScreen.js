import React, { useEffect, useState } from 'react';
import { Dimensions, View, Image, ScrollView, TouchableOpacity, Text, SafeAreaView, StyleSheet } from 'react-native';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { HeartIcon } from 'react-native-heroicons/solid';
import { useNavigation, useRoute } from '@react-navigation/native';
import Cast from '../components/cast';

const { width, height } = Dimensions.get('window');

export default function MovieScreen() {
  const { params: item } = useRoute();
  const [isFavorited, toggleFavorite] = useState(false);
  const navigation = useNavigation();
  const [cast, setCast] = useState([1, 2, 3]);
  let movieName = 'Dirty Dancing';
  useEffect(() => {}, [item]);

  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 20 }} style={styles.container}>
      <SafeAreaView style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconContainer}>
          <ChevronLeftIcon />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleFavorite(!isFavorited)} style={styles.iconContainer}>
          <HeartIcon color={isFavorited ? 'red' : 'white'} />
        </TouchableOpacity>
      </SafeAreaView>
      <View>
        <Image source={require('../assets/trees.jpg')} style={{ width: '100%', height: '250px', borderRadius: '8px', marginRight: '20px', marginLeft: '20px' }}/>
      </View>
      <View style={styles.movieDetailsContainer}>
        <Text style={styles.movieTitle}>{movieName}</Text>
        <Text>Released - 1987 - 140 min</Text>
        <View style={styles.genreRow}>
          <Text style={styles.genreText}>Romance</Text>
          <Text style={styles.genreText}>Drama</Text>
          <Text style={styles.genreText}>Dance</Text>
        </View>
        <Text style={styles.genreText}>Dancing at a summer camp</Text>
      <Cast cast={cast} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(232, 244, 252)',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  image: {
    borderRadius: 8,
  },
  iconContainer: {
    padding: 10,
  },
  movieDetailsContainer: {
    paddingHorizontal: 16,
    marginTop: 20,
  },
  movieTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  genreRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  genreText: {
    backgroundColor: '#ddd',
    marginHorizontal: 8,
    padding: 10,
    borderRadius: 8,
  },
});

// import { Dimensions, View, Image, ScrollView, TouchableOpacity, Text, SafeAreaView, StyleSheet } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import { ChevronLeftIcon } from 'react-native-heroicons/outline'
// import { HeartIcon } from 'react-native-heroicons/solid'
// import { useNavigation, useRoute } from '@react-navigation/native';
// import Cast from '../components/cast';

// const { width, height } = Dimensions.get('window');

// export default function MovieScreen() {
//     const { params: item } = useRoute();
//     const [isFavorited, toggleFavorite] = useState(false);
//     const navigation = useNavigation();
//     const [cast, setCast] = useState([1,2,3]);
//     let movieName = 'Dirty Dancing';
//     useEffect(() => {

//     }, [item])

//     return (
//         <ScrollView
//             contentContainerStyle={{ paddingBottom: 20 }}
//         >
//             <View>
//                 <SafeAreaView>
//                     <TouchableOpacity onPress={() => navigation.goBack()}>
//                         <ChevronLeftIcon />
//                     </TouchableOpacity>
//                     <TouchableOpacity onPress={() => toggleFavorite(!isFavorited)}>
//                         <HeartIcon color={isFavorited ? 'red' : "white"} />
//                     </TouchableOpacity>
//                 </SafeAreaView>
//                 <View>
//                     <Image source={require('../assets/trees.jpg')} style={{ width: '100%', height: height / 2 }} />
//                 </View>
//             </View>
//             <View style={styles.movieDetailsContainer}>
//                 <Text style={styles.movieTitle}>
//                     {movieName}
//                 </Text>
//                 <Text>
//                     Released - 1987 - 140 min
//                 </Text>
//                 <View style={styles.genreRow}>
//                     <Text style={styles.genreText}>
//                         Romance 
//                     </Text>
//                     <Text style={styles.genreText}>
//                         Drama 
//                     </Text>
//                     <Text style={styles.genreText}>
//                         Dance 
//                     </Text>
//                 </View>
//                 <Text style={styles.genreText}>Dancing at a summer camp</Text>
//             </View>
//             <Cast cast={cast}/>
//         </ScrollView>
//     )
// }

// const styles = StyleSheet.create({
//     movieDetailsContainer: {
//         paddingHorizontal: 16,
//         marginTop: 20,
//     },
//     movieTitle: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         marginBottom: 8,
//     },
//     genreRow: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//     },
//     genreText: {
//         backgroundColor: '#ddd',
//         marginHorizontal: 8,
//         padding: 10,
//         borderRadius: 8,
//     },
// });