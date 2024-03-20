# Caches

## Aufgabe 1
Konfigurieren Sie einen Cache für die Source `dop20_source` (zunächst für das Grid `webmercator`). Stellen Sie anschließend die Source für den Layer `dop20` auf diesen Cache um.  
Erzeugen Sie manuell Requests an den Layer, um den Cache aufzubauen. Hierzu zoomen und panen Sie einfach in der MapProxy Demo oder in QGIS auf dem Layer umher. Die Standard-Caching Konfiguration erzeugt Kacheln im Dateisystem. Vergewissern Sie sich, dass im Ordner `cache_data` ein Unterordner für den entsprechenden Layer erstellt wurde und Kacheln abgelegt wurden.

<details><summary>Lösung</summary>
<p>

```yaml
layers:
  - name: dop20
    title: DOP20 Hamburg
    sources: [dop20_cache, ortsteile_source]

caches:
  dop20_cache:
    grids: [webmercator]
    sources: [dop20_source]
```
</p>
</details>

> ⚡️
> Beachten Sie, dass der Layer `dop20` sich zum einen aus dem Cache `dop20_cache` speist und zum anderen aus der Source `ortsteile_source`. Was kann das für praktische Gründe haben? 

## Aufgabe 2
Löschen Sie den vorhandenen Cache mit `rm -rf cache_data`. Stellen Sie das Cache-Format auf `sqlite` um.

<details><summary>Lösung</summary>
<p>

```yaml
caches:
  dop20_cache:
    grids: [webmercator]
    sources: [dop20_source]
    cache:
      type: sqlite
```
</p>
</details>

Erzeugen Sie manuell Cache Tiles und beobachten Sie das Ergebnis im Cache Ordner. Welche Vorteile hat das `sqlite` Format gegenüber dem Cache Typ `file`?

## Bonus 🎁

## Aufgabe 3
Der Cache wird momentan im default Grid `webmercator` angelegt. Dies soll auf UTM 33N geändert werden.  
Definieren Sie ein neues Grid für die UTM Zone 33N (EPSG:25833):  

```yaml
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

> ☝ Informationen über das AdV Grid: WMTS Profil unter https://www.adv-online.de/AdV-Produkte/Standards-und-Produktblaetter/AdV-Profile/

Verwenden Sie das neue Grid für den Cache `dop_20_cache`.

> 💡 Mit diesem Befehl können Sie überprüfen, welche Grid Definitionen verfügbar sind:  
> `mapproxy-util grids --all -f mapproxy.yaml`  

<details><summary>Lösung</summary>
<p>

```yaml
caches:
  dop20_cache:
    grids: [utm32n_adv]
    sources: [dop20_source]
    cache:
      type: sqlite
```
</p>
</details>
