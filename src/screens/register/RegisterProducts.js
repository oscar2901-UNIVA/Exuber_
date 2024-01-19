import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Alert,
  Keyboard,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useDispatch } from "react-redux";
import ButtonPrimary from "../../components/atoms/buttons/ButtonPrimary";
import InputPrimary from "../../components/atoms/inputs/InputPrimary";
import SimpleLayout from "../../components/layouts/SimpleLayout";
import { supabase } from "../../components/services/supabase/supabaseConfig";
import {
  createProducts,
  getProducts,
} from "../../reduxStore/features/products/productSlice";

const RegisterProducts = () => {
  const { control, handleSubmit, setValue } = useForm();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      const resultAction = await dispatch(createProducts(data));
      if (createProducts.fulfilled.match(resultAction)) {
        console.log("Registro exitoso");
        navigation.navigate("Home");
      } else if (createProducts.rejected.match(resultAction)) {
        const errorMessage =
          resultAction.error.message ||
          "Error inesperado al registrar el producto";
        console.error("Error en el registro:", errorMessage);
        Alert.alert("Error en el registro:", errorMessage);
      }
    } catch (error) {
      console.error("Error en el registro:", error);
      Alert.alert(
        "Error en el registro:",
        "Error inesperado al registrar el producto"
      );
    }
  };

  return (
    <SimpleLayout hasScroll={false} style={{ paddingHorizontal: 5 }}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{ padding: 20, flex: 1 }}>
            <Controller
              control={control}
              render={() => (
                <InputPrimary
                  placeholder="Nombre del producto"
                  control={control}
                  name="item_name"
                  onChangeText={(text) => setValue("item_name", text)}
                />
              )}
              name="item_name"
              defaultValue=""
            />

            <Controller
              control={control}
              render={() => (
                <InputPrimary
                  placeholder="Precio"
                  control={control}
                  name="price"
                  onChangeText={(text) => setValue("price", text)}
                />
              )}
              name="price"
              defaultValue=""
            />
            <Controller
              control={control}
              render={() => (
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

            {/* Resto de tus inputs y botones */}
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

export default RegisterProducts;
