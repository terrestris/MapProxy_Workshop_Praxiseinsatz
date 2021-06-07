# Caches

## Aufgabe 1:
Konfigurieren Sie einen Cache für den Layer `zürich_ortho` (zunächst nur für das Grid `webmercator`). Stellen Sie anschließend die Source für den Layer `zürich_orthofoto` auf diesen Cache um.  
Erzeugen Sie manuell Requests an den Layer, um den Cache aufzubauen. Hierzu zoomen und panen Sie einfach in der MapProxy Demo auf dem Layer umher. Die Standard-Caching Konfiguration erzeugt Kacheln im Dateisystem. Vergewissern Sie sich, dass im Ordner `cache_data` ein Unterordner für den entsprechenden Layer erstellt wurde und Kacheln abgelegt wurden.

{{< expand >}}
```yaml
layers:
(...)
  - name: zürich_orthofoto
    title: Zürich Orthofoto Sommer
    sources: [zürich_cache]

caches:
  osm_cache:
    grids: [webmercator]
    sources: [osm_wms]
  zürich_cache:
    grids: [webmercator]
    sources: [zürich_ortho]
```
{{< /expand >}}

## Aufgabe 2:
Definieren Sie ein neues Grid für die UTM Zone 32N (EPSG:25832) in den Maßstäben 25.000, 10.000, 5000, 2.500 und 1.000.  
Es gibt viele Parameter für eine [Grid-Konfiguration](https://mapproxy.org/docs/latest/configuration.html#id6), beschränken Sie sich zunächst auf:
- bbox (siehe https://epsg.io/25832)
- ggf. bbox_srs
- origin (nw = upperleft corner)
- res

Für letzteren Parameter kann das Tool `mapproxy-util scales` verwendet werden. Infos: https://mapproxy.org/docs/latest/mapproxy_util.html#scales  

Verwenden Sie das neu erstellte Grid für den oben erzeugten Cache `zürich_cache`.

{{< expand >}}
```yaml
grids:
    webmercator:
        base: GLOBAL_WEBMERCATOR
    utm32n:
      bbox: [-16.1, 32.88, 40.18, 84.17]
      bbox_srs: 'EPSG:4326'
      srs: EPSG:25832
      origin: nw
      res: [
         #  res            level     scale @90.7 DPI
            7.0000000000, #  0       25000.00000000
            5.6000000000, #  1       20000.00000000
            4.2000000000, #  2       15000.00000000
            2.8000000000, #  3       10000.00000000
            1.4000000000, #  4        5000.00000000
            0.7000000000, #  5        2500.00000000
            0.2800000000, #  6        1000.00000000
    ]
```
{{< /expand >}}

## Aufgabe 3:

Definieren Sie ein neues Falschfarben-Komposit für den `zürich_cache`, in dem Sie die Farbkanäle vertauschen.  
Infos: https://mapproxy.org/docs/latest/configuration.html#band-merging

## Lösung:

{{< expand >}}
```yaml
caches:
  osm_cache:
    grids: [webmercator]
    sources: [osm_wms]
  zürich_cache:
    grids: [utm32n]
    sources:
      r: [{source: zürich_ortho, band: 2}]
      g: [{source: zürich_ortho, band: 0}]
      b: [{source: zürich_ortho, band: 1}]
```
{{< /expand >}}
