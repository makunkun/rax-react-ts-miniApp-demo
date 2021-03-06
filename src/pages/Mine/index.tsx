import { createElement, useState, useEffect } from 'rax';
import View from 'rax-view';
import navigate from '@uni/navigate';
import { Avatar, Button } from '@alifd/meet';
import store from '@/store';

import styles from './index.module.css';

function Mine() {
  const [ava, setAva] = useState('');
  const [name, setName] = useState('');
  const [userState] = store.useModel('user');

  useEffect(() => {
    // @ts-ignore
    my.getAuthCode({
      scopes: ['auth_base'],
      fail(res) {
        console.log(res);
      },
      success: (res) => {
        if (res.authCode) {
          console.log(res.authCode);
        }
      },
    });
  }, []);

  const handleClick = () => {
    navigate.push({
      url: '/pages/Mine/Login/index?id=1',
    });
  };

  const handleGetAuthorize = () => {
    // @ts-ignore
    my.getOpenUserInfo({
      success: (res) => {
        console.log(JSON.parse(res.response));
        const { avatar, nickName } = JSON.parse(res.response).response; // 以下方的报文格式解析两层 response
        setAva(avatar);
        setName(nickName);
      },
    });
  };
  let Btn;
  if (userState && userState.token) {
    Btn = (
      <button className={styles.loginBtn} open-type="getAuthorize" onGetAuthorize={handleGetAuthorize} scope="userInfo">
        会员基础信息授权
      </button>
    );
  } else {
    Btn = (
      <Button type="primary" size="large" className={styles.loginBtn} onClick={handleClick}>
        登陆/注册
      </Button>
    );
  }
  return (
    <View>
      <View className={styles.avatar}>
        <Avatar size="large" src={ava} />
        <View className={styles.nickName}>{name}</View>
      </View>
      {Btn}
    </View>
  );
}

export default Mine;
