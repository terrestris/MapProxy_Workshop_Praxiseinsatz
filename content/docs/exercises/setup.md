# Setup

1. Öffnen Sie das Terminal (Strg+Alt+T) und überprüfen Sie ihre MapProxy-Version:

```
mapproxy-util --version
```

Auf der OS Geo LIVE 14 ist MapProxy in der Version 1.13 installiert. Infos über neue Features oder Änderungen in neuen Versionen sind im jeweiligen [Blog-Eintrag](https://mapproxy.org/blog/new-mapproxy-1.13.0-release/) zu finden.

2. Erstellen Sie eine Basis-Konfiguration in dem Ordner `mapproxy-ws`


```
mapproxy-util create -t base-config mapproxy-ws
```

3. Navigieren Sie in den neu erstellen Ordner (```cd mapproxy-ws```) und betrachten Sie die Dateien (z.B. mit ```ls -lah```).

In diesem Workshop werden wir hauptsächlich die Dateien `mapproxy.yaml` und `seed.yaml` arbeiten. Sie enthalten eine Beispiel-Konfiguration, die zunächst in der MapProxy-Demo Seite betrachtet werden können.

4. Starten Sie den MapProxy-Server mit dem folgenden Befehl:

```
mapproxy-util serve-develop -b 8081 mapproxy.yaml
```

Sollte der Port bereits belegt sein, ändern sie den Parameter -b (`--bind`) auf einen anderen Port.

5. Rufen Sie die MapProxy Demo Seite anschließend im Browser auf.

Die Demo Seite ist nützlich, um rasch Änderungen in der Konfiguration zu überprüfen, ist aber nicht für den Produktivbetrieb notwendig. Hier werden sämtliche konfigurierte Dienste und Layer des MapProxys aufgelistet.  
Deaktivieren Sie zu Demo-Zwecken die TMS und WMTS Endpunkte und überprüfen Sie das Ergebnis auf der Demo Seite.

6. Neben der MapProxy Demo, werden wir in diesem Workshop QGIS benutzen, um uns die MapProxy Layer anzuschauen. Öffnen Sie QGIS und fügen Sie den MapProxy WMS Dienst als WMS/WMTS Verbindung hinzu.
```
Tipp: Datenquellenverwaltung -> Neue WMS/WMTS Quelle -> http://localhost:8081/service
```
