import React, { PureComponent } from 'react';
import styles from './TheLifeCycle.css';

class TheLifeCycle extends PureComponent {
  state = {
    newArr: [],
  };

  componentDidMount() {
    setInterval(() => {
      // 获取原状态
      const { newArr } = this.state;
      const news = `新闻${newArr.length + 1}`;
      this.setState({
        newArr: [news,...newArr]  // es6 语法，数组合并
      })
    }, 1000);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // 获取外边框的高度
    return this.textList.scrollHeight
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // dom重新渲染后的元素高度 减去 渲染前元素的高度，也就是新添加的子元素高度
    this.textList.scrollTop += this.textList.scrollHeight - snapshot
  }


  render() {
    const {newArr} = this.state
    return (
      <div className={styles.list} ref={list=>this.textList = list}>
        {
          newArr.map(item=><div key={item} className={styles.news}>{item}</div>)
        }
      </div>
    );
  }
}


export default TheLifeCycle;
