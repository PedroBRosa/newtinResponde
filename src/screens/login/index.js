import { View } from "react-native";
import {USER_TOKEN} from '@env'



import StatusBar from "../../components/statusBar/index";
import LogoText from "../../components/logo/index";
import Button from "../../components/button/index";

import styles from "./styles";
import singInWhithGoogle from "../../services/singInWhithGoogle";

export default function Login ({ navigation, route }) {

  const loginWithGoogle = async () => {
    try{
      const response = await singInWhithGoogle();

      response.forEach(data =>{
        if(data.type === "success"){


          navigation.navigate('Home', {token: data.token})
        }
      })

    }catch(e){
      console.log(`This is a login with Google Error: ${e}`)
    }
  }


  return (
    <>
      <StatusBar backgroundColor="#08050C" barStyle="light-content" />
      <View style={styles.container}>
        <View style={styles.box}>
          <LogoText />
          <View style={styles.button}>
            <Button iconName="google" title="Sing in with Google" onPress={() => loginWithGoogle()}/>
          </View>
        </View>
      </View>
    </>
  );
}

