import React, { useEffect, useState } from "react";
import { Keyboard, TouchableWithoutFeedback, View, Text } from "react-native";
import { useForm, Controller } from "react-hook-form";
import PasswordInput from "../../components/atoms/inputs/PasswordInput";
import ButtonPrimary from "../../components/atoms/buttons/ButtonPrimary";
import InputPrimary from "../../components/atoms/inputs/InputPrimary";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import {
  getUsers,
  login,
  selectUsers,
} from "../../reduxStore/features/user/userSlice";
import SimpleLayout from "../../components/layouts/SimpleLayout";

export default function Login() {
  const { control, handleSubmit, setValue } = useForm();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const userState = useSelector(selectUsers);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const onSubmit = async (data) => {
    try {
      const resultAction = await dispatch(login(data));

      console.log(
        "🚀 ~ file: Login.js:29 ~ onSubmit ~ resultAction:",
        resultAction
      );
      if (resultAction.payload.message === "Invalid login credentials") {
        console.log(
          "🚀 ~ file: Login.js:29 ~ onSubmit ~ resultAction:",
          resultAction.payload.message
        );
      } else {
        navigation.navigate("Home");
      }

      /* if (login.fulfilled.match(resultAction)) {
        navigation.navigate("Home");
      } else if (login.rejected.match(resultAction)) {
        console.error("Error en el inicio de sesión:", resultAction.error);
        if (resultAction.error && resultAction.error.message) {
          console.error("Error específico:", resultAction.error.message);
        }
        console.error("Error general:", "Error de inicio de sesión");
      } */
    } catch (error) {
      console.error("Error en el inicio de sesión:", error);
      console.error("Error general:", "Error de inicio de sesión");
    }
  };

  return (
    <SimpleLayout hasScroll={false} style={{ paddingHorizontal: 5 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ padding: 20 }}>
          <Controller
            control={control}
            render={({ field }) => (
              <InputPrimary
                placeholder="Correo"
                control={control}
                name="email"
                onChangeText={(text) => setValue("email", text)}
              />
            )}
            name="email"
            defaultValue=""
          />
          <Controller
            control={control}
            render={({ field }) => (
              <PasswordInput
                placeholder="Contraseña"
                control={control}
                name="password"
                onChangeText={(text) => setValue("password", text)}
              />
            )}
            name="password"
            defaultValue=""
          />

          <ButtonPrimary
            title="login"
            text="Iniciar sesión"
            onPress={handleSubmit(onSubmit)}
          />
          <ButtonPrimary
            title="register"
            text="Registrarse"
            onPress={() => {
              navigation.navigate("Register");
            }}
          />
        </View>
      </TouchableWithoutFeedback>
    </SimpleLayout>
  );
}
