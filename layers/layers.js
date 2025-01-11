var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_KallurMandal_1 = new ol.format.GeoJSON();
var features_KallurMandal_1 = format_KallurMandal_1.readFeatures(json_KallurMandal_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KallurMandal_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KallurMandal_1.addFeatures(features_KallurMandal_1);
var lyr_KallurMandal_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KallurMandal_1, 
                style: style_KallurMandal_1,
                popuplayertitle: 'Kallur Mandal',
                interactive: true,
                title: '<img src="styles/legend/KallurMandal_1.png" /> Kallur Mandal'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_KallurMandal_1.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_KallurMandal_1];
lyr_KallurMandal_1.set('fieldAliases', {'lp_no': 'lp_no', 'chalta_no': 'chalta_no', 'extent_ac': 'extent_ac', 'extent_hec': 'extent_hec', 'layer': 'layer', });
lyr_KallurMandal_1.set('fieldImages', {'lp_no': 'TextEdit', 'chalta_no': 'TextEdit', 'extent_ac': 'TextEdit', 'extent_hec': 'TextEdit', 'layer': 'TextEdit', });
lyr_KallurMandal_1.set('fieldLabels', {'lp_no': 'inline label - always visible', 'chalta_no': 'inline label - always visible', 'extent_ac': 'inline label - always visible', 'extent_hec': 'inline label - always visible', 'layer': 'inline label - always visible', });
lyr_KallurMandal_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});