import React from "react";
import { View } from "react-native";

export default ({ children }) => ( 
  //<div class="d-flex flex-row mb-3">
  <View style={{ flexDirection: "row" }}>
  {
  /* <div class="p-2">Flex item 1</div>
     <div class="p-2">Flex item 2</div>
     <div class="p-2">Flex item 3</div> 
  */  
  }
    {children} 
  </View>
  //</div>
);
  
