CREATE DATABASE Demo
GO
USE [Demo]
GO
/****** Object:  User [aspnet]    Script Date: 31/05/2019 15:58:17 ******/
CREATE USER [aspnet] FOR LOGIN [aspnet] WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  Table [dbo].[NLog]    Script Date: 31/05/2019 15:58:18 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[NLog](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Hostname] [varchar](100) NOT NULL,
	[Mensaje] [varchar](200) NOT NULL,
	[FechaHora] [datetime] NOT NULL,
 CONSTRAINT [PK_NLog] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  StoredProcedure [dbo].[NLogDelete]    Script Date: 31/05/2019 15:58:18 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

/*
    Autor : MC
    Fecha de creación : 31-05-2019
    Fecha de última modificación : 31-05-2019
    Descripción : Elimina un registro de NLog por Identificador
*/
CREATE PROCEDURE [dbo].[NLogDelete](
	@Id AS INT
)AS
BEGIN
	DELETE FROM [dbo].[NLog] 
	WHERE Id = @Id
END

GRANT EXECUTE ON dbo.NLogDelete TO aspnet
GO
/****** Object:  StoredProcedure [dbo].[NLogGetAll]    Script Date: 31/05/2019 15:58:18 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

/*
    Autor : MC
    Fecha de creación : 31-05-2019
    Fecha de última modificación : 31-05-2019
    Descripción : Obtener todos los registros de NLog
*/
CREATE PROCEDURE [dbo].[NLogGetAll]
AS
BEGIN
	SELECT 
	[Id],
	[Hostname],
	[Mensaje],
	[FechaHora]
	FROM [dbo].[NLog]
END

GRANT EXECUTE ON dbo.NLogGetAll TO aspnet
GO

/*
    Autor : MC
    Fecha de creación : 31-05-2019
    Fecha de última modificación : 31-05-2019
    Descripción : Obtener los registros paginados de NLog
*/
CREATE PROCEDURE [dbo].[NLogGetAllPaging](
	@PageNumber INT = 0,
	@PageSize INT = 0
)AS
BEGIN
	SELECT 
	[Id],
	[Hostname],
	[Mensaje],
	[FechaHora],
	CC.[Cantidad]
	FROM [dbo].[NLog]
	CROSS JOIN (SELECT Count([Id]) AS Cantidad FROM [dbo].[NLog]) AS CC
	ORDER BY Id OFFSET (@PageNumber - 1) * @PageSize ROWS 
	FETCH NEXT @PageSize ROWS ONLY; 
END

GRANT EXECUTE ON dbo.NLogGetAllPaging TO aspnet
GO

/****** Object:  StoredProcedure [dbo].[NLogGetById]    Script Date: 31/05/2019 15:58:18 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
/*
    Autor : MC
    Fecha de creación : 31-05-2019
    Fecha de última modificación : 31-05-2019
    Descripción : Obtener NLog por Identificador
*/
CREATE PROCEDURE [dbo].[NLogGetById] (
	@Id AS INT
)AS
BEGIN
	SELECT 
	[Id],
	[Hostname],
	[Mensaje],
	[FechaHora]
	FROM [dbo].[NLog]
	WHERE Id = @Id
END

GRANT EXECUTE ON dbo.NLogGetById TO aspnet
GO
/****** Object:  StoredProcedure [dbo].[NLogInsert]    Script Date: 31/05/2019 15:58:18 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
/*
    Autor : MC
    Fecha de creación : 31-05-2019
    Fecha de última modificación : 31-05-2019
    Descripción : Insertar Log
*/
CREATE PROCEDURE [dbo].[NLogInsert] (
	@Hostname AS VARCHAR(100),
	@Mensaje AS VARCHAR(200)
)AS
BEGIN
	INSERT NLog(Hostname, Mensaje, FechaHora)
	VALUES (@Hostname, @Mensaje, GETDATE())
END

GRANT EXECUTE ON dbo.NLogInsert TO aspnet
GO
/****** Object:  StoredProcedure [dbo].[NLogUpdate]    Script Date: 31/05/2019 15:58:18 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

/*
    Autor : MC
    Fecha de creación : 31-05-2019
    Fecha de última modificación : 31-05-2019
    Descripción : Actualizar NLog
*/
CREATE PROCEDURE [dbo].[NLogUpdate] (
	@Id AS INT,
	@Hostname AS VARCHAR(100),
	@Mensaje AS VARCHAR(200)
)AS
BEGIN
	UPDATE NLog
	SET Hostname = @Hostname, 
		Mensaje = @Mensaje,
		FechaHora = GETDATE()
	WHERE Id = @Id
END

GRANT EXECUTE ON dbo.NLogUpdate TO aspnet
GO