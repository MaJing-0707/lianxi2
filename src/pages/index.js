import styles from './index.css';
import { router } from 'umi';

import React, { PureComponent } from 'react';

class Index extends PureComponent {
  render() {
    const list = [
      {title:'getSnapshotBeforeUpdate生命周期',router:'/thelifecycle/thelifecycle'}
    ]
    return (
      <div className={styles.normal}>
        <ul className={styles.list}>
          {
            list.map(item=><li onClick={()=>router.push(item.router)}>{item.title}</li>)
          }
        </ul>
      </div>
    );
  }
}


export default Index;
