// NightclubDetails.js
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import TextStyled from "../../components/TextStyled";
import InputPrimary from "../../components/atoms/inputs/InputPrimary";
import ButtonPrimary from "../../components/atoms/buttons/ButtonPrimary";
import { useDispatch } from "react-redux";
import { Controller, set, useForm } from "react-hook-form";
import SimpleLayout from "../../components/layouts/SimpleLayout";
import {
  deleteProducts,
  getProducts,
  updateProducts,
} from "../../reduxStore/features/products/productSlice";

const ProductDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { productItem } = route.params;
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const { control, handleSubmit, setValue, getValues } = useForm();

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const onDeleteUser = async () => {
    await dispatch(deleteProducts(productItem.id));
    await dispatch(getProducts());
    navigation.navigate("Home");
  };

  const handleSaveChanges = async () => {
    const data = getValues();
    setIsEditing(false);
    await dispatch(updateProducts({ id: productItem.id, ...data }));
    await dispatch(getProducts());
    navigation.navigate("Home");
  };

  return (
    <SimpleLayout hasScroll={false} style={{ paddingHorizontal: 5 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          {!isEditing && (
            <View style={styles.container}>
              <View style={styles.containerText}>
                <TextStyled color="primary2" fontSize="h4">
                  Nombre del producto:
                </TextStyled>
                <TextStyled color="primary2" fontSize="h4">
                  {productItem.item_name}
                </TextStyled>
              </View>
              <View style={styles.containerText}>
                <TextStyled color="primary2" fontSize="h4">
                  Descripcion:
                </TextStyled>
                <TextStyled color="primary2" fontSize="h4">
                  {productItem.description}
                </TextStyled>
              </View>
              <View style={styles.containerText}>
                <TextStyled color="primary2" fontSize="h4">
                  Precio:
                </TextStyled>
                <TextStyled color="primary2" fontSize="h4">
                  {productItem.price}
                </TextStyled>
              </View>
            </View>
          )}

          {isEditing ? (
            <>
              <InputPrimary
                defaultValue={productItem.item_name}
                control={control}
                name="item_name"
              />

              <InputPrimary
                control={control}
                defaultValue={productItem.description}
                name="description"
              />
              <InputPrimary
                control={control}
                defaultValue={String(productItem.price)}
                name="price" // Asegúrate de que el nombre sea "price" aquí
              />
            </>
          ) : null}

          <ButtonPrimary
            text={isEditing ? "Guardar cambios" : "Editar"}
            title={isEditing ? "Guardar cambios" : "Editar"}
            onPress={isEditing ? handleSaveChanges : handleEditToggle}
          />
          {!isEditing ? (
            <ButtonPrimary
              title="Eliminar"
              text="Eliminar"
              onPress={() => {
                onDeleteUser();
              }}
            />
          ) : null}
        </View>
      </TouchableWithoutFeedback>
    </SimpleLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    textAlign: "center",
  },
  containerText: {
    textAlign: "center",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProductDetails;
