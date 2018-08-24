<template>
    <div>
        <div id="map" class="container"></div>
        <button @click="updateLayer(1)">添加点</button>
        <button @click="">移除图层</button>
        <button @click="updateLayer(2)">聚类</button>
    </div>
</template>

<script>
    import * as maptalks from "maptalks";
    import { ClusterLayer } from "maptalks.markercluster"
    export default {
        data() {
            return {
                name: "map",
                map: null,
                markerVectorLayer: null, //点图层
                clusterLayer: null,//聚类图层
            }
        },
        methods: {
            initMap: function () {
                this.map = new maptalks.Map('map', {
                    center: [175, -37.898568],
                    zoom: 8,
                    baseLayer: new maptalks.TileLayer('base', {
                        urlTemplate: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                        subdomains: ['a', 'b', 'c'],
                        attribution: '&copy; <a href="http://www.osm.org" target="_blank">OpenStreetMap</a> contributors'
                    })
                });

            },
            updateLayer: function (type) {
                var that = this;
                this.removeAllLayer();
                switch (type) {
                    case 1:
                        that.addMarker();
                        break;
                    case 2:
                        that.addclusterLayer();
                        break;

                }

            },
            removeAllLayer() {
                var that = this;
                if (that.clusterLayer != null) {
                    that.map.removeLayer(that.clusterLayer);
                    //that.clusterLayer = null;
                }
                if (that.markerVectorLayer != null) {
                    that.map.removeLayer(that.markerVectorLayer);
                    that.markerVectorLayer = null;
                }
            },
            addMarker: function () {
                if (this.markerVectorLayer == null) {
                    this.markerVectorLayer = new maptalks.VectorLayer('makerVector');
                    this.markerVectorLayer.addTo(this.map);
                }
                var point = new maptalks.Marker(
                    [175, -37.898568],
                    {
                        visible: true,
                        editable: true,
                        cursor: 'pointer',
                        shadowBlur: 0,
                        shadowColor: 'black',
                        draggable: false,
                        dragShadow: false, // display a shadow during dragging
                        drawOnAxis: null,  // force dragging stick on a axis, can be: x, y
                    }
                );
                this.markerVectorLayer.addGeometry(point);
            },
            addclusterLayer: function () {
                var markers = [];

                var addressPoints = [
                    [-37.8133062833, 175.2721598, "3"],
                    [-37.8129763667, 175.2714296333, "10"],
                    [-37.81369515, 175.2714571167, "11"],
                    [-37.81322845, 175.2715556, "12"],
                    [-37.8137875333, 175.2712745333, "13"],
                    [-37.8133246833, 175.27138025, "14"],
                    [-37.8140672667, 175.2712932667, "15"],
                    [-37.8131234, 175.2711189833, "16"],
                    [-37.7507629167, 175.2502213833, "34"],
                    [-37.7505923333, 175.2499560667, "35"],
                    [-37.7508608333, 175.2500617167, "36"],
                    [-37.7506927833, 175.2498010667, "37"],
                    [-37.7509818, 175.2499128333, "38"]]
                for (var i = 0; i < addressPoints.length; i++) {
                    var a = addressPoints[i];
                    markers.push(new maptalks.Marker([a[1], a[0]]));
                }
                if (this.clusterLayer == null) {
                    this.clusterLayer = new ClusterLayer('cluster', markers, {
                        'noClusterWithOneMarker': false,
                        'maxClusterZoom': 18,
                        //"count" is an internal variable: marker count in the cluster.
                        'symbol': {
                            'markerType': 'ellipse',
                            'markerFill': { type: 'interval', stops: [[0, 'rgb(135, 196, 240)'], [9, '#1bbc9b'], [99, 'rgb(216, 115, 149)']] },
                            'markerFillOpacity': 0.7,
                            'markerLineOpacity': 1,
                            'markerLineWidth': 3,
                            'markerLineColor': '#fff',
                            'markerWidth': { type: 'interval', stops: [[0, 40], [9, 60], [99, 80]] },
                            'markerHeight': { type: 'interval', stops: [[0, 40], [9, 60], [99, 80]] }
                        },
                        'drawClusterText': true,
                        'geometryEvents': true,
                        'single': true
                    });
                }

                this.map.addLayer(this.clusterLayer);
            }
        },
        mounted() {
            this.initMap();
        }
    }
</script>

<style>
    .container {
        height: 80vh;
        width: 100%;
        border: 1px solid;
    }
</style>