import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Keyboard,
  ScrollView,
  TouchableWithoutFeedback,
  View
} from "react-native";
import { useDispatch } from "react-redux";
import ButtonPrimary from "../../components/atoms/buttons/ButtonPrimary";
import InputPrimary from "../../components/atoms/inputs/InputPrimary";
import PasswordInput from "../../components/atoms/inputs/PasswordInput";
import SimpleLayout from "../../components/layouts/SimpleLayout";
import {
  getUsers,
  signUp
} from "../../reduxStore/features/user/userSlice";

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
              render={() => (
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
              render={() => (
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
              render={() => (
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
              render={() => (
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
              render={() => (
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
