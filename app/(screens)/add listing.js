import { useState, useRef, useEffect } from "react";
import {
  Button,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  Text,
  Image,
} from "react-native";

import * as ImagePicker from "expo-image-picker";
import * as Location from "expo-location";
import Checkbox from "expo-checkbox";

import SegmentedControl from "@react-native-segmented-control/segmented-control";
import { TouchableOpacity } from "react-native-gesture-handler";

import {
  BottomSheetScrollView,
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import SurfaceAdd from "../../components/SurfaceAdd";
import LabelInput from "../../components/LabelInput";
import ScrollRoomNumber from "../../components/ScrollRoomNumber";

// import LabelInput from "../../components/LabelInput";

export default function ImagePickerExample() {
  const [image, setImage] = useState({
    Bedroom: [],
    Livingroom: [],
    Kitchen: [],
    Bathroom: [],
    Diningroom: [],
  });
  const [price, setPrice] = useState(null);
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState(null);
  const [homeSize, setHomeSize] = useState(null);
  // const [lotSize, setLotSize] = useState(null);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isChecked, setChecked] = useState(false);

  const [errorMsg, setErrorMsg] = useState(null);

  const searchBottomSheetRef = useRef(null);

  function handlePresentModal() {
    searchBottomSheetRef.current?.present();
    searchBottomSheetRef.current?.dismiss();
  }

  function handlePresentModal() {
    searchBottomSheetRef.current?.present();
    searchBottomSheetRef.current?.dismiss();
  }

  const pickImage = async (room) => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
      allowsMultipleSelection: true,
    });

    if (!result.canceled) {
      if (room === "Bedroom") {
        setImage({ ...image, Bedroom: result.assets });
      }
      if (room === "Livingroom") {
        setImage({ ...image, Livingroom: result.assets });
      }
      if (room === "Kitchen") {
        setImage({ ...image, Kitchen: result.assets });
      }
      if (room === "Bathroom") {
        setImage({ ...image, Bathroom: result.assets });
      }
      if (room === "Diningroom") {
        setImage({ ...image, Diningroom: result.assets });
      }
    }
  };

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    // let { longitude,latitude} = await Location.getCurrentPositionAsync({});
    setLocation(location.coords.longitude + " , " + location.coords.latitude);
    // setLocation({lng:longitude, lat:latitude});
  };

  const rooms = ["Bedroom", "Livingroom", "Kitchen", "Bathroom", "Diningroom"];
  const PropertyType = ["Any", "House", "Apartment", "Condo", "Real Estate"];

  return (
    <View className=" lex-1 text-5xl h-full bg-primary">
      <SegmentedControl
        tintColor="white"
        backgroundColor="#012847"
        activeFontStyle={{
          fontWeight: "bold",
          color: "black",
        }}
        appearance="dark"
        values={["Sell", "Lease"]}
        selectedIndex={selectedIndex}
        onChange={(event) => {
          setSelectedIndex(event.nativeEvent.selectedSegmentIndex);
        }}
      />

      <ScrollView className="px-2">
        <View className="flex-col  mt-4">
          {/* Image Picker */}
          <View>
            <Text className="text-2xl text-white font-bold">
              Pick Your Images
            </Text>
            <ScrollView
              decelerationRate="fast"
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View className="flex-row  mt-2">
                {rooms.map((room) => (
                  <SurfaceAdd
                    title={room}
                    pickImage={() => pickImage(room)}
                    image={image}
                  />
                ))}
              </View>
            </ScrollView>
          </View>

          {/* sizes */}
          <View className="px-2">
            <View className="flex-row gap-x-4 mt-8">
              {/* Homesize */}
              <View className="flex-1">
                <LabelInput value={homeSize} 
                // onChangeText={(text) => {
                // setHomeSize(text);
                // }} 
                title="Home Size" customStyles="w-full" />
              </View>
              {/* <View className="flex-1">
                <LabelInput title="Lot Size" customStyles="w-full" />
              </View> */}

              {/* Lotsize */}
            </View>

            {/* location */}

            <View className="flex-row items-end mt-4 gap-x-4 relative">
              <View className="flex-1">
                <LabelInput title="Address" value={location} customStyles="w-full" />
              </View>
              <View className="flex-1 absolute right-0">
                <TouchableOpacity
                  className=" bg-white p-[17px] rounded-r-md  w-full items-center"
                  onPress={getLocation}
                  title=""
                >
                  <Text className="text-black font-bold">Use my Location</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* bedroom */}
            <View className="mt-6">
              <ScrollRoomNumber title="Bedrooms" />
            </View>

            {/* bathroom */}
            <View className="mt-6">
              <ScrollRoomNumber title="Bathroom" />
            </View>

            {/* Price */}
            <View className="flex-row gap-x-4 mt-4 items-center relative">
              <View className="flex-1">
                <LabelInput title="Price" value={price} customStyles={"w-full"} />
              </View>
              <View className="absolute right-4 top-[55%]">
                <Text className="text-xl text-white">ETB</Text>
              </View>
            </View>

            {/* PropertyType */}
            <View className="mt-6">
              <TouchableOpacity onPress={handlePresentModal} className="">
                <Text className="text-lg text-white opacity-80">
                  Property Type
                </Text>
                <Text className="text-sm text-white opacity-60">Any</Text>
              </TouchableOpacity>
            </View>
            {/* Features */}
            <View className="mt-6">
              <TouchableOpacity onPress={handlePresentModal}>
                <Text className="text-lg text-white opacity-80">Features</Text>
                <Text className="text-sm text-white opacity-60">Any</Text>
              </TouchableOpacity>
            </View>

            <View className="mt-6 mb-4">
              <TouchableOpacity
                className=" bg-white p-[17px] rounded-md  w-full items-center"
                onPress={getLocation}
                title=""
              >
                <Text className="text-black text-lg font-bold">
                  Add Listing
                </Text>
              </TouchableOpacity>
            </View>

            <View className="mt-6">
            <TouchableOpacity
                  className=" bg-black p-[17px] rounded-full mt-4 w-full items-center"
                  // onPress={handlePresentModal}
                  title="">

                  <Text className="text-white font-bold">Search</Text> 
            </TouchableOpacity>


            </View>
          </View>
        </View>
      </ScrollView>

      <BottomSheetModalProvider>
        <BottomSheetModal
          className="h-full"
          ref={searchBottomSheetRef}
          snapPoints={["53%,100%"]}
          enablePanDownToClose={true}
          animateOnMount={true}
        >
          <BottomSheetScrollView
            className="pt-5 h-full "
            decelerationRate="fast"
            vertical={true}
            showsVerticalScrollIndicator={false}
          >
            <View className="px-4">
              <Text className="text-xl opacity-80  font-bold my-4">
                Property Type
              </Text>
              {PropertyType.map((property) => {
                return (
                  <View className="flex-row justify-between mb-5 ">
                    <Text className="text-lg opacity-70">{property}</Text>
                    <Checkbox
                      value={isChecked}
                      className="opacity-80"
                      onValueChange={setChecked}
                    />
                  </View>
                );
              })}
              <TouchableOpacity className="bg-black w-full  py-5 rounded-xl">
                <Text className="text-white text-center font-bold">Apply</Text>
              </TouchableOpacity>
            </View>
          </BottomSheetScrollView>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </View>
  );
}

const styles = StyleSheet.create({});
