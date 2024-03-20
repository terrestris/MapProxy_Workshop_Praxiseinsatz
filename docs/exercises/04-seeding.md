# Seeding

Als Seeding wird das automatische Generieren von Caches bezeichnet. Hierbei fragt MapProxy die Source strukturiert ab und speichert die Antworten im definierten Cache Format.  
> ⚠️ Vor größeren Seedings sollte abgesichert sein, dass man man den Quell-Dienst auch automatisch abfragen darf. Seeding kann sehr viel Traffic auf den Servern verursachen und diese ggf. überlasten.

## Aufgabe 1
Definieren Sie einen Seed Task in der `seed.yaml` für die Level 6-8 des `dop20_cache`. Hierbei soll ein Coverage verwendet werden, das nur den Bezirk Mitte abbildet.  
Hinweise: Existierende `seed.yaml` als Basis nehmen.

🕵 Dokumentation: https://mapproxy.github.io/mapproxy/latest/seed.html

<details><summary>Lösung angepasste seed.yaml</summary>
<p>

```yaml
coverages:
  mitte:
    datasource: berlin_bezirke.geojson
    srs: "EPSG:4326"
    where: "Gemeinde_name='Mitte'"

seeds:
  dop20_seed:
    caches: [dop20_cache]
    grids: [webmercator]
    coverages: [mitte]
    levels: [7,8,9,10]
```
</p>
</details>

Führen Sie die Seeding Task interaktiv aus:   
`mapproxy-seed -s seed.yaml -f mapproxy.yaml -i`

Probieren Sie Parameter `--summary` und `--dry-run` aus.

## Aufgabe 2
Definieren Sie eine Cleanup Task, die sämtliche Kacheln der Level 7 und 8 entfernt.  
Führen Sie einen Befehl aus, der NUR diese cleanup task ausführt.

<details><summary>Lösung</summary>
<p>

```yaml
cleanups:
  cleanup_lower_levels:
    caches: [dop20_cache]
    remove_all: true
    levels: [7,8]
```

`mapproxy-seed -s seed.yaml -f mapproxy.yaml --cleanup=cleanup_lower_levels`
</p>
</details>
