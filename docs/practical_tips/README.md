---
id: tips
title: Praxistipps
sidebar_position: 4
sidebar_label: Praxistipps
---

# Praxistipps

1. Verwenden Sie `MultiMapproxy` und lagern Sie globale Konfiguration in eine `base.yaml` aus.
2. Verhindern Sie unnötige Reprojektionen und halten Sie den Cache nur in einer Projektion vor, dies ist meist ausreichend.
3. Richten Sie einen Test-Server ein.
4. Machen Sie sich mit den MapProxy Docker-Images vertraut.
5. Regelmäßige Updates.
6. Nutzen Sie `SQLITE` oder andere Datenbank Cache-Formate.
7. Nutzen Sie zur Analyse für Scales/Resolutions die debug source:
```yaml
sources:
    debug:
        type: debug
```
8. Verwenden Sie entsprechende `cronjobs` für regelmäßige Seeding und Cleanup Tasks.
9. Bei größeren Seed Aufgaben kann ein `--progress-file` von Nutzen sein.