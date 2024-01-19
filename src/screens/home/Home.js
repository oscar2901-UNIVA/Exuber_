/* import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TextStyled from "../../components/TextStyled";
import { dummyNightclubs } from "../../utils/data"; // Importa tus datos o utiliza una llamada a la API
import { useDispatch, useSelector } from "react-redux";
import {
  getUsers,
  selectUsers,
} from "../../reduxStore/features/user/userSlice";
import SimpleLayout from "../../components/layouts/SimpleLayout";

const Home = () => {
  const navigation = useNavigation();
  const [nightclubs, setNightclubs] = useState(dummyNightclubs);
  const dataUser = useSelector(selectUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <>
      <SimpleLayout hasScroll={false} style={{ paddingHorizontal: 5 }}>
        <View  style={{ padding:0 }}>
          <FlatList
            data={dataUser}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("NightclubDetails", { nightclub: item });
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
                    {item.username}
                  </TextStyled>
                  <TextStyled style={{ color: "green" }}>
                    {item.password}
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

export default Home;
 */
import { useDispatch, useSelector } from "react-redux";
import {
  checkNightClubAssociation,
  selectHasNightClub,
} from "../../reduxStore/features/profile/profileSlice";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { unwrapResult } from "@reduxjs/toolkit"; // Importa unwrapResult
import HomeNightClub from "./HomeNightClub";
import HomeUser from "./HomeUser";

const Home = () => {
  const dispatch = useDispatch();
  const hasNightClub = useSelector(selectHasNightClub);
  const [isNightClub, setIsNightClub] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resultAction = await dispatch(checkNightClubAssociation());
        const result = unwrapResult(resultAction);
        console.log("🚀 ~ file: Home.js:19 ~ fetchData ~ result", result);
        setIsNightClub(result);
      } catch (error) {
        console.error("Error al obtener la información:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  console.log("🚀 ~ file: Home.js:29 ~ Home ~ hasNightClub:", hasNightClub);

  return <View>{isNightClub ? <HomeNightClub /> : <HomeUser />}</View>;
};

export default Home;
