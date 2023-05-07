import { StyleSheet, Text, View, FlatList } from 'react-native';

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
	return (
		<View style={styles.container}>
			<Text style={styles.heading}>Todo App</Text>
			<FlatList
				data={mockData}
				renderItem={({ item }) => (
					<Text style={styles.itemListed}>{item.name}</Text>
				)}
				keyExtractor={(item) => item.id}
			/>
		</View>
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
	itemListed: {
		fontSize: 18,
	},
});
