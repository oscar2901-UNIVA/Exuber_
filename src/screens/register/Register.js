import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Picker from "../../components/atoms/picker/Picker";
import TextStyled from "../../components/TextStyled";
import { Controller, useForm } from "react-hook-form";
import InputPrimary from "../../components/atoms/inputs/InputPrimary";
import { useNavigation } from "@react-navigation/native";
import PasswordInput from "../../components/atoms/inputs/PasswordInput";
import ButtonPrimary from "../../components/atoms/buttons/ButtonPrimary";
import { useDispatch } from "react-redux";
import { createNightclub } from "../../reduxStore/features/nightClub/nightClubSlice";
import {
  createUsers,
  getUsers,
  signUp,
} from "../../reduxStore/features/user/userSlice";
import SimpleLayout from "../../components/layouts/SimpleLayout";
import { ScrollView } from "react-native";

const Register = () => {
  const [userType, setUserType] = useState("normal");
  const { control, handleSubmit, setValue } = useForm();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      const result = await dispatch(signUp(data));
      if (!result.error) {
        dispatch(getUsers());
        navigation.navigate("Home");
      } else {
        console.error("Error en signUp:", result.error);
      }
    } catch (error) {
      console.error("Error en el registro:", error);
    }
  };

  const userTypeOptions = [
    { label: "Usuario Normal", value: "normal" },
    { label: "Night Club", value: "nightclub" },
  ];

  return (
    <SimpleLayout hasScroll={false} style={{ paddingHorizontal: 5 }}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{ padding: 20, flex: 1 }}>
            {/*  <Picker
              label="Tipo de Usuario:"
              selectedValue={userType}
              onValueChange={(itemValue) => setUserType(itemValue)}
              options={userTypeOptions}
            /> */}
            <Controller
              control={control}
              render={({ field }) => (
                <InputPrimary
                  placeholder="Nombre completo"
                  control={control}
                  name="full_name"
                  onChangeText={(text) => setValue("full_name", text)}
                />
              )}
              name="full_name"
              defaultValue=""
            />

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
                <InputPrimary
                  placeholder="Nombre de usuario"
                  control={control}
                  name="username"
                  onChangeText={(text) => setValue("username", text)}
                />
              )}
              name="username"
              defaultValue=""
            />
            <Controller
              control={control}
              render={({ field }) => (
                <InputPrimary
                  placeholder="Telefono celular"
                  control={control}
                  name="phone"
                  onChangeText={(text) => setValue("phone", text)}
                />
              )}
              name="phone"
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
              title="register"
              text="Registrarse"
              onPress={handleSubmit(onSubmit)}
            />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </SimpleLayout>
  );
};

export default Register;
