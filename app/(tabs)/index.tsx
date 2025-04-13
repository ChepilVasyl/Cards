    import { View, Text, StatusBar, SafeAreaView,Image, StyleSheet, Dimensions, Platform } from 'react-native';

    import { HelloWave } from '@/components/HelloWave';
    import ParallaxScrollView from '@/components/ParallaxScrollView';
    import { ThemedText } from '@/components/ThemedText';
    import { ThemedView } from '@/components/ThemedView';
    import Card from '@/components/MyCard/Card'
    //Як відцентрувати і по горизонталі і підняти вгору????????
    export default function HomeScreen() {
        const window = Dimensions.get('window');
        const heightW = window.height
        const widthW = window.width
        const statusBarStyle = {
            backgroundColor: 'pink',
            flex:1,
        };
      return (
          <SafeAreaView style={[statusBarStyle]}>
              <View style={styles.mainStyle}>
                  <Card widthProp={widthW}></Card>
                  <Card widthProp={widthW}></Card>
                  <Card widthProp={widthW}></Card>
              </View>
          </SafeAreaView>
      );
    }

    const styles = StyleSheet.create(
        {
          mainStyle:{
              paddingTop:15,
            flex: 1,
              flexDirection: 'column',
            backgroundColor: "white",
            justifyContent:'flex-start',
            alignItems: 'center',
          }
        }
    )
