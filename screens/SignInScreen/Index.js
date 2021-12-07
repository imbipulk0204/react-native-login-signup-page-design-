import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  useWindowDimensions,
  ScrollView,
  Alert,
} from "react-native";
import CustomButton from "../../components/CustomButton/Index";
import CustomInput from "../../components/CustomInput/Index";
import SocialSignInButton from "../../components/SocialSignInButton/Index";
import { useNavigation } from "@react-navigation/core";
import axios from "axios";
const logoOne =
  "https://www.freepnglogos.com/uploads/photography-logo-png/photography-logo-camera-logo-png-download-best-camera-logo-png-10.png";

const SignInScreen = () => {
  const [data, setData] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error1, setError1] = useState();
  const [errorApi, setErrorApi] = useState();
  const [errorCatch, setErrorCatch] = useState();
  console.warn(errorApi);
  const navigator = useNavigation();

  const { height } = useWindowDimensions();
  const onKeyUp = () => {
    setError1("");
  };
  const onSignInPress = async () => {
    if (!email) return setError1("username required");
    if (!password) return setError1("password required");
    try {
      const res = await axios.post(API, {
        email: email,
        password: password,
      });
      if (res.status === 200)
        setData(res.data),
          navigator.navigate("home", {
            id: res.data._id,
            name: res.data.username,
          });
      if (res.status === 402) setErrorApi("hellllo");
    } catch (error) {
      setErrorCatch(JSON.stringify(error));
    }
  };

  const onForgetPasswordPress = () => {
    // navigator.navigate("ResetPassword")
  };

  const onSignUpPress = () => {
    navigator.navigate("register");
  };
  const alert = () => {
    Alert.alert("Alert Title", "My Alert Msg", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        {!errorApi ? (
          <Text style={styles.error}>{errorApi}</Text>
        ) : (
          <Text>{""}</Text>
        )}
        <Image
          style={[styles.logo, { height: height * 0.3 }]}
          source={{ uri: logoOne }}
          resizeMode="contain"
        />
        <CustomInput
          placeholder="Username"
          value={email}
          setValue={setEmail}
          error={error1}
          onKeyUp={onKeyUp}
          textType="emailAddress"
        />
        <CustomInput
          placeholder="password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
          onKeyUp={onKeyUp}
        />
        <CustomButton text="Sign In" onPress={onSignInPress} />
        <CustomButton
          text="Forget password"
          onPress={onForgetPasswordPress}
          type="TERITARY"
        />

        <SocialSignInButton />

        <CustomButton
          text="Don't have an account? Create one"
          onPress={onSignUpPress}
          type="TERITARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
    justifyContent: "center",
  },
  logo: {
    width: "50%",
    maxWidth: 300,
    height: 100,
    maxHeight: 100,
  },
  error: {
    color: "black",
  },
});

export default SignInScreen;
