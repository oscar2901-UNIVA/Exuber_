import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import Picker from "../../components/atoms/picker/Picker";
import TextStyled from "../../components/TextStyled";
import { Controller, useForm } from "react-hook-form";
import InputPrimary from "../../components/atoms/inputs/InputPrimary";
import { useNavigation } from "@react-navigation/native";
import PasswordInput from "../../components/atoms/inputs/PasswordInput";
import ButtonPrimary from "../../components/atoms/buttons/ButtonPrimary";

const Register = () => {
  const [userType, setUserType] = useState("normal");
  const { control, handleSubmit, setValue } = useForm();
  const navigation = useNavigation();

  const onSubmit = (data) => {
    const { password, confirmPassword, ...rest } = data;
    if (password === confirmPassword) {
      console.log("Contraseñas coinciden. Registrando usuario:", rest);
      console.log("datos registro",data)
    } else {
      console.log("Las contraseñas no coinciden");
    }
  };

  const userTypeOptions = [
    { label: "Usuario Normal", value: "normal" },
    { label: "Night Club", value: "nightclub" },
  ];

  return (
    <View style={{ padding: 20, flex: 1 }}>
      <Picker
        label="Tipo de Usuario:"
        selectedValue={userType}
        onValueChange={(itemValue) => setUserType(itemValue)}
        options={userTypeOptions}
      />

      <Controller
        control={control}
        render={({ field }) => (
          <InputPrimary
            placeholder="Nombre de Usuario"
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
      <Controller
        control={control}
        render={({ field }) => (
          <PasswordInput
            placeholder="Confirmar Contraseña"
            control={control}
            name="confirmPassword"
            onChangeText={(text) => setValue("confirmPassword", text)}
          />
        )}
        name="confirmPassword"
        defaultValue=""
      />

      {userType === "nightclub" && (
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
      )}

      <ButtonPrimary
        title="register"
        text="Registrarse"
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  );
};

export default Register;
