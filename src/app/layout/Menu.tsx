import { Icon, Menu } from 'antd';
import * as loadsh from 'lodash';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { siderMenus } from 'src-root/common/utils/Menus';

const { Item, SubMenu } = Menu;
interface IMenu {
  path: string;
  Component: string;
  icon: string;
  name?: string;
  mpid: string;
  route: string;
}

interface IProps {
  location: any;
}
export const Menus = ({ location }: IProps) => {
  // 过滤权限
  const visitMenu = loadsh.cloneDeep(siderMenus);

  const illegalKey = "mpid";
  visitMenu.forEach((item: any) => {
    if (item[illegalKey] && item[illegalKey].substr(0, 1) === "/") {
      item[illegalKey] = item[illegalKey].replace("/", "");
    }
    if (item.path.indexOf("/") >= 0) {
      item.path = item.path.replace("/", "");
    }
    if (item.route.indexOf(":") >= 0) {
      item.route = item.route.substr(0, item.route.indexOf(":") - 1);
    }
  });
  // console.log('visitMenu ==>', visitMenu);
  // 生成menu树状结构
  const menuTree = [];
  for (const item of visitMenu) {
    if (!item[illegalKey] && item.name) {
      menuTree.push(item);
    }
    const children = [];
    for (const item1 of visitMenu) {
      if (item1[illegalKey] === item.path && item1.name) {
        children.push(item1);
      }
    }
    if (children.length > 0) {
      (item as any).children = children;
    }
  }

  const MenuList = (menus: any) => {
    const list = [];
    for (const item of menus) {
      if (!item.mh) {
        if (item.children && item.children.length > 0) {
          list.push(
            <SubMenu
              key={item.route}
              title={
                <span>
                  <Icon type={item.icon} />
                  <span>{item.name}</span>
                </span>
              }
            >
              {MenuList(item.children)}
            </SubMenu>
          );
        } else {
          list.push(
            <Item key={item.route}>
              <Link to={item.route} replace={true}>
                <Icon type={item.icon} />
                <span className="nav-text">{item.name}</span>
              </Link>
            </Item>
          );
        }
      }
    }
    return list;
  };
  // 默认展开菜单
  const activeItem = siderMenus.find(_ => _.route === location.pathname);

  function getOpenArray(item: IMenu, array: IMenu[], id: string, mpid: string) {
    const arr: any[] = [];
    if (!item[mpid]) {
      return arr;
    }

    function getOpenParent(item1: IMenu) {
      const item2: any = array.find(_ => item1[mpid] === _.path);
      arr.push(item2.route);
      if (item2 && item2[mpid]) {
        getOpenParent(item2);
      }
    }

    getOpenParent(item);
    return arr;
  }

  let defaultOpenKeys = [];
  if (activeItem) {
    defaultOpenKeys = getOpenArray(activeItem, siderMenus, "id", "mpid");
  }
  /* 
    处理 menu组件的 selectedKeys
    由于存在url 带 params的情况 故对菜单进行处理 将route中占位符部分你都去掉
  */
  let selectedKey: any = [];
  const handleSelectedKeys = () => {
    const handledSelected = visitMenu.map((item: any) => {
      item.route = item.route.replace(/\/:.*$/g, "");
      return item.route;
    });
    selectedKey = handledSelected.find((_: any) => {
      return location.pathname.includes(_);
    });
    return handledSelected;
  };
  handleSelectedKeys();

  const menuProps = {
    defaultOpenKeys,
    selectedKeys: [selectedKey],
    defaultSelectedKeys: [location.pathname]
  };

  return (
    <Menu theme="dark" mode="inline" {...menuProps}>
      {MenuList(menuTree)}
    </Menu>
  );
};
