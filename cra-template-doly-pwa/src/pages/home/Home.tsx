import * as React from 'react';
import { List } from 'antd-mobile';
import { useHistory } from 'react-router-dom';
import styles from './Home.module.less';

const { Item } = List;

const Home: React.FC = () => {
  const history = useHistory();

  return (
    <>
      <div className={styles.title}>cra-template-doly</div>
      <div className={styles.subtitle}>离线也可以访问</div>
      <List renderHeader={() => '示例页面'}>
        <Item
          arrow="horizontal"
          onClick={() => {
            history.push('/repos/list');
          }}
        >
          列表页
        </Item>
        <Item
          arrow="horizontal"
          onClick={() => {
            history.push('/abc');
          }}
        >
          不存在的页面
        </Item>
      </List>
    </>
  );
};

export default Home;
