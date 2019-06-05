import echarts from 'echarts';

function getVirtulData(year) {
  year = year || '2017';
  var date = +echarts.number.parseDate(year + '-01-01');
  var end = +echarts.number.parseDate((+year + 1) + '-01-01');
  var dayTime = 3600 * 24 * 1000;
  var data = [];
  for (var time = date; time < end; time += dayTime) {
      data.push([
          echarts.format.formatTime('yyyy-MM-dd', time),
          Math.floor(Math.random() * 10000)
      ]);
  }
  return data;
}

const option = {
  grid: {
    top: 20,
    bottom: 30,
  },
  visualMap: {
    show: false,
    min: 0,
    max: 10000
  },
  calendar: {
    range: '2017',
    top: 20,
    left: 'center',
    cellSize: 'auto',
    monthLabel: {
      color: '#dafef9'
    }
  },
  series: {
    type: 'heatmap',
    coordinateSystem: 'calendar',
    data: getVirtulData(2017)
  }
};

export default option;
