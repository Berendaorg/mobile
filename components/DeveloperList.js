import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { Link } from "expo-router";

const DeveloperList = ({ developers }) => {
  return (
    <View>
      <View style={{ paddingHorizontal: 16, paddingTop: 8 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Developers</Text>
        <Link href="/developers">View all</Link>
      </View>
      <FlatList
        data={developers}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => `dev${item.id}`}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              /* Navigate to developer details */
            }}
          >
            <Image
              source={{ uri: item.profilePhoto }}
              style={{
                width: 100,
                height: 100,
                marginRight: 16,
                borderRadius: 10,
              }}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default DeveloperList;
