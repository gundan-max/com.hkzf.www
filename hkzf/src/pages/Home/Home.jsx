import React from "react"
import { Carousel } from "antd-mobile"
class Home extends React.Component {
  state = {
    data: ['1', '2', '3'],
    imgHeight: 176,
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);
  }

  render() {
    return (
      <div className="Home">
        {/* 轮播图 */}
        <Carousel
          // 是否自动切换
          autoplay={true}
          // 是否循环播放
          infinite
          // 切换面板前的回调函数 from 代表从第几个图片来 to代表去第几个图片
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          // 切换面板后的回调函数
          afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map(val => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                // 代表图片载入完成时触发的一个事件
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      </div>
    )
  }
}

export default Home;