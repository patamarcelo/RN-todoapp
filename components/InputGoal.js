import { useState } from "react";
import {
	View,
	TextInput,
	Button,
	StyleSheet,
	Modal,
	Image
} from "react-native";

const GoalInput = (props) => {
	const { addGoal, openModal, closeModal } = props;
	const [enteredText, setEnteredText] = useState("");

	const goalInputHandler = (enteredText) => {
		setEnteredText(enteredText);
	};

	const addGoalHandler = () => {
		addGoal(enteredText);
		setEnteredText("");
	};

	const modalCloseHandler = () => {
		closeModal();
	};

	return (
		<Modal visible={openModal} animationType="slide">
			<View style={styles.inputContainer}>
				<Image
					style={styles.image}
					source={require("../assets/images/goal.png")}
				/>
				<TextInput
					style={styles.textInput}
					placeholder="Your course Goal!!"
					onChangeText={goalInputHandler}
					value={enteredText}
				/>
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button
							title="add goal"
							onPress={addGoalHandler}
							disabled={enteredText.length > 0 ? false : true}
						/>
					</View>
					<View style={styles.button}>
						<Button title="Cancel" onPress={modalCloseHandler} />
					</View>
				</View>
			</View>
		</Modal>
	);
};

export default GoalInput;

const styles = StyleSheet.create({
	button: {
		width: 100,
		marginHorizontal: 8,
		marginTop: 16
	},
	buttonContainer: {
		flexDirection: "row"
	},
	inputContainer: {
		backgroundColor: "#311b6b",
		padding: 16,
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	},
	inputRow: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center"
	},
	textInput: {
		borderWidth: 1,
		borderColor: "#cccccc",
		width: "100%",
		padding: 8,
		paddingLeft: 10
	},
	image: {
		width: 100,
		height: 100,
		margin: 20
	}
});
