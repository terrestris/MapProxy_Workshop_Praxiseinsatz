# Setup

## Aufgabe 1
Öffnen Sie das Terminal (Strg+Alt+T) und überprüfen Sie ihre MapProxy-Version:

```
mapproxy-util --version
```

Auf der OS Geo LIVE 15 ist MapProxy in der Version 1.15.1 installiert. Infos über neue Features oder Änderungen in neuen Versionen sind im jeweiligen [Blog-Eintrag](https://mapproxy.org/blog/new-mapproxy-1.15.1-release/) oder direkt im [Changelog](https://github.com/mapproxy/mapproxy/blob/master/CHANGES.txt) zu finden.

## Aufgabe 2
Erstellen Sie eine Basis-Konfiguration in dem Ordner `mapproxy-ws`

```
mapproxy-util create -t base-config mapproxy-ws
```

## Aufgabe 3
Navigieren Sie in den neu erstellen Ordner (```cd mapproxy-ws```) und betrachten Sie die Dateien (z.B. mit ```ls -lah```).

In diesem Workshop werden wir hauptsächlich die Dateien `mapproxy.yaml` und `seed.yaml` arbeiten. Sie enthalten eine Beispiel-Konfiguration, die zunächst auf der MapProxy-Demo Seite betrachtet werden kann.

## Aufgabe 4
Öffnen Sie den Text-Editor FeatherPad und blenden Sie die Linenumbers ein (Strg+L). Zudem können die einzelnen whitespaces eingeblendet werden, dies kann bei der Konfiguration helfen, ist aber Geschmackssache (_Preferences_ -> _Text_ -> _Show whitespaces_).  
Öffnen Sie zunächst die zuvor erstellte `mapproxy.yaml` und lassen Sie den Editor geöffnet.

## Aufgabe 5
Starten Sie den MapProxy-Server mit dem folgenden Befehl:

```
mapproxy-util serve-develop -b 8081 mapproxy.yaml
```

Sollte der Port bereits belegt sein, ändern sie den Parameter -b (`--bind`) auf einen freien Port.

## Aufgabe 6
Rufe Sie die MapProxy Demo Seite anschließend im Browser auf.

Die Demo Seite ist nützlich, um rasch Änderungen in der Konfiguration zu überprüfen, ist aber nicht für den Produktivbetrieb notwendig. Hier werden sämtliche konfigurierte Dienste und Layer des MapProxys aufgelistet.  
Deaktivieren Sie zu Demo-Zwecken die TMS und WMTS Endpunkte und überprüfen Sie das Ergebnis auf der Demo Seite.

<details><summary>Tipp</summary>
<p>

Sie können die Endpunkte im `services` Block der `mapproxy.yaml` ausschalten.

</p>
</details>

## Aufgabe 7
Neben der MapProxy Demo, werden wir in diesem Workshop QGIS benutzen, um uns die MapProxy Layer anzuschauen. Öffnen Sie QGIS und fügen Sie den MapProxy WMS Dienst als WMS/WMTS Verbindung hinzu.

<details><summary>Tipp</summary>
<p>

Datenquellenverwaltung -> Neue WMS/WMTS Quelle -> http://localhost:8081/service

</p>
</details>
