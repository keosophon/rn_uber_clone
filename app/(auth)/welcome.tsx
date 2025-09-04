import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native";
import { router } from "expo-router";
import Swiper from "react-native-swiper";
import { useRef } from "react";
import { onboarding } from "@/constant";

const Onboarding = () => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = React.useState(0);
  return (
    <SafeAreaView className="flex h-full justify-between items-center bg-gray-100">
      <TouchableOpacity
        onPress={() => router.replace("/(auth)/sign-up")}
        className="w-full flex justify-end items-end p-5"
      >
        <Text className="text-black text-lg font-JakartaBold">Skip</Text>
      </TouchableOpacity>
      <Swiper
        ref={swiperRef}
        loop={false}
        dot={<View className="w-8 h-4 mx-1 bg-[#bec0c2] rounded-full" />}
        activeDot={<View className="w-8 h-4 mx-1 bg-[#0286FF] rounded-full" />}
        onIndexChanged={(index) => setActiveIndex(index)}
      >
        {onboarding.map((item, index) => (
          <View
            key={item.id ?? index}
            className="flex-1 justify-center items-center p-5"
          >
            <Image
              source={item.image}
              className="w-full h-[300px]"
              resizeMode="contain"
            />
            <View className="flex flex-row items-center justify-center">
              <Text className="text-center text-black text-3xl font-JakartaBold mx-10">
                {item.title}
              </Text>
            </View>
            <Text className="text-center text-gray-500 text-lg font-JakartaRegular mt-5 mx-10">
              {item.description}
            </Text>
          </View>
        ))}
      </Swiper>
    </SafeAreaView>
  );
};

export default Onboarding;
