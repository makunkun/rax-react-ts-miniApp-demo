import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import navigate from '@uni/navigate';

function Mine() {
  function handleClick() {
    navigate.push({
      url: '/pages/Mine/Login/index?id=1',
    });
  }
  return (
    <View onClick={handleClick}>
      <Text>
        我的
      </Text>
    </View>
  );
}

export default Mine;
