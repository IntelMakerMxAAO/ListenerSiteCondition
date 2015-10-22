# ListenerSiteCondition
Proyecto con Intel Edison para monitorear las condiciones de un site mediante diversos sensores.


El Site es un centro de procesamiento de datos, en este lugar se encuentras los recursos necesarios para el porcesamiento de la onformación deuna organización.

Debido a la gran importancia del site para una organización se implementará un proyecto en donde con la yuda de la placa Intel Edison y algunos sensores Grove se controlará el site. 

Los sensores que se usarán serán:
* Sensor de calidad del aire Grove 101020078: Este sensor no evaluará las condiciones con las que se encuentra el aire dentro del site, la actividad principal sera evaluar si hay humo por equis razón, y si lo hay mandar alerta.
* Sensor de Infrarrojo reflectivo Grove WLS07061P: Detectará si la puerta esta abierta o esta cerrada.
* Sensor de luz Grove SEN11302P: evaluará porque hay luz y si hay alguien dentro del site.
* Sensor de temperatura Grove SEN23292P: Este sensor medirá la temperatura y asi apagar o encender el aire acondicionado.
* Sensor de sonido Grove SEN12945P: Mandará alerta que hay ruido cuando no hay nadie dentro del site.
* Sensor de fuego Grove 101020049: Detectará el fuego dentro del site y este alertará rapidamente mediante un mensaje de texto.
