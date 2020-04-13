          import React, {useState} from 'react';
          import { SafeAreaView } from 'react-native';
          import * as Font from 'expo-font';
          import {AppLoading} from 'expo';

          import TelaBuscaReceita from './src/telas/TelaBuscaReceita'

          const getFonts = () => {
          return Font.loadAsync({
              'Roboto': require('./assets/fonts/RobotoCondensed-Regular.ttf'),
              'Inria-Bold': require('./assets/fonts/InriaSans-Bold.ttf'),
              'Inria-Regular': require('./assets/fonts/InriaSans-Regular.ttf'),
            });
          }

          export default function App() {

          const [fontsloaded, setFontsLoaded] = useState(false);
              if(fontsloaded){
                  return (
                    <SafeAreaView>
                      <TelaBuscaReceita/>
                    </SafeAreaView>
                  );
              } else {
                return (
                    <AppLoading
                      startAsync={getFonts}
                      onFinish={() => setFontsLoaded(true)}
                    />
                );
              }
          }

