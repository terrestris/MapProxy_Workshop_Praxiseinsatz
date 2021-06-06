---
title: Einleitung
type: docs
---

<link rel="stylesheet" href="./assets/custom.css">

# Einleitung

## Was ist MapProxy?

MapProxy ist eine quelloffene, performante und funktionsreiche Software-Lösung zum Beschleunigen, Cachen, Weiterleiten und Absichern von Diensten. Gestartet in 2008 von der Firma [Omniscale](https://www.omniscale.de), hat sich MapProxy zu einem viel genutzten, etablierten OS Geo Tool entwickelt, *dass nicht mehr wegzudenken ist*. MapProxy ist in Python geschrieben und folglich OS-unabhängig, es werden verschiedene Python-Bibliotheken benötigt (bspw. für die Projizierung und Bildprozessierung).

| Entwickelt in | Python                      |
|---------------|-----------------------------|
| Läuft auf     | Linux/Unix Windows, Docker  |
| Lizenz        | Apache Software Licence 2.0 |

## Was kann MapProxy?

- Vorhandene Dienste Cachen in den unterschiedlichsten Formaten
- Dienste Kombinieren
- Dienste Absichern
- Reprojizieren
- Maßstabskonfigurationen
- Clipping (Dienste auf Masken zuschneiden, Union, Difference, Intersection)
- Bildoptimierende Prozessierungen
- Wasserzeichen
- GetFeatureInfo-Durchleiten
- Individuelles Planen/Managen Erstellen von Caches
- Nachträgliche Bildbearbeitung (z.B. Kanalkombinationen, Komposite erstellen, Graustufen)
- HQ / Retina Kacheln erzeugen

![Konfig-Überblick.png](/img/mapproxy-overview.png)

## Wer entwickelt MapProxy?
Ein internationales Team von Entwicklern - jeder ist willkommen zur Weiterentwicklung beizutragen. Die Diskussion für neue Features läuft über die [Mailingliste](https://mapproxy.org/support) und direkt im [github Repository](https://github.com/mapproxy).

## Wie bekomme ich Support für die Software?

Es gibt verschiedene Wege Support für MapProxy zu bekommen:
- Nutzung der Mailingliste (Archiv oder neues Problem schildern)
- Github
- Stackoverflow
- Support-Dienstleistung von GIS-Firma beziehen
