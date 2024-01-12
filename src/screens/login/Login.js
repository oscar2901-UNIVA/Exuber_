import React from "react";
import { View } from "react-native";
import { useForm, Controller } from "react-hook-form";
import PasswordInput from "../../components/atoms/inputs/PasswordInput"; // Asegúrate de importar el componente PasswordInput desde la ubicación correcta
import ButtonPrimary from "../../components/atoms/buttons/ButtonPrimary";
import InputPrimary from "../../components/atoms/inputs/InputPrimary";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const { control, handleSubmit, setValue } = useForm();
  const navigation = useNavigation();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
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
          navigation.navigate("Register"); //poner el nombre del archivo
        }}
      />
    </View>
  );
}
