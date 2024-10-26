import React from "react";
import { FlatList, Text, View } from "react-native";
import BoardCard from "./BoardCard"; // Ensure this component exists
import { boardData } from "../../data"; // Assuming you have board data

const AnnouncementList = () => {
  return (
    <View style={{ paddingHorizontal: 16, paddingTop: 16 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>Announcements</Text>
      <FlatList
        data={boardData}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <BoardCard board={item} />}
        style={{ marginTop: 8 }}
      />
    </View>
  );
};

export default AnnouncementList;
