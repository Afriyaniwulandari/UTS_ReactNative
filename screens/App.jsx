import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const App = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={{
          uri: 'https://images.unsplash.com/photo-1713791924903-3b8f4c31dddb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1NXx8fGVufDB8fHx8fA%3D%3D',
        }}>
        <View style={{height: 200, justifyContent: 'flex-end'}}>
          <View style={{backgroundColor: 'rgba(0,0,0,0,6)'}}></View>
          <View>
            <TouchableOpacity
              style={{
                marginHorizontal: 20,
                marginTop: 10,
                flexDirection: 'row',
              }}
              onPress={() => setToggle(!toggle)}>
              <Icon name="bars" size={22} color="#212121" />
              <View
                style={{marginLeft: 10, justifyContent: 'center', flex: 0.5}}>
                <Text style={{fontSize: 20}}>Menu</Text>
              </View>
              {/* <Icon name="angle-right" size={22} color="#212121" /> */}
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>

      {toggle && (
        <View>
          <TouchableOpacity
            style={{
              marginLeft: 40,
              marginRight: 20,
              marginTop: 20,
              flexDirection: 'row',
            }}
            onPress={() => console.log('anda menekan home')}>
            <Icon name="home" size={22} color="#bdbdbd" />
            <View style={{marginLeft: 10, justifyContent: 'center', flex: 1}}>
              <Text>yok bisa</Text>
            </View>
            <Icon name="angle-right" size={22} color="#bdbdbd" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginLeft: 40,
              marginRight: 20,
              marginTop: 20,
              flexDirection: 'row',
            }}>
            <Icon name="chart-area" size={22} color="#bdbdbd" />
            <View style={{marginLeft: 10, justifyContent: 'center', flex: 1}}>
              <Text>Laporan</Text>
            </View>
            <Icon name="angle-right" size={22} color="#bdbdbd" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginLeft: 40,
              marginRight: 20,
              marginTop: 20,
              flexDirection: 'row',
            }}>
            <Icon name="cog" size={22} color="#bdbdbd" />
            <View style={{marginLeft: 10, justifyContent: 'center', flex: 1}}>
              <Text>setting</Text>
            </View>
            <Icon name="angle-right" size={22} color="#bdbdbd" />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
