import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import {
	StyleSheet,
	Text,
	FlatList,
	SafeAreaView,
	View,
	TextInput,
	Button,
} from 'react-native';
import { StatusBar } from 'react-native';

export default function App() {
	const [inputText, setInputText] = useState('');
	const [todos, setTodos] = useState([]);
	const [itemInEdit, setItemInEdit] = useState(null);
	const [editedText, setEditedText] = useState('');

	const addTodo = () => {
		if (inputText.trim()) {
			setTodos((prevTodos) => [
				...prevTodos,
				{ id: Date.now().toString(), name: inputText },
			]);

			setInputText('');
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
					<View style={styles.itemListed}>
						{itemInEdit === item.id ? (
							<TextInput
								value={editedText}
								onChangeText={setEditedText}
								style={{ ...styles.input, width: '70%' }}
								placeholder='Edit todo'
							/>
						) : (
							<Text style={styles.itemName}>{item.name}</Text>
						)}
						<View style={styles.actions}>
							{itemInEdit === item.id ? (
								<AntDesign
									name='check'
									size={24}
									color='green'
									onPress={() => {
										setTodos((prevTodos) =>
											prevTodos.map((todo) =>
												todo.id === item.id
													? { ...todo, name: editedText }
													: todo
											)
										);
										setItemInEdit(null);
										setEditedText('');
									}}
								/>
							) : (
								<AntDesign
									name='edit'
									size={24}
									color='green'
									onPress={() => setItemInEdit(item.id)}
								/>
							)}
							<AntDesign
								style={{ marginLeft: 20 }}
								name='delete'
								size={24}
								color='red'
								onPress={() => {
									setTodos((prevTodos) =>
										prevTodos.filter((todo) => todo.id !== item.id)
									);
								}}
							/>
						</View>
					</View>
				)}
				keyExtractor={(item) => item.id}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		marginTop: StatusBar.currentHeight,
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
		width: '90%',
		borderColor: 'gray',
		borderWidth: 1,
	},
	itemListed: {
		width: '90%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	actions: {
		display: 'flex',
		flexDirection: 'row',
	},
	itemName: {
		fontSize: 18,
	},
});
