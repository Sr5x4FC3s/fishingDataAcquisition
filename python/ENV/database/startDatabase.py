from dotenv import load_dotenv
load_dotenv()

import mysql.connector
from mysql.connector import pooling, Error
import os
import json
from pprint import pprint


mydb = mysql.connector.connect(
  host = "localhost",
  user = os.getenv("DB_USER"),
  passwd = os.getenv("DB_PASSWORD"),
  database = "fishing"
)

dbInstance = mydb.cursor()

# function: convert .js file to .json 
def convertJSON():
  with open("../../database/functions/tables/tableData.json") as dataFile:
    jsonObject = json.loads(dataFile.read())
    return jsonObject


# function: creating MySQL database
def createDatabase(): 
  dbInstance.execute("CREATE DATABASE FISHING_2")

# function: creating MySQL tables
def createTables(): 
  commandList = []
  fkCommandList = []
  tableData = convertJSON()

  for data in tableData: 
    tableName = list(data)
    createTable = "CREATE TABLE IF NOT EXISTS " + tableName[0] + " ("
    createPk = None

    if data[tableName[0]]['primary']['exists'] == True: 
      createPk = "PRIMARY KEY (" + data[tableName[0]]['primary']['key'] + ")"

    loopCounter = 0
    
    # create columns and add data type constraints 
    for columns in data[tableName[0]]['columnOptions']:
      createTable += columns + " " + data[tableName[0]]['constraintOptions'][loopCounter] + ", "
      loopCounter += 1

    for foreignKey in data[tableName[0]]['foreign']:
      createFk = "ALTER TABLE " + tableName[0] + " ADD FOREIGN KEY (" + foreignKey['pk_id'] + ") REFERENCES " + foreignKey['table'] + "(" + foreignKey['pk_id'] + ");"
      fkCommandList.append(createFk)
    
    createTable += createPk + ")"
    commandList.append(createTable)
  
  commands = {}
  commands['createTable'] = commandList
  commands['foreignKey'] = fkCommandList

  return commands

def execute(): 
  values = createTables()
  tableCommands = values['createTable']
  fkCommands = values['foreignKey']

  try: 
    createDatabase()

    for table in tableCommands: 
      print(table)
      dbInstance.execute(table)

    for fk in fkCommands: 
      print(fk)
      dbInstance.execute(fk)

  except mysql.connector.Error as err:
    print("Something went wrong: {}".format(err))

  finally: 
    print('completed')

if __name__ == "__main__":
  execute()