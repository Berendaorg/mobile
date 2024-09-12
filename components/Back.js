import * as React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-paper';

const Back = () => {
    return (
        <TouchableOpacity>
            <Icon
                source="arrow-left"
                color={"black"}
                size={25}/>
        </TouchableOpacity>
    )
};

export default Back;