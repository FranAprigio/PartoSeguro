import React, { useState } from "react";
import { StyleSheet, View, ScrollView, TextInput } from "react-native";
import { PinkButtonComponent } from "../micros";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function SearchInput({ data, isOutLink }) {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');

  const filterData = (text) => {
    return data.filter(item => item.pagina.toLowerCase().includes(text.toLowerCase()));
  };

  const filteredData = filterData(searchText);

  return (
    <View>
      <View style={styles.searchContainer}>
        <Icon style={styles.icon} name="search" size={20} color="#6C0434" />
        <TextInput
          style={styles.search}
          placeholder="Pesquisar..."
          onChangeText={text => setSearchText(text)}
          value={searchText}
        />
      </View>

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
  searchContainer: {
    position: 'relative',
    marginBottom: 30,
  },
  search: {
    borderRadius: 30,
    paddingLeft: 40,
    paddingVertical: 10,
    backgroundColor: "#FFFFFF",
    fontSize: 16,
  },
  icon: {
    position: 'absolute',
    top: '50%',
    left: 10,
    transform: [{ translateY: -10 }],
  },
});
