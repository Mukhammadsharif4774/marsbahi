import React, {useContext, useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
  Image,
} from 'react-native';
import {AppContext} from '../components/AppContext';
import MarsBahiHeader from '../components/MarsBahiHeader';
import MarsBahiMenuComponent from '../components/MarsBahiMenuComponent';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import {marsBahiProducts} from '../helpers/marsBahiProducts';
import MockUp from '../assets/mask.png';

const categories = [
  {label: 'Сети', image: require('../assets/category_1.png')},
  {label: 'Авторские роллы', image: require('../assets/category_2.png')},
  {label: 'Напитки', image: require('../assets/category_3.png')},
];

const OnwSportCategoryButton = ({label, active, onPress, image}) => (
  <TouchableOpacity onPress={onPress} style={styles.categoryButton}>
    <Image source={image} style={active ? styles.imageActive : styles.image} />
    <Text style={active ? styles.categoryActive : styles.category}>
      {label}
    </Text>
  </TouchableOpacity>
);

export default function () {
  const [category, setCategory] = useState(0);
  const {shouldRefresh, toggleRefresh} = useContext(AppContext);

  const handleCategoryChange = index => {
    setCategory(index);
    toggleRefresh(!shouldRefresh);
  };

  return (
    <View style={styles.container}>
      <MarsBahiHeader />

      <Image
        source={MockUp}
        style={{
          width: width * 0.9,
          height: 200,
          objectFit: 'contain',
          alignSelf: 'center',
          marginTop: 20,
        }}
      />

      <View style={styles.categoryContainer}>
        {categories.map((item, index) => (
          <OnwSportCategoryButton
            key={index}
            label={item.label}
            active={category === index}
            onPress={() => handleCategoryChange(index)}
            image={item?.image}
          />
        ))}
      </View>

      <ScrollView style={styles.flex} contentContainerStyle={styles.main}>
        {marsBahiProducts[category].map((product, index) => (
          <MarsBahiMenuComponent key={index} item={product} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width,
    height,
    flex: 1,
    backgroundColor: COLORS.white,
  },
  categoryContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width,
    marginVertical: 15,
    paddingHorizontal: 40,
  },
  categoryButton: {
    width: '30%',
    marginTop: 5,
  },
  categoryButtonActive: {
    width: '30%',
    marginTop: 5,
    borderRadius: 12,
    borderColor: COLORS.main,
    borderWidth: 2,
  },
  category: {
    fontFamily: FONTS.regular,
    color: COLORS.black,
    fontSize: 14,
    textAlign: 'center',
    verticalAlign: 'middle',
    marginTop: 10,
  },
  categoryActive: {
    fontFamily: FONTS.bold,
    color: COLORS.main,
    fontSize: 14,
    textAlign: 'center',
    verticalAlign: 'middle',
    marginTop: 10,
  },
  main: {
    paddingBottom: 100,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 12,
  },
  imageActive: {
    width: '100%',
    height: 100,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.main,
  },
});
