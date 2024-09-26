import { View } from 'react-native';
import { Badge } from 'react-native-paper';

const Tag = ({labels}) => (
  <View className="absolute top-2 left-2 z-10 flex flex-row gap-2 p-0.5">

  {labels?.map((item)=>{
    return (
      <Badge className="p-">
      {item}
      </Badge>
    )
  })
}
  </View>
);

export default Tag;