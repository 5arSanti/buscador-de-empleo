USE [master]
GO
/****** Object:  Database [PRUEBAS]    Script Date: 25/01/2024 10:24:42 a. m. ******/
CREATE DATABASE [PRUEBAS]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'PRUEBAS', FILENAME = N'E:\DATOS\PRUEBAS.mdf' , SIZE = 3935232KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'PRUEBAS_log', FILENAME = N'F:\LOGS\PRUEBAS_log.ldf' , SIZE = 2100224KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [PRUEBAS] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [PRUEBAS].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [PRUEBAS] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [PRUEBAS] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [PRUEBAS] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [PRUEBAS] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [PRUEBAS] SET ARITHABORT OFF 
GO
ALTER DATABASE [PRUEBAS] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [PRUEBAS] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [PRUEBAS] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [PRUEBAS] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [PRUEBAS] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [PRUEBAS] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [PRUEBAS] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [PRUEBAS] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [PRUEBAS] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [PRUEBAS] SET  DISABLE_BROKER 
GO
ALTER DATABASE [PRUEBAS] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [PRUEBAS] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [PRUEBAS] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [PRUEBAS] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [PRUEBAS] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [PRUEBAS] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [PRUEBAS] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [PRUEBAS] SET RECOVERY FULL 
GO
ALTER DATABASE [PRUEBAS] SET  MULTI_USER 
GO
ALTER DATABASE [PRUEBAS] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [PRUEBAS] SET DB_CHAINING OFF 
GO
ALTER DATABASE [PRUEBAS] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [PRUEBAS] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [PRUEBAS] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'PRUEBAS', N'ON'
GO
ALTER DATABASE [PRUEBAS] SET QUERY_STORE = OFF
GO
USE [PRUEBAS]
GO
/****** Object:  User [Userdesarrollo]    Script Date: 25/01/2024 10:24:42 a. m. ******/
CREATE USER [Userdesarrollo] FOR LOGIN [Userdesarrollo] WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  User [uaespe.sysbck]    Script Date: 25/01/2024 10:24:42 a. m. ******/
CREATE USER [uaespe.sysbck] FOR LOGIN [uaespe.sysbck] WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  User [cristian.ramirez]    Script Date: 25/01/2024 10:24:42 a. m. ******/
CREATE USER [cristian.ramirez] FOR LOGIN [cristian.ramirez] WITH DEFAULT_SCHEMA=[dbo]
GO
ALTER ROLE [db_backupoperator] ADD MEMBER [uaespe.sysbck]
GO
ALTER ROLE [db_denydatareader] ADD MEMBER [uaespe.sysbck]
GO
ALTER ROLE [db_denydatawriter] ADD MEMBER [uaespe.sysbck]
GO
ALTER ROLE [db_owner] ADD MEMBER [cristian.ramirez]
GO
/****** Object:  Schema [TEMPORAL]    Script Date: 25/01/2024 10:24:42 a. m. ******/
CREATE SCHEMA [TEMPORAL]
GO
/****** Object:  Table [dbo].[Vacantes_Vigentes_Completo]    Script Date: 25/01/2024 10:24:42 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Vacantes_Vigentes_Completo](
	[CODIGO_VACANTE] [varchar](20) NULL,
	[TITULO_VACANTE] [varchar](200) NULL,
	[DESCRIPCION_VACANTE] [varchar](4000) NULL,
	[NIVEL_ESTUDIOS] [varchar](300) NOT NULL,
	[DISCIPLINA_PROFESION] [varchar](300) NULL,
	[SALARIO_INGRESO] [varchar](20) NULL,
	[RANGO_SALARIAL] [varchar](100) NOT NULL,
	[CANTIDAD_VACANTES] [int] NULL,
	[CARGO] [varchar](300) NULL,
	[TIPO_DOCUMENTO_EMPLEADOR] [varchar](50) NULL,
	[NUMERO_IDENTIFICACION_EMPLEADOR] [varchar](50) NULL,
	[NOMBRE_EMPLEADOR] [varchar](300) NULL,
	[SOLICITUD_EXCEPCION_PUBLICACION] [varchar](1) NULL,
	[FECHA_PUBLICACION] [date] NULL,
	[FECHA_VENCIMIENTO] [date] NULL,
	[REGION] [varchar](255) NULL,
	[DEPARTAMENTO] [varchar](255) NULL,
	[MUNICIPIO] [varchar](255) NULL,
	[SECTOR_ECONOMICO] [varchar](200) NULL,
	[TIPO_CONTRATO] [varchar](30) NULL,
	[TELETRABAJO] [int] NULL,
	[DISCAPACIDAD] [int] NULL,
	[URL_DETALLE_VACANTE] [varchar](1000) NULL,
	[NOMBRE_PRESTADOR] [varchar](200) NULL,
	[TIPO_PRESTADOR] [varchar](100) NOT NULL,
	[DIRECTORIO_ORIGEN] [varchar](500) NULL,
	[PLATAFORMA] [varchar](255) NULL,
	[PUBLICOPRIVADO] [int] NULL,
	[EMPLEADOR] [varchar](300) NULL,
	[MESES_EXPERIENCIA_CARGO] [int] NULL,
	[FECHA_CREACION] [datetime] NULL,
	[PUNTO_ATENCION] [varchar](255) NULL,
	[HIDROCARBUROS] [int] NULL,
	[PLAZA_PRACTICA] [int] NULL,
	[BUSQUEDA] [varchar](4000) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Vacantes_Vigentes_Completo_Desgozado]    Script Date: 25/01/2024 10:24:42 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Vacantes_Vigentes_Completo_Desgozado](
	[CODIGO_VACANTE] [varchar](20) NULL,
	[TITULO_VACANTE] [varchar](200) NULL,
	[DESCRIPCION_VACANTE] [varchar](4000) NULL,
	[NIVEL_ESTUDIOS] [varchar](300) NOT NULL,
	[DISCIPLINA_PROFESION] [varchar](300) NULL,
	[SALARIO_INGRESO] [varchar](20) NULL,
	[RANGO_SALARIAL] [varchar](100) NOT NULL,
	[CANTIDAD_VACANTES] [int] NULL,
	[CARGO] [varchar](300) NULL,
	[TIPO_DOCUMENTO_EMPLEADOR] [varchar](50) NULL,
	[NUMERO_IDENTIFICACION_EMPLEADOR] [varchar](50) NULL,
	[NOMBRE_EMPLEADOR] [varchar](300) NULL,
	[SOLICITUD_EXCEPCION_PUBLICACION] [varchar](1) NULL,
	[FECHA_PUBLICACION] [date] NULL,
	[FECHA_VENCIMIENTO] [date] NULL,
	[REGION] [varchar](255) NULL,
	[DEPARTAMENTO] [varchar](255) NULL,
	[MUNICIPIO] [varchar](255) NULL,
	[SECTOR_ECONOMICO] [varchar](200) NULL,
	[TIPO_CONTRATO] [varchar](30) NULL,
	[TELETRABAJO] [int] NULL,
	[DISCAPACIDAD] [int] NULL,
	[URL_DETALLE_VACANTE] [varchar](1000) NULL,
	[NOMBRE_PRESTADOR] [varchar](200) NULL,
	[TIPO_PRESTADOR] [varchar](100) NOT NULL,
	[DIRECTORIO_ORIGEN] [varchar](500) NULL,
	[PLATAFORMA] [varchar](255) NULL,
	[PUBLICOPRIVADO] [int] NULL,
	[EMPLEADOR] [varchar](300) NULL,
	[MESES_EXPERIENCIA_CARGO] [int] NULL,
	[FECHA_CREACION] [datetime] NULL,
	[PUNTO_ATENCION] [varchar](255) NULL,
	[HIDROCARBUROS] [int] NULL,
	[BUSQUEDA] [varchar](4000) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [TEMPORAL].[Genera_Ingresos_16032022]    Script Date: 25/01/2024 10:24:42 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [TEMPORAL].[Genera_Ingresos_16032022](
	[Columna 0] [varchar](50) NULL,
	[Columna 1] [varchar](50) NULL,
	[Columna 2] [varchar](50) NULL,
	[Columna 3] [varchar](50) NULL,
	[Columna 4] [varchar](50) NULL,
	[Columna 5] [varchar](max) NULL,
	[Columna 6] [varchar](50) NULL,
	[Columna 7] [varchar](50) NULL,
	[Columna 8] [varchar](50) NULL,
	[Columna 9] [varchar](50) NULL,
	[Columna 10] [varchar](50) NULL,
	[Columna 11] [varchar](50) NULL,
	[Columna 12] [varchar](50) NULL,
	[Columna 13] [varchar](50) NULL,
	[Columna 14] [varchar](50) NULL,
	[Columna 15] [varchar](50) NULL,
	[Columna 16] [varchar](50) NULL,
	[Columna 17] [varchar](50) NULL,
	[Columna 18] [varchar](50) NULL,
	[Columna 19] [varchar](50) NULL,
	[Columna 20] [varchar](50) NULL,
	[Columna 21] [varchar](50) NULL,
	[Columna 22] [varchar](2000) NULL,
	[Columna 23] [varchar](2000) NULL,
	[Columna 24] [varchar](2000) NULL,
	[Columna 25] [varchar](50) NULL,
	[Columna 26] [varchar](2000) NULL,
	[Columna 27] [varchar](50) NULL,
	[Columna 28] [varchar](50) NULL,
	[Columna 29] [varchar](50) NULL,
	[Columna 30] [varchar](50) NULL,
	[Columna 31] [varchar](50) NULL,
	[Columna 32] [varchar](50) NULL,
	[Columna 33] [varchar](50) NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [TEMPORAL].[Generac_Ingresos]    Script Date: 25/01/2024 10:24:42 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [TEMPORAL].[Generac_Ingresos](
	[Columna_0] [varchar](max) NULL,
	[Columna_1] [varchar](max) NULL,
	[Columna_2] [varchar](max) NULL,
	[Columna_3] [varchar](max) NULL,
	[Columna_4] [varchar](max) NULL,
	[Columna_5] [varchar](max) NULL,
	[Columna_6] [varchar](max) NULL,
	[Columna_7] [varchar](max) NULL,
	[Columna_8] [varchar](max) NULL,
	[Columna_9] [varchar](max) NULL,
	[Columna_10] [varchar](max) NULL,
	[Columna_11] [varchar](max) NULL,
	[Columna_12] [varchar](max) NULL,
	[Columna_13] [varchar](max) NULL,
	[Columna_14] [varchar](max) NULL,
	[Columna_15] [varchar](max) NULL,
	[Columna_16] [varchar](max) NULL,
	[Columna_17] [varchar](max) NULL,
	[Columna_18] [varchar](max) NULL,
	[Columna_19] [varchar](max) NULL,
	[Columna_20] [varchar](max) NULL,
	[Columna_21] [varchar](max) NULL,
	[Columna_22] [varchar](max) NULL,
	[Columna_23] [varchar](max) NULL,
	[Columna_24] [varchar](max) NULL,
	[Columna_25] [varchar](max) NULL,
	[Columna_26] [varchar](max) NULL,
	[Columna_27] [varchar](max) NULL,
	[Columna_28] [varchar](max) NULL,
	[Columna_29] [varchar](max) NULL,
	[Columna_30] [varchar](max) NULL,
	[Columna_31] [varchar](max) NULL,
	[Columna_32] [varchar](max) NULL,
	[Columna_33] [varchar](max) NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [TEMPORAL].[Historico_Indicadores_Victimas]    Script Date: 25/01/2024 10:24:42 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [TEMPORAL].[Historico_Indicadores_Victimas](
	[año] [smallint] NULL,
	[mes] [smallint] NULL,
	[nombre_agencia] [varchar](max) NULL,
	[tipo_documento] [varchar](100) NULL,
	[numero_documento] [varchar](30) NULL,
	[nombres] [varchar](50) NULL,
	[apellidos] [varchar](50) NULL,
	[edad] [smallint] NULL,
	[genero] [varchar](1) NULL,
	[departamento_residencia] [varchar](100) NULL,
	[ciudad_residencia] [varchar](100) NULL,
	[fecha_remision] [varchar](23) NULL,
	[codigo_vacante] [varchar](50) NULL,
	[proceso] [varchar](2000) NULL,
	[tipo_remision] [varchar](22) NULL,
	[pertenece_hidrocarburos] [varchar](2) NULL,
	[tipo_de_proyecto_hidrocarburos] [varchar](50) NULL,
	[prestador] [varchar](300) NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [TEMPORAL].[Victimas_Orientadas]    Script Date: 25/01/2024 10:24:42 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [TEMPORAL].[Victimas_Orientadas](
	[año] [float] NULL,
	[mes] [float] NULL,
	[agencia] [nvarchar](255) NULL,
	[tipo_documento] [nvarchar](255) NULL,
	[numero_documento] [varchar](max) NULL,
	[tipo_direccionamiento] [nvarchar](255) NULL,
	[nombres] [nvarchar](255) NULL,
	[apellidos] [nvarchar](255) NULL,
	[edad] [float] NULL,
	[genero] [nvarchar](255) NULL,
	[departamento] [nvarchar](255) NULL,
	[ciudad] [nvarchar](255) NULL,
	[area] [nvarchar](255) NULL,
	[tipo] [nvarchar](255) NULL,
	[subtipo] [nvarchar](255) NULL,
	[nombre_portafolio] [nvarchar](255) NULL,
	[nombre_convocatoria] [nvarchar](255) NULL,
	[fecha_agendamiento] [nvarchar](255) NULL,
	[fecha_ejecucion] [nvarchar](255) NULL,
	[fecha_evaluacion] [nvarchar](255) NULL,
	[prestador] [nvarchar](255) NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[Vacantes_Vigentes_Completo] ADD  CONSTRAINT [DF_Vacantes_Vigentes_Completo_HIDROCARBUROS]  DEFAULT ((0)) FOR [HIDROCARBUROS]
GO
USE [master]
GO
ALTER DATABASE [PRUEBAS] SET  READ_WRITE 
GO
