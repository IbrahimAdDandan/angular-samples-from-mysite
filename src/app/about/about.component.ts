declare var require: any;
import { Component, OnInit } from '@angular/core';
import { GapiService } from '../gapi-service.service';
import * as Highcharts from 'highcharts';
import MapModule from 'highcharts/modules/map';
import ExportingModule from 'highcharts/modules/exporting';
import SunsetTheme from 'highcharts/themes/sunset';

const mapWorld = require('@highcharts/map-collection/custom/world.geo.json');
MapModule(Highcharts);
ExportingModule(Highcharts);
SunsetTheme(Highcharts);

Highcharts.setOptions({
  title: {
    style: {
      color: 'tomato'
    }
  },
  legend: {
    enabled: false
  }
});

@Component({
  selector: 'app-stats',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  data = new Array();
  pageViews = 0;
  browsersNames = new Array();
  browsersNums = new Array();
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: any;
  chart2Options: any;
  chartMap: Highcharts.Options;

  constructor(private _gapi: GapiService) { }

  ngOnInit() {
    this._gapi
      .getGeo()
      .subscribe(res => {
        this.pageViews = res.num;
        this.data = res.data;
        // console.log('the data that comes from api: ' + this.data);
        this.chartMap = {
          chart: {
            borderWidth: 1,
            map: mapWorld
          },
          title: {
            text: 'Visitors'
          },
          series: [<any>{
            name: 'Countries',
            color: '#E0E0E0',
            enableMouseTracking: false
          }, <any>{
            type: 'map',
            name: 'Page views',
            joinBy: ['name'],
            data: this.data,
            minSize: 4,
            maxSize: '12%',
            tooltip: {
              pointFormat: '{point.properties.hc-a2}: {point.z}'
            }
          }]
        };
      }, err => {
        console.log(err);
      });

    this._gapi
      .getBrowsers()
      .subscribe(res => {
        res.data.forEach(element => {
          this.browsersNames.push(element[0]);
          this.browsersNums.push(+element[1]);
        });
        this.chartOptions = {
          chart: {
            type: 'column'
          },
          title: {
            text: 'Used Browsers'
          },
          xAxis: {
            categories: this.browsersNames
          },
          series: [{
            name: 'data',
            color: '#E0E0FF',
            data: this.browsersNums
          }]
        };
      }, err => {
        console.log(err);
      });

    this._gapi
      .getSources()
      .subscribe(res => {
        const names = new Array();
        const nums = new Array();
        res.data.forEach(element => {
          names.push(element[0]);
          nums.push(+element[1]);
        });
        this.chart2Options = {
          chart: {
            type: 'column'
          },
          title: {
            text: 'Sources'
          },
          xAxis: {
            categories: names
          },
          series: [{
            name: 'data',
            color: '#0000FF',
            data: nums
          }]
        };
      }, err => {
        console.log(err);
      });

  }

}