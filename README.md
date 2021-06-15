# serverless-challenge

Reto en el que se integra la [Star Wars API](https://swapi.py4e.com/) con el framework [Serverless](https://serverless.com/) !

### Setup

```bash
# 1) Creacion del proyecto usando este template
npm i -g serverless
serverless create \
  --template-url https://github.com/serverlesschallenge/serverless/tree/main \
  --path serverless-challenge

# 2) App Setup
npm i

# 3) Despliege en AWS
export AWS_ACCESS_KEY_ID=xxx
export AWS_SECRET_ACCESS_KEY=yyy
sls deploy

```
### Endpoints
**Obtener Planetas**
----
  Retorna la lista de planetas con sus atributos traducidos al espanol.

* **URL**

  /swapi/planets

* **Metodo:**

  `GET`

* **Respuesta exitosa:**

  * **Codigo:** 200 <br />
    **Contenido:**
    ```json
    [
        {
            "diametro": "7200",
            "nombre": "Hoth",
            "clima": "frozen",
            "residentes": [],
            "url": "https://tce76kt1tg.execute-api.us-east-1.amazonaws.com/dev/swapi/planets/d8d3dee0-cdc4-11eb-980b-d9db3bf9af20",
            "poblacion": "unknown",
            "peliculas": [
                "https://swapi.py4e.com/api/films/2/"
            ],
            "agua_superficie": "100",
            "editado": "2021-06-15T10:31:29.997Z",
            "periodo_rotacion": "23",
            "gravedad": "1.1 standard",
            "creado": "2021-06-15T10:31:29.997Z",
            "id": "d8d3dee0-cdc4-11eb-980b-d9db3bf9af20",
            "terreno": "tundra, ice caves, mountain ranges"
        }
    ]
    ```
 
* **Respuesta fallida:**

  Ninguno

* **Ejemplo de uso:**

  ```bash
    CURL -X GET https://dominio/dev/swapi/planets
  ```
**Obtener Planeta**
----
  Retorna un planeta con sus atributos traducidos al espanol.

* **URL**

  /swapi/planets/:id

* **Metodo:**

  `GET`

* **Respuesta exitosa:**

  * **Codigo:** 200 <br />
    **Contenido:** 
    ```json
    {
        "diametro": "7200",
        "nombre": "Hoth",
        "clima": "frozen",
        "residentes": [],
        "url": "https://tce76kt1tg.execute-api.us-east-1.amazonaws.com/dev/swapi/planets/d8d3dee0-cdc4-11eb-980b-d9db3bf9af20",
        "poblacion": "unknown",
        "peliculas": [
            "https://swapi.py4e.com/api/films/2/"
        ],
        "agua_superficie": "100",
        "editado": "2021-06-15T10:31:29.997Z",
        "periodo_rotacion": "23",
        "gravedad": "1.1 standard",
        "creado": "2021-06-15T10:31:29.997Z",
        "id": "d8d3dee0-cdc4-11eb-980b-d9db3bf9af20",
        "terreno": "tundra, ice caves, mountain ranges"
    }
    ```
 
* **Respuesta fallida:**

  * **Codigo:** 404 NOT FOUND <br />
    **Contenido:** `{ message : "No existe planeta con ese id!" }`

* **Ejemplo de uso:**

  ```bash
    CURL -X GET https://dominio/dev/swapi/planets/1
  ```
**Crear Planeta**
----
  Crea un planeta.

* **URL**

  /swapi/planets

* **Metodo:**

  `POST`

* **Respuesta exitosa:**

  * **Codigo:** 201 <br />
    **Contenido:** 
    ```json
    {
        "diametro": "7200",
        "nombre": "Hoth",
        "clima": "frozen",
        "residentes": [],
        "url": "https://tce76kt1tg.execute-api.us-east-1.amazonaws.com/dev/swapi/planets/d8d3dee0-cdc4-11eb-980b-d9db3bf9af20",
        "poblacion": "unknown",
        "peliculas": [
            "https://swapi.py4e.com/api/films/2/"
        ],
        "agua_superficie": "100",
        "editado": "2021-06-15T10:31:29.997Z",
        "periodo_rotacion": "23",
        "gravedad": "1.1 standard",
        "creado": "2021-06-15T10:31:29.997Z",
        "id": "d8d3dee0-cdc4-11eb-980b-d9db3bf9af20",
        "terreno": "tundra, ice caves, mountain ranges"
    }
    ```
 
* **Respuesta fallida:**

  Ninguna

* **Ejemplo de uso:**

  ```bash
    CURL -X POST https://dominio/dev/swapi/planets \
    -H "Content-Type: application/json" \
    -d
    {
        "nombre": "Hoth",
        "periodo_rotacion": "23",
        "periodo_orbita": "549",
        "diametro": "7200",
        "clima": "frozen",
        "gravedad": "1.1 standard",
        "terreno": "tundra, ice caves, mountain ranges",
        "agua_superficie": "100",
        "poblacion": "unknown",
        "residentes": [],
        "peliculas": []
    }
  ```