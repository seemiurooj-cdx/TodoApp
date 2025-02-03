import React, {useState} from 'react';
import './global.css';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {GluestackUIProvider} from './components/ui/gluestack-ui-provider';
import {Text} from './components/ui/text';
import {Box} from './components/ui/box';
import {CheckIcon} from './components/ui/icon';
import {VStack} from './components/ui/vstack';
import {Center} from './components/ui/center';
import {Input, InputField} from './components/ui/input';
import {Button} from './components/ui/button';
import {
  Checkbox,
  CheckboxIndicator,
  CheckboxLabel,
  CheckboxIcon,
} from './components/ui/checkbox';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo) {
      setTodos([...todos, {text: newTodo, completed: false}]);
      setNewTodo('');
    }
  };

  const toggleComplete = index => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const removeTodo = index => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <GluestackUIProvider mode="light">
      <SafeAreaView style={{flex: 1, backgroundColor: '#000'}}>
        <StatusBar barStyle="light-content" backgroundColor="#000" />
        <Center className="h-full w-full px-5">
          {/* App Title */}
          <Text className="text-blue-400 font-bold text-4xl mb-2 text-center">
            Todo App
          </Text>
          <Text className="text-gray-400 text-lg mb-6 text-center">
            Stay organized and get things done!
          </Text>

          {/* Input Box */}
          <Box className="w-4/5 mx-auto mb-6">
            <Input variant="outline" size="lg" className="mb-4 p-3 w-full border border-gray-700 bg-gray-800">
              <InputField
                value={newTodo}
                onChangeText={setNewTodo}
                placeholder="Enter a new task"
                className="text-white h-10"
                placeholderTextColor="#aaa"
              />
            </Input>
            <Button
              onPress={addTodo}
              className="w-full h-15 bg-blue-600 text-white py-3 rounded-md">
              <Text className="text-white text-center font-semibold">
                Add Todo
              </Text>
            </Button>
          </Box>

          {/* Todo List */}
          <VStack space={4} className="w-4/5 mx-auto">
            {todos.map((todo, index) => (
              <Box
                key={index}
                className="flex-row items-center p-4 mb-3 border border-gray-600 bg-gray-900 rounded-md">
                {/* Checkbox */}
                <Checkbox
                  isInvalid={false}
                  isDisabled={false}
                  isChecked={todo.completed}
                  onChange={() => toggleComplete(index)}
                  className="mr-4 w-6 h-6">
                  <CheckboxIndicator>
                    <CheckboxIcon as={CheckIcon} />
                  </CheckboxIndicator>
                </Checkbox>

                {/* Todo Text */}
                <Text
                  className={`text-lg text-white flex-1 ${
                    todo.completed ? 'line-through text-gray-500' : ''
                  }`}>
                  {todo.text}
                </Text>

                {/* Remove Button (Moved to the Right) */}
                <Button
                  onPress={() => removeTodo(index)}
                  className="ml-auto bg-red-600 text-white px-4 py-2 rounded-md">
                  <Text className="text-white font-medium">Remove</Text>
                </Button>
              </Box>
            ))}
          </VStack>
        </Center>
      </SafeAreaView>
    </GluestackUIProvider>
  );
};

export default App;