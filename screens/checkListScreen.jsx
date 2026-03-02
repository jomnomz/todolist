import uuid from 'react-native-uuid'
import { View, Text, StyleSheet, FlatList, TextInput } from 'react-native'
import Button from '../components/ui/button.jsx'
import { useState } from 'react'

export default function CheckedListScreen({ navigation }) {
  const [entries, setEntries] = useState([
    { id: uuid.v4(), value: "", completed: false }
  ])
  const [title, setTitle] = useState("")

  const handleAddNewEntry = () => {
    setEntries(prev => [
      ...prev,
      { id: uuid.v4(), value: "", completed: false }
    ])
  }

  const handleEntryChange = (id, text) => {
    setEntries(prev => prev.map(e => e.id === id ? { ...e, value: text } : e))
  }

  const handleCompletedEntry = (id) => {
    setEntries(prev => prev.map(e => e.id === id ? { ...e, completed: !e.completed } : e))
  }

  const handleDeleteEntry = (id) => {
    setEntries(prev => prev.filter(e => e.id !== id))
  }

  return (
    <View style={styles.container}>
      <View style={styles.homeButtonContainer}>
        <Button onPress={() => navigation.navigate("Home")}>
          <Text style={{ color: 'white' }}>Home</Text>
        </Button>
      </View>

      <TextInput
        style={styles.titleInput}
        placeholder="Enter Title"
        placeholderTextColor="white"
        value={title}
        onChangeText={setTitle}
      />

      <FlatList
        data={[
          ...entries.filter(e => !e.completed).map(e => ({ ...e, type: 'task' })),
          { type: 'addButton', id: 'addButton' },
          { type: 'checkedTitle', id: 'checkedTitle' },
          ...entries.filter(e => e.completed).map(e => ({ ...e, type: 'task' }))
        ]}
        keyExtractor={(item) => item.id || item.id.toString()}
        renderItem={({ item }) => {
          if (item.type === 'addButton') {
            return (
              <Button onPress={handleAddNewEntry} style={styles.addButton}>
                <Text style={{ color: 'white' }}>Add New +</Text>
              </Button>
            )
          }

          if (item.type === 'checkedTitle') {
            return <Text style={styles.checkedTitle}>Checked List</Text>
          }

          return (
            <View style={styles.entry}>
              <Button
                variant={item.completed ? "secondary" : "pure"}
                onPress={() => handleCompletedEntry(item.id)}
              />
              <TextInput
                style={[styles.entryInput, item.completed && { textDecorationLine: 'line-through' }]}
                placeholder="Enter task"
                placeholderTextColor="white"
                value={item.value}
                onChangeText={(text) => handleEntryChange(item.id, text)}
              />
              <Button
                variant="secondary"
                onPress={() => handleDeleteEntry(item.id)}
              >
                <Text style={{ color: 'white' }}>x</Text>
              </Button>
            </View>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    paddingHorizontal: 20,
  },

  homeButtonContainer: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 10,
  },

  titleInput: {
    width: '100%',
    backgroundColor: 'green',
    color: 'white',
    padding: 15,
    borderRadius: 6,
    marginBottom: 20,
  },

  entry: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'green',
    borderRadius: 6,
    padding: 10,
    marginBottom: 12,
  },

  entryInput: {
    flex: 1,
    color: 'white',
    marginHorizontal: 10,
  },

  checkedTitle: {
    fontWeight: 'bold',
    marginVertical: 10,
  },

  addButton: {
    marginBottom: 10,
  },
})