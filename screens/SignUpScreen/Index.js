import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import CustomButton from "../../components/CustomButton/Index";
import CustomInput from "../../components/CustomInput/Index";
import SocialSignInButton from "../../components/SocialSignInButton/Index";
import { useNavigation } from "@react-navigation/core";

import axios from "axios";
const logoOne =
  "https://www.freepnglogos.com/uploads/photography-logo-png/photography-logo-camera-logo-png-download-best-camera-logo-png-10.png";

const SignUpScreen = () => {
  const { height } = useWindowDimensions();
  const [username, SetUsername] = useState("");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [passwordRepeat, SetPasswordRepeat] = useState("");
  const [mobile_No, SetMobile_No] = useState("");
  const [error, setError] = useState();

  const navigator = useNavigation();
  const onKeyUp = () => {};
  const onRegisterPress = async () => {
    try {
      const res = await axios.post(API, {
        username: username,
        email: email,
        password: password,
        mobile_No: mobile_No,
      });
      if (res.status === 200) navigator.navigate("login");
    } catch (error) {
      console.log(error);
    }
  };

  const onTermOfUsePressed = () => {};

  const onPrivacyPolicyPressed = () => {};
  const onAlreadyAccountPressed = () => {
    navigator.navigate("login");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {error ? <Text>{error}</Text> : <Text></Text>}
      <View style={styles.container}>
        <Text style={styles.title}>Create an account</Text>
        <CustomInput
          placeholder="Username"
          value={username}
          setValue={SetUsername}
        />
        <CustomInput placeholder="email" value={email} setValue={SetEmail} />
        <CustomInput
          placeholder="username"
          value={mobile_No}
          setValue={SetMobile_No}
        />
        <CustomInput
          placeholder="password"
          value={password}
          setValue={SetPassword}
          secureTextEntry={true}
        />
        <CustomInput
          placeholder="Confirm password"
          value={passwordRepeat}
          setValue={SetPasswordRepeat}
          secureTextEntry={true}
        />

        <CustomButton text="Register" onPress={onRegisterPress} />
        <Text style={styles.text}>
          By registering you confirm that you accept our
          <Text style={styles.link} onPress={onTermOfUsePressed}>
            {" "}
            Terms of Use
          </Text>{" "}
          and
          <Text style={styles.link} onPress={onPrivacyPolicyPressed}>
            {" "}
            Privacy Policy
          </Text>
        </Text>
        <SocialSignInButton />
        <CustomButton
          text="Have an account? Sign In"
          onPress={onAlreadyAccountPressed}
          type="TERITARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    alignItems: "center",
    padding: 20,
    justifyContent: "center",
  },

  title: {
    fontWeight: "bold",
    fontSize: 24,
    color: "#051C60",
    margin: 10,
  },
  text: {
    color: "gray",
    marginVertical: 10,
  },
  link: {
    color: "#FDB075",
  },
});

export default SignUpScreen;
