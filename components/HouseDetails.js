// import { Text, View, Image } from "react-native"
// import icon from "../constants/icon"
// import { useDispatch, useSelector } from "react-redux"
// import { getUseOfValueInStyleWarning } from "react-native-reanimated"
// import { getListingsById, selectListingById } from "../slices/listingSlice"
// import { useGlobalSearchParams } from "expo-router"
// import { useEffect } from "react"

// const HouseDetails = () => {
//   const dispatch = useDispatch()
//   const { id } = useGlobalSearchParams();
//   const listing = useSelector((state)=>(selectListingById(state,Number(id))));

//   useEffect(()=>{
//     dispatch(getListingsById(id))
//   },[])
//   return (
//     <div>
//     </div>
//   )
// }

// export default HouseDetails