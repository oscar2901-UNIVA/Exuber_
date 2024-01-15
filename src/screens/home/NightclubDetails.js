// NightclubDetails.js
import React, { useState } from "react";
import { View, StyleSheet, TouchableWithoutFeedback, Keyboard } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import TextStyled from "../../components/TextStyled";
import InputPrimary from "../../components/atoms/inputs/InputPrimary";
import ButtonPrimary from "../../components/atoms/buttons/ButtonPrimary";
import { useDispatch } from "react-redux";
import {
  deleteUsers,
  getUsers,
  updateUsers,
} from "../../reduxStore/features/user/userSlice";
import { Controller, set, useForm } from "react-hook-form";
import PasswordInput from "../../components/atoms/inputs/PasswordInput";
import SimpleLayout from "../../components/layouts/SimpleLayout";

const NightclubDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { nightclub } = route.params;
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const { control, handleSubmit, setValue, getValues } = useForm();

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const onDeleteUser = () => {
    dispatch(deleteUsers(nightclub.id));
    dispatch(getUsers());
    navigation.navigate("Home");
  };

  const handleSaveChanges = () => {
    const data = getValues();
    setIsEditing(false);
    /* console.warn("pulse aqui"); */
    dispatch(updateUsers({ id: nightclub.id, ...data }));
    /*  console.warn("pulse aqui", { id: nightclub.id, ...data }); */
    dispatch(getUsers());
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
                  Usuarios:
                </TextStyled>
                <TextStyled color="primary2" fontSize="h4">
                  {nightclub.username}
                </TextStyled>
              </View>
              <View style={styles.containerText}>
                <TextStyled color="primary2" fontSize="h4">
                  Contraseña:
                </TextStyled>
                <TextStyled color="primary2" fontSize="h4">
                  {nightclub.password}
                </TextStyled>
              </View>
            </View>
          )}

          {isEditing ? (
            <>
              <InputPrimary
                defaultValue={nightclub.username}
                control={control}
                name="username"
              />

              <InputPrimary
                control={control}
                defaultValue={nightclub.password}
                name="password"
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

export default NightclubDetails;
