<template >
    <div class="homePage">
        <div class="content-page">
            <div class="title-page">
                Hi, Welcome back 👋
            </div>
            <div class="list-card-overview mt-3">
                <div class="row">
                    <div class=" col-6 col-md-6 col-lg-3">
                        <div class="item mb-3 card-revenue">
                            <div class="icon">
                            <img src="./ic_buy.png" alt="">
                        </div>
                        <div class="value">
                            18,765
                        </div>
                        <div class="text-sub">
                            Doanh thu
                        </div>
                        </div>
                        
                    </div>
                    <div class=" col-6 col-md-6 col-lg-3">
                        <div class="item mb-3 card-profit">
                            <div class="icon">
                            <img src="./ic_bag.png" alt="">
                        </div>
                        <div class="value">
                            18,765
                        </div>
                        <div class="text-sub">
                            Lợi nhuận
                        </div>
                        </div>
                        
                    </div>
                    <div class="  col-6 col-md-6 col-lg-3">
                        <div class="item mb-3 card-user">
                            <div class="icon">
                            <img src="./ic_sers.png" alt="">
                        </div>
                        <div class="value">
                            1.35m
                        </div>
                        <div class="text-sub">
                            Khách hàng
                        </div>
                        </div>
                        
                    </div>
                    <div class="  col-6 col-md-6 col-lg-3">
                        <div class="item mb-3 card-message">
                            <div class="icon">
                            <img src="./ic_message.png" alt="">
                        </div>
                        <div class="value">
                            234
                        </div>
                        <div class="text-sub">
                            Phản hồi
                        </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            
            <div class="section-chart mt-5 row">
                <div class="col-12 col-md-12 col-lg-7 col-xl-7">
                    <div class="chart-box mb-3">
                        <div id="chart-1">
                            <apexchart type="line" height="350" :options="chartOptions" :series="series"></apexchart>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-12 col-lg-5 col-xl-5 chart-box">
                    <div id="chart-2 mb-3 text-center">
                        <apexchart class="pie-chart" type="pie" width="380" :options="chartOptionsPie" :series="seriesPie"></apexchart>
                    </div>
                </div>
            </div>
            
        </div>



    </div>
</template>
<script>

import VueApexCharts from "vue3-apexcharts";
import { ref } from "vue";

export default {
  components: {
    apexchart: VueApexCharts,
  },
  setup() {
    const series = ref([
      {
        name: "TEAM A",
        type: "column",
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
      },
      {
        name: "TEAM B",
        type: "area",
        data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
      },
      {
        name: "TEAM C",
        type: "line",
        data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
      },
    ]);

    const chartOptions = ref({
      chart: {
        height: 350,
        type: "line",
        stacked: false,
      },
      stroke: {
        width: [0, 2, 5],
        curve: "smooth",
      },
      plotOptions: {
        bar: {
          columnWidth: "50%",
        },
      },
      fill: {
        opacity: [0.85, 0.25, 1],
        gradient: {
          inverseColors: false,
          shade: "light",
          type: "vertical",
          opacityFrom: 0.85,
          opacityTo: 0.55,
          stops: [0, 100, 100, 100],
        },
      },
      labels: [
        "01/01/2003",
        "02/01/2003",
        "03/01/2003",
        "04/01/2003",
        "05/01/2003",
        "06/01/2003",
        "07/01/2003",
        "08/01/2003",
        "09/01/2003",
        "10/01/2003",
        "11/01/2003",
      ],
      markers: {
        size: 0,
      },
      xaxis: {
        type: "datetime",
      },
      yaxis: {
        title: {
          text: "Points",
        },
        min: 0,
      },
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: function (y) {
            if (typeof y !== "undefined") {
              return y.toFixed(0) + " points";
            }
            return y;
          },
        },
      },
    });
    const seriesPie = ref([44, 55, 13, 43, 22]);
  const chartOptionsPie = ref({
    chart: {
      width: 380,
      type: "pie",
    },
    legend: {
        position: "bottom",
    },
    labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 300,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  });

    return { series, chartOptions,  seriesPie, chartOptionsPie };
  },
};

</script>
<style scoped>
    @import "./Home.css";
</style>