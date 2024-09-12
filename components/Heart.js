import * as React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-paper';

const Heart = ({saved}) => {
    const [isSaved, setIsSaved] = React.useState(saved)

    function onPressed (){
        setIsSaved(saved => !saved)
        console.log({isSaved})
    }
    return (
        <TouchableOpacity
        onPress={()=>{
            onPressed()
        }}
        >
            <Icon
              source="bookmark"
              color={isSaved ? "black" : "red"}
              size={25}
            />
        </TouchableOpacity>
    )
};

export default Heart;