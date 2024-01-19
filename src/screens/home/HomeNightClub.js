import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TextStyled from "../../components/TextStyled";
import { dummyNightclubs } from "../../utils/data"; // Importa tus datos o utiliza una llamada a la API
import { useDispatch, useSelector } from "react-redux";

import SimpleLayout from "../../components/layouts/SimpleLayout";
import {
  getProducts,
  selectProducts,
} from "../../reduxStore/features/products/productSlice";
import ButtonPrimary from "../../components/atoms/buttons/ButtonPrimary";

const HomeNightClub = () => {
  const navigation = useNavigation();
  const [nightclubs, setNightclubs] = useState(dummyNightclubs);
  const dataUser = useSelector(selectProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <>
      <SimpleLayout hasScroll={false} style={{ paddingHorizontal: 5 }}>
        <ButtonPrimary text="Agregar producto" onPress={()=>{navigation.navigate("RegisterProducts")}}></ButtonPrimary>
        <View style={{ padding: 0 }}>
          <FlatList
            data={dataUser}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("ProductDetails", { productItem: item });
                }}
              >
                <View
                  style={{
                    padding: 20,
                    borderBottomWidth: 1,
                    borderColor: "#ccc",
                  }}
                >
                  <TextStyled style={{ color: "blue" }}>
                    {item.item_name}
                  </TextStyled>
                  <TextStyled style={{ color: "green" }}>
                    {item.description}
                  </TextStyled>
                  <TextStyled style={{ color: "green" }}>
                    {item.price}
                  </TextStyled>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </SimpleLayout>
    </>
  );
};

export default HomeNightClub;
