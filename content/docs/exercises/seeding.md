# Seeding

## Aufgabe 1:
Definieren Sie eine Seed Task in der `seed.yaml` für ersten 2 Level des `zürich_cache`. Hierbei soll ein Coverage verwendet werden, dass einen kleinen Ausschnitt von Zürich abbildet (z.B. die Altstadt).  
__Hinweise:__ Existierende `seed.yaml`, https://mapproxy.org/docs/latest/seed.html.

## Aufgabe 2:
Definieren Sie eine Cleanup Task, die sämtliche Kacheln des ersten Levels entfernt.

## Lösung angepasste seed.yaml
{{< expand >}}
```yaml
seeds:
  seed_zürich:
    caches: [zürich_cache]
    grids: ['utm32n']
    coverages: ['zürich_city']
    levels:
      to: 2
      
cleanups:
  cleanup_older_tiles:
    caches: [zürich_cache]
    remove_all: true
    levels:
        to: 1

coverages:
  zürich_city:
    bbox: [8.5226440429687500, 47.3621995088096170, 8.5578775405883789, 47.3832414117836080]
    srs: 'EPSG:4326'
```
{{< /expand >}}

## Lösung Seeding Befehle

{{< expand >}}
```
mapproxy-seed -s seed.yaml -f mapproxy.yaml --seeed seed_zürich
mapproxy-seed -s seed.yaml -f mapproxy.yaml --cleanup cleanup_all_tiles
```
{{< /expand >}}
