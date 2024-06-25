import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function Login({ navigation }) {
  const NAV = navigation.navigate;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if(username.toString() !== "21522704" || password.toString() !== "123456") {
      alert(`Sai tài khoản hoặc mật khẩu`);
    }
    else{
      NAV("MainScreen");
    }
    setUsername("");
    setPassword("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ĐĂNG NHẬP</Text>
      <TextInput
        style={styles.input}
        placeholder="Tên truy cập"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Mật khẩu chứng thực"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Đăng nhập" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: "auto", // ~= alignSelf: 'center'
    minWidth: 400,
    maxWidth: 1000,
    padding: 16,
    marginTop: "15%",
    borderRadius: 12,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});
