import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {add, subtract} from '../redux/CounterSlice';

const colors = ["bg-red-400","bg-blue-400","bg-green-400","bg-yellow-400","bg-purple-400","bg-orange-400","bg-amber-400","bg-lime-400","bg-rose-400","bg-white"];

export const Main = () => {
  const count = useSelector(state => state.name.count);
  const color = useSelector(state => state.name.color);
  //console.log(color,count)
  const dispatch = useDispatch();
  const [num, setNum] = useState(0);
  const addNum = () => {
    dispatch(add(parseInt(num)));
  };
  const subNum = () => {
    dispatch(subtract(parseInt(num)));
  };

  return (
    <SafeAreaView
      className={` ${color} h-full flex justify-center items-center `}>
      <Text className="text-black font-bold text-8xl ">{count}</Text>
      <TextInput
        className="bg-white px-4 py-2 rounded-lg m-1 text-xl text-black  "
        textAlign={'center'}
        placeholder="Enter number"
        onChangeText={setNum}
        keyboardType="numeric"
        value={num}
      />
      <View className="flex items-center justify-around">
        <View>
          <TouchableOpacity
            className=" bg-white opacity-50 px-3 py-2 m-3 rounded-lg "
            onPress={() => {
              addNum();
            }}>
            <Text className="text-2xl text-black ">+</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            className=" bg-white opacity-50 px-3 py-2 m-3 rounded-lg "
            onPress={() => {
              subNum();
            }}>
            <Text className="text-2xl text-black ">-</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Main;
