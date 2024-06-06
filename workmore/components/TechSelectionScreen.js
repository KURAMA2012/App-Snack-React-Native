import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function TechSelectionScreen({navigation}) {
  // Estado para armazenar as tecnologias selecionadas
  const [selectedTechs, setSelectedTechs] = useState([]);

  // Função para adicionar ou remover uma tecnologia selecionada
  const toggleTech = (tech) => {
    const techIndex = selectedTechs.indexOf(tech);
    if (techIndex === -1) {
      setSelectedTechs([...selectedTechs, tech]);
    } else {
      const updatedTechs = selectedTechs.filter((t) => t !== tech);
      setSelectedTechs(updatedTechs);
    }
  };

  // Função para renderizar botões de tecnologias
  const renderTechButtons = () => {
    const techs = ['React', 'React Native', 'JavaScript', 'HTML', 'CSS', 'Java', 'C#', 'Ruby', 'C++', 'SQL'];

    return techs.map((tech) => (
      <TouchableOpacity
        key={tech}
        style={[
          styles.techButton,
          selectedTechs.includes(tech) && styles.selectedTechButton,
        ]}
        onPress={() => toggleTech(tech)}
      >
        <Text style={styles.techButtonText}>{tech}</Text>
      </TouchableOpacity>
    ));
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecione as tecnologias que você conhece:</Text>
      <View style={styles.techButtonsContainer}>{renderTechButtons()}</View>
      <Text style={styles.selectedTechsText}>
        Tecnologias selecionadas: {selectedTechs.join(', ')}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  techButtonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  techButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    margin: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#333',
  },
  selectedTechButton: {
    backgroundColor: '#333',
  },
  techButtonText: {
    fontSize: 16,
  },
  selectedTechsText: {
    fontSize: 16,
    marginTop: 20,
  },
});