import { LoadableComponent } from 'src-root/components';

const MyQuery = LoadableComponent(() => import("./MyQuery"));
const DataCenter = LoadableComponent(() => import("./DataCenter"));

export default [
  {
    path: "myquery",
    Component: MyQuery,
    icon: "rise",
    name: "Myquery"
  },
  {
    path: "datacenter",
    Component: DataCenter,
    icon: "database",
    name: "Datacenter"
  }
];
