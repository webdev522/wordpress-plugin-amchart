AmCharts.loadFile(
  "http://www.macrowonk.com/data/indicators_employment.csv",
  {},
  function(response) {
    var data = AmCharts.parseCSV(response, {
      useColumnNames: true
    });

    var i;
    var year;
    var month;
    var ddate;
    data.pop();

    for (i = 0; i < data.length; i++) {
      fulldate = data[i]["date"].split("/");
      year = fulldate[2];
      month = fulldate[1];
      if (month.length == 1) {
        month = "0" + month;
      }
      ddate = fulldate[0];
      if (ddate.length == 1) {
        ddate = "0" + ddate;
      }
      data[i]["date"] = year + "-" + month + "-" + ddate;
    }

    var chartData = [];

    generateChartData(data);

    function generateChartData(data) {
      for (var i = 0; i < data.length; i++) {
        chartData.push({
          date: data[i]["date"],
          au_employment_index: data[i]["au_employment_index"],
          ca_employment_index: data[i]["ca_employment_index"],
          cn_employment_index: data[i]["cn_employment_index"],
          eu_employment_index: data[i]["eu_employment_index"],
          gb_employment_index: data[i]["gb_employment_index"],
          jp_employment_index: data[i]["jp_employment_index"],
          us_employment_index: data[i]["us_employment_index"]
        });
      }
    }

    var $CHART$ = AmCharts.makeChart("$CHART$", {
      type: "stock",
      dataDateFormat: "YYYY-MM-DD",
      
      dataSets: [
        {
          fieldMappings: [
            {
              fromField: "au_employment_index",
              toField: "au_employment_index"
            },
            {
              fromField: "ca_employment_index",
              toField: "ca_employment_index"
            },
            {
              fromField: "cn_employment_index",
              toField: "cn_employment_index"
            },
            {
              fromField: "eu_employment_index",
              toField: "eu_employment_index"
            },
            {
              fromField: "gb_employment_index",
              toField: "gb_employment_index"
            },
            {
              fromField: "jp_employment_index",
              toField: "jp_employment_index"
            },
            {
              fromField: "us_employment_index",
              toField: "us_employment_index"
            }
          ],
          dataProvider: chartData,
          categoryField: "date"
        }
      ],

      panels: [
        {
          showCategoryAxis: false,
          valueAxes: [
            {
              position: "left",
              axisAlpha: 0,
              gridAlpha: 0,
              labelsEnabled: false
            }
          ],
          allLabels: [ {
            text: "AU",
            align: "left",
            x: "1%",
            size: 14
          }],
          stockGraphs: [
            {
              valueField: "au_employment_index",
              type: "smoothedLine",
              useDataSetColors: false,
              fillColors: "#b0de09",
              lineColor: "#b0de09",
              fillAlphas: 0.6,
              visibleInLegend: false,
            }
          ],
        },

        {
          showCategoryAxis: false,
          valueAxes: [
            {
              position: "left",
              axisAlpha: 0,
              gridAlpha: 0,
              labelsEnabled: false
            }
          ],
          allLabels: [ {
            text: "CA",
            align: "left",
            x: "1%",
            size: 14
          }],
          stockGraphs: [
            {
              valueField: "ca_employment_index",
              type: "smoothedLine",
              useDataSetColors: false,
              fillColors: "#f0de09",
              lineColor: "#f0de09",
              fillAlphas: 0.6,
              labelsEnabled: false
            }
          ],
        },

        {
          showCategoryAxis: false,
          valueAxes: [
            {
              position: "left",
              axisAlpha: 0,
              gridAlpha: 0,
              labelsEnabled: false
            }
          ],
          allLabels: [ {
            text: "CN",
            align: "left",
            x: "1%",
            size: 14
          }],
          stockGraphs: [
            {
              valueField: "cn_employment_index",
              type: "smoothedLine",
              useDataSetColors: false,
              fillColors: "#f000ff",
              lineColor: "#f000ff",
              fillAlphas: 0.6,
              labelsEnabled: false
            }
          ]
        },

        {
          showCategoryAxis: false,
          valueAxes: [
            {
              position: "left",
              axisAlpha: 0,
              gridAlpha: 0,
              labelsEnabled: false
            }
          ],
          allLabels: [ {
            text: "EU",
            align: "left",
            x: "1%",
            size: 14
          }],
          stockGraphs: [
            {
              valueField: "eu_employment_index",
              type: "smoothedLine",
              useDataSetColors: false,
              fillColors: "#f08809",
              lineColor: "#f08809",
              fillAlphas: 0.6,
              labelsEnabled: false
            }
          ]
        }, 

        {
          showCategoryAxis: false,
          valueAxes: [
            {
              position: "left",
              axisAlpha: 0,
              gridAlpha: 0,
              labelsEnabled: false
            }
          ],
          allLabels: [ {
            text: "GB",
            align: "left",
            x: "1%",
            size: 14
          }],
          stockGraphs: [
            {
              valueField: "gb_employment_index",
              type: "smoothedLine",
              useDataSetColors: false,
              fillColors: "#88de09",
              lineColor: "#88de09",
              fillAlphas: 0.6,
              labelsEnabled: false
            }
          ]
        }, 

        {
          showCategoryAxis: false,
          valueAxes: [
            {
              position: "left",
              axisAlpha: 0,
              gridAlpha: 0,
              labelsEnabled: false
            }
          ],
          allLabels: [ {
            text: "JP",
            align: "left",
            x: "1%",
            size: 14
          }],
          stockGraphs: [
            {
              valueField: "jp_employment_index",
              type: "smoothedLine",
              useDataSetColors: false,
              fillColors: "#8000ff",
              lineColor: "#8000ff",
              fillAlphas: 0.6,
              labelsEnabled: false
            }
          ]
        },

        {
          showCategoryAxis: false,
          valueAxes: [
            {
              position: "left",
              axisAlpha: 0,
              gridAlpha: 0,
              labelsEnabled: false
            }
          ],
          allLabels: [ {
            text: "US",
            align: "left",
            x: "1%",
            size: 14
          }],
          stockGraphs: [
            {
              valueField: "us_employment_index",
              type: "smoothedLine",
              useDataSetColors: false,
              fillColors: "#f00000",
              lineColor: "#f00000",
              fillAlphas: 0.6,
              labelsEnabled: false
            }
          ]
        },
      ],

      panelsSettings: {
        fontFamily: "Arial",
        creditsPosition: "bottom-right",
        panelSpacing: 1,
        marginLeft: 15,
        marginRight: 15,
      },

      balloon: {
        fontSize: 13
      },

      chartScrollbarSettings: {
        //"graph": "g1",
        scrollbarHeight: 40,
        dragIcon: "dragIconRectSmall",
        dragIconWidth: 20,
        dragIconHeight: 40,

        backgroundAlpha: 0,
        selectedBackgroundAlpha: 0.1,
        selectedBackgroundColor: "#888888",
        graphFillAlpha: 0.5,
        graphLineAlpha: 0.5,
        selectedGraphFillAlpha: 0,
        selectedGraphLineAlpha: 1,
        color: "#AAAAAA"
      },

      chartCursorSettings: {
        fullWidth: true,
        cursorAlpha: 0.5,
        cursorColor: "#444444",
        valueLineAlpha: 0,
        valueBalloonsEnabled: true,
        oneBalloonOnly: true
      },

      categoryAxesSettings: {
        minPeriod: "hh",
        parseDates: true,
        equalSpacing: false,
        gridAlpha: 0,
        axisAlpha: 0,
        inside: true,
        maxSeries: 0
      },

      periodSelector: {
        position: "bottom",
        inputFieldsEnabled: false,
        periods: [
          {
            period: "DD",
            selected: true,
            count: 1,
            label: "1d"
          },
          {
            period: "DD",
            selected: true,
            count: 10,
            label: "10d"
          },
          {
            period: "MM",
            selected: true,
            count: 1,
            label: "1m"
          },
          {
            period: "MM",
            selected: true,
            count: 6,
            label: "6m"
          },
          {
            period: "YYYY",
            selected: true,
            count: 6,
            label: "1y"
          },
          {
            period: "MAX",
            label: "MAX"
          }
        ]
      }
    });
  }
);