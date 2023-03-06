# Grids

- Grid = Kachelgitter
- Definiert räumliche Ausdehnung jeder Kachel
- Definieren feste Auflösungen der Karten (Zoomstufen)

![Grids](/img/grids.png)

## MapProxy Standardgitter

- “Google”-Projektion (EPSG:3857):
    - GLOBAL_WEBMERCATOR
    - GLOBAL_MERCATOR
- WGS84 (EPSG:4326)
    - GLOBAL_GEODETIC

## Beispiel AdV Gitter

```yaml
grids:
  utm32_adv:
    bbox: [-46133.17, 5048875.26857567, 1206211.10142433, 6301219.54]
    srs: 'EPSG:25832'
    origin: ul
    res:
      - 4891.96981025128
      - 2445.98490512564
      - 1222.99245256282
      - 611.496226281410
      - 305.748113140705
      - 152.874056570353
      - 76.4370282851763
      - 38.2185141425881
      - 19.1092570712941
      - 9.55462853564703
      - 4.77731426782352
      - 2.38865713391176
      - 1.19432856695588
      - 0.597164283477939
      - 0.298582141738970
```