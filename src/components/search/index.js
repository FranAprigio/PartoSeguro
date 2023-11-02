import React, { useState } from "react";
import { StyleSheet, View, ScrollView, TextInput } from "react-native";
import { PinkButtonComponent } from "../micros";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function SearchInput({ data, isOutLink }) {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');

  const filterData = (text) => {
    const filteredItems = data.filter(item => item.pagina.toLowerCase().includes(text.toLowerCase()));
    return filteredItems;
  };

  const filteredData = filterData(searchText);

  return (
    <View>
      <TextInput
        style={styles.search}
        placeholder="Pesquisar..."
        onChangeText={text => setSearchText(text)}
        value={searchText}
      />
      
      <Icon style={styles.icon} name="search" size={25} color="#6C0434" />
      <ScrollView>
        {filteredData.map((item, index) => (
          <PinkButtonComponent
            key={index}
            btnText={item.pagina}
            goToPage={() => {
              if (isOutLink) {
                navigation.navigate('WebPage', { webUrl: item.nav });
              } else {
                navigation.navigate(item.nav);
              }
            }}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  search: {
    borderRadius: 30,
    paddingLeft: 40,
    padding: 5,
    backgroundColor: "#D1D5DA",
    marginBottom: 30
  },
  icon: {
    position: 'absolute',
    top: 7,
    left: 10
  }
});
