import React, { useEffect, useState } from "react";
import { View, Image, StyleSheet, ActivityIndicator, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import NetInfo from "@react-native-community/netinfo";

const SplashScreen = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true); // State to control loading spinner
  const [isConnected, setIsConnected] = useState(false); // State to track internet connection
  const [showPopup, setShowPopup] = useState(false); // State to control popup visibility

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected); // Update connection state
      if (!state.isConnected) {
        setShowPopup(true); // Show popup if not connected
        setLoading(true); // Keep loading spinner visible
      } else {
        setShowPopup(false); // Hide popup if connected
        if (loading) {
          // If loading was true, set a timer to navigate after 5 seconds
          const timer = setTimeout(() => {
            setLoading(false); // Stop loading spinner
            navigation.navigate("Main"); // Navigate to the main app screens
          }, 5000); // 5 seconds

          return () => clearTimeout(timer); // Cleanup the timer
        }
      }
    });

    return () => unsubscribe(); // Cleanup the listener
  }, [navigation, loading]);

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/logo.png")} style={styles.logo} />
      {loading && (
        <ActivityIndicator
          size={70}
          color="red"
          style={styles.loadingIndicator}
        />
      )}
      {showPopup && (
        <View style={styles.popup}>
          <Text style={styles.popupText}>No Internet Connection</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff", // Set your desired background color
  },
  logo: {
    width: 200, // Adjust the width as needed
    height: 200, // Adjust the height as needed
    resizeMode: "contain",
  },
  loadingIndicator: {
    marginTop: 20, // Space between logo and loading indicator
  },
  popup: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "red", // Red background for the popup
    padding: 15,
    alignItems: "center",
  },
  popupText: {
    color: "white", // White text color
    fontSize: 16,
  },
});

export default SplashScreen;
