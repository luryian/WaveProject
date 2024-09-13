import requests
import json
import pandas as pd

#tentando implemenetar com o firebase_admin
import firebase_admin 
from firebase_admin import credentials, firestore
#chave privada 
cred = credentials.Certificate('src\Planilha\wave-dd43a-firebase-adminsdk-35bjv-513f0bd271.json')
#inicilizar o app Firebase
firebase_admin.initialize_app(cred)
#conectar com o firestore
db = firestore.client()




arquivo_EXCEL = "https://docs.google.com/spreadsheets/d/18x2tI2JFE29oslPaQSVjkKOlStn2OK_cXgMwsG_G8gY/edit?usp=sharing"
ler = pd.read_excel(arquivo_EXCEL)
link = 'https://console.firebase.google.com/project/wave-dd43a/firestore/data'






#passar pela planilha categorizando as colunas
for i, DADOS in ler.iterrows():
    nome = ler.loc[i,'Nome do Projeto']
    ID = ler.loc[i,'Código do Projeto']
    Carga = ler.loc[i,'Horas semanais']
    Cordenador = ler.loc[i,'Servidor(es)']
    status = ler.loc[i,'Fim do Projeto (Participação)']
    inicio = ler.loc[i, 'Início do Projeto (Participação)']
    empresa = ler.loc[i,'Órgão de Fomento\n(empresa)']
    Remuneracao = ler.loc[i,'Remuneração']
    print(i,nome)
    print(i,ID)
    print(i,Carga)
    print(i,Cordenador)
    print(i,status)
    print(i,inicio)
    print(i,empresa)
    print(i,Remuneracao)
  
    #post no firestore
    doc_ref = db.collection('projetos').document()
    doc_ref.set ({

                  'nome': nome, 
                  'ID': ID,
                    'Carga': f'{Carga}',
                    'Codernador': Cordenador,
                    'Status': f'{status}',
                    'Inicio': f'{inicio}',
                    'Empresa': f'{empresa}',
                    'Remuneração': f'{Remuneracao}'

                  })