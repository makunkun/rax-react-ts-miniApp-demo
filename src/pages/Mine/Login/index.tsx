import { createElement, useEffect, useState } from 'rax';
import View from 'rax-view';
import { Input, Button } from '@alifd/meet';
import navigate from '@uni/navigate';

import styles from './index.module.css';
import '@alifd/meet/es/core/index.css';
import { usePageShow, getSearchParams } from 'rax-app';
function Mine() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState<any>(undefined);
  const [passwordError, setPasswordError] = useState<any>(undefined);
  useEffect(() => {
    if (name) {
      setNameError('error');
    }
    if (password) {
      setPasswordError('error');
    }
    console.log('name、password改变时触发', name, password);
  }, [name, password]);
  usePageShow(() => {
    const searchParams = getSearchParams();
    console.log(searchParams);
  });
  function handleLogin() {
    navigate.switchTab({
      url: '/pages/Mine/index',
    });
  }
  return (
    <View className={styles.container}>
      <View className={styles.title}>欢迎进入登陆/注册页面</View>
      <Input
        value={name}
        className={styles.input}
        addonBefore="用户名"
        placeholder="请输入用户名,用户名不能小于两位"
        onChange={setName}
        state={name.length >= 2 ? 'success' : nameError}
      />
      <Input
        // @ts-ignore
        isPassword
        value={password}
        className={styles.input}
        addonBefore="密码"
        placeholder="请输入密码,密码不能小于五位"
        onChange={setPassword}
        state={password.length >= 5 ? 'success' : passwordError}
      />
      <Button
        type={name.length >= 2 && password.length >= 5 ? 'primary' : 'normal'}
        disabled={!(name.length >= 2 && password.length >= 5)}
        size="large"
        style={{
          margin: '20rpx',
        }}
        onClick={handleLogin}
      >
        登陆/注册
      </Button>
    </View>
  );
}

export default Mine;
