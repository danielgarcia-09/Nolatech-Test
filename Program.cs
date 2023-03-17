using System.Text.Json;
using Microsoft.Data.SqlClient;

namespace sqltest
{
    class Program
    {
        static void Main(string[] args)
        {
            try 
            { 
                SqlConnectionStringBuilder builder = new SqlConnectionStringBuilder();
                builder.DataSource = "localhost"; 
                builder.UserID = "sa";            
                builder.Password = "0913";     
                builder.InitialCatalog = "master";
                builder.Encrypt = false;
                using (SqlConnection connection = new SqlConnection(builder.ConnectionString))
                {
                    Console.WriteLine("\nQuery data example:");
                    Console.WriteLine("=========================================\n");

                    String sql = "SELECT c.ClienteId 'clientId', p.IdProducto 'productoId', p.Nombre 'productoNombre', c.Nombres 'clientNombre', cc.Cantidad FROM db1.dbo.clientes c, db2.dbo.productos p, db2.dbo.carrito_compras cc WHERE c.ClienteId = cc.IdCliente AND p.IdProducto = cc.IdProducto";

                    using (SqlCommand command = new SqlCommand(sql, connection))
                    {
                        connection.Open();
                        using (SqlDataReader reader = command.ExecuteReader())
                        {
                            while (reader.Read())
                            {
                                Console.Write(JsonSerializer.Serialize(new {
                                    clientId = reader.GetGuid(0),
                                    productoId = reader.GetGuid(1),
                                    productoNombre = reader.GetString(2),
                                    clientNombre = reader.GetString(3),
                                    cantidad = reader.GetInt32(4)
                                })+ "\n");
                            }
                        }
                    }
                }
            }
            catch (SqlException e)
            {
                Console.WriteLine(e.ToString());
            }
            Console.ReadLine();
        }
    }
}