CREATE TABLE clientes (
    ClienteId UNIQUEIDENTIFIER PRIMARY KEY default NEWID(),
    Nombres VARCHAR(255),
    Email VARCHAR(65)
)

CREATE TABLE productos (
    IdProducto UNIQUEIDENTIFIER PRIMARY KEY default NEWID(),
    Nombre VARCHAR(60)
)

CREATE TABLE carrito_compras(
    IdCliente VARCHAR(25),
    IdProducto VARCHAR(25),
    Cantidad int
)

--! Tarea 1

SELECT c.ClienteId 'clientId', p.IdProducto 'productoId', p.Nombre 'productoNombre', c.Nombres 'clientNombre', cc.Cantidad  from clientes c 
inner join carrito_compras cc on cc.IdCliente = c.ClienteId 
inner join productos p on cc.IdProducto = p.IdProducto 


--? Tarea 2
SELECT c.ClienteId 'clientId', p.IdProducto 'productoId', p.Nombre 'productoNombre', c.Nombres 'clientNombre', cc.Cantidad
FROM db1.dbo.clientes c, db2.dbo.productos p, db2.dbo.carrito_compras cc 
WHERE c.ClienteId = cc.IdCliente AND p.IdProducto = cc.IdProducto 


