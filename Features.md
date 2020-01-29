# URide

## Features

| Feature | Beschreibung | Priorität | Geschätzter Aufwand | Betroffene Schichten |
|---------|--------------|-----------|--------------------|---------------------|
| **Speichern der GPX-Daten** | Der Nutzer soll bereits aufegezeichente GPX-Daten hochladen und auf der Datenbank speichern können. Und diese lesbar zur Verfügung zu stellen. | hoch (kritisch) | 1 Tag | Datenbank, Javascript |
| **Profil erstellen** |Der Nutzer soll sein eigenes Profil erstellen können|mittel|1 Tag|UI, Javascript|
| **Profil editieren** | Nutzer können eigene Daten wie Name, Alter, Größe, Geschlecht, Gewicht eingeben | mittel (unkritisch) | 0.5 Tage | UI, Datenbank, Javascript |
| **Werte aus Profil** |Aus den eingebenen Werten des Nutzers wird der BMI berechnet und somit hinweise gegeben über die Körperliche Fitness.|1 Tag |mittel|UI, Datenbank, Javascript|
| **Ziele setzen** |Der Nutzer kann sich selbst Tages/Wochen Ziele setzen. Für die er auch eine Errinnerung erhält, was er noch vor sich hat oder ob er mit dem Training hinterher hängt.|1 Tag|mittel|UI, Datenbank, Javascript|
| **Anzahl nach Zeiten anzeigen** | Nutzer können auswählen in welchem Zeitraum sie Ihre Aktivitäten angezeigt haben wollen. Dies kann innnerhalb einer Woche, eines Monats oder Jahr geschehen. Hierfür werden die Zeitstempel in der GPX-Datei verwendet.  | mittel (kritisch) | 1 Tag | UI, Datenbank, Javascript |
| **Statistik** | Nutzer können sich eine Statistik anzeigen lassen. In dieser kann man die gesamte Strecke anschauen die man an einem bestimmten Tag gelaufen ist. Außerdem wird die Durchschnittsgeschwindigkeit für eine Strecke berechent, indem man Anfangs und Endzeit mit der gelaufenen Strecke verrechnet. Die Höhendiffernez für eine bestimmte Strecke wird auch angezeigt. Man kann sich auch Aktivitäten pro Tag oder Woche anzeigen lassen.  | hoch (unkritisch) | 1 Tag | UI, Datenbank, Javascript |
