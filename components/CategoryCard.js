import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const CategoryCard = ({imgUrl, title}) => {
  return (
    <TouchableOpacity className="bg-black mr-2 rounded-lg">
        <Image
          source={{
            uri: imgUrl,
          }}
          className="h-20 w-20 bg-gray-300 p-4 rounded-lg"
        />
      <Text className="absolute bottom-1 left-1 text-white font-bold ">{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard