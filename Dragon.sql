-- MySQL dump 10.13  Distrib 8.0.31, for Linux (x86_64)
--
-- Host: localhost    Database: Dragon
-- ------------------------------------------------------
-- Server version	8.0.31-0ubuntu2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Dragon`
--

DROP TABLE IF EXISTS `Dragon`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Dragon` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(20) NOT NULL,
  `Apodo` varchar(20) NOT NULL,
  `Raza` varchar(20) NOT NULL,
  `Tecnica` varchar(20) NOT NULL,
  `Transformacion` varchar(20) DEFAULT NULL,
  `Nivel_de_pelea` int DEFAULT NULL,
  `Planeta` varchar(20) NOT NULL,
  `Universo` varchar(10) NOT NULL,
  `Genero` varchar(1) DEFAULT NULL,
  `Activo` varchar(1) NOT NULL,
  `creado` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `Actualizado` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Dragon`
--

LOCK TABLES `Dragon` WRITE;
/*!40000 ALTER TABLE `Dragon` DISABLE KEYS */;
INSERT INTO `Dragon` VALUES (1,'Goku','Kakaroto','sayajin','kamehameha','super sayajin',12000000,'Tierra','universo 7','M','A','2022-11-10 05:00:17','2022-11-09 23:08:48'),(2,'vegeta','el_principe_sayajin','sayajin','resplandor_final','super sayajin',11000000,'vegita','universo7','M','N','2022-11-10 05:08:48','2022-11-16 17:24:24'),(3,'Gohan','la ultima esperanza','sayajin','mazenku','super sayajin',1000000,'Tierra','universo7','M','A','2022-11-10 05:14:35','2022-11-09 23:14:35'),(4,'vegetto','el dios mortal','sayajin','kamehafinal','super vegetto',100000000,'Tierra','universo7','M','A','2022-11-10 05:22:11','2022-11-09 23:22:11'),(5,'Gogeta','angel del infierno ','sayajin','el rompe almas','super gogeta',100000000,'Tierra','universo7','M','N','2022-11-10 05:26:35','2022-11-15 21:44:32'),(6,'Piccoro','Kamisama','namekiano','makancozapo','orangepicoro',120000,'namek','universo 7','M','S','2022-11-16 21:34:08','2022-11-16 15:34:08'),(7,'Piccoro','Kamisama','namekiano','makancozapo','orangepicoro',120000,'namek','universo 7','M','S','2022-11-16 23:23:47','2022-11-16 17:23:47'),(8,'Piccoro','Kamisama','namekiano','makancozapo','orangepicoro',120000,'namek','universo 7','M','S','2022-11-16 23:30:35','2022-11-16 17:30:35'),(9,'dende','Kamisama','namekiano','sanar','kamisama',10,'namek','universo 7','M','S','2022-11-16 23:31:17','2022-11-16 17:31:17');
/*!40000 ALTER TABLE `Dragon` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-17 18:49:59
