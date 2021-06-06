# Konfiguration

MapProxy wird mittels übersichtlichen yaml-Dateien konfiguriert, wobei ebenso eine JSON-Konfiguration gültig ist. Sämtliche Beispiele in der Dokumentation sind in YAML beschrieben.  
Es sind Key-Value-Paare und Listen möglich:
  - options-name: value
  - [1,2,3]
Wichtig zu beachten:
  - korrekte Einrückung
  - Leerzeichen nach Doppelpunkt
  - Anführungszeichen um Strings -> ["EPSG:4326"]

Die zentrale Konfigurationsdatei ist die `mapproxy.yaml`, nachfolgend ein Auszug aus einem Beispiel:

```yaml
services:
  demo:
  wms:
    srs: ['EPSG:4326', 'EPSG:900913', 'EPSG:3857', 'EPSG:4258', 'EPSG:26915']
    # image_formats: ['image/jpeg', 'image/png']
    md:
      # metadata used in capabilities documents
      title: MapProxy WMS Proxy
      abstract: This is the fantastic MapProxy.
      online_resource: http://mapproxy.org/
      contact:
        person: Your Name Here
        position: Technical Director
      access_constraints:
        This service is intended for private and evaluation use only.
        The data is licensed as Creative Commons Attribution-Share Alike 2.0
        (http://creativecommons.org/licenses/by-sa/2.0/)
      fees: 'None'

layers:
  - name: mapnik
    title: World population (Mapnik)
    sources: [mapnik]

caches:
  mapnik_cache:
    grids: [GLOBAL_MERCATOR]
    sources: [tilestache]

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

grids:
  global_mercator_inverse:
    base: GLOBAL_MERCATOR
    origin: nw

  ```

## Seeding
Neben dieser Haupt-Konfigurationsdatei wird oftmals eine Konfigurationsdatei für eine `mapproxy-seed` eingesetzt:

```yaml
# ####################################s################################
#               MapProxy example seed configuration
# #####################################################################
#
# This is _not_ a runnable configuration, but it contains most
# available options in meaningful combinations.
#
# Use this file in addition to the documentation to see where and how
# things can be configured.

seeds:
  myseed1:
    # seed all grids of this cache
    caches: [osm_cache]
    levels:
      to: 10
    refresh_before:
      # re-generate tiles older than this date
      time: 2013-10-10T12:35:00

  myseed2:
    # seed two caches, but only GLOBAL_GEODETIC grid
    caches: [cache1, cache2]
    grids: [GLOBAL_GEODETIC]
    levels:
      to: 14
    refresh_before:
      # re-generate tiles older than the modification time
      # of this file. on linux/unix use `touch` to change the time.
      mtime: ./reseed.time

cleanups:
  cleanup_older_tiles:
    caches: [osm_cache]
    remove_before:
      days: 30
    levels:
        from: 16

  remove_complete_levels:
    caches: [cache1]
    # remove all tiles regardless of the timestamp.
    # will remove the complete level directory for `file` caches
    remove_all: true
    levels: [14, 18, 19, 20]

  remove_changes:
    caches: [cache1]
    # be careful when using cleanup with coverages, since it needs to check
    # every possible tile in this coverage (as reported by
    # `mapproxy-util grids --coverage`). only use small coverages and/or limit
    # levels
    coverages: [changed_area]
    # without remove_before: remove all tiles created before you called
    # mapproxy-seed. i.e. tiles created before with in this seed run
    # are not removed
    levels:
        from: 14
        to: 17

coverages:
  germany:
    # any source supported by OGR
    datasource: 'shps/world_boundaries_m.shp'
    where: 'CNTRY_NAME = "Germany"'
    srs: 'EPSG:3857'
  austria:
    # simple bbox
    bbox: [9.36, 46.33, 17.28, 49.09]
    srs: "EPSG:4326"
  switzerland:
    # text file with WKT (Multi)Polygons
    datasource: 'polygons/SZ.txt'
    srs: "EPSG:3857"
  changed_area:
    # example with PostGIS query
    datasource: "PG: dbname='db' host='host' user='user' password='password'"
    where: "select * from last_changes"
    srs: 'EPSG:3857'
```