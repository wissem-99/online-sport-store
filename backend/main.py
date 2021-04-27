from typing import Optional
from fastapi import FastAPI , Request
import mysql.connector
from pydantic import BaseModel
import json
from fastapi.middleware.cors import CORSMiddleware
from starlette.requests import ClientDisconnect
from starlette.routing import NoMatchFound
app = FastAPI()#snaana Instance mel fastapi mteena

#Hnee faza mtaa security , mele5er el fast api maykhalich eli yji yebaath alih des requetes donc ena zedt el serveur mtaa el angular lel origins w kotlou trustih
origins = [
    "http://localhost",
    "http://localhost:4200",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



@app.post("/add")
async def add(request:Request):
    mydb = mysql.connector.connect(host = "localhost" , user = "root" , password = "" , database = "boutique")
    mycursor = mydb.cursor()#snaana cursor ala el db 
    body = json.loads(await request.body())#khdhina el body mtaa el requete post mteena w radineh objet json
    #executina instruction mtaa insert w ki hachtna b variable mel body il suffit naamlou {body['{esm_el_attribut}']}
    mycursor.execute(f"INSERT INTO `client` ( `nom`, `prenom`, `mail`, `adr`, `mdp`) VALUES ( '{body['nom']}', '{body['prenom']}', '{body['mail']}'  , '{body['adr']}' , '{body['mdp']}');")
    mydb.commit()#commit bech nsajlou fel BD
    return {"done"}

@app.get("/verif")
async def verif(request:Request):
    mydb = mysql.connector.connect(host = "localhost" , user = "root" , password = "" , database = "boutique")
    mycursor = mydb.cursor()#snaana cursor ala el db 
    
    mycursor.execute(f"select `mail` , `mdp`  from  `client`")
    row_headers=[x[0] for x in mycursor.description]
    rv = mycursor.fetchall()
    json_data=[]
    for result in rv:
        json_data.append(dict(zip(row_headers,result)))
    return json_data
    
@app.get("/va")
async def va(request:Request):
    mydb = mysql.connector.connect(host = "localhost" , user = "root" , password = "" , database = "boutique")
    mycursor = mydb.cursor()#snaana cursor ala el db 
    mycursor.execute(f"select `id` , `mdp`  from  `admin`")
    row_headers=[x[0] for x in mycursor.description]
    rv = mycursor.fetchall()
    json_data=[]
    for result in rv:
        json_data.append(dict(zip(row_headers,result)))
    return json_data
    

@app.post("/addp")
async def addp(request:Request):
    mydb = mysql.connector.connect(host = "localhost" , user = "root" , password = "" , database = "boutique")
    mycursor = mydb.cursor()#snaana cursor ala el db 
    body = json.loads(await request.body())#khdhina el body mtaa el requete post mteena w radineh objet json
    #executina instruction mtaa insert w ki hachtna b variable mel body il suffit naamlou {body['{esm_el_attribut}']}
    mycursor.execute(f"INSERT INTO `produit` ( `idp`, `libp`,`prix` ,`qt`, `cat`, `php`) VALUES ( '{body['idp']}', '{body['libp']}', '{body['prix']}'  , '{body['qt']}' , '{body['cat']}' , '{body['php']}' );")
    mydb.commit()#commit bech nsajlou fel BD
    return {"done"}


@app.get("/cons")
async def cons(request:Request):
    mydb = mysql.connector.connect(host = "localhost" , user = "root" , password = "" , database = "boutique")
    mycursor = mydb.cursor()#snaana cursor ala el db 
    
    mycursor.execute(f"select *  from  `produit`")
    row_headers=[x[0] for x in mycursor.description]
    rv = mycursor.fetchall()
    json_data=[]
    for result in rv:
        json_data.append(dict(zip(row_headers,result)))
    return json_data    

@app.post("/supp")
async def supp(request:Request):
    mydb = mysql.connector.connect(host = "localhost" , user = "root" , password = "" , database = "boutique")
    mycursor = mydb.cursor()#snaana cursor ala el db 
    body = json.loads(await request.body())
    mycursor.execute(f"delete   from  `produit` where idp = '{body['idp']}'")
    mydb.commit()#commit bech nsajlou fel BD
    return {"done"}

@app.post("/modif_prix")
async def modif_prix(request:Request):
    mydb = mysql.connector.connect(host = "localhost" , user = "root" , password = "" , database = "boutique")
    mycursor = mydb.cursor()#snaana cursor ala el db 
    body = json.loads(await request.body())
    mycursor.execute(f"update `produit` set `prix`='{body['prix']}'  where idp = '{body['idp']}'")
    mydb.commit()#commit bech nsajlou fel BD
    return {"done"}

@app.post("/modif_qt")
async def modif_qt(request:Request):
    mydb = mysql.connector.connect(host = "localhost" , user = "root" , password = "" , database = "boutique")
    mycursor = mydb.cursor()#snaana cursor ala el db 
    body = json.loads(await request.body())
    mycursor.execute(f"update `produit` set `qt`= '{body['qt']}'  where idp = '{body['idp']}'")
    mydb.commit()#commit bech nsajlou fel BD
    return {"done"}

@app.get("/cons_hom")
async def cons_hom(request:Request):
    mydb = mysql.connector.connect(host = "localhost" , user = "root" , password = "" , database = "boutique")
    mycursor = mydb.cursor()#snaana cursor ala el db 
    
    mycursor.execute(f"select *  from  `produit` where `cat`='homme' ")
    row_headers=[x[0] for x in mycursor.description]
    rv = mycursor.fetchall()
    json_data=[]
    for result in rv:
        json_data.append(dict(zip(row_headers,result)))
    return json_data   

@app.get("/cons_fem")
async def cons_fem(request:Request):
    mydb = mysql.connector.connect(host = "localhost" , user = "root" , password = "" , database = "boutique")
    mycursor = mydb.cursor()#snaana cursor ala el db 
    
    mycursor.execute(f"select *  from  `produit` where `cat`='femme' ")
    row_headers=[x[0] for x in mycursor.description]
    rv = mycursor.fetchall()
    json_data=[]
    for result in rv:
        json_data.append(dict(zip(row_headers,result)))
    return json_data   

@app.get("/cons_enf")
async def cons_enf(request:Request):
    mydb = mysql.connector.connect(host = "localhost" , user = "root" , password = "" , database = "boutique")
    mycursor = mydb.cursor()#snaana cursor ala el db 
    
    mycursor.execute(f"select *  from  `produit` where `cat`='enfants' ")
    row_headers=[x[0] for x in mycursor.description]
    rv = mycursor.fetchall()
    json_data=[]
    for result in rv:
        json_data.append(dict(zip(row_headers,result)))
    return json_data       

@app.get("/cons_acc")
async def cons_acc(request:Request):
    mydb = mysql.connector.connect(host = "localhost" , user = "root" , password = "" , database = "boutique")
    mycursor = mydb.cursor()#snaana cursor ala el db 
    
    mycursor.execute(f"select *  from  `produit` where `cat`='Accessoires' ")
    row_headers=[x[0] for x in mycursor.description]
    rv = mycursor.fetchall()
    json_data=[]
    for result in rv:
        json_data.append(dict(zip(row_headers,result)))
    return json_data   

@app.get("/cons_profil")
async def cons(request:Request):
    mydb = mysql.connector.connect(host = "localhost" , user = "root" , password = "" , database = "boutique")
    mycursor = mydb.cursor()# 
    mycursor.execute(f"select *  from `client`")
    row_headers=[x[0] for x in mycursor.description]
    rv = mycursor.fetchall()
    json_data=[]
    for result in rv:
        json_data.append(dict(zip(row_headers,result)))
    return json_data    

@app.post("/modif_adr")
async def modif_adr(request:Request):
    mydb = mysql.connector.connect(host = "localhost" , user = "root" , password = "" , database = "boutique")
    mycursor = mydb.cursor()#snaana cursor ala el db 
    body = json.loads(await request.body())
    mycursor.execute(f"update `client` set `adr`= '{body['adr']}'  where `mail`= '{body['mail']}'")
    mydb.commit()#commit bech nsajlou fel BD
    return {"done"}  

@app.post("/modif_mdp")
async def modif_mdp(request:Request):
    mydb = mysql.connector.connect(host = "localhost" , user = "root" , password = "" , database = "boutique")
    mycursor = mydb.cursor()#snaana cursor ala el db 
    body = json.loads(await request.body())
    mycursor.execute(f"update `client` set `mdp`= '{body['mdp2']}'  where `mail`= '{body['mail']}' and `mdp`= '{body['mdp1']}' ")
    mydb.commit()#commit bech nsajlou fel BD
    return {"done"}  