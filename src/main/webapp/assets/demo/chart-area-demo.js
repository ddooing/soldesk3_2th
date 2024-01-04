// 부트스트랩의 기본 스타일을 모방하기 위해 기본 폰트 가족과 폰트 색상을 새로 설정합니다.
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// 영역 차트 예제
var ctx = document.getElementById("myAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["2월 1일", "2월 2일", "2월 3일", "2월 4일", "2월 5일", "2월 6일", "2월 7일", "2월 8일", "2월 9일", "2월 10일", "2월 11일", "2월 12일", "2월 13일"],
    datasets: [{
      label: "판매금액",
      lineTension: 0.3,
      backgroundColor: "rgba(2,117,216,0.2)",
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: [475612, 658920, 702344, 650203, 713934, 757454, 595379, 648060, 507133, 473437, 465996, 570309, 456570],
    }],
  },
  options: {
	  tooltips: {
    callbacks: {
      label: function(tooltipItem, data) {
        var label = data.datasets[tooltipItem.datasetIndex].label || '';
        if (label) {
          label += ': ';
        }
        label += tooltipItem.yLabel + ' 원';
        return label;
      }
    }
  },
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 1000000,
          maxTicksLimit: 5,
          callback: function(value, index, values) {
            return '₩' + value; 
          }
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
