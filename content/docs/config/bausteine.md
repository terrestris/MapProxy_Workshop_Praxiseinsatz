# Bausteine


{{<rawhtml>}}
<table>
<tbody>
  <tr>
    <td><div class="box" style="background-color:#FFFC79">Layer</div></td>
    <td>Was ist nach außen verfügbar?</td>
  </tr>
  <tr>
    <td><div class="box" style="background-color:#73FDFF">Cache</div></td>
    <td>Was wird gespeichert?</td>
  </tr>
  <tr>
    <td><div class="box" style="background-color:#FFD479">Source</div></td>
    <td>Wo kommen die Daten her?</td>
  </tr>
</tbody>
</table>
{{</rawhtml>}}

## Layer
```yaml
layers:
  - name: mapnik
    title: World population (Mapnik)
    sources: [mapnik]
```

## Caches
```yaml
caches:
  mapnik_cache:
    grids: [GLOBAL_MERCATOR]
    sources: [tilestache]
```

## Sources
```yaml
sources:
  geoserver:
    type: wms
    wms_opts:
      featureinfo: true
    req:
      url: http://localhost:8082/geoserver/wms?
      layers: 'topp:states'
      transparent: true
    coverage:
      bbox: -124.73142200000001,24.955967,-66.969849,49.371735
      bbox_srs: 'EPSG:4326'
```

### Beispiel Cache WMS/Kacheldienst

{{< figure src="/img/cached_wms.png" >}}

### Beispiel Mehrere Quellen

{{< figure src="/img/multiple_sources.png" >}}

### Komplexe Layer

{{< figure src="/img/complex_layers.png" >}} 
