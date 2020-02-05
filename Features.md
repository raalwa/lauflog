# Lauflog

## Features

| Feature | Beschreibung | Priorität | Geschätzter Aufwand | Betroffene Schichten |
|---------|--------------|-----------|--------------------|---------------------|
| **Speichern der GPX-Daten** | Der Nutzer soll bereits aufgezeichente GPX-Daten hochladen und auf der Datenbank speichern können. Diese stehen dann lesbar zur Verfügung zu stellen. | hoch (kritisch) | 1 Tag | Datenbank, Javascript |
| **Profil erstellen** | Der Nutzer soll sein eigenes Profil erstellen können. | mittel(unkritisch) | 1 Tag | UI, Javascript |
| **Profil editieren** | Nutzer können eigene Daten wie Name, Alter, Größe, Geschlecht, Gewicht eingeben. Diese sollen sowohl korrigierbar (etwa bei fehlerhafter Eingabe), als auch aktualisierbar sein (etwa Gewichtsveränderung). | niedrig (unkritisch) | 0.5 Tage | UI, Datenbank, Javascript |
| **Profilansicht** | Hier werden neben den Eigenschaften des Nutzers (siehe "Profil editieren") auch allgemeine Statistikwerte angezeigt (Durchschnittsgeschwindigkeit, gesamte gelaufene Strecke, Gesamtanzahl der Aktivitäten, gesamter Energieverbrauch). Des Weiteren wird aus den eingebenen Werten des Nutzers wird der BMI berechnet, wodurch Hinweise über die körperliche Fitness gegeben werden.  | mittel | 1 Tag | UI, Datenbank, Javascript |
| **Energieberechnung** | Über die Werte der GPX-Datei (Timestamps und Distanz => Geschwindigkeit, Höhenmeter) und den Werten des Nutzers kann jeder Strecke ein ungefährer Energieverbrauch in kcal zugewiesen werden. | niedrig | 1 Tag | Datenbank, Javascript |
| **Ziele setzen** | Der Nutzer kann sich selbst Tages/Wochen Ziele setzen. Ziele können im Bezug auf Streckenlänge, Anzahl der Aktivitäten und Durchschnittsgeschwindigkeit gesetzt werden. Für diese Ziele erhält der Nutzer Erinnerungen, welche beinhalten was genau er noch vor sich hat oder ob er mit dem Training hinterher hängt. | niedrig | 1 Tag | UI, Datenbank, Javascript |
| **Kalenderansicht** | Nutzer können auswählen in welchem Zeitraum sie Ihre Aktivitäten angezeigt haben wollen. Dies kann innnerhalb einer Woche, eines Monats oder Jahr geschehen. Hierfür werden die Zeitstempel in der GPX-Datei verwendet.  | mittel (kritisch) | 1 Tag | UI, Datenbank, Javascript |
| **Aktivitätsansicht** | Wählt der Nutzer eine bestimmte gelaufene Strecke aus, werden hier zugehörige Statistiken angezeigt. Diese besteht etwa aus der Durchschnittsgeschwindigkeit, Höchstgeschwindigkeit, Gesamtzeit und Höhendifferenz. | hoch (kritisch) | 1 Tag | UI, Datenbank, Javascript |
| **Kartenansicht** | In dieser Ansicht kann sich der Nutzer jede gelaufene Strecke aus der Datenbank auf einer Karte visualisieren lassen. Außerdem können auch die gelaufenen Strecken eines Tages/einer Woche auf einmal angezeigt werden. Schnellere Abschnitte heben sich fablich ab. | mittel (kritisch) | 2 Tage | UI, Datenbank, Javascript | UI, Datenbank, Javascript |

