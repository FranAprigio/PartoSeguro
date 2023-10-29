import React, { useState } from "react";
import { StyleSheet, View, ScrollView, TextInput, Image} from "react-native";
import searchIcon from '../../assets/icons/bx-search.png';
import { PinkButtonComponent } from "../micros";
import { useNavigation } from "@react-navigation/native";


export default function SearchInput({ data, isOutLink }) {
    const navigation = useNavigation();

    const [searchText, setSearchText] = useState('');

    const filterData = (text) => {
        const filteredItems = data.filter(item => item.pagina.toLowerCase().includes(text.toLowerCase()));
        return filteredItems;
    };

    const filteredData = filterData(searchText);


    return (
        <>
            <View>
                <TextInput
                    style={styles.search}
                    placeholder="Pesquisar..."
                    onChangeText={text => setSearchText(text)}
                    value={searchText}
                />

                <Image style={styles.icon} source={searchIcon} />
            </View>
            <ScrollView>
                {filteredData.map((item, index) => (
                    <>
                        <PinkButtonComponent
                            key={index}
                            btnText={item.pagina}
                            goToPage={() => {
                                if (isOutLink) {
                                    navigation.navigate('WebPage', { webUrl: item.nav });
                                } else {
                                    navigation.navigate(item.nav)
                                }
                            }}
                        />
                    </>
                ))}

            </ScrollView>
        </>
    )
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
        top: 8,
        left: 10
    }
})