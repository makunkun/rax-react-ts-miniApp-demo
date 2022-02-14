import { createElement, useState } from 'rax';
import { usePageShow, getSearchParams } from 'rax-app';
import View from 'rax-view';
import { Input, Button } from '@alifd/meet';
import navigate from '@uni/navigate';
import { showToast } from '@uni/toast';

import '@alifd/meet/es/core/index.css';
import styles from './index.module.css';

function Mine() {
  const [name, setName] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  usePageShow(() => {
    const searchParams = getSearchParams();
    console.log(searchParams);
  });
  const handleLogin = (n: string | null, p: string | null) => {
    // @ts-ignore
    my.request({
      url: '/api/login',
      method: 'POST',
      data: {
        name: n,
        password: p,
      },
      dataType: 'json',
      success(res) {
        if (res.data.success) {
          navigate.switchTab({
            url: '/pages/Mine/index',
          });
        }
      },
      complete(res) {
        showToast({
          content: res.data.message,
          type: res.data.success ? 'success' : 'fail',
          duration: 1000,
        });
      },
    });
  };
  const caclName = (n: string | null) => {
    if (n === null) return undefined;
    if (n.length >= 2) return 'success';
    return 'error';
  };
  const caclPassword = (p: string | null) => {
    if (p === null) return undefined;
    if (p.length >= 5) return 'success';
    return 'error';
  };
  return (
    <View className={styles.container}>
      <View className={styles.title}>欢迎进入登陆/注册页面</View>
      <Input
        value={name === null ? '' : name}
        className={styles.input}
        addonBefore="用户名"
        placeholder="请输入用户名,用户名不能小于两位"
        onChange={setName}
        state={caclName(name)}
      />
      <Input
        // @ts-ignore
        isPassword
        value={password === null ? '' : password}
        className={styles.input}
        addonBefore="密码"
        placeholder="请输入密码,密码不能小于五位"
        onChange={setPassword}
        state={caclPassword(password)}
      />
      <Button
        type={caclName(name) === 'success' && caclPassword(password) === 'success' ? 'primary' : 'normal'}
        disabled={!(caclName(name) === 'success' && caclPassword(password) === 'success')}
        size="large"
        style={{
          margin: '20rpx',
        }}
        onClick={() => { handleLogin(name, password); }}
      >
        登陆/注册
      </Button>
    </View>
  );
}

export default Mine;
