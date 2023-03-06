# mapproxy.yaml


<table>
<tbody>
  <tr>
    <td><i>Layers</i></td>
    <td>Layer die der MapProxy nach außen anbietet</td>
  </tr>
  <tr>
    <td><i>Caches</i></td>
    <td>Optionen für den Zwischenspeicher der Bilder</td>
  </tr>
  <tr>
    <td><i>Sources</i></td>
    <td>Quellen auf die der MapProxy zugreifen kann</td>
  </tr>
  <tr>
    <td><i>services</i></td>
    <td>Service die vom MapProxy angeboten werden solle z.B. WMS, TMS</td>
  </tr>
  <tr>
    <td><i>grids</i></td>
    <td>Gitter zum Abspeichern der Kacheln</td>
  </tr>
  <tr>
    <td><i>globals</i></td>
    <td>Interne Optionen des MapProxy </td>
  </tr>
</tbody>
</table>

```yaml
services:
  demo:
  tms:
    use_grid_names: true
    # origin for /tiles service
    origin: 'nw'
  kml:
      use_grid_names: true
  wmts:
  wms:
    md:
      title: MapProxy WMS Proxy
      abstract: This is a minimal MapProxy example.

layers:
  - name: osm
    title: Omniscale OSM WMS - osm.omniscale.net
    sources: [osm_cache]

caches:
  osm_cache:
    grids: [webmercator]
    sources: [osm_wms]

sources:
  osm_wms:
    type: wms
    req:
      url: https://maps.omniscale.net/v2/demo/style.default/service?
      layers: osm

grids:
    webmercator:
        base: GLOBAL_WEBMERCATOR

globals:
```
