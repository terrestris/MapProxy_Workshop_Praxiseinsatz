# Sources

## Aufgabe 1
Fügen Sie eine neue Source mit deutschlandweiter Abdeckung hinzu, beispielsweise den [BaseMapDE Dienst](https://basemap.de/web_raster/) der Adv (Arbeitsgemeinschaft der Vermessungsverwaltungen der Länder der Bundesrepublik Deutschland) mit der URL: `https://sgx.geodatenzentrum.de/wms_basemapde`  
Dies ist die Basis-URL des Dienstes, ohne Request-Parameter. Diese werden automatisch von MapProxy hinzugefügt. Neben der URL ist der Name des Layers ein verpflichtender Parameter. Ansonsten weiß MapProxy nicht, welcher Layer abgefragt werden soll. Es soll der Layer `de_basemapde_web_raster_farbe` verwendet werden.

<details><summary>Lösung</summary>
<p>

```yaml
sources:
  basemap_de_source:
    type: wms
    req:
      url: https://sgx.geodatenzentrum.de/wms_basemapde
      layers: de_basemapde_web_raster_farbe
```
</p>
</details>

## Aufgabe 2
Definieren Sie anschließend einen Layer, der sich aus dieser neuen Source speist. Es soll hier kein Cache verwendet werden, sondern direkt die Source abgesprochen werden. Betrachten Sie anschließend den neuen Layer in der MapProxy Demo (der Demo-Server startet automatisch neu, sobald Änderungen an der Konfiguration vorgenommen werden).

<details><summary>Lösung</summary>
<p>

```yaml
layers:
  - name: basemap_de
    title: Basemap DE
    sources: [basemap_de_source]
```
</p>
</details>

## Aufgabe 3
Stellen Sie die WMS-Version der neuen Source auf 1.3.0 und aktivieren Sie `legendgraphic` Option. Laden Sie den Layer in QGIS und überprüfen Sie die GetLegendGraphic Function.

**Tipp:** https://mapproxy.org/docs/1.13.0/sources.html#wms-opts

<details><summary>Lösung</summary>
<p>

```yaml
  basemap_de_source:
    type: wms
    req:
      url: https://sgx.geodatenzentrum.de/wms_basemapde
      layers: de_basemapde_web_raster_farbe
    wms_opts:
      version: 1.3.0
      legendgraphic: true
```
</p>
</details>

## Aufgabe 4
Fügen Sie eine weitere Source und einen entsprechenden Layer für den DOP 20 2022 Dienst Berlins hinzu.  
URL: https://fbinter.stadt-berlin.de/fb/wms/senstadt/k_luftbild2022_true_rgbi
Layer: 0  
Der Layer soll ebenso in der Version 1.3.0 angefragt werden und außerdem mit transparenten Kacheln.

## Aufgabe 5
Beide Layer sollen nur für Berlin abgefragt werden. Hierfür muss eine Coverage definiert werden.
Hier führen mehrere Wege zum Ziel! Am einfachsten ist die Angabe einer Bounding Box, möglich ist aber auch die Angabe des Coverages durch externe Geodaten (Shape, GeoJSON, PostGIS) oder simple WKT-Dateien (siehe: https://mapproxy.org/docs/latest/coverages.html#coverages).  

Wechseln Sie ins Terminal, stoppen Sie den MapProxy Demo Server (Strg+C) und laden Sie mit folgendem Befehl die Umrisse Berlins herunter (Quelle: daten.odis-berlin.de:  
`wget https://tsb-opendata.s3.eu-central-1.amazonaws.com/bezirksgrenzen/bezirksgrenzen.geojson -O berlin_bezirke.geojson`

Verwenden Sie das heruntergeladene `geojson`, um die Coverage für beide Sourcen zu definieren.  
Vergessen Sie nicht, den MapProxy Demo Server wieder zu starten.

<details><summary>Lösung (für eine source)</summary>
<p>

```yaml
  dop20_source:
    type: wms
    req:
      url: https://fbinter.stadt-berlin.de/fb/wms/senstadt/k_luftbild2022_true_rgbi
      layers: 0
      transparent: true
    wms_opts:
      version: 1.3.0
    coverage:
      datasource: ./berlin_bezirke.json
      srs: EPSG:4326
```
</p>
</details>

## Aufgabe 6
Standardmäßig liefert MapProxy folgende EPSG-Codes aus:
```
<CRS>EPSG:4258</CRS>
<CRS>EPSG:3857</CRS>
<CRS>EPSG:4326</CRS>
<CRS>EPSG:900913</CRS>
<CRS>CRS:84</CRS>
```
Dies kann den Capabilities-Dokument entnommen werden: http://localhost:8080/service?REQUEST=GetCapabilities.

Ändern Sie die Konfiguration für den WMS-Endpunkt: Der Dienst soll nur in `EPSG:25833` ausgeliefert werden.

**Tipp:** https://mapproxy.org/docs/nightly/services.html#srs

<details><summary>Lösung</summary>
<p>

```yaml
services:
  demo:
  wms:
    srs: ['EPSG:25833']
    md:
      title: MapProxy WMS Proxy
      abstract: This is a minimal MapProxy example.
```
</p>
</details>

# Aufgabe 7
Beide Sourcen sollen nur in `EPSG:25833` angefragt werden.

<details><summary>Lösung</summary>
<p>

```yaml
sources:
  basemap_de_source:
    type: wms
    req:
      url: https://sgx.geodatenzentrum.de/wms_basemapde
      layers: de_basemapde_web_raster_farbe
    supported_srs: ['EPSG:25833']
    wms_opts:
      version: 1.3.0
      legendgraphic: true
    coverage:
      datasource: ./berlin_bezirke.json
      srs: EPSG:4326
```
</p>
</details>

## Aufgabe 8
Definieren Sie eine weitere WMS Source mit den Namen `ortsteile`:  
URL: `https://fbinter.stadt-berlin.de/fb/wms/senstadt/wmsk_alkis`   
Layer: `34`  
Transparent, Version 1.3.0
