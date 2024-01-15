import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableWithoutFeedback, Keyboard } from "react-native";
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
} from "../../reduxStore/features/user/userSlice";
import SimpleLayout from "../../components/layouts/SimpleLayout";

const Register = () => {
  const [userType, setUserType] = useState("normal");
  const { control, handleSubmit, setValue } = useForm();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    /*  console.log("datos registro", data); */
    dispatch(createUsers(data));
    dispatch(getUsers());
    navigation.navigate("Home");
  };

  const userTypeOptions = [
    { label: "Usuario Normal", value: "normal" },
    { label: "Night Club", value: "nightclub" },
  ];

  return (
    <SimpleLayout hasScroll={false} style={{ paddingHorizontal: 5 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ padding: 20, flex: 1 }}>
        <Picker
          label="Tipo de Usuario:"
          selectedValue={userType}
          onValueChange={(itemValue) => setUserType(itemValue)}
          options={userTypeOptions}
          disable
        />

        <Controller
          control={control}
          render={({ field }) => (
            <InputPrimary
              placeholder="Nombre de Usuario"
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

        {/* {userType === "nightclub" && (
        <View>
          <Controller
            control={control}
            render={({ field }) => (
              <InputPrimary
                placeholder="Nombre del club"
                control={control}
                name="nameClub"
                onChangeText={(text) => setValue("nameClub", text)}
              />
            )}
            name="nameClub"
            defaultValue=""
          />
          <Controller
            control={control}
            render={({ field }) => (
              <InputPrimary
                placeholder="Ubicación"
                control={control}
                name="location"
                onChangeText={(text) => setValue("location", text)}
              />
            )}
            name="location"
            defaultValue=""
          />
          <Controller
            control={control}
            render={({ field }) => (
              <InputPrimary
                placeholder="Descripcion"
                control={control}
                name="description"
                onChangeText={(text) => setValue("description", text)}
              />
            )}
            name="description"
            defaultValue=""
          />
          <Controller
            control={control}
            render={({ field }) => (
              <InputPrimary
                placeholder="Usuario de instagram"
                control={control}
                name="instagram_username"
                onChangeText={(text) => setValue("instagram_username", text)}
              />
            )}
            name="instagram_username"
            defaultValue=""
          />
        </View>
      )} */}

        <ButtonPrimary
          title="register"
          text="Registrarse"
          onPress={handleSubmit(onSubmit)}
        />
      </View>
      </TouchableWithoutFeedback>
    </SimpleLayout>
  );
};

export default Register;
