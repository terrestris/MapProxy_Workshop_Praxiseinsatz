# Installation

Es gibt verschiende Möglichkeiten MapProxy zu installieren:
- Systemweite Installation (wie auf der OS Geo Live)  
- Virtual Environment ([Anleitung](https://mapproxy.org/docs/latest/install.html#create-a-new-virtual-environment))
- Über ein docker image (z.B. [kartoza](https://hub.docker.com/r/kartoza/mapproxy))

Für Linux-Distributionen gibt es fertige Paktequellen, die bspw. für Ubuntu über `sudo apt-get install mapproxy` installiert werden können.  
⚠️ Hierbei handelt es sich oftmals nicht um die aktuelle Version. Zudem ist nicht garantiert, dass alle benötigten Paktequellen installiert werden.  

Es wird empfholen, MapProxy über eine Virtual Environment zu installieren. Eine `virtualenv` ist eine in sich geschlossene Python-Installation, in der Sie beliebige Python-Pakete installieren können, ohne die Systeminstallation zu beeinflussen.


## Abhängigkeiten
- PyYAML
- Pillow (Python Image Library)
- pyproj
- Shapely
- GDAL
- lxml

## Produktiv-Installation (Deployment)

MapProxy implementiert das `Web Service Gateway Interface`.  
Schnittstelle Webserver ↔ Webanwendung (ähnlich CGI, FastCGI, Java Servlet API)

`maproxy-util serve-develop` startet einen einfachen HTTP-Server, der keinesfalls für den Produktiv-Einsatz gedacht ist.  
Es verschiedene Möglichkeiten für ein Produktiv-Setup:

1. Direkte Auslieferung
2. Verwendung eines Proxys
3. [Emedding](https://mapproxy.org/docs/1.13.0/deployment.html#apache-mod-wsgi) (z.B. über `mod_wsgi` extension in Apache)

![Deployment Varianten](/img/deployment_variants.png)

**Tipp:** Die [Verwendung eines Docker-Images](https://github.com/justb4/docker-mapproxy) beinhaltet bereits *ready-to-use* Konfigurationen.

In jedem Fall wird ein Server-Skript benötigt, das den konfigurierten MapProxy für den Python WSGI-Server verfügbar macht.
