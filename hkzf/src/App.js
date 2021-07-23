import React from "react";
import { renderRoutes } from "react-router-config"

// 1.渲染tabBar
// 1.1 导入tabbar
import { TabBar } from 'antd-mobile';



class App extends React.Component {

  // 设置状态
  state = {
    // 无论我们是点击也好 还是直接输入地址也好，会根据地址 让其中一个tabbar选中
    selectedTab: this.props.history.location.pathname,
    tarbar: [{
      title: "首页",
      icon: 'icon-ind',
      path: "/home"
    },
    {
      title: "找房",
      icon: 'icon-findHouse',
      path: "/findhouse"
    },
    {
      title: "资讯",
      icon: 'icon-infom',
      path: "/news"
    },
    {
      title: "我的",
      icon: 'icon-my',
      path: "/profile"
    }]
  }

  render() {
    return (
      <div className="App" >
        {/* 渲染出来的内容 */}
        {renderRoutes(this.props.route.children)}

        {/* tabBar */}
        <div className="tabbar">
          <TabBar tintColor="#21b97a">
            {
              this.state.tarbar.map(item => (
                <TabBar.Item
                  title={item.title}
                  key={item.path}
                  selected={this.state.selectedTab === item.path}
                  icon={<i className={`iconfont ${item.icon}`}></i>}
                  selectedIcon={<i className={`iconfont ${item.icon}`}></i>}
                  onPress={() => { this.props.history.push(item.path); this.setState({ selectedTab: item.path }); }}
                ></TabBar.Item>
              ))
            }

            {/* <TabBar.Item
              title="找房"
              key="/findhouse"
              selected={this.state.selectedTab === '/findhouse'}
              icon={<i className="iconfont  icon-findHouse"></i>}
              selectedIcon={<i className="iconfont  icon-findHouse"></i>}
              onPress={() => { this.props.history.push("/findhouse"); this.setState({ selectedTab: '/findhouse' }); }}
            ></TabBar.Item>

            <TabBar.Item
              title="资讯"
              key="/news"
              selected={this.state.selectedTab === '/news'}
              icon={<i className="iconfont  icon-infom"></i>}
              selectedIcon={<i className="iconfont  icon-infom"></i>}
              onPress={() => { this.props.history.push("/news"); this.setState({ selectedTab: '/news' }); }}
            ></TabBar.Item>

            <TabBar.Item
              title="我的"
              key="/profile"
              selected={this.state.selectedTab === '/profile'}
              icon={<i className="iconfont  icon-my"></i>}
              selectedIcon={<i className="iconfont  icon-my"></i>}
              onPress={() => { this.props.history.push("/profile"); this.setState({ selectedTab: '/profile' }); }}
            ></TabBar.Item> */}
          </TabBar>
        </div>
      </div >

    );
  }
}

export default App;
