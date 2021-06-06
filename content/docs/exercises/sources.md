# Sources

## Aufgabe 1:
Fügen Sie eine neue Source mit weltweiter Abdeckung hinzu, beispielsweise den TopPlusOpen Dienst des BKG (Bundesmat für Kartographie und Geodäsie) mit der URL: https://sgx.geodatenzentrum.de/wms_topplus_open

## Aufgabe 2:
Stellen Sie die WMS-Version der neuen Source auf 1.3.0 und aktivieren Sie `legendgraphic` Option. Laden Sie den Layer in QGIS und überprüfen Sie die GetLegendGraphic Function.

## Aufgabe 3:
Beschränken Sie die Source auf den Extent der Schweiz. Hier führen mehrere Wege zum Ziel! Am einfachsten ist die Angabe einer Bounding Box, möglich ist aber auch die Angabe des Coverages durch externe Geodaten (Shape, GeoJSON, PostGIS) oder simple WKT-Dateien (siehe: https://mapproxy.org/docs/latest/coverages.html#coverages).  
Verwenden Sie einmal die Methode einer einfachen Bounding box und formulieren Sie als __Bonus__ eine SQL-Abfrage für den Extent der Länder Österreich und Schweiz. Hierzu sind auf der OS Geo Live Natural Earth Daten in einer Postgres/PostGIS Datenbank hinterlegt (Tabelle: `ne_10m_admin_0_countries`).


## Lösung 3:
{{< expand >}}
```yaml
sources:
  topPlus_open_source:
    type: wms
    req:
      url: https://sgx.geodatenzentrum.de/wms_topplus_open
      layers: web
    supported_srs: ['EPSG:3857']
    wms_opts:
      version: 1.3.0
      legendgraphic: true
    coverage:
      bbox: [5.95, 45.82, 10.46, 47.80]
      srs: 'EPSG:4326'
```
{{< /expand >}}

## Lösung 3 Bonus:
{{< expand >}}
```yaml
sources:
  topPlus_open_source:
    type: wms
    req:
      url: https://sgx.geodatenzentrum.de/wms_topplus_open
      layers: web
    supported_srs: ['EPSG:3857']
    wms_opts:
      version: 1.3.0
      legendgraphic: true
    coverage:
      datasource: "PG: dbname='natural_earth2' host='localhost' user='user' password='user'"
      where: "select * from ne_10m_admin_0_countries where sov_a3='CHE' OR sov_a3='AUT'"
      srs: 'EPSG:4326'
```
{{< /expand >}}

## Aufgabe 4:
Fügen Sie eine neue WMS Source des Kantons Zürich hinzu (URL: https://wms.zh.ch/OGDOrthoZH), wählen Sie den Layer `ortho_s` und konfigurieren Sie den Dienst für die WMS-Version 1.3.0. Dieser Layer enthält Orthofotos des Kantons Zürichs aus dem Jahr 2020. 

## Aufgabe 5:
Definieren Sie `Image Format Options` für diese Source mit dem Ziel, dass die Farbe Weiß vollständig transparent wird (an den Rändern des Orthofotos befinden sich weiße Blöcke). Infos: https://mapproxy.org/docs/latest/sources.html#image  
Variieren Sie die `transparent_color_tolerance` und beobachten Sie das Ergebnis. Welcher Fehler kann an dieser Stelle entstehen?

## Lösung 4+5:
{{< expand >}}
```yaml
zürich_ortho:
    type: wms
    wms_opts:
      version: 1.3.0
    image:
      format: image/png
      transparent_color: '#ffffff'
      transparent_color_tolerance: 50
    req:
      url: https://wms.zh.ch/OGDOrthoZH
      layers: ortho_s
    coverage:
    # approx. bbox in epsg:3857
      bbox: [908057, 5965233, 1006505, 6081637]
      srs: 'EPSG:3857'
```
{{< /expand >}}
