/* eslint-disable react/jsx-indent */
import { createElement, useState, useEffect } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Image from 'rax-image';
import { Swiper, SwiperSlide } from 'rax-swiper';
import { usePageHide, usePageShow } from 'rax-app';
import styles from './index.module.css';

export default function Home() {
  const [autoplay] = useState(true);
  const [swiperData] = useState([
    'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/9123c1b0856a11ecac2df98e01878b2a.png',
    'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/ba3cb110856a11ec9ec85dd890f02e27.png',
  ]);
  useEffect(() => {
    console.log('首页挂载，调用useEffect');
    return () => {
      console.log('useEffect的return 事件，页面卸载时执行');
    }
  }, []);
  usePageShow(() => {
    // 首次调用，回调函数会在页面完成渲染后执行
    console.log('usePageShow，回调函数会在页面完成渲染后执行');
  });
  usePageHide(() => {
    console.log('usePageHide, 回调函数会在页面隐藏后执行');
  });
  const slideItems = swiperData.map((uri, index) =>
    (<SwiperSlide key={index} className={styles['swiper-slide']}>
      <Image
        mode="widthFix"
        source={{
          uri,
        }}
        style={{
          width: '710rpx',
          height: '300rpx',
          margin: '0 20rpx',
        }}
      />
     </SwiperSlide>));
  return (
    <View className={styles.container}>
      <Text className={styles.title}>个人首页</Text>
      <View className={styles.content}>更多详情内容,请先
        <Text className={styles['text-btn']}>注册</Text>或
        <Text className={styles['text-btn']}>登录</Text>访问！
      </View>
      <Image
        mode="aspectFill"
        source={{
          uri: 'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/3278fc20856a11ecb7f5054792dd7f31.png',
        }}
        style={{
          width: '100%',
          height: '100rpx',
          marginBottom: '20rpx',
        }}
      />
      <Swiper
        className={styles.swiper}
        autoplay={autoplay}
      >
        {slideItems}
      </Swiper>
    </View>
  );
}
