import React from 'react'
import { ScrollView } from 'react-native'
// import HouseCard from './HouseCard'


const ResultList = ({arrayData}) => {
  return (
    <ScrollView
        className="flex-1 gap-0"
        decelerationRate="fast"
        vertical={true}
        showsVerticalScrollIndicator={false}>
        {/* {arrayData.map((data, index) => ( <HouseCard house={data} key={index} />))} */}
    </ScrollView>
  )
}

export default ResultList