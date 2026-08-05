import { Link } from "expo-router";
import { Text, View } from "react-native";

const SignUP = () => {
  return (
    <View>
      <Text>SignUP</Text>
      <Link href="/(auth)/sign-in">Already have an account? Sign In</Link>
    </View>
  );
};

export default SignUP;
