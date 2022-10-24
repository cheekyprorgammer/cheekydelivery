import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  Touchable,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../features/restaurantSlice";
import {
  removeFromBasket,
  selectBasketItems,
  selectBasketTotal,
} from "../features/basketSlice";
import * as Icons from "react-native-heroicons/solid";
import { urlFor } from "../sanity";
import CurrencyFormat from "react-currency-format";

const BasketScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
  const basketTotal = useSelector(selectBasketTotal);
  const dispatch = useDispatch();

  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, []);

    setGroupedItemsInBasket(groupedItems);
  }, [items]);

  return (
    <SafeAreaView className="pt-8 flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className="p-5 border-b border-[#00CCBB] bg-white shadow">
          <View>
            <Text className="text-lg font-bold text-center">Basket</Text>
            <Text className="text-center text-gray-400">
              {restaurant.title}
            </Text>
          </View>

          <TouchableOpacity
            onPress={navigation.goBack}
            className="rounded-full bg-gray-100 absolute right-5"
          >
            <Icons.XCircleIcon color="#00CCBB" size={50} />
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5 border-y border-gray-100">
          <Image
            source={{
              uri: "https://links.papareact.com/wru",
            }}
            className="h-7 w-7 bg-gray-300 rounded-full"
          />
          <Text className="flex-1">Deliver in 45-55 min</Text>
          <TouchableOpacity>
            <Text className="text-[#00CCBB]">Change</Text>
          </TouchableOpacity>
        </View>

        <ScrollView className="divide-y divide-gray-200">
          {Object.entries(groupedItemsInBasket).map(([key, items]) => (
            <View
              key={key}
              className="flex-row items-center space-x-3 bg-white py-2 px-5"
            >
              <Text className="text-[#00CCBB]">{items.length}x</Text>
              <Image
                source={{ uri: urlFor(items[0]?.image).url() }}
                className="h-12 w-12 rounded-full"
              />
              <Text className="flex-1">{items[0]?.name}</Text>
              <CurrencyFormat
                value={items[0]?.price}
                displayType={"text"}
                prefix={"$"}
                thousandSeparator={true}
                renderText={(value) => (
                  <Text className="text-gray-600">{value}</Text>
                )}
              />

              <TouchableOpacity
                onPress={() => dispatch(removeFromBasket({ id: key }))}
              >
                <Text className="text-[#00CCBB] text-md">Remove</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View className="p-5 bg-white mt-5 space-y-4">
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Subtotal</Text>
            <CurrencyFormat
              value={basketTotal}
              displayType={"text"}
              prefix={"$"}
              thousandSeparator={true}
              renderText={(value) => (
                <Text className="text-gray-400">{value}</Text>
              )}
            />
          </View>

          <View className="flex-row justify-between">
            <Text className="text-gray-400">Delivery Fee</Text>
            <CurrencyFormat
              value={2.99}
              displayType={"text"}
              prefix={"$"}
              thousandSeparator={true}
              renderText={(value) => (
                <Text className="text-gray-400">{value}</Text>
              )}
            />
          </View>

          <View className="flex-row justify-between">
            <Text className="">Order Total</Text>
            <CurrencyFormat
              value={basketTotal + 2.99}
              displayType={"text"}
              prefix={"$"}
              thousandSeparator={true}
              renderText={(value) => (
                <Text className="font-extrabold">{value}</Text>
              )}
            />
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate("PreparingOrderScreen")}
            className="rounded-lg bg-[#00CCBB] p-4"
          >
            <Text className="text-center text-white text-xl font-bold">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
