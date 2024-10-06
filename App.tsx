/* eslint-disable react-native/no-inline-styles */
import { View, Text, TextInput, Pressable, Alert, FlatList } from 'react-native';
import React, { useState } from 'react';

const TodoList = () => {
    const [title, setTitle] = useState<string>('');
    const [todo, setTodo] = useState<any[]>([
        {
            id: 1,
            title: 'Learn React Native',
            completed: false,
        }
    ]);
    const [editingId, setEditingId] = useState<number | null>(null);

    const handleAddTodo = () => {
        if (!title) {
            Alert.alert('Error', 'Please enter your todo');
            return;
        }
        if (editingId) {
            handleUpdateTodo();
        } else {
            const newTodo = {
                id: todo.length + 1,
                title: title,
                completed: false,
            };
            setTodo([...todo, newTodo]);
            setTitle('');
        }
    };

    const handleDeleteTodo = (id: number) => {
        const updatedTodos = todo.filter(item => item.id !== id);
        setTodo(updatedTodos);
    };

    const handleEditTodo = (id: number, currentTitle: string) => {
        setTitle(currentTitle);
        setEditingId(id);
    };

    const handleUpdateTodo = () => {
        const updatedTodos = todo.map(item => 
            item.id === editingId ? { ...item, title: title } : item
        );
        setTodo(updatedTodos);
        setEditingId(null);
        setTitle('');
    };

    return (
        <View
            style={{
                flex: 1,
                paddingHorizontal: 10,
                marginTop: 10,
            }}>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 10,
                    gap: 10,
                }}>
                <TextInput
                    placeholder='Enter your todo'
                    style={{
                        flex: 1,
                        borderColor: 'black',
                        borderWidth: 1,
                        padding: 10,
                    }}
                    value={title}
                    onChangeText={setTitle}
                />
                <Pressable
                    style={{
                        backgroundColor: editingId ? 'orange' : 'blue',
                        padding: 10,
                        borderRadius: 5,
                        height: 40,
                    }}
                    onPress={handleAddTodo}>
                    <Text
                        style={{
                            color: 'white',
                        }}>
                        {editingId ? 'Update' : 'Add'}
                    </Text>
                </Pressable>
            </View>
            <FlatList
                data={todo}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: 10,
                            borderBottomColor: '#ccc',
                            borderBottomWidth: 1,
                        }}>
                        <Text
                            style={{
                                fontSize: 18,
                                color: 'black',
                            }}>
                            {item.title}
                        </Text>
                        <View
                            style={{
                                flexDirection: 'row',
                                gap: 10,
                            }}>
                            <Pressable
                                style={{
                                    backgroundColor: 'green',
                                    padding: 5,
                                    borderRadius: 5,
                                }}
                                onPress={() => handleEditTodo(item.id, item.title)}>
                                <Text style={{ color: 'white' }}>Edit</Text>
                            </Pressable>
                            <Pressable
                                style={{
                                    backgroundColor: 'red',
                                    padding: 5,
                                    borderRadius: 5,
                                }}
                                onPress={() => handleDeleteTodo(item.id)}>
                                <Text style={{ color: 'white' }}>Delete</Text>
                            </Pressable>
                        </View>
                    </View>
                )}
            />
        </View>
    );
};

export default TodoList;
