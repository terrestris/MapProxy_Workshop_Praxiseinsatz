# Seeding

- Flexibles erzeugen, aktualisieren, löschen
- Abhängig von
    - Zoom-Level
    - Alter der Kacheln
    - Lage

## Bausteine


<table>
<tbody>
  <tr>
    <td><i>seeds</i></td>
    <td>Welche Kacheln (neu) erzeugt werden sollen</td>
  </tr>
  <tr>
    <td><i>cleanups</i></td>
    <td>Welche Kacheln gelöscht werden sollen</td>
  </tr>
  <tr>
    <td><i>coverages</i></td>
    <td>Geometrien zum Beschränken des Seeding</td>
  </tr>
</tbody>
</table>


## Beispiel einer Seed Task
```yaml
seeds:
  myseed:
    caches: [osm_cache]
    grids: [GLOBAL_MERCATOR]
    refresh_before:
      weeks: 3
    levels:
      to: 12
```

## Seed-Tool

Erzeugt eine Übersicht über alle Tasks in einer seed-Konfiguration (-s seed.yaml) für eine MapProxy-Konfiguration (-f mapproxy.yaml):  

```
mapproxy-seed -s seed.yaml -f mapproxy.yaml --summary
```

Seed eines Tasks:  
```
% mapproxy-seed -s seed.yaml -f mapproxy.yaml --seed myseed
```

Paralleles Seeden:
```
% mapproxy-seed -s seed.yaml -f mapproxy.yaml -c 4
```

Der Seeding-Prozess kann unterbrochen und forgesetzt werden sowie terminiert werden (siehe: https://mapproxy.org/docs/latest/seed.html#options).
