import React, { useState } from 'react';
import {
	StyleSheet,
	// Text,
	View,
	FlatList,
	// TouchableOpacity,
	Alert,
	TouchableWithoutFeedback,
	Keyboard
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';
// import Sandbox from './components/Sandbox';

export default function App() {
	// const [ name, setName ] = useState('Krystal');
	// const [ age, setAge ] = useState('33');
	// const [ people, setPeople ] = useState([
	// 	{ name: 'krystal', id: '1' },
	// 	{ name: 'ben', id: '2' },
	// 	{ name: 'josiah', id: '3' },
	// 	{ name: 'shaun', id: '4' },
	//   { name: 'hunter', id: '5' },
	//   { name: 'Ryan', id: '6' },
	//   { name: 'Parth', id: '7' }
	// ]);
	const [ todos, setTodos ] = useState([
		{ text: 'buy coffee', key: '1' },
		{ text: 'create app', key: '2' },
		{ text: 'play on the switch', key: '3' }
	]);

	const pressHandler = (key) => {
		setTodos((prevTodos) => {
			return prevTodos.filter((todo) => todo.key != key);
		});
	};

	const submitHandler = (text) => {
		if (text.length > 3) {
			setTodos((prevTodos) => {
				return [ { text: text, key: Math.random().toString() }, ...prevTodos ];
			});
		} else {
			Alert.alert('OOPS!', 'Todo must be over 3 characters long', [
				{ text: 'Understood', onPress: () => console.log('alert closed') }
			]);
		}
	};

	// const pressHandler = (id) => {
	//   console.log(id);
	//   setPeople((prevPeople)=>{
	//     return prevPeople.filter(person => person.id != id)
	//   })
	// }

	return (
    // <Sandbox/>
		<TouchableWithoutFeedback onPress={() => {
      console.log('dismissed keyboard')
      Keyboard.dismiss();
    }}>
			<View style={styles.container}>
				{/* header */}
				<Header />
				<View style={styles.content}>
					{/* todo form */}
					<AddTodo submitHandler={submitHandler} />
					<View style={styles.list}>
						<FlatList
							data={todos}
							renderItem={({ item }) => <TodoItem item={item} pressHandler={pressHandler} />}
						/>
					</View>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
}

{
	/* best for database, needs key or keyExtractor */
}
{
	/* <FlatList
      numColumns='2'
      keyExtractor={(item) => item.id}
      data={people}
      renderItem={({item}) => (
        <TouchableOpacity onPress={()=>pressHandler(item.id)}>
          <Text style={styles.item}>{item.name}</Text>
        </TouchableOpacity>
        
      )} /> */
}

{
	/* <ScrollView>
				{people.map((item) => (
					<View key={item.key}>
						<Text style={styles.item}>{item.name}</Text>
					</View>
				))}

				<Text />
				<View style={styles.body}>
					<Text>Enter name:</Text>
					<TextInput
						multiline
						keyboardType="numeric"
						style={styles.input}
						placeholder="e.g. John Doe"
						onChangeText={(value) => setName(value)}
					/>
					<Text>Enter age:</Text>
					<TextInput
						style={styles.input}
						keyboardType="numeric"
						placeholder="e.g. 99"
						onChangeText={(value) => setAge(value)}
					/>
					<Text>
						name: {name}, age: {age}
					</Text>
				</View>
			</ScrollView> */
}
{
	/* </View>
	);
} */
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
		// paddingTop: 40,
		// paddingHorizontal: 20
		// alignItems: 'center',
		// justifyContent: 'center',
	},
	content: {
    padding: 40,
    flex:1
	},
	list: {
    flex:1,
    marginTop: 20,
	}
});
// 	},
// 	input: {
// 		borderWidth: 1,
// 		borderColor: '#777',
// 		padding: 8,
// 		margin: 10,
// 		width: 200
// 	},
// 	item: {
// 		marginTop: 20,
// 		padding: 30,
// 		backgroundColor: 'pink',
//     fontSize: 24,
//     marginHorizontal: 10,
//     marginTop:24,
// 	}
// });
