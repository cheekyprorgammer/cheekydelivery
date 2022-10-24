import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import * as Icons from "react-native-heroicons/solid";
import { urlFor } from '../sanity';
import { useNavigation } from '@react-navigation/native';

const RestaurantCard = ({
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat,
}) => {

  const navigation = useNavigation()

  return (
    <TouchableOpacity onPress={() => {
      navigation.navigate('Restaurant', {
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        dishes,
        long,
        lat,
      })
    }} className="bg-white mr-3 shadow">
      <Image
        source={{
            uri: urlFor(imgUrl).url(),
        }}
        className="w-64 h-36 rounded-sm"
      />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-1">{title}</Text>
        <View className="flex-row items-center space-x-1">
            <Icons.StarIcon color="green" opacity={0.5} size={22} />
            <Text className="text-xs text-green-500">{rating}
                <Text className="text-gray-500"> · {genre}</Text>
            </Text>
        </View>

        <View className="flex-row items-center space-x-1">
            <Icons.MapPinIcon color="gray" size={22} />
            <Text className="text-xs text-gray-500">Nearby · {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default RestaurantCard