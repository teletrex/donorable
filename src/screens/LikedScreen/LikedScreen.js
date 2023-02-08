import React , {useContext} from "react";
import {Text, View, Image, StyleSheet, TouchableOpacity} from "react-native";
import {HStack} from 'react-native-stacks';
import {FormButton,ImageMask} from "../../components";
import styleguide from "../../../styles/styleguide";
import theme from "../../../styles/theme.style";
import {PrincipalContext} from "../../contexts/PrincipalContext";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function LikedScreen({navigation, route}) {

  const styles = StyleSheet.create(styleguide);

  const {user, updateUser} = useContext(PrincipalContext);

  /* Get nonprofit name from HomeScreen */
  const {params} = route.params;


  /* Save nonprofit to heart list */
  const onHeartPress = () => {
    // updateUsers favorites array.
    if (!user.favorites) user.favorites = [];
    if (user.favorites.includes(params.id)) return;
    updateUser({
      ...user,
      favorites: [...user.favorites, params.id]
    })
  };

  /* View LearnMoreScreen of nonprofit **NEEDS TO BE IMPLEMENTED** */
  const onLearnPress = () => {
    navigation.navigate("LearnMore" , {params:params, title:"About"});
  };

  /* Go to MessageScreen */
  const onMessagePress = () => {
    navigation.navigate("Message");
  };

  /* Schedule a live chat via calendar **NEEDS TO BE IMPLEMENTED** */
  const onChatPress = () => {
    console.log('chat');
  };

  /* Go to QuickDonateScreen */
  const onDonatePress = () => {
    navigation.navigate('QuickDonate', {params: params, title:"Donate"});
  };

  /* Return to HomeScreen to keep swiping */
  const onSwipePress = () => {
    navigation.goBack();
  };


  /* View for the KeywordScreen */
  return (
    <View  style={styles.screenDetail}>
      <HStack  spacing={10} alignment={""}>
        <ImageMask
          source={{uri:params.image}}
          size={100}
          radius={5}
          backgroundColor={theme.IMAGE_BACKGROUND_COLOR}
          borderColor={theme.IMAGE_BORDER_COLOR}
          borderWidth={theme.IMAGE_BORDER_WIDTH}
        />
        <View style={{flex:3}}>
          <Text style={styles.textCenteredP2}>{params.name}</Text>
          <Text numberOfLines={3}
                style={[styles.textCenteredP1,{maxWidth:"90%"}]}
          >{params.description}</Text>
        </View>
      </HStack>
      { /*  <View>
        <Text style={styles.textCenteredP2}>Now, would you like to...</Text>
      </View>
*/}
      <HStack spacing={5} style={{padding:10}} alignment="center">
        <FormButton
          styles={styles}
          size={"small"}
          width={"33%"}
          buttonStyle={"Secondary"}
          onPress={onMessagePress}
          label={"Message"}/>

        <FormButton
          styles={styles}
          width={"33%"}
          size={"small"}
          buttonStyle={"Primary"}
          onPress={onHeartPress}
          label={"Favorite"}/>
        <FormButton
          styles={styles}
          size={"small"}
          width={"33%"}
          buttonStyle={"Secondary"}
          onPress={onDonatePress}
          label={"Donate now"}/>
      </HStack>
      <Text
        numberOfLines={30}
        style={styles.description}
      >
        {params.about}
      </Text>

      <View
        style={{
          borderRadius: 100,
          alignItems:"center",
          borderWidth: 0,
          backgroundColor: 'green',
          bottom: 20,
          right: 20,
          position:"absolute",
          width:70,
          height:70,
          paddingTop:10
        }}
      >
      <TouchableOpacity
        onPress={onChatPress}
      >
        <MaterialCommunityIcons name={"chat"} size={50} color={"white"}/>
      </TouchableOpacity>
      </View>
    </View>
  );
}
