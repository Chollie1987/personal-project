
import { View, Text, Platform, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState }from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import { styles } from '../theme';
import TrendingMovies from '../components/trendingMovies';
import Movielist from '../components/movielist';

const ios = Platform.OS == 'ios';

export default function HomeScreen() {
    const [trending, setTrending] = useState([1, 2, 3]);
    const [upcoming, setUpcoming] =([1, 2, 3]);
    const [topRated, setTopRated] =([1, 2, 3]);
    return (
        <View>
            <SafeAreaView>
             <StatusBar style='light' />
            <View>
                <Bars3CenterLeftIcon size='30' strokeWidth={2} color='black' />
                    <Text>
                        <Text style={styles.largeBoldText}>Movies</Text>
                    </Text>
                <TouchableOpacity>
                    <MagnifyingGlassIcon size='30' strokeWidth={2} color='black' />
                </TouchableOpacity>
            </View>
            </SafeAreaView>

            <ScrollView showsVerticalScrollIndication={false}
            contentContainerStyle={{paddingBottom: 10}}>
                <TrendingMovies data={trending} />
                <Movielist title='Upcoming Movies' data={upcoming}/>
            </ScrollView>
        </View>
    )
}

