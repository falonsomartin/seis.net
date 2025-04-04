import psycopg2
from psycopg2 import sql

# Configuración para conectarse al servidor PostgreSQL
config_servidor = {
    'dbname': 'postgres',  # Base de datos predeterminada para iniciar sesión
    'user': 'postgres',
    'password': 'postgres',
    'host': 'localhost',  # Cambiar si es otro host
    'port': 5432          # Cambiar si es otro puerto
}

# Nombre de la nueva base de datos
nombre_bbdd = 'cdbm___'

# Ruta al archivo .sql
archivo_sql = 'src\cdbm.sql'

try:
    # Conectar al servidor PostgreSQL
    conn_servidor = psycopg2.connect(**config_servidor)
    conn_servidor.autocommit = True  # Permitir comandos como CREATE DATABASE
    cursor_servidor = conn_servidor.cursor()
    print("Conexión establecida con el servidor PostgreSQL.")

    # Crear la nueva base de datos
    cursor_servidor.execute(sql.SQL("CREATE DATABASE {}").format(sql.Identifier(nombre_bbdd)))
    print(f"Base de datos '{nombre_bbdd}' creada exitosamente.")

    # Cerrar conexión al servidor
    cursor_servidor.close()
    conn_servidor.close()

    # Conectar a la nueva base de datos
    config_nueva_bbdd = config_servidor.copy()
    config_nueva_bbdd['dbname'] = nombre_bbdd
    conn_nueva_bbdd = psycopg2.connect(**config_nueva_bbdd)
    cursor_nueva_bbdd = conn_nueva_bbdd.cursor()
    print(f"Conexión establecida con la base de datos '{nombre_bbdd}'.")

    # Leer y ejecutar el archivo .sql
    with open(archivo_sql, 'r') as file:
        sql_script = file.read()
    
    cursor_nueva_bbdd.execute(sql_script)
    conn_nueva_bbdd.commit()
    print(f"El archivo '{archivo_sql}' se ejecutó correctamente en la base de datos '{nombre_bbdd}'.")

except psycopg2.Error as e:
    print(f"Error: {e}")
finally:
    # Cerrar conexiones
    if 'cursor_servidor' in locals() and not cursor_servidor.closed:
        cursor_servidor.close()
    if 'conn_servidor' in locals() and not conn_servidor.closed:
        conn_servidor.close()
    if 'cursor_nueva_bbdd' in locals() and not cursor_nueva_bbdd.closed:
        cursor_nueva_bbdd.close()
    if 'conn_nueva_bbdd' in locals() and not conn_nueva_bbdd.closed:
        conn_nueva_bbdd.close()
    print("Conexiones cerradas.")