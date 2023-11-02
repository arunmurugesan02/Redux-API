import {View, Text, Pressable} from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementLoading, incrementLoading } from '../Redux/actions/count';
import { postLoading } from '../Redux/actions/post';

const Home = () => {
  const dispatch = useDispatch()
  const countDataRedux = useSelector(state => state.count)
  const{data} = countDataRedux
  const postDataRedux = useSelector(state => state.post)
  const {sample} = postDataRedux
  console.log(sample);
   useEffect(()=>{
    dispatch(postLoading())
   },[])
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Pressable
        style={{
          backgroundColor: 'lightgreen',
          width: 100,
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={()=>dispatch(incrementLoading())}
        >
        <Text>+</Text>
      </Pressable>
      <Text>{data}</Text>
      <Pressable
        style={{
          backgroundColor: 'lightgreen',
          width: 100,
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={()=>dispatch(decrementLoading())}>
        <Text>-</Text>
      </Pressable>
    </View>
  );
};

export default Home;
