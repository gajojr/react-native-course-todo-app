import { useState } from 'react';
import {
	StyleSheet,
	Text,
	FlatList,
	SafeAreaView,
	TextInput,
	Button,
} from 'react-native';

const mockData = [
	{
		id: 1,
		name: 'Buy groceries',
	},
	{
		id: 2,
		name: 'Finish react native course',
	},
	{
		id: 3,
		name: 'Read a book',
	},
];

export default function App() {
	const [inputText, setInputText] = useState('');
	const [todos, setTodos] = useState([]);

	const addTodo = () => {
		if (inputText.trim()) {
			setTodos((prevTodos) => [
				...prevTodos,
				{ id: Date.now().toString(), name: inputText },
			]);
		}
	};

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.heading}>Todo App</Text>
			<TextInput
				style={styles.input}
				onChangeText={setInputText}
				value={inputText}
				placeholder='Enter a todo'
			/>
			<Button
				title='Add Todo'
				onPress={addTodo}
			/>
			<FlatList
				data={todos}
				renderItem={({ item }) => (
					<Text style={styles.itemListed}>{item.name}</Text>
				)}
				keyExtractor={(item) => item.id}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	heading: {
		fontSize: 24,
		fontWeight: 'bold',
	},
	input: {
		width: '100%',
		borderColor: 'gray',
		borderWidth: 1,
	},
	itemListed: {
		fontSize: 18,
	},
});
