import { LoadableComponent } from 'src-root/components';

const PieChart = LoadableComponent(() => import("./PieChart"));
const BarChart = LoadableComponent(() => import("./BarChart"));

export default [
  // Menu items ordering this.
  {
    path: "pie",
    Component: PieChart,
    icon: "pie-chart",
    name: "PIE"
  },
  {
    path: "bar",
    Component: BarChart,
    icon: "bar-chart",
    name: "BAR"
  },
  {
    path: "bar/:name/:id",
    Component: BarChart,
    icon: "bar-chart"
  }
];
