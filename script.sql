USE [master]
GO
/****** Object:  Database [E-commerceDB]    Script Date: 3/12/2021 1:11:29 PM ******/
CREATE DATABASE [E-commerceDB]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'E-commerceDB', FILENAME = N'C:\Users\rt\E-commerceDB.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'E-commerceDB_log', FILENAME = N'C:\Users\rt\E-commerceDB_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [E-commerceDB] SET COMPATIBILITY_LEVEL = 130
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [E-commerceDB].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [E-commerceDB] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [E-commerceDB] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [E-commerceDB] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [E-commerceDB] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [E-commerceDB] SET ARITHABORT OFF 
GO
ALTER DATABASE [E-commerceDB] SET AUTO_CLOSE ON 
GO
ALTER DATABASE [E-commerceDB] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [E-commerceDB] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [E-commerceDB] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [E-commerceDB] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [E-commerceDB] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [E-commerceDB] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [E-commerceDB] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [E-commerceDB] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [E-commerceDB] SET  ENABLE_BROKER 
GO
ALTER DATABASE [E-commerceDB] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [E-commerceDB] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [E-commerceDB] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [E-commerceDB] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [E-commerceDB] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [E-commerceDB] SET READ_COMMITTED_SNAPSHOT ON 
GO
ALTER DATABASE [E-commerceDB] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [E-commerceDB] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [E-commerceDB] SET  MULTI_USER 
GO
ALTER DATABASE [E-commerceDB] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [E-commerceDB] SET DB_CHAINING OFF 
GO
ALTER DATABASE [E-commerceDB] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [E-commerceDB] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [E-commerceDB] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [E-commerceDB] SET QUERY_STORE = OFF
GO
USE [E-commerceDB]
GO
ALTER DATABASE SCOPED CONFIGURATION SET LEGACY_CARDINALITY_ESTIMATION = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION SET MAXDOP = 0;
GO
ALTER DATABASE SCOPED CONFIGURATION SET PARAMETER_SNIFFING = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION SET QUERY_OPTIMIZER_HOTFIXES = OFF;
GO
USE [E-commerceDB]
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 3/12/2021 1:11:29 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__EFMigrationsHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetRoleClaims]    Script Date: 3/12/2021 1:11:30 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetRoleClaims](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[RoleId] [nvarchar](450) NOT NULL,
	[ClaimType] [nvarchar](max) NULL,
	[ClaimValue] [nvarchar](max) NULL,
 CONSTRAINT [PK_AspNetRoleClaims] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetRoles]    Script Date: 3/12/2021 1:11:30 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetRoles](
	[Id] [nvarchar](450) NOT NULL,
	[Name] [nvarchar](256) NULL,
	[NormalizedName] [nvarchar](256) NULL,
	[ConcurrencyStamp] [nvarchar](max) NULL,
 CONSTRAINT [PK_AspNetRoles] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetUserClaims]    Script Date: 3/12/2021 1:11:30 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetUserClaims](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UserId] [nvarchar](450) NOT NULL,
	[ClaimType] [nvarchar](max) NULL,
	[ClaimValue] [nvarchar](max) NULL,
 CONSTRAINT [PK_AspNetUserClaims] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetUserLogins]    Script Date: 3/12/2021 1:11:30 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetUserLogins](
	[LoginProvider] [nvarchar](450) NOT NULL,
	[ProviderKey] [nvarchar](450) NOT NULL,
	[ProviderDisplayName] [nvarchar](max) NULL,
	[UserId] [nvarchar](450) NOT NULL,
 CONSTRAINT [PK_AspNetUserLogins] PRIMARY KEY CLUSTERED 
(
	[LoginProvider] ASC,
	[ProviderKey] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetUserRoles]    Script Date: 3/12/2021 1:11:30 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetUserRoles](
	[UserId] [nvarchar](450) NOT NULL,
	[RoleId] [nvarchar](450) NOT NULL,
 CONSTRAINT [PK_AspNetUserRoles] PRIMARY KEY CLUSTERED 
(
	[UserId] ASC,
	[RoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetUsers]    Script Date: 3/12/2021 1:11:30 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetUsers](
	[Id] [nvarchar](450) NOT NULL,
	[UserName] [nvarchar](256) NULL,
	[NormalizedUserName] [nvarchar](256) NULL,
	[Email] [nvarchar](256) NULL,
	[NormalizedEmail] [nvarchar](256) NULL,
	[EmailConfirmed] [bit] NOT NULL,
	[PasswordHash] [nvarchar](max) NULL,
	[SecurityStamp] [nvarchar](max) NULL,
	[ConcurrencyStamp] [nvarchar](max) NULL,
	[PhoneNumber] [nvarchar](max) NULL,
	[PhoneNumberConfirmed] [bit] NOT NULL,
	[TwoFactorEnabled] [bit] NOT NULL,
	[LockoutEnd] [datetimeoffset](7) NULL,
	[LockoutEnabled] [bit] NOT NULL,
	[AccessFailedCount] [int] NOT NULL,
 CONSTRAINT [PK_AspNetUsers] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetUserTokens]    Script Date: 3/12/2021 1:11:30 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetUserTokens](
	[UserId] [nvarchar](450) NOT NULL,
	[LoginProvider] [nvarchar](450) NOT NULL,
	[Name] [nvarchar](450) NOT NULL,
	[Value] [nvarchar](max) NULL,
 CONSTRAINT [PK_AspNetUserTokens] PRIMARY KEY CLUSTERED 
(
	[UserId] ASC,
	[LoginProvider] ASC,
	[Name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[BasketItem]    Script Date: 3/12/2021 1:11:30 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BasketItem](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[ProductName] [nvarchar](max) NULL,
	[Price] [real] NOT NULL,
	[url] [nvarchar](max) NULL,
	[Quantity] [int] NOT NULL,
	[OrderId] [int] NULL,
 CONSTRAINT [PK_BasketItem] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[basketItems]    Script Date: 3/12/2021 1:11:30 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[basketItems](
	[Id] [int] NOT NULL,
	[ProductName] [nvarchar](max) NULL,
	[Price] [real] NOT NULL,
	[url] [nvarchar](max) NULL,
	[Quantity] [int] NOT NULL,
	[OrderId] [int] NOT NULL,
 CONSTRAINT [PK_dbo.basketItems] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[categories]    Script Date: 3/12/2021 1:11:30 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[categories](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[categoryName] [nvarchar](max) NOT NULL,
	[Num_of_products] [int] NOT NULL,
 CONSTRAINT [PK_categories] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[orderProducts]    Script Date: 3/12/2021 1:11:30 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[orderProducts](
	[OrderId] [int] NOT NULL,
	[ProductId] [int] NOT NULL,
 CONSTRAINT [PK_orderProducts] PRIMARY KEY CLUSTERED 
(
	[OrderId] ASC,
	[ProductId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[orders]    Script Date: 3/12/2021 1:11:30 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[orders](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[FirstName] [nvarchar](max) NOT NULL,
	[LastName] [nvarchar](max) NOT NULL,
	[Address] [nvarchar](max) NOT NULL,
	[City] [nvarchar](max) NOT NULL,
	[phoneNumber] [nvarchar](max) NOT NULL,
	[userId] [nvarchar](450) NULL,
	[Email] [nvarchar](max) NULL,
	[cartId] [nvarchar](max) NULL,
 CONSTRAINT [PK_orders] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[products]    Script Date: 3/12/2021 1:11:30 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[products](
	[ProductId] [int] IDENTITY(1,1) NOT NULL,
	[ProductName] [nvarchar](max) NOT NULL,
	[Description] [nvarchar](max) NOT NULL,
	[Price] [real] NOT NULL,
	[url] [nvarchar](max) NULL,
	[categoryId] [int] NOT NULL,
	[Amount] [int] NOT NULL,
 CONSTRAINT [PK_products] PRIMARY KEY CLUSTERED 
(
	[ProductId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20200811042937_FirstMigration', N'3.1.6')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20200818133245_productMigration', N'3.1.6')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20200819152253_addProductRequire', N'3.1.6')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20200819154851_addProduct', N'3.1.6')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20200819164157_addproducts', N'3.1.6')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20200823141507_addCategory', N'3.1.6')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20200823230206_tables', N'3.1.6')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20201010044305_addorders', N'3.1.6')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20201011105722_addphoneToOrder', N'3.1.6')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20201011105942_addItemsToOrder', N'3.1.6')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20201011111221_addbasketIdToOrder', N'3.1.6')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20201011144619_additemsToOrder', N'3.1.6')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20201011150842_additemsToOrder', N'3.1.6')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20201015063100_addItemsToOrder', N'3.1.6')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20201015073405_addItemstoOrder', N'3.1.6')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20201106182415_addOrderProduct', N'3.1.6')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20210106185420_userIdToOrder', N'3.1.6')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20210106185930_emailToOrder', N'3.1.6')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20210115193957_RelationBetweenOrderAndUser', N'3.1.6')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20210117231143_AddAmountToProduct', N'3.1.6')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20210127023804_addCartIdToOrder', N'3.1.6')
GO
INSERT [dbo].[AspNetRoles] ([Id], [Name], [NormalizedName], [ConcurrencyStamp]) VALUES (N'66fce60e-5455-4acd-9afe-728a05d3bbd1', N'User', N'USER', N'2d815aa4-b5bc-425b-b622-e79cd33d091a')
INSERT [dbo].[AspNetRoles] ([Id], [Name], [NormalizedName], [ConcurrencyStamp]) VALUES (N'da729ecf-5d36-4b15-8a2d-89b758b494fd', N'Admin', N'ADMIN', N'af91350b-40b4-4f8d-9ac3-8b773adc1e30')
GO
INSERT [dbo].[AspNetUserRoles] ([UserId], [RoleId]) VALUES (N'1a5bc474-6e7d-4f31-bea5-624ec9108b4d', N'66fce60e-5455-4acd-9afe-728a05d3bbd1')
INSERT [dbo].[AspNetUserRoles] ([UserId], [RoleId]) VALUES (N'609aeb6e-a378-43bc-b47e-920c8b0e58c1', N'66fce60e-5455-4acd-9afe-728a05d3bbd1')
INSERT [dbo].[AspNetUserRoles] ([UserId], [RoleId]) VALUES (N'68dc877a-76dc-4785-b21f-9e336fc7c83a', N'66fce60e-5455-4acd-9afe-728a05d3bbd1')
INSERT [dbo].[AspNetUserRoles] ([UserId], [RoleId]) VALUES (N'7b9ca2f3-c69d-42d8-8852-1b19d225ff4a', N'66fce60e-5455-4acd-9afe-728a05d3bbd1')
INSERT [dbo].[AspNetUserRoles] ([UserId], [RoleId]) VALUES (N'ea0e7866-afa5-4f75-9ff3-824f953e64db', N'66fce60e-5455-4acd-9afe-728a05d3bbd1')
INSERT [dbo].[AspNetUserRoles] ([UserId], [RoleId]) VALUES (N'fb391697-807a-4c2f-bf2b-86877ccccb7f', N'66fce60e-5455-4acd-9afe-728a05d3bbd1')
INSERT [dbo].[AspNetUserRoles] ([UserId], [RoleId]) VALUES (N'098a7514-b216-406d-9340-49424dbdcef8', N'da729ecf-5d36-4b15-8a2d-89b758b494fd')
GO
INSERT [dbo].[AspNetUsers] ([Id], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount]) VALUES (N'098a7514-b216-406d-9340-49424dbdcef8', N'Admin', N'ADMIN', N'Admin@test.com', N'ADMIN@TEST.COM', 0, N'AQAAAAEAACcQAAAAEBluqFpXYzdmOrOhbMHv82Agpm0hDgvviUq5stUf0ob3Q5XVVFOTTY+uwJUmeY+yNQ==', N'OHNK4DU6W6A6XDJBTKZ2AWPL5BMUTHG6', N'd488a007-7c7a-4bb3-bdec-422f6e261c90', NULL, 0, 0, NULL, 1, 0)
INSERT [dbo].[AspNetUsers] ([Id], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount]) VALUES (N'1a5bc474-6e7d-4f31-bea5-624ec9108b4d', N'tena22', N'TENA22', N'tena22_mamdouh@yahoo.com', N'TENA22_MAMDOUH@YAHOO.COM', 0, N'AQAAAAEAACcQAAAAEMgheQX1gNmINm6KrYgsvQBItLcVs5Wjm/D++5ROL68H0yNdB/VipOb6ZjiUK8q2qw==', N'ZAHCQ5ZA5DUJ6K2V5TPMAUQ7CYAGGBKK', N'd2f1845e-ad4b-4a08-9cdd-ca0e55c5c95f', NULL, 0, 0, NULL, 1, 0)
INSERT [dbo].[AspNetUsers] ([Id], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount]) VALUES (N'609aeb6e-a378-43bc-b47e-920c8b0e58c1', N'tena', N'TENA', N'tena_mamdouh@yahoo.com', N'TENA_MAMDOUH@YAHOO.COM', 0, N'AQAAAAEAACcQAAAAEDZptBahnEh9rV42WVa2RVOII0AOjmquNjOsK7ByKwbtWMzHlpsFKYGFaqJgfWykKw==', N'JFYYXUUOXSDDBTN55K4SINXW3FSZBAVU', N'4e185054-f153-40b1-a504-e3b7cf4eae54', NULL, 0, 0, NULL, 1, 0)
INSERT [dbo].[AspNetUsers] ([Id], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount]) VALUES (N'68dc877a-76dc-4785-b21f-9e336fc7c83a', N'marian', N'MARIAN', N'mariansamir036@gmail.com', N'MARIANSAMIR036@GMAIL.COM', 0, N'AQAAAAEAACcQAAAAEBxpOtJE5l47Oo/r3lTE+gXeIDOhFM046DL4B23HwChQbXmgTjKd3ksAp0YV4N5ALg==', N'CLZW2RAV6V4D3LIUEEQLGI46T5UV7MDT', N'da366323-deab-4854-b3f4-7aacec3f86aa', NULL, 0, 0, NULL, 1, 4)
INSERT [dbo].[AspNetUsers] ([Id], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount]) VALUES (N'7b9ca2f3-c69d-42d8-8852-1b19d225ff4a', N'malak', N'MALAK', N'malak_mamdouh500@gmail.com', N'MALAK_MAMDOUH500@GMAIL.COM', 0, N'AQAAAAEAACcQAAAAENKD2YNcOQH/IOFgfyD6y8OyYosWF3e7kjOAhEsiLqC3vFYhqhooD7RNaQ81+AgZmg==', N'HSBYHXWMRPATXS2M32D4B6NXL7TZANT3', N'162fba38-1ac5-4561-a636-3e6ce6530c66', NULL, 0, 0, NULL, 1, 0)
INSERT [dbo].[AspNetUsers] ([Id], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount]) VALUES (N'ea0e7866-afa5-4f75-9ff3-824f953e64db', N'malak5', N'MALAK5', N'malak5_mamdouh500@gmail.com', N'MALAK5_MAMDOUH500@GMAIL.COM', 0, N'AQAAAAEAACcQAAAAEFa/BwuvJ8KD7ACC+TxQB6ogpaMXARbQgjiY5t3XSBiXzBaj3CkARykPa5WFHystLw==', N'PVRDG2DUFOAY4VVI4AV7EUO3PIGPMSAS', N'0a6b0efd-61ac-4791-ac8f-013e3033d2ce', NULL, 0, 0, NULL, 1, 0)
INSERT [dbo].[AspNetUsers] ([Id], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount]) VALUES (N'fb391697-807a-4c2f-bf2b-86877ccccb7f', N'malak22', N'MALAK22', N'malak22_mamdouh500@gmail.com', N'MALAK22_MAMDOUH500@GMAIL.COM', 0, N'AQAAAAEAACcQAAAAEE3JKCqWAEyjX3j5GnNIerLmylB1kElLda2aSdEEVBRc+DtxP3pUjRYOpTCrtzTb2Q==', N'PFA57SDTBEOAFEEZ3RPJGRCQVR3DZ5ZL', N'2985ec92-4cc5-4814-99cf-53260fef7ef0', NULL, 0, 0, NULL, 1, 0)
GO
SET IDENTITY_INSERT [dbo].[categories] ON 

INSERT [dbo].[categories] ([Id], [categoryName], [Num_of_products]) VALUES (1, N'Mobile', 4)
INSERT [dbo].[categories] ([Id], [categoryName], [Num_of_products]) VALUES (4, N'Laptop', 4)
INSERT [dbo].[categories] ([Id], [categoryName], [Num_of_products]) VALUES (5, N'TV', 4)
INSERT [dbo].[categories] ([Id], [categoryName], [Num_of_products]) VALUES (6, N'Watch', 1)
SET IDENTITY_INSERT [dbo].[categories] OFF
GO
INSERT [dbo].[orderProducts] ([OrderId], [ProductId]) VALUES (42, 15)
INSERT [dbo].[orderProducts] ([OrderId], [ProductId]) VALUES (43, 15)
INSERT [dbo].[orderProducts] ([OrderId], [ProductId]) VALUES (45, 18)
INSERT [dbo].[orderProducts] ([OrderId], [ProductId]) VALUES (46, 20)
INSERT [dbo].[orderProducts] ([OrderId], [ProductId]) VALUES (47, 20)
INSERT [dbo].[orderProducts] ([OrderId], [ProductId]) VALUES (44, 22)
INSERT [dbo].[orderProducts] ([OrderId], [ProductId]) VALUES (41, 25)
INSERT [dbo].[orderProducts] ([OrderId], [ProductId]) VALUES (48, 28)
GO
SET IDENTITY_INSERT [dbo].[orders] ON 

INSERT [dbo].[orders] ([Id], [FirstName], [LastName], [Address], [City], [phoneNumber], [userId], [Email], [cartId]) VALUES (41, N'Malak', N'mamdouh', N'imbaba', N'giza', N'01023895355', N'3a6f8cc7-3799-4a9c-b557-a162b7767081', N'malak_mamdouh500@gmail.com', N'8d0b28b2-28f0-4578-85ec-82810d0dd1fa')
INSERT [dbo].[orders] ([Id], [FirstName], [LastName], [Address], [City], [phoneNumber], [userId], [Email], [cartId]) VALUES (42, N'البت القمر ', N'اوووي ', N'نينينينينينيين', N'cairo', N'01023895355', N'68dc877a-76dc-4785-b21f-9e336fc7c83a', N'mariansamir036@gmail.com', N'fa018df7-d27a-468e-a97b-dda204b6af0e')
INSERT [dbo].[orders] ([Id], [FirstName], [LastName], [Address], [City], [phoneNumber], [userId], [Email], [cartId]) VALUES (43, N'tena22', N'mamdouh', N'imbaba', N'giza', N'01023895355', N'1a5bc474-6e7d-4f31-bea5-624ec9108b4d', N'tena22_mamdouh@yahoo.com', N'fe0c507b-104a-4806-b276-7d9efe8a9cea')
INSERT [dbo].[orders] ([Id], [FirstName], [LastName], [Address], [City], [phoneNumber], [userId], [Email], [cartId]) VALUES (44, N'tena22', N'mamdouh', N'imbaba', N'giza', N'01023895355', N'1a5bc474-6e7d-4f31-bea5-624ec9108b4d', N'tena22_mamdouh@yahoo.com', N'0046f663-a595-4179-a25a-c1b3d8e055fa')
INSERT [dbo].[orders] ([Id], [FirstName], [LastName], [Address], [City], [phoneNumber], [userId], [Email], [cartId]) VALUES (45, N'Malak', N'mamdouh', N'imbaba', N'giza', N'01023895355', N'5c1be1b7-56d6-492f-a12c-7664ec9768fa', N'malak22_mamdouh500@gmail.com', N'5189dc3a-fbd9-4701-aea7-2c30a386d169')
INSERT [dbo].[orders] ([Id], [FirstName], [LastName], [Address], [City], [phoneNumber], [userId], [Email], [cartId]) VALUES (46, N'Malak', N'mamdouh', N'imbaba', N'giza', N'01023895355', N'7b9ca2f3-c69d-42d8-8852-1b19d225ff4a', N'malak_mamdouh500@gmail.com', N'a3c861a9-acc4-4f98-a403-555666a3cb96')
INSERT [dbo].[orders] ([Id], [FirstName], [LastName], [Address], [City], [phoneNumber], [userId], [Email], [cartId]) VALUES (47, N'Malak', N'mamdouh', N'imbaba', N'giza', N'01023895355', N'fb391697-807a-4c2f-bf2b-86877ccccb7f', N'malak22_mamdouh500@gmail.com', N'ce987866-5dae-484b-b135-4fe8cbc09603')
INSERT [dbo].[orders] ([Id], [FirstName], [LastName], [Address], [City], [phoneNumber], [userId], [Email], [cartId]) VALUES (48, N'Malak5', N'mamdouh', N'imbaba', N'giza', N'01023895355', N'ea0e7866-afa5-4f75-9ff3-824f953e64db', N'malak5_mamdouh500@gmail.com', N'0afaca91-8a7c-49fa-95d9-02cfe407023a')
SET IDENTITY_INSERT [dbo].[orders] OFF
GO
SET IDENTITY_INSERT [dbo].[products] ON 

INSERT [dbo].[products] ([ProductId], [ProductName], [Description], [Price], [url], [categoryId], [Amount]) VALUES (15, N'Huawei Y6p', N'Huawei Y6p Dual SIM Mobile - 6.3 Inch, 64 GB, 3 GB RAM, 4G LTE - Phantom Purple
', 2090, N'Resources\Images\kisspng-feature-phone-smartphone-telephone-touchscreen-w-entel-5b198e68af8034.5371000015284015127189.png', 1, 1)
INSERT [dbo].[products] ([ProductId], [ProductName], [Description], [Price], [url], [categoryId], [Amount]) VALUES (18, N'Huawei Nova 7SE', N'Huawei Nova 7SE Dual SIM Mobile - 6.5 Inches, 128 GB, 8 GB RAM, 4G LTE - Midsummer Purple with Freelace Sports Wireless Earphones', 6299, N'Resources\Images\huawei nova.jpg', 1, 2)
INSERT [dbo].[products] ([ProductId], [ProductName], [Description], [Price], [url], [categoryId], [Amount]) VALUES (19, N'Huawei Nova 7i ', N'Huawei Nova 7i Dual SIM - 6.4 Inches, 128 GB, 8 GB RAM, 4G LTE - Crush Green', 4425, N'Resources\Images\mob_3.jpg', 1, 3)
INSERT [dbo].[products] ([ProductId], [ProductName], [Description], [Price], [url], [categoryId], [Amount]) VALUES (20, N'DELL Inspiron 3565', N'DELL Inspiron 3565 Laptop - AMD A9 - 4 GB RAM - 500GB HDD - 15.6-inch HD - AMD GPU - Ubuntu - Black', 5999, N'Resources\Images\Dell laptop.jpg', 4, -1)
INSERT [dbo].[products] ([ProductId], [ProductName], [Description], [Price], [url], [categoryId], [Amount]) VALUES (21, N'HP 15-da2396ne ', N'HP 15-da2396ne Laptop, 15.6 Inch FHD, Intel Core i7-10510U, 1 TB and 128 SSD, 16 GB RAM, NVIDIA GeForce MX130 4GB GDDR5, Windows 10 - Jet Black', 13499, N'Resources\Images\hp.jpg', 4, 5)
INSERT [dbo].[products] ([ProductId], [ProductName], [Description], [Price], [url], [categoryId], [Amount]) VALUES (22, N'Lenovo V130', N'Lenovo V130 Laptop Intel Core i3-8130U, 15.6 Inch HD, 4GB, 1TB, DOS, IRON GREY', 5713, N'Resources\Images\lenovo.jpg', 4, 4)
INSERT [dbo].[products] ([ProductId], [ProductName], [Description], [Price], [url], [categoryId], [Amount]) VALUES (23, N'Samsung 32 Inch', N'Samsung 32 Inch HD Smart LED TV with Built-in Receiver, Black - UA32T5300AUXEG
', 3000, N'Resources\Images\47331-9-screen-free-png-hq.png', 5, 5)
INSERT [dbo].[products] ([ProductId], [ProductName], [Description], [Price], [url], [categoryId], [Amount]) VALUES (25, N'Samsung 50 Inch', N'Samsung 50 Inch 4K Ultra HD Smart LED TV with Built-in Receiver, Titan Grey - UA50TU7000UXEG
', 6200, N'Resources\Images\tv_2.jpg', 5, 4)
INSERT [dbo].[products] ([ProductId], [ProductName], [Description], [Price], [url], [categoryId], [Amount]) VALUES (26, N'Samsung 55 Inch', N'Samsung 55 Inch 4K Ultra HD Smart LED TV with Built-in Receiver, Black - UA55TU8000UXEG
', 8500, N'Resources\Images\47325-1-screen-picture-free-download-png-hd.png', 5, 5)
INSERT [dbo].[products] ([ProductId], [ProductName], [Description], [Price], [url], [categoryId], [Amount]) VALUES (27, N'Samsung 58 Inch ', N'Samsung 58 Inch Flat Smart 4K UHD TV Series 7 - UA58RU7100RXUM
', 8000, N'Resources\Images\tv_4.jpg', 5, 5)
INSERT [dbo].[products] ([ProductId], [ProductName], [Description], [Price], [url], [categoryId], [Amount]) VALUES (28, N'Dell G5 15-5590', N'Dell G5 15-5590 Gaming Laptop, intel core i7-9750H, 16GB RAM, 1TB HDD & 256 GB SSD, NVIDIA GTX1650 4GB DDR5 Graphics, 15.6 inch FHD IPS, Backlit KB, Ubuntu, Black
', 19199, N'Resources\Images\Dell_3.jpg', 4, 3)
INSERT [dbo].[products] ([ProductId], [ProductName], [Description], [Price], [url], [categoryId], [Amount]) VALUES (31, N'Realme C3', N'Realme C3 Dual SIM - 64GB, 3GB RAM, 4G LTE - Blazing Red. Experience portable power at its best with the Realme C3 Dual-SIM Smartphone. It packs high-end components in its sleek and stylish body. This Realme phone features an AI-backed 12MP triple camera that delivers professional-grade pictures and videos. The front camera is equipped with a variety of high-end features to deliver stunning self-portraits', 2330, N'Resources\Images\huawei y8s.jpg', 1, 5)
INSERT [dbo].[products] ([ProductId], [ProductName], [Description], [Price], [url], [categoryId], [Amount]) VALUES (34, N'Wenger Urben Classic ', N'Swiss MadeMovement analog quartz Dial Color white Bracelet material stainless steel Bracelet color two tone Diameter 42 mmWatch features small second Water resistance 10 ATM/100 M/330 FT

', 3189, N'Resources\Images\watch_3.jpg', 6, 0)
INSERT [dbo].[products] ([ProductId], [ProductName], [Description], [Price], [url], [categoryId], [Amount]) VALUES (35, N'Infinix X653', N'Infinix X653 Smart 4, Dual SIM, 16 GB, 1 GB RAM, 4G LTE, 6.6 Inch - Purple
', 2000, N'Resources\Images\kisspng-obi-worldphone-mv1-feature-phone-telephone-smartph-obi-worldphone-5b1c641c5ada72.8173060115285872923721.png', 1, 0)
INSERT [dbo].[products] ([ProductId], [ProductName], [Description], [Price], [url], [categoryId], [Amount]) VALUES (36, N'Samsung', N'Samsung Galaxy Note 10 Lite Dual SIM - 128GB, 8GB RAM, 4G LTE, Aura Black
', 8000, N'Resources\Images\kisspng-feature-phone-smartphone-mobile-phones-carphone-wa-rom-memory-5b5598f3a76776.5393334715323363716857.png', 1, 0)
INSERT [dbo].[products] ([ProductId], [ProductName], [Description], [Price], [url], [categoryId], [Amount]) VALUES (37, N'Samsung Watch', N'Emporio Armani AR6088 For Men Analog, Dress Watch
', 3000, N'Resources\Images\kisspng-mens-watch-chronograph-guess-quartz-clock-guess-w-746g1-5befe90d120194.6603428015424494210738.png', 6, 0)
INSERT [dbo].[products] ([ProductId], [ProductName], [Description], [Price], [url], [categoryId], [Amount]) VALUES (38, N'CASIMA Luxury ', N'CASIMA Luxury Men Watch Model ST-8203. Stop Watch,Complete Calendar,Luminous,Chronograph and Waterproof.', 1500, N'Resources\Images\kisspng-rolex-submariner-counterfeit-watch-rolex-gmt-maste-gold-rolex-watch-watches-5a71b1d47174c6.7614867015174005324647.png', 6, 0)
INSERT [dbo].[products] ([ProductId], [ProductName], [Description], [Price], [url], [categoryId], [Amount]) VALUES (39, N'LG 32 Inch HD', N'Stream your favorite TV shows or movies with the LG 32LJ520U HD LED Standard TV. It has a large 32inch HD display and packs in a lot of innovative features to provide an excellent all-round experience. This LG HD LED TV boasts of a resolution Upscaler technology that enhances and optimizes the image quality', 4000, N'Resources\Images\47314-8-screen-png-file-hd (1).png', 5, 0)
INSERT [dbo].[products] ([ProductId], [ProductName], [Description], [Price], [url], [categoryId], [Amount]) VALUES (40, N'sony', N'gfffdgdsfgfsgfd', 5000, N'Resources\Images\hauwei y6p.jpg', 1, 20)
INSERT [dbo].[products] ([ProductId], [ProductName], [Description], [Price], [url], [categoryId], [Amount]) VALUES (42, N'sony2', N'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book', 5000, N'Resources\Images\huawei nova.jpg', 1, 20)
SET IDENTITY_INSERT [dbo].[products] OFF
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_AspNetRoleClaims_RoleId]    Script Date: 3/12/2021 1:11:30 PM ******/
CREATE NONCLUSTERED INDEX [IX_AspNetRoleClaims_RoleId] ON [dbo].[AspNetRoleClaims]
(
	[RoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [RoleNameIndex]    Script Date: 3/12/2021 1:11:30 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [RoleNameIndex] ON [dbo].[AspNetRoles]
(
	[NormalizedName] ASC
)
WHERE ([NormalizedName] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_AspNetUserClaims_UserId]    Script Date: 3/12/2021 1:11:30 PM ******/
CREATE NONCLUSTERED INDEX [IX_AspNetUserClaims_UserId] ON [dbo].[AspNetUserClaims]
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_AspNetUserLogins_UserId]    Script Date: 3/12/2021 1:11:30 PM ******/
CREATE NONCLUSTERED INDEX [IX_AspNetUserLogins_UserId] ON [dbo].[AspNetUserLogins]
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_AspNetUserRoles_RoleId]    Script Date: 3/12/2021 1:11:30 PM ******/
CREATE NONCLUSTERED INDEX [IX_AspNetUserRoles_RoleId] ON [dbo].[AspNetUserRoles]
(
	[RoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [EmailIndex]    Script Date: 3/12/2021 1:11:30 PM ******/
CREATE NONCLUSTERED INDEX [EmailIndex] ON [dbo].[AspNetUsers]
(
	[NormalizedEmail] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [UserNameIndex]    Script Date: 3/12/2021 1:11:30 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [UserNameIndex] ON [dbo].[AspNetUsers]
(
	[NormalizedUserName] ASC
)
WHERE ([NormalizedUserName] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_BasketItem_OrderId]    Script Date: 3/12/2021 1:11:30 PM ******/
CREATE NONCLUSTERED INDEX [IX_BasketItem_OrderId] ON [dbo].[BasketItem]
(
	[OrderId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_orderProducts_ProductId]    Script Date: 3/12/2021 1:11:30 PM ******/
CREATE NONCLUSTERED INDEX [IX_orderProducts_ProductId] ON [dbo].[orderProducts]
(
	[ProductId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_orders_userId]    Script Date: 3/12/2021 1:11:30 PM ******/
CREATE NONCLUSTERED INDEX [IX_orders_userId] ON [dbo].[orders]
(
	[userId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_products_categoryId]    Script Date: 3/12/2021 1:11:30 PM ******/
CREATE NONCLUSTERED INDEX [IX_products_categoryId] ON [dbo].[products]
(
	[categoryId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[orders] ADD  DEFAULT (N'') FOR [phoneNumber]
GO
ALTER TABLE [dbo].[products] ADD  DEFAULT ((0)) FOR [categoryId]
GO
ALTER TABLE [dbo].[products] ADD  DEFAULT ((0)) FOR [Amount]
GO
ALTER TABLE [dbo].[AspNetRoleClaims]  WITH CHECK ADD  CONSTRAINT [FK_AspNetRoleClaims_AspNetRoles_RoleId] FOREIGN KEY([RoleId])
REFERENCES [dbo].[AspNetRoles] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AspNetRoleClaims] CHECK CONSTRAINT [FK_AspNetRoleClaims_AspNetRoles_RoleId]
GO
ALTER TABLE [dbo].[AspNetUserClaims]  WITH CHECK ADD  CONSTRAINT [FK_AspNetUserClaims_AspNetUsers_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[AspNetUsers] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AspNetUserClaims] CHECK CONSTRAINT [FK_AspNetUserClaims_AspNetUsers_UserId]
GO
ALTER TABLE [dbo].[AspNetUserLogins]  WITH CHECK ADD  CONSTRAINT [FK_AspNetUserLogins_AspNetUsers_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[AspNetUsers] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AspNetUserLogins] CHECK CONSTRAINT [FK_AspNetUserLogins_AspNetUsers_UserId]
GO
ALTER TABLE [dbo].[AspNetUserRoles]  WITH CHECK ADD  CONSTRAINT [FK_AspNetUserRoles_AspNetRoles_RoleId] FOREIGN KEY([RoleId])
REFERENCES [dbo].[AspNetRoles] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AspNetUserRoles] CHECK CONSTRAINT [FK_AspNetUserRoles_AspNetRoles_RoleId]
GO
ALTER TABLE [dbo].[AspNetUserRoles]  WITH CHECK ADD  CONSTRAINT [FK_AspNetUserRoles_AspNetUsers_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[AspNetUsers] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AspNetUserRoles] CHECK CONSTRAINT [FK_AspNetUserRoles_AspNetUsers_UserId]
GO
ALTER TABLE [dbo].[AspNetUserTokens]  WITH CHECK ADD  CONSTRAINT [FK_AspNetUserTokens_AspNetUsers_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[AspNetUsers] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AspNetUserTokens] CHECK CONSTRAINT [FK_AspNetUserTokens_AspNetUsers_UserId]
GO
ALTER TABLE [dbo].[BasketItem]  WITH CHECK ADD  CONSTRAINT [FK_BasketItem_orders_OrderId] FOREIGN KEY([OrderId])
REFERENCES [dbo].[orders] ([Id])
GO
ALTER TABLE [dbo].[BasketItem] CHECK CONSTRAINT [FK_BasketItem_orders_OrderId]
GO
ALTER TABLE [dbo].[basketItems]  WITH CHECK ADD  CONSTRAINT [FK_basketItems_orders] FOREIGN KEY([OrderId])
REFERENCES [dbo].[orders] ([Id])
GO
ALTER TABLE [dbo].[basketItems] CHECK CONSTRAINT [FK_basketItems_orders]
GO
ALTER TABLE [dbo].[orderProducts]  WITH CHECK ADD  CONSTRAINT [FK_orderProducts_orders_OrderId] FOREIGN KEY([OrderId])
REFERENCES [dbo].[orders] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[orderProducts] CHECK CONSTRAINT [FK_orderProducts_orders_OrderId]
GO
ALTER TABLE [dbo].[orderProducts]  WITH CHECK ADD  CONSTRAINT [FK_orderProducts_products_ProductId] FOREIGN KEY([ProductId])
REFERENCES [dbo].[products] ([ProductId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[orderProducts] CHECK CONSTRAINT [FK_orderProducts_products_ProductId]
GO
ALTER TABLE [dbo].[products]  WITH CHECK ADD  CONSTRAINT [FK_products_categories_categoryId] FOREIGN KEY([categoryId])
REFERENCES [dbo].[categories] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[products] CHECK CONSTRAINT [FK_products_categories_categoryId]
GO
USE [master]
GO
ALTER DATABASE [E-commerceDB] SET  READ_WRITE 
GO
