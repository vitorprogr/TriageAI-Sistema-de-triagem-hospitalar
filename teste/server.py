import mysql.connector

try:
    conexao = mysql.connector.connect(
        host="localhost",
        user="root",
        password="robson1789",
        database="tcc"
    )
    if conexao.is_connected():
        print("Conexão bem-sucedida ao banco de dados MySQL!")
except Exception as e:
    print(f"Erro ao conectar: {e}")
finally:
    if 'conexao' in locals() and conexao.is_connected():
        conexao.close()