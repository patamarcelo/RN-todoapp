import { Button, StyleSheet, View, TextInput, FlatList } from "react-native";
import { useState } from "react";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/InputGoal";

export default function App() {
	const [listGoals, setlistGoals] = useState([]);
	const [openModal, setOpenModal] = useState(false);

	const addGoalHandler = (enteredText) => {
		setlistGoals((currentList) => [
			...currentList,
			{ text: enteredText, id: Math.random().toString() }
		]);
		setOpenModal(false);
	};

	const removeGoalHandler = () => {
		setlistGoals([]);
	};

	const deleteGoalHandler = (id) => {
		setlistGoals((currentGoals) => {
			return currentGoals.filter((data) => data.id !== id);
		});
	};

	const startAddGoalHandler = () => {
		setOpenModal(true);
	};

	const closeModalGoalHandler = () => {
		setOpenModal(false);
	};

	return (
		<View style={styles.appContainer}>
			<Button
				title="add New Goal"
				color={"#5e0acc"}
				onPress={startAddGoalHandler}
			/>

			<GoalInput
				closeModal={closeModalGoalHandler}
				openModal={openModal}
				addGoal={addGoalHandler}
				listGoals={listGoals}
			/>

			<View style={styles.goalsContainer}>
				<FlatList
					data={listGoals}
					renderItem={(itemData) => {
						return (
							<GoalItem
								itemData={itemData}
								onDeleteItem={deleteGoalHandler}
							/>
						);
					}}
					keyExtractor={(item, index) => {
						return item.id;
					}}
					alwaysBounceVertical={false}
				/>
			</View>
			{listGoals.length > 0 && (
				<View style={styles.inputRowDel}>
					<Button
						title="Clear "
						onPress={removeGoalHandler}
						disabled={listGoals.length > 0 ? false : true}
					/>
				</View>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		paddingTop: 50,
		paddingHorizontal: 10
	},
	inputRowDel: {
		flexDirection: "column",
		justifyContent: "flex-end",
		alignItems: "center",
		marginBottom: 10
	},
	goalsContainer: {
		flex: 4
	}
});
