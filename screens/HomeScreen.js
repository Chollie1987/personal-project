import React, { useState } from 'react';
import { View, Text, Platform, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import { styles } from '../theme';
import TrendingMovies from '../components/trendingMovies';
import Movielist from '../components/movielist';

const ios = Platform.OS == 'ios';

const HomeScreen = () => {
  const [trending, setTrending] = useState([1, 2, 3]);
  const [upcoming, setUpcoming] = useState([1, 2, 3]);
  const [topRated, setTopRated] = useState([1, 2, 3]);

  return (
    <SafeAreaView style={localStyles.container}>
      <StatusBar style="light" />
      <View style={localStyles.headerContainer}>
        <TouchableOpacity style={localStyles.iconContainer}>
          <Bars3CenterLeftIcon size={30} strokeWidth={2} color="black" />
        </TouchableOpacity>
        <Text>
          <Text style={styles.largeBoldText}>Movies</Text>
        </Text>
        <TouchableOpacity style={localStyles.iconContainer}>
        </TouchableOpacity>
        <TouchableOpacity>
          <MagnifyingGlassIcon size={30} strokeWidth={2} color="black" />
          </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={localStyles.scrollContainer}
      >
        <TrendingMovies data={trending} />
        <Movielist title="Upcoming Movies" data={upcoming} />
        <Movielist title="Top Rated" data={topRated} />
      </ScrollView>
    </SafeAreaView>
  );
};

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  iconContainer: {
    flex: 1,
    alignItems: 'flex-start', // Adjust this based on your design
  },
  scrollContainer: {
    paddingBottom: 10,
  },
});

export default HomeScreen;
// import { View, Text, Platform, TouchableOpacity, ScrollView } from 'react-native'
// import React, { useState }from 'react'
// import { SafeAreaView } from 'react-native-safe-area-context'
// import { StatusBar } from 'expo-status-bar'
// import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';
// import { styles } from '../theme';
// import TrendingMovies from '../components/trendingMovies';
// import Movielist from '../components/movielist';

// const ios = Platform.OS == 'ios';

// export default function HomeScreen() {
//     const [trending, setTrending] = useState([1, 2, 3]);
//     const [upcoming, setUpcoming] = useState([1, 2, 3]);
//     const [topRated, setTopRated] = useState([1, 2, 3]);
//     return (
//         <View>
//             <SafeAreaView>
//              <StatusBar style='light' />
//             <View>
//                 <Bars3CenterLeftIcon size='30' strokeWidth={2} color='black' />
//                     <Text>
//                         <Text style={styles.largeBoldText}>Movies</Text>
//                     </Text>
//                 <TouchableOpacity>
//                     <MagnifyingGlassIcon size='30' strokeWidth={2} color='black' />
//                 </TouchableOpacity>
//             </View>
//             </SafeAreaView>

//             <ScrollView showsVerticalScrollIndication={false}
//             contentContainerStyle={{paddingBottom: 10}}>
//                 <TrendingMovies data={trending} />
//                 <Movielist title='Upcoming Movies' data={upcoming}/>
//                 <Movielist title='Top Rated' data={topRated}/>
//             </ScrollView>
//         </View>
//     )
// }

