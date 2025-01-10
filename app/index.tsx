import { Text, View } from "react-native";

export default function Index() {
  let x=69
  console.log(x)
  return (
    <View className="flex justify-center items-center">
      <Text className="text-primary">
        Edit app/index.tsx to edit this screen.
      </Text>
    </View>
  );
}
