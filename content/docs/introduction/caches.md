# Caches

{{< figure src="/img/caching_skew.png" >}}

- Zwischenspeicher für die Daten
- Standardmäßig
    - 1 Kacheln = 1 Datei
    - mehrere Quellen zusammengefasst
    - mehrere Projektionen separat

```
cache_dir/mycache_EPSG0000/12/000/001/432/000/041/322.jpg
cache_dir/mycache_EPSG1111/12/000/001/432/000/041/322.jpg
```
## Backend-Formate
- __File__
    - Kacheln im Dateisystem
- __MBTiles__ (seit 1.2.0)
    - SQLite Datenbank (1 Datei pro Cache)
- __SQLite__ (seit 1.6.0)
    - ähnlich MBTiles
    - mit Timestamps
    - eine Datei pro Level
- __GeoPackage__ (seit 1.10.0)
    - ähnlich MBTiles
    - OGC Standard 
    - deutlich komplexer da auch Vektordaten vorgesehen sind
- __ArcGIS__ Compact Cache Version 1 und 2 (seit 1.10/1.11)
    - keine Zeitstempel
- __CouchDB__ (seit 1.3.0)
    - pro Cache eine Datenbank in CouchDB
- __Riak__ (seit 1.6.0)
- __Amazon S3 Storage__ (seit 1.10.0)
- __Redis__ (seit 1.10.0)

## Beispiele

```yaml
caches:
  osm_utm32_cache:
    grids: [utm32_adv]
    sources: [osm_cache]

  osm_cache:
    grids: [GLOBAL_WEBMERCATOR]
    sources: [osm_source]
```

```yaml
caches:
  combi_cache:
    grids: [utm32_adv]
    sources: [luftbilder_wms, strassen_wms]
```
