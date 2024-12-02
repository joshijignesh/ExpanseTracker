import React from 'react';
import { View, Text, TouchableOpacity, Animated, TouchableWithoutFeedback, FlatList } from 'react-native';
import { styles } from './styles';
import useFlotinButtinController from './controller';

const FloatingButton = () => {
  
  const {showOptions, flotingOptions, handleOptionClick, toggleMenu, closeMenu, rotateIcon} = useFlotinButtinController()

const renderItem = ({ item, index }: { item: any; index: number }) => (
  <Animated.View
    key={item.id}
    style={[
      styles.option,
    ]}
  >
    <TouchableOpacity
      style={styles.optionItem}
      onPress={() => handleOptionClick(item.option)}
    >
      <item.icon width={20} height={20} style={styles.icon} />

      <Text style={styles.optionText}>{item.title}</Text>
    </TouchableOpacity>
  </Animated.View>
);

  return (
    <View style={styles.container}>
      {showOptions && (
        <TouchableWithoutFeedback onPress={closeMenu}>
          <View style={styles.overlay} />
        </TouchableWithoutFeedback>
      )}

      <TouchableOpacity style={styles.floatingButton} onPress={toggleMenu}>
        <Animated.View
          style={[
            styles.iconContainer,
            { transform: [{ rotate: rotateIcon }] },
          ]}
        >
          <Text style={styles.buttonText}>+</Text>
        </Animated.View>
      </TouchableOpacity>

      {showOptions && (
        <View style={styles.optionsContainer}>
          <FlatList
            data={flotingOptions}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>)}
    </View>
  );
};

export default FloatingButton;
