import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectRestaurant } from "../features/restaurantSlice";
import * as Icons from "react-native-heroicons/solid";

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);

  return (
    <>
      <View className="bg-[#00CCBB] flex-1">
        <SafeAreaView className="z-50">
          <View className="flex-row justify-between items-center p-5">
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <Icons.XMarkIcon color="white" size={30} />
            </TouchableOpacity>
            <Text className="font-light text-white text-lg">Order Help</Text>
          </View>

          <View className="bg-white mx-2 my-2 rounded-md z-50 shadow-md">
            <View className="flex-row justify-between pl-2 p-6">
              <View>
                <Text className="text-lg text-gray-500">Estimated Arrival</Text>
                <Text className="text-4xl font-bold">45-55 Minutes</Text>
              </View>
              <Image
                source={{
                  uri: "https://links.papareact.com/fls",
                }}
                className="h-20 w-20"
              />
            </View>
          </View>
        </SafeAreaView>
      </View>
    </>
  );
};

export default DeliveryScreen;
