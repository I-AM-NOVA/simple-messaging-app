import { View, Text, TextInput, Pressable } from "react-native";
import { getUserID } from  "./src/service/socketservice"
import ProfileData from "./src/profileData"
import SearchUser from "./src/searchpage";

const userID = getUserID()
export default function Calculator() {
  return (
    <>
    <View>
        <ProfileData />
        <SearchUser />
    </View>
    </>
  );
}
//just like create text tags with placeholders '{}' for all the info i might need