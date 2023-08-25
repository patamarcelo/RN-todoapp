import { StyleSheet, Text, View, Pressable } from "react-native";

const GoalItem = (props) => {
	const { itemData, onDeleteItem } = props;
	return (
		<View style={styles.listStyle}>
			<Pressable
				onPress={onDeleteItem.bind(this, itemData.item.id)}
				android_ripple={{ color: "#dddddd" }}
				style={({ pressed }) => pressed && styles.pressedItem}
			>
				<Text style={styles.listStyleText}>
					{itemData.item.id} - {itemData.item.text}
				</Text>
			</Pressable>
		</View>
	);
};

export default GoalItem;

const styles = StyleSheet.create({
	listStyle: {
		margin: 8,
		borderRadius: 6,
		backgroundColor: "#5e0acc"
	},
	pressedItem: {
		opacity: 0.5
	},
	listStyleText: {
		padding: 8,
		color: "white"
	}
});
