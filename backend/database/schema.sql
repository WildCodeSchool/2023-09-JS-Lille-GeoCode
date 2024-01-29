CREATE DATABASE  IF NOT EXISTS `geocode` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `geocode`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: geocode
-- ------------------------------------------------------
-- Server version	8.0.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `admin_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `person` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `booking_list`
--

DROP TABLE IF EXISTS `booking_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `booking_list` (
  `id` int NOT NULL AUTO_INCREMENT,
  `date` datetime DEFAULT NULL,
  `charge_point_id` varchar(80) DEFAULT NULL,
  `car_id` int DEFAULT NULL,
  `car_type_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `car_id` (`car_id`),
  KEY `charge_point_id` (`charge_point_id`),
  CONSTRAINT `booking_list_ibfk_2` FOREIGN KEY (`charge_point_id`) REFERENCES `charge_point` (`charge_point_id_fr`),
  CONSTRAINT `fk_car_id` FOREIGN KEY (`car_id`) REFERENCES `car` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `booking_list`
--

LOCK TABLES `booking_list` WRITE;
/*!40000 ALTER TABLE `booking_list` DISABLE KEYS */;
INSERT INTO `booking_list` VALUES (1,'2024-02-08 08:00:00','FR3R3E10000849861',1,NULL),(2,'2024-02-08 08:30:00','FR3R3E10000849861',2,NULL);
/*!40000 ALTER TABLE `booking_list` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `car`
--

DROP TABLE IF EXISTS `car`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `car` (
  `id` int NOT NULL AUTO_INCREMENT,
  `car_type_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `car_ibfk_1` (`user_id`),
  KEY `car_ibfk_2` (`car_type_id`),
  CONSTRAINT `car_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `car_ibfk_2` FOREIGN KEY (`car_type_id`) REFERENCES `car_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `car`
--

LOCK TABLES `car` WRITE;
/*!40000 ALTER TABLE `car` DISABLE KEYS */;
INSERT INTO `car` VALUES (1,1,1),(2,2,1);
/*!40000 ALTER TABLE `car` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `car_type`
--

DROP TABLE IF EXISTS `car_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `car_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `brand` varchar(80) DEFAULT NULL,
  `model` varchar(80) DEFAULT NULL,
  `max_power` int DEFAULT NULL,
  `plug_type` varchar(80) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `car_type`
--

LOCK TABLES `car_type` WRITE;
/*!40000 ALTER TABLE `car_type` DISABLE KEYS */;
INSERT INTO `car_type` VALUES (1,'Tesla','Modele 3',250,'Combo CCS'),(2,'Dacia','Spring',50,'Type 2'),(3,'Renault','Megane E-tech',120,'Combo CCS'),(4,'MG','MG4',130,'Combo CCS'),(5,'Fiat','500e',70,'Combo CCS'),(6,'Peugeot','E-208',110,'Type 2'),(7,'Mini','Cooper SE',150,'Combo CCS'),(8,'Renault','ZOE',80,'Combo CCS'),(9,'Nissan','Leaf',120,'Chademo'),(10,'Kia','Niro',130,'Combo CCS');
/*!40000 ALTER TABLE `car_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `charge_point`
--

DROP TABLE IF EXISTS `charge_point`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `charge_point` (
  `id` int NOT NULL AUTO_INCREMENT,
  `charge_point_id_fr` varchar(80) DEFAULT NULL,
  `operator_name` varchar(80) DEFAULT NULL,
  `max_power` int DEFAULT NULL,
  `accessibility` varchar(80) DEFAULT NULL,
  `station_id` varchar(80) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `charge_point_id_fr` (`charge_point_id_fr`),
  KEY `station_id` (`station_id`),
  CONSTRAINT `charge_point_ibfk_1` FOREIGN KEY (`station_id`) REFERENCES `station` (`station_id_fr`)
) ENGINE=InnoDB AUTO_INCREMENT=253 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `charge_point`
--

LOCK TABLES `charge_point` WRITE;
/*!40000 ALTER TABLE `charge_point` DISABLE KEYS */;
INSERT INTO `charge_point` VALUES (1,'FR3R3E10000849861','R3',22,'Accessible mais non rÃ©servÃ© PMR','FR3R3P89882107'),(2,'FR3R3E10000849862','R3',22,'Accessible mais non rÃ©servÃ© PMR','FR3R3P89882107'),(3,'FR3R3E10000849871','R3',7,'Accessible mais non rÃ©servÃ© PMR','FR3R3P89882107'),(4,'FR3R3E10000849872','R3',7,'Accessible mais non rÃ©servÃ© PMR','FR3R3P89882107'),(5,'FR3R3E10000849881','R3',22,'Accessible mais non rÃ©servÃ© PMR','FR3R3P89882107'),(6,'FR3R3E10000849882','R3',22,'Accessible mais non rÃ©servÃ© PMR','FR3R3P89882107'),(7,'FR3R3E10000850183','R3',22,'Accessible mais non rÃ©servÃ© PMR','FR3R3P89283504'),(8,'FR3R3E10000850443','R3',22,'Accessible mais non rÃ©servÃ© PMR','FR3R3P89363743'),(9,'FR3R3E10001361343','R3',22,'Accessible mais non rÃ©servÃ© PMR','FR3R3P89882097'),(10,'FR3R3E10001361363','R3',22,'Accessible mais non rÃ©servÃ© PMR','FR3R3P89882104'),(11,'FRBMPE1047','BUMP',22,'AccessibilitÃ© inconnue','FRBMPS64528'),(12,'FRBMPE2716','BUMP',22,'AccessibilitÃ© inconnue','FRBMPS154952'),(13,'FRBMPE3599','BUMP',22,'AccessibilitÃ© inconnue','FRBMPS64528'),(14,'FRBMPE7708','BUMP',22,'AccessibilitÃ© inconnue','FRBMPS154952'),(15,'FRFR1EAYRU3','REGIE MUNICIPALE D\'ELECTRICITE DE LOOS',22,'Accessible mais non rÃ©servÃ© PMR','FRFR1EAYRU'),(16,'FRFR1EDXS3','REGIE MUNICIPALE D\'ELECTRICITE DE LOOS',22,'Accessible mais non rÃ©servÃ© PMR','FRFR1EAYRU'),(17,'FRFR1EPJXS3','REGIE MUNICIPALE D\'ELECTRICITE DE LOOS',22,'Accessible mais non rÃ©servÃ© PMR','FRFR1EPJXS'),(18,'FRG51E10452P1','DRIVECO',11,'AccessibilitÃ© inconnue','FRG51PDECATHLON597001'),(19,'FRG51E10452P2','DRIVECO',11,'AccessibilitÃ© inconnue','FRG51PDECATHLON597001'),(20,'FRG51E10453P1','DRIVECO',11,'AccessibilitÃ© inconnue','FRG51PDECATHLON597001'),(21,'FRG51E10453P2','DRIVECO',11,'AccessibilitÃ© inconnue','FRG51PDECATHLON597001'),(22,'FRG51E10454P1','DRIVECO',11,'AccessibilitÃ© inconnue','FRG51PDECATHLON597001'),(23,'FRG51E10454P2','DRIVECO',11,'AccessibilitÃ© inconnue','FRG51PDECATHLON597001'),(24,'FRG51E11205P1','DRIVECO',22,'AccessibilitÃ© inconnue','FRG51PDECATHLON597002'),(25,'FRG51E11205P2','DRIVECO',22,'AccessibilitÃ© inconnue','FRG51PDECATHLON597002'),(26,'FRG51E11206P1','DRIVECO',22,'AccessibilitÃ© inconnue','FRG51PDECATHLON597002'),(27,'FRG51E11206P2','DRIVECO',22,'AccessibilitÃ© inconnue','FRG51PDECATHLON597002'),(28,'FRG51E11207P1','DRIVECO',22,'AccessibilitÃ© inconnue','FRG51PDECATHLON597002'),(29,'FRG51E11207P2','DRIVECO',22,'AccessibilitÃ© inconnue','FRG51PDECATHLON597002'),(30,'FRG51E11208P1','DRIVECO',22,'AccessibilitÃ© inconnue','FRG51PDECATHLON597002'),(31,'FRG51E11208P2','DRIVECO',22,'AccessibilitÃ© inconnue','FRG51PDECATHLON597002'),(32,'FROTHEOTHR15421','Izivia',22,'AccessibilitÃ© inconnue','FROTHPOTHR15421'),(33,'FRPD1EACCVDAALFD22011','Power Dot France',11,'AccessibilitÃ© inconnue','FRPD1PACCVDA'),(34,'FRPD1EACCVDAALFD22012','Power Dot France',11,'AccessibilitÃ© inconnue','FRPD1PACCVDA'),(35,'FRPD1EACCVDAKPC50013','Power Dot France',22,'AccessibilitÃ© inconnue','FRPD1PACCVDA'),(36,'FRPD1ECORFLEUFC200012','Power Dot France',13,'AccessibilitÃ© inconnue','FRPD1PCORFLE'),(37,'FRPD1EIBSMEBKPC100013','Power Dot France',13,'AccessibilitÃ© inconnue','FRPD1PIBSMEB'),(38,'FRPD1EIBSVDAALFS22011','Power Dot France',13,'AccessibilitÃ© inconnue','FRPD1PIBSVDA'),(39,'FRPD1EMATVDAALF00021','Power Dot France',22,'AccessibilitÃ© inconnue','FRPD1PMATVDA'),(40,'FRPD1EMATVDAALF00022','Power Dot France',22,'AccessibilitÃ© inconnue','FRPD1PMATVDA'),(41,'FRPD1EMATVDAALF00031','Power Dot France',22,'AccessibilitÃ© inconnue','FRPD1PMATVDA'),(42,'FRPD1EMATVDAALF00032','Power Dot France',22,'AccessibilitÃ© inconnue','FRPD1PMATVDA'),(43,'FRPD1EMATVDAEFAQ45013','Power Dot France',22,'AccessibilitÃ© inconnue','FRPD1PMATVDA'),(44,'FRPD1EMRCMEBKPC100013','Power Dot France',13,'AccessibilitÃ© inconnue','FRPD1PMRCMEB'),(45,'FRPD1EMRCMEBKPC100023','Power Dot France',13,'AccessibilitÃ© inconnue','FRPD1PMRCMEB'),(46,'FRPD1EMRCMEBKPC100033','Power Dot France',13,'AccessibilitÃ© inconnue','FRPD1PMRCMEB'),(47,'FRPD1EMRCMEBKPC50013','Power Dot France',13,'AccessibilitÃ© inconnue','FRPD1PMRCMEB'),(48,'FRPL1E12153P1','DRIVECO',11,'AccessibilitÃ© inconnue','FRPL1PBTWINPL1590001'),(49,'FRPL1E12153P2','DRIVECO',11,'AccessibilitÃ© inconnue','FRPL1PBTWINPL1590001'),(50,'FRPL1E12154P1','DRIVECO',11,'AccessibilitÃ© inconnue','FRPL1PBTWINPL1590001'),(51,'FRPL1E12154P2','DRIVECO',11,'AccessibilitÃ© inconnue','FRPL1PBTWINPL1590001'),(52,'FRPL1E12155P1','DRIVECO',11,'AccessibilitÃ© inconnue','FRPL1PBTWINPL1590002'),(53,'FRPL1E12155P2','DRIVECO',11,'AccessibilitÃ© inconnue','FRPL1PBTWINPL1590002'),(54,'FRPL1E12156P1','DRIVECO',11,'AccessibilitÃ© inconnue','FRPL1PBTWINPL1590002'),(55,'FRPL1E12156P2','DRIVECO',11,'AccessibilitÃ© inconnue','FRPL1PBTWINPL1590002'),(56,'FRROSE1191','RossiniEnergy',22,'Accessible mais non rÃ©servÃ© PMR','FRROSE119'),(57,'FRROSE1192','RossiniEnergy',22,'Accessible mais non rÃ©servÃ© PMR','FRROSE119'),(58,'FRROSE1211','RossiniEnergy',22,'Accessible mais non rÃ©servÃ© PMR','FRROSE121'),(59,'FRROSE1212','RossiniEnergy',22,'Accessible mais non rÃ©servÃ© PMR','FRROSE121'),(60,'FRROSE1213','RossiniEnergy',22,'Accessible mais non rÃ©servÃ© PMR','FRROSE121'),(61,'FRROSE1214','RossiniEnergy',22,'Accessible mais non rÃ©servÃ© PMR','FRROSE121'),(62,'FRROSE1371','RossiniEnergy',22,'Accessible mais non rÃ©servÃ© PMR','FRROSE137'),(63,'FRROSE1372','RossiniEnergy',22,'Accessible mais non rÃ©servÃ© PMR','FRROSE137'),(64,'FRROSE1373','RossiniEnergy',22,'Accessible mais non rÃ©servÃ© PMR','FRROSE137'),(65,'FRROSE1374','RossiniEnergy',22,'Accessible mais non rÃ©servÃ© PMR','FRROSE137'),(66,'FRROSE1531','RossiniEnergy',22,'Accessible mais non rÃ©servÃ© PMR','FRROSE153'),(67,'FRROSE1532','RossiniEnergy',22,'Accessible mais non rÃ©servÃ© PMR','FRROSE153'),(68,'FRROSE1533','RossiniEnergy',22,'Accessible mais non rÃ©servÃ© PMR','FRROSE153'),(69,'FRROSE1534','RossiniEnergy',22,'Accessible mais non rÃ©servÃ© PMR','FRROSE153'),(70,'FRROSE1535','RossiniEnergy',22,'Accessible mais non rÃ©servÃ© PMR','FRROSE153'),(71,'FRROSE1536','RossiniEnergy',22,'Accessible mais non rÃ©servÃ© PMR','FRROSE153'),(72,'FRROSE1571','RossiniEnergy',22,'Accessible mais non rÃ©servÃ© PMR','FRROSE157'),(73,'FRROSE1572','RossiniEnergy',22,'Accessible mais non rÃ©servÃ© PMR','FRROSE157'),(74,'FRROSE241','RossiniEnergy',22,'Accessible mais non rÃ©servÃ© PMR','FRROSE24'),(75,'FRROSE242','RossiniEnergy',22,'Accessible mais non rÃ©servÃ© PMR','FRROSE24'),(76,'FRROSE251','RossiniEnergy',22,'Accessible mais non rÃ©servÃ© PMR','FRROSE25'),(77,'FRROSE252','RossiniEnergy',22,'Accessible mais non rÃ©servÃ© PMR','FRROSE25'),(78,'FRROSE253','RossiniEnergy',22,'Accessible mais non rÃ©servÃ© PMR','FRROSE25'),(79,'FRROSE254','RossiniEnergy',22,'Accessible mais non rÃ©servÃ© PMR','FRROSE25'),(80,'FRROSE255','RossiniEnergy',22,'Accessible mais non rÃ©servÃ© PMR','FRROSE25'),(81,'FRROSE256','RossiniEnergy',22,'Accessible mais non rÃ©servÃ© PMR','FRROSE25'),(82,'FRROSE301','RossiniEnergy',22,'Accessible mais non rÃ©servÃ© PMR','FRROSE30'),(83,'FRROSE302','RossiniEnergy',22,'Accessible mais non rÃ©servÃ© PMR','FRROSE30'),(84,'FRROSE303','RossiniEnergy',22,'Accessible mais non rÃ©servÃ© PMR','FRROSE30'),(85,'FRROSE304','RossiniEnergy',22,'Accessible mais non rÃ©servÃ© PMR','FRROSE30'),(86,'FRROSE471','RossiniEnergy',22,'Accessible mais non rÃ©servÃ© PMR','FRROSE47'),(87,'FRROSE472','RossiniEnergy',22,'Accessible mais non rÃ©servÃ© PMR','FRROSE47'),(88,'FRROSE951','RossiniEnergy',22,'Accessible mais non rÃ©servÃ© PMR','FRROSE95'),(89,'FRSSDE10165P1','DRIVECO',7,'AccessibilitÃ© inconnue','FRSSDPJLRASCQ596501'),(90,'FRSSDE10165P2','DRIVECO',7,'AccessibilitÃ© inconnue','FRSSDPJLRASCQ596501'),(91,'FRSSDE10226P1','DRIVECO',22,'AccessibilitÃ© inconnue','FRSSDPIMTDOUAI596501'),(92,'FRSSDE10226P2','DRIVECO',22,'AccessibilitÃ© inconnue','FRSSDPIMTDOUAI596501'),(93,'FRSSDE10344P1','DRIVECO',22,'AccessibilitÃ© inconnue','FRSSDPEURAUTOOPEL596501'),(94,'FRSSDE10344P2','DRIVECO',22,'AccessibilitÃ© inconnue','FRSSDPEURAUTOOPEL596501'),(95,'FRSSDE10468P1','DRIVECO',22,'AccessibilitÃ© inconnue','FRSSDPDUGARDINVOLVO596501'),(96,'FRSSDE10468P2','DRIVECO',22,'AccessibilitÃ© inconnue','FRSSDPDUGARDINVOLVO596501'),(97,'FRSSDE10513P1','DRIVECO',22,'AccessibilitÃ© inconnue','FRSSDPTIVOLI594931'),(98,'FRSSDE10513P2','DRIVECO',22,'AccessibilitÃ© inconnue','FRSSDPTIVOLI594931'),(99,'FRSSDE10514P1','DRIVECO',22,'AccessibilitÃ© inconnue','FRSSDPTIVOLI594931'),(100,'FRSSDE10514P2','DRIVECO',22,'AccessibilitÃ© inconnue','FRSSDPTIVOLI594931'),(101,'FRSSDE10515P1','DRIVECO',22,'AccessibilitÃ© inconnue','FRSSDPTIVOLI594931'),(102,'FRSSDE10515P2','DRIVECO',22,'AccessibilitÃ© inconnue','FRSSDPTIVOLI594931'),(103,'FRSSDE10548P1','DRIVECO',7,'AccessibilitÃ© inconnue','FRSSDPIMTDOUAI596501'),(104,'FRSSDE10548P2','DRIVECO',7,'AccessibilitÃ© inconnue','FRSSDPIMTDOUAI596501'),(105,'FRSSDE10570P1','DRIVECO',22,'AccessibilitÃ© inconnue','FRSSDPDUGARDINFORD596501'),(106,'FRSSDE10570P2','DRIVECO',22,'AccessibilitÃ© inconnue','FRSSDPDUGARDINFORD596501'),(107,'FRSSDE10571P1','DRIVECO',22,'AccessibilitÃ© inconnue','FRSSDPDUGARDINFORD596501'),(108,'FRSSDE10571P2','DRIVECO',22,'AccessibilitÃ© inconnue','FRSSDPDUGARDINFORD596501'),(109,'FRSSDE10572P1','DRIVECO',22,'AccessibilitÃ© inconnue','FRSSDPDUGARDINVOLVO596501'),(110,'FRSSDE10572P2','DRIVECO',22,'AccessibilitÃ© inconnue','FRSSDPDUGARDINVOLVO596501'),(111,'FRSSDE10573P1','DRIVECO',22,'AccessibilitÃ© inconnue','FRSSDPDUGARDINMITSUBISHI596501'),(112,'FRSSDE10573P2','DRIVECO',22,'AccessibilitÃ© inconnue','FRSSDPDUGARDINMITSUBISHI596501'),(113,'FRSSDE10603P1','DRIVECO',22,'AccessibilitÃ© inconnue','FRSSDPPROMOD598471'),(114,'FRSSDE10603P2','DRIVECO',22,'AccessibilitÃ© inconnue','FRSSDPPROMOD598471'),(115,'FRSSDE10607P1','DRIVECO',22,'AccessibilitÃ© inconnue','FRSSDPGHICLSAINTPHILIBERT59160'),(116,'FRSSDE10607P2','DRIVECO',22,'AccessibilitÃ© inconnue','FRSSDPGHICLSAINTPHILIBERT59160'),(117,'FRSSDE10608P1','DRIVECO',22,'AccessibilitÃ© inconnue','FRSSDPGHICLSAINTPHILIBERT59160'),(118,'FRSSDE10608P2','DRIVECO',22,'AccessibilitÃ© inconnue','FRSSDPGHICLSAINTPHILIBERT59160'),(119,'FRSSDE10609P1','DRIVECO',22,'AccessibilitÃ© inconnue','FRSSDPGHICLSAINTPHILIBERT59160'),(120,'FRSSDE10609P2','DRIVECO',22,'AccessibilitÃ© inconnue','FRSSDPGHICLSAINTPHILIBERT59160'),(121,'FRSSDE10610P1','DRIVECO',22,'AccessibilitÃ© inconnue','FRSSDPGHICLSAINTPHILIBERT59160'),(122,'FRSSDE10610P2','DRIVECO',22,'AccessibilitÃ© inconnue','FRSSDPGHICLSAINTPHILIBERT59160'),(123,'FRSSDE10611P1','DRIVECO',22,'AccessibilitÃ© inconnue','FRSSDPGHICLSAINTPHILIBERT59160'),(124,'FRSSDE10611P2','DRIVECO',22,'AccessibilitÃ© inconnue','FRSSDPGHICLSAINTPHILIBERT59160'),(125,'FRSSDE10612P1','DRIVECO',22,'AccessibilitÃ© inconnue','FRSSDPGHICLSAINTPHILIBERT59160'),(126,'FRSSDE10612P2','DRIVECO',22,'AccessibilitÃ© inconnue','FRSSDPGHICLSAINTPHILIBERT59160'),(127,'FRSSDE10613P1','DRIVECO',22,'AccessibilitÃ© inconnue','FRSSDPGHICLSAINTPHILIBERT59160'),(128,'FRSSDE10613P2','DRIVECO',22,'AccessibilitÃ© inconnue','FRSSDPGHICLSAINTPHILIBERT59160'),(129,'FRSSDE10614P1','DRIVECO',22,'AccessibilitÃ© inconnue','FRSSDPGHICLSAINTPHILIBERT59160'),(130,'FRSSDE10614P2','DRIVECO',22,'AccessibilitÃ© inconnue','FRSSDPGHICLSAINTPHILIBERT59160'),(131,'FRSSDE10615P1','DRIVECO',22,'AccessibilitÃ© inconnue','FRSSDPGHICLSAINTPHILIBERT59160'),(132,'FRSSDE10615P2','DRIVECO',22,'AccessibilitÃ© inconnue','FRSSDPGHICLSAINTPHILIBERT59160'),(133,'FRSSDE10616P1','DRIVECO',22,'AccessibilitÃ© inconnue','FRSSDPGHICLSAINTPHILIBERT59160'),(134,'FRSSDE10616P2','DRIVECO',22,'AccessibilitÃ© inconnue','FRSSDPGHICLSAINTPHILIBERT59160'),(135,'FRSSDE10617P1','DRIVECO',22,'AccessibilitÃ© inconnue','FRSSDPGHICLSAINTPHILIBERT59160'),(136,'FRSSDE10617P2','DRIVECO',22,'AccessibilitÃ© inconnue','FRSSDPGHICLSAINTPHILIBERT59160'),(137,'FRSSDE10618P1','DRIVECO',22,'AccessibilitÃ© inconnue','FRSSDPGHICLSAINTVINCENT59000'),(138,'FRSSDE10618P2','DRIVECO',22,'AccessibilitÃ© inconnue','FRSSDPGHICLSAINTVINCENT59000'),(139,'FRSSDE10619P1','DRIVECO',22,'AccessibilitÃ© inconnue','FRSSDPGHICLSAINTVINCENT59000'),(140,'FRSSDE10619P2','DRIVECO',22,'AccessibilitÃ© inconnue','FRSSDPGHICLSAINTVINCENT59000'),(141,'FRSSDE10620P1','DRIVECO',22,'AccessibilitÃ© inconnue','FRSSDPGHICLSAINTVINCENT59000'),(142,'FRSSDE10620P2','DRIVECO',22,'AccessibilitÃ© inconnue','FRSSDPGHICLSAINTVINCENT59000'),(143,'FRSSDE10927P1','DRIVECO',22,'AccessibilitÃ© inconnue','FRSSDPHOTMARCQ597001'),(144,'FRSSDE10927P2','DRIVECO',22,'AccessibilitÃ© inconnue','FRSSDPHOTMARCQ597001'),(145,'FRSSDE10938P1','DRIVECO',7,'AccessibilitÃ© inconnue','FRSSDPCLINMITTERIE591601'),(146,'FRSSDE10938P2','DRIVECO',7,'AccessibilitÃ© inconnue','FRSSDPCLINMITTERIE591601'),(147,'FRSSDE10942P1','DRIVECO',7,'AccessibilitÃ© inconnue','FRSSDPCLINMITTERIE591601'),(148,'FRSSDE10942P2','DRIVECO',7,'AccessibilitÃ© inconnue','FRSSDPCLINMITTERIE591601'),(149,'FRSSDE11191P1','DRIVECO',22,'AccessibilitÃ© inconnue','FRSSDPBTWIN590003'),(150,'FRSSDE11191P2','DRIVECO',22,'AccessibilitÃ© inconnue','FRSSDPBTWIN590003'),(151,'FRSSDE11192P1','DRIVECO',22,'AccessibilitÃ© inconnue','FRSSDPBTWIN590003'),(152,'FRSSDE11192P2','DRIVECO',22,'AccessibilitÃ© inconnue','FRSSDPBTWIN590003'),(153,'FRSSDE11298P1','DRIVECO',22,'AccessibilitÃ© inconnue','FRSSDPMADELEINE597001'),(154,'FRSSDE11298P2','DRIVECO',22,'AccessibilitÃ© inconnue','FRSSDPMADELEINE597001'),(155,'FRSSDE11299P1','DRIVECO',22,'AccessibilitÃ© inconnue','FRSSDPMADELEINE597001'),(156,'FRSSDE11299P2','DRIVECO',22,'AccessibilitÃ© inconnue','FRSSDPMADELEINE597001'),(157,'FRSSDE11300P1','DRIVECO',22,'AccessibilitÃ© inconnue','FRSSDPMADELEINE597001'),(158,'FRSSDE11300P2','DRIVECO',22,'AccessibilitÃ© inconnue','FRSSDPMADELEINE597001'),(159,'FRSSDE113222237981041843P3','DRIVECO',22,'AccessibilitÃ© inconnue','FRSSDPDUGARDINVOLVO596501'),(160,'FRSSDE11793P1','DRIVECO',22,'AccessibilitÃ© inconnue','FRSSDPNHOOD594911'),(161,'FRSSDE11793P2','DRIVECO',22,'AccessibilitÃ© inconnue','FRSSDPNHOOD594911'),(162,'FRSSDE11794P1','DRIVECO',22,'AccessibilitÃ© inconnue','FRSSDPNHOOD594911'),(163,'FRSSDE11794P2','DRIVECO',22,'AccessibilitÃ© inconnue','FRSSDPNHOOD594911'),(164,'FRSSDE11795P1','DRIVECO',22,'AccessibilitÃ© inconnue','FRSSDPNHOOD594911'),(165,'FRSSDE11795P2','DRIVECO',22,'AccessibilitÃ© inconnue','FRSSDPNHOOD594911'),(166,'FRSSDE11796P1','DRIVECO',22,'AccessibilitÃ© inconnue','FRSSDPNHOOD594911'),(167,'FRSSDE11796P2','DRIVECO',22,'AccessibilitÃ© inconnue','FRSSDPNHOOD594911'),(168,'FRSSDE19541A00000404P1','DRIVECO',22,'AccessibilitÃ© inconnue','FRSSDPEASYMOTORSHYUNDAI596501'),(169,'FRSSDE19541A00005704P2','DRIVECO',22,'AccessibilitÃ© inconnue','FRSSDPVALAUTOHYUNDAI591601'),(170,'FRSSDE19694304P1','DRIVECO',7,'AccessibilitÃ© inconnue','FRSSDPEURAUTOOPEL596501'),(171,'FRSSDE20291432P1','DRIVECO',22,'AccessibilitÃ© inconnue','FRSSDPGHICLSAINTVINCENT59000'),(172,'FRSSDE667170126160001P1','DRIVECO',22,'AccessibilitÃ© inconnue','FRSSDPDECATHLON590001'),(173,'FRSSDE667170126160001P2','DRIVECO',22,'AccessibilitÃ© inconnue','FRSSDPDECATHLON590001'),(174,'FRSSDE667170126160002P1','DRIVECO',22,'AccessibilitÃ© inconnue','FRSSDPDECATHLON590001'),(175,'FRSSDE667170126160002P2','DRIVECO',22,'AccessibilitÃ© inconnue','FRSSDPDECATHLON590001'),(176,'FRSSDE667170126160004P1','DRIVECO',22,'AccessibilitÃ© inconnue','FRSSDPDECATHLON590001'),(177,'FRSSDE667170126160004P2','DRIVECO',22,'AccessibilitÃ© inconnue','FRSSDPDECATHLON590001'),(178,'FRURWEUNIB2221','Izivia',22,'AccessibilitÃ© inconnue','FRURWPUNIB2221'),(179,'FRURWEUNIB2232','Izivia',22,'AccessibilitÃ© inconnue','FRURWPUNIB2232'),(180,'FRURWEUNIB2312','Izivia',22,'AccessibilitÃ© inconnue','FRURWPUNIB2312'),(181,'FRZMAE22AC56657','ZEBORNE',22,'Accessible mais non rÃ©servÃ© PMR','FRZMAE22AC56657'),(182,'FRZMAE22AC57006','ZEBORNE',22,'Accessible mais non rÃ©servÃ© PMR','FRZMAE22AC57006'),(183,'FR3R3E10000849271','R3',150,'Accessible mais non rÃ©servÃ© PMR','FR3R3P89283504'),(184,'FR3R3E10000849281','R3',150,'Accessible mais non rÃ©servÃ© PMR','FR3R3P89283504'),(185,'FR3R3E10000849761','R3',150,'Accessible mais non rÃ©servÃ© PMR','FR3R3P89882097'),(186,'FR3R3E10000849762','R3',150,'Accessible mais non rÃ©servÃ© PMR','FR3R3P89882097'),(187,'FR3R3E10000849781','R3',150,'Accessible mais non rÃ©servÃ© PMR','FR3R3P89882104'),(188,'FR3R3E10000849782','R3',150,'Accessible mais non rÃ©servÃ© PMR','FR3R3P89882104'),(189,'FR3R3E10000850181','R3',150,'Accessible mais non rÃ©servÃ© PMR','FR3R3P89283504'),(190,'FR3R3E10000850441','R3',150,'Accessible mais non rÃ©servÃ© PMR','FR3R3P89363743'),(191,'FR3R3E10000850442','R3',150,'Accessible mais non rÃ©servÃ© PMR','FR3R3P89363743'),(192,'FR3R3E10001361341','R3',150,'Accessible mais non rÃ©servÃ© PMR','FR3R3P89882097'),(193,'FR3R3E10001361342','R3',150,'Accessible mais non rÃ©servÃ© PMR','FR3R3P89882097'),(194,'FR3R3E10001361361','R3',150,'Accessible mais non rÃ©servÃ© PMR','FR3R3P89882104'),(195,'FR3R3E10001361362','R3',150,'Accessible mais non rÃ©servÃ© PMR','FR3R3P89882104'),(196,'FRBMPE2143','BUMP',150,'AccessibilitÃ© inconnue','FRBMPS64527'),(197,'FRBMPE2985','BUMP',150,'AccessibilitÃ© inconnue','FRBMPS64526'),(198,'FRBMPE3231','BUMP',150,'AccessibilitÃ© inconnue','FRBMPS64527'),(199,'FRBMPE5197','BUMP',150,'AccessibilitÃ© inconnue','FRBMPS64526'),(200,'FRELCE5PNG','ELECTRA',150,'AccessibilitÃ© inconnue','FRELCPMEBHK'),(201,'FRELCE5TX5','ELECTRA',150,'AccessibilitÃ© inconnue','FRELCPMEBHF'),(202,'FRELCE6S75','ELECTRA',150,'AccessibilitÃ© inconnue','FRELCPMEBHK'),(203,'FRELCEALYD','ELECTRA',150,'AccessibilitÃ© inconnue','FRELCPMEBHF'),(204,'FRELCEBPXE','ELECTRA',150,'AccessibilitÃ© inconnue','FRELCPMEBHF'),(205,'FRELCEHNVB','ELECTRA',150,'AccessibilitÃ© inconnue','FRELCPMEBHK'),(206,'FRELCEK9VG','ELECTRA',150,'AccessibilitÃ© inconnue','FRELCPMEBHK'),(207,'FRELCETA2X','ELECTRA',150,'AccessibilitÃ© inconnue','FRELCPMEBHF'),(208,'FRFR1EAYRU1','REGIE MUNICIPALE D\'ELECTRICITE DE LOOS',50,'Accessible mais non rÃ©servÃ© PMR','FRFR1EAYRU'),(209,'FRFR1EAYRU2','REGIE MUNICIPALE D\'ELECTRICITE DE LOOS',50,'Accessible mais non rÃ©servÃ© PMR','FRFR1EAYRU'),(210,'FRFR1EDXS1','REGIE MUNICIPALE D\'ELECTRICITE DE LOOS',50,'Accessible mais non rÃ©servÃ© PMR','FRFR1EAYRU'),(211,'FRFR1EDXS2','REGIE MUNICIPALE D\'ELECTRICITE DE LOOS',50,'Accessible mais non rÃ©servÃ© PMR','FRFR1EAYRU'),(212,'FRFR1EPJXS1','REGIE MUNICIPALE D\'ELECTRICITE DE LOOS',50,'Accessible mais non rÃ©servÃ© PMR','FRFR1EPJXS'),(213,'FRFR1EPJXS2','REGIE MUNICIPALE D\'ELECTRICITE DE LOOS',50,'Accessible mais non rÃ©servÃ© PMR','FRFR1EPJXS'),(214,'FRHPCENF0510460011','TotalEnergies Charging Services',50,'AccessibilitÃ© inconnue','FRHPCPNF051046'),(215,'FRHPCENF0510460021','TotalEnergies Charging Services',300,'AccessibilitÃ© inconnue','FRHPCPNF051046'),(216,'FRHPCENF0510460033','TotalEnergies Charging Services',300,'AccessibilitÃ© inconnue','FRHPCPNF051046'),(217,'FRHPCENF0510460041','TotalEnergies Charging Services',300,'AccessibilitÃ© inconnue','FRHPCPNF051046'),(218,'FRPD1EACCVDAKP200011','Power Dot France',80,'AccessibilitÃ© inconnue','FRPD1PACCVDA'),(219,'FRPD1EACCVDAKP200012','Power Dot France',80,'AccessibilitÃ© inconnue','FRPD1PACCVDA'),(220,'FRPD1EACCVDAKP200013','Power Dot France',80,'AccessibilitÃ© inconnue','FRPD1PACCVDA'),(221,'FRPD1EACCVDAKP200014','Power Dot France',80,'AccessibilitÃ© inconnue','FRPD1PACCVDA'),(222,'FRPD1EACCVDAKP200015','Power Dot France',80,'AccessibilitÃ© inconnue','FRPD1PACCVDA'),(223,'FRPD1EACCVDAKP200016','Power Dot France',80,'AccessibilitÃ© inconnue','FRPD1PACCVDA'),(224,'FRPD1EACCVDAKP200017','Power Dot France',80,'AccessibilitÃ© inconnue','FRPD1PACCVDA'),(225,'FRPD1EACCVDAKP200018','Power Dot France',80,'AccessibilitÃ© inconnue','FRPD1PACCVDA'),(226,'FRPD1EACCVDAKPC50012','Power Dot France',50,'AccessibilitÃ© inconnue','FRPD1PACCVDA'),(227,'FRPD1ECORFLEUFC200011','Power Dot France',100,'AccessibilitÃ© inconnue','FRPD1PCORFLE'),(228,'FRPD1ECORFLEUFC200014','Power Dot France',100,'AccessibilitÃ© inconnue','FRPD1PCORFLE'),(229,'FRPD1EIBSMEBKPC100012','Power Dot France',90,'AccessibilitÃ© inconnue','FRPD1PIBSMEB'),(230,'FRPD1EIBSMEBKPC100014','Power Dot France',90,'AccessibilitÃ© inconnue','FRPD1PIBSMEB'),(231,'FRPD1EIBSVDAKPC200012','Power Dot France',80,'AccessibilitÃ© inconnue','FRPD1PIBSVDA'),(232,'FRPD1EIBSVDAKPC200013','Power Dot France',200,'AccessibilitÃ© inconnue','FRPD1PIBSVDA'),(233,'FRPD1EIBSVDAKPC200014','Power Dot France',200,'AccessibilitÃ© inconnue','FRPD1PIBSVDA'),(234,'FRPD1EMATVDAEFAQ45012','Power Dot France',50,'AccessibilitÃ© inconnue','FRPD1PMATVDA'),(235,'FRPD1EMRCMEBKPC100011','Power Dot France',90,'AccessibilitÃ© inconnue','FRPD1PMRCMEB'),(236,'FRPD1EMRCMEBKPC100012','Power Dot France',90,'AccessibilitÃ© inconnue','FRPD1PMRCMEB'),(237,'FRPD1EMRCMEBKPC100021','Power Dot France',50,'AccessibilitÃ© inconnue','FRPD1PMRCMEB'),(238,'FRPD1EMRCMEBKPC100022','Power Dot France',50,'AccessibilitÃ© inconnue','FRPD1PMRCMEB'),(239,'FRPD1EMRCMEBKPC100032','Power Dot France',50,'AccessibilitÃ© inconnue','FRPD1PMRCMEB'),(240,'FRPD1EMRCMEBKPC50012','Power Dot France',50,'AccessibilitÃ© inconnue','FRPD1PMRCMEB'),(241,'FRSSDE113222237981041843P1','DRIVECO',200,'AccessibilitÃ© inconnue','FRSSDPDUGARDINVOLVO596501'),(242,'FRSSDE113222237981041843P2','DRIVECO',200,'AccessibilitÃ© inconnue','FRSSDPDUGARDINVOLVO596501'),(243,'FRSSDE19541A00000404P2','DRIVECO',50,'AccessibilitÃ© inconnue','FRSSDPEASYMOTORSHYUNDAI596501'),(244,'FRSSDE19541A00005704P1','DRIVECO',50,'AccessibilitÃ© inconnue','FRSSDPVALAUTOHYUNDAI591601'),(245,'FR3R3E10000850182','R3',50,'Accessible mais non rÃ©servÃ© PMR','FR3R3P89283504'),(246,'FRPD1EACCVDAKPC50011','Power Dot France',50,'AccessibilitÃ© inconnue','FRPD1PACCVDA'),(247,'FRPD1ECORFLEUFC200013','Power Dot France',50,'AccessibilitÃ© inconnue','FRPD1PCORFLE'),(248,'FRPD1EIBSMEBKPC100011','Power Dot France',50,'AccessibilitÃ© inconnue','FRPD1PIBSMEB'),(249,'FRPD1EIBSVDAKPC200011','Power Dot France',50,'AccessibilitÃ© inconnue','FRPD1PIBSVDA'),(250,'FRPD1EMATVDAEFAQ45011','Power Dot France',50,'AccessibilitÃ© inconnue','FRPD1PMATVDA'),(251,'FRPD1EMRCMEBKPC100031','Power Dot France',50,'AccessibilitÃ© inconnue','FRPD1PMRCMEB'),(252,'FRPD1EMRCMEBKPC50011','Power Dot France',50,'AccessibilitÃ© inconnue','FRPD1PMRCMEB');
/*!40000 ALTER TABLE `charge_point` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `form`
--

DROP TABLE IF EXISTS `form`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `form` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(80) DEFAULT NULL,
  `lastname` varchar(80) DEFAULT NULL,
  `email` varchar(160) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `type` varchar(80) DEFAULT NULL,
  `title` varchar(80) DEFAULT NULL,
  `content` varchar(160) DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `form_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `form`
--

LOCK TABLES `form` WRITE;
/*!40000 ALTER TABLE `form` DISABLE KEYS */;
/*!40000 ALTER TABLE `form` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `list_plug_type`
--

DROP TABLE IF EXISTS `list_plug_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `list_plug_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `charge_point_id` varchar(80) DEFAULT NULL,
  `plug_type_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `charge_point_id` (`charge_point_id`),
  KEY `plug_type_id` (`plug_type_id`),
  CONSTRAINT `list_plug_type_ibfk_1` FOREIGN KEY (`charge_point_id`) REFERENCES `charge_point` (`charge_point_id_fr`),
  CONSTRAINT `list_plug_type_ibfk_2` FOREIGN KEY (`plug_type_id`) REFERENCES `plug_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=253 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `list_plug_type`
--

LOCK TABLES `list_plug_type` WRITE;
/*!40000 ALTER TABLE `list_plug_type` DISABLE KEYS */;
INSERT INTO `list_plug_type` VALUES (1,'FR3R3E10000849861',1),(2,'FR3R3E10000849862',1),(3,'FR3R3E10000849871',1),(4,'FR3R3E10000849872',1),(5,'FR3R3E10000849881',1),(6,'FR3R3E10000849882',1),(7,'FR3R3E10000850183',1),(8,'FR3R3E10000850443',1),(9,'FR3R3E10001361343',1),(10,'FR3R3E10001361363',1),(11,'FRBMPE1047',1),(12,'FRBMPE2716',1),(13,'FRBMPE3599',1),(14,'FRBMPE7708',1),(15,'FRFR1EAYRU3',1),(16,'FRFR1EDXS3',1),(17,'FRFR1EPJXS3',1),(18,'FRG51E10452P1',1),(19,'FRG51E10452P2',1),(20,'FRG51E10453P1',1),(21,'FRG51E10453P2',1),(22,'FRG51E10454P1',1),(23,'FRG51E10454P2',1),(24,'FRG51E11205P1',1),(25,'FRG51E11205P2',1),(26,'FRG51E11206P1',1),(27,'FRG51E11206P2',1),(28,'FRG51E11207P1',1),(29,'FRG51E11207P2',1),(30,'FRG51E11208P1',1),(31,'FRG51E11208P2',1),(32,'FROTHEOTHR15421',1),(33,'FRPD1EACCVDAALFD22011',1),(34,'FRPD1EACCVDAALFD22012',1),(35,'FRPD1EACCVDAKPC50013',1),(36,'FRPD1ECORFLEUFC200012',1),(37,'FRPD1EIBSMEBKPC100013',1),(38,'FRPD1EIBSVDAALFS22011',1),(39,'FRPD1EMATVDAALF00021',1),(40,'FRPD1EMATVDAALF00022',1),(41,'FRPD1EMATVDAALF00031',1),(42,'FRPD1EMATVDAALF00032',1),(43,'FRPD1EMATVDAEFAQ45013',1),(44,'FRPD1EMRCMEBKPC100013',1),(45,'FRPD1EMRCMEBKPC100023',1),(46,'FRPD1EMRCMEBKPC100033',1),(47,'FRPD1EMRCMEBKPC50013',1),(48,'FRPL1E12153P1',1),(49,'FRPL1E12153P2',1),(50,'FRPL1E12154P1',1),(51,'FRPL1E12154P2',1),(52,'FRPL1E12155P1',1),(53,'FRPL1E12155P2',1),(54,'FRPL1E12156P1',1),(55,'FRPL1E12156P2',1),(56,'FRROSE1191',1),(57,'FRROSE1192',1),(58,'FRROSE1211',1),(59,'FRROSE1212',1),(60,'FRROSE1213',1),(61,'FRROSE1214',1),(62,'FRROSE1371',1),(63,'FRROSE1372',1),(64,'FRROSE1373',1),(65,'FRROSE1374',1),(66,'FRROSE1531',1),(67,'FRROSE1532',1),(68,'FRROSE1533',1),(69,'FRROSE1534',1),(70,'FRROSE1535',1),(71,'FRROSE1536',1),(72,'FRROSE1571',1),(73,'FRROSE1572',1),(74,'FRROSE241',1),(75,'FRROSE242',1),(76,'FRROSE251',1),(77,'FRROSE252',1),(78,'FRROSE253',1),(79,'FRROSE254',1),(80,'FRROSE255',1),(81,'FRROSE256',1),(82,'FRROSE301',1),(83,'FRROSE302',1),(84,'FRROSE303',1),(85,'FRROSE304',1),(86,'FRROSE471',1),(87,'FRROSE472',1),(88,'FRROSE951',1),(89,'FRSSDE10165P1',1),(90,'FRSSDE10165P2',1),(91,'FRSSDE10226P1',1),(92,'FRSSDE10226P2',1),(93,'FRSSDE10344P1',1),(94,'FRSSDE10344P2',1),(95,'FRSSDE10468P1',1),(96,'FRSSDE10468P2',1),(97,'FRSSDE10513P1',1),(98,'FRSSDE10513P2',1),(99,'FRSSDE10514P1',1),(100,'FRSSDE10514P2',1),(101,'FRSSDE10515P1',1),(102,'FRSSDE10515P2',1),(103,'FRSSDE10548P1',1),(104,'FRSSDE10548P2',1),(105,'FRSSDE10570P1',1),(106,'FRSSDE10570P2',1),(107,'FRSSDE10571P1',1),(108,'FRSSDE10571P2',1),(109,'FRSSDE10572P1',1),(110,'FRSSDE10572P2',1),(111,'FRSSDE10573P1',1),(112,'FRSSDE10573P2',1),(113,'FRSSDE10603P1',1),(114,'FRSSDE10603P2',1),(115,'FRSSDE10607P1',1),(116,'FRSSDE10607P2',1),(117,'FRSSDE10608P1',1),(118,'FRSSDE10608P2',1),(119,'FRSSDE10609P1',1),(120,'FRSSDE10609P2',1),(121,'FRSSDE10610P1',1),(122,'FRSSDE10610P2',1),(123,'FRSSDE10611P1',1),(124,'FRSSDE10611P2',1),(125,'FRSSDE10612P1',1),(126,'FRSSDE10612P2',1),(127,'FRSSDE10613P1',1),(128,'FRSSDE10613P2',1),(129,'FRSSDE10614P1',1),(130,'FRSSDE10614P2',1),(131,'FRSSDE10615P1',1),(132,'FRSSDE10615P2',1),(133,'FRSSDE10616P1',1),(134,'FRSSDE10616P2',1),(135,'FRSSDE10617P1',1),(136,'FRSSDE10617P2',1),(137,'FRSSDE10618P1',1),(138,'FRSSDE10618P2',1),(139,'FRSSDE10619P1',1),(140,'FRSSDE10619P2',1),(141,'FRSSDE10620P1',1),(142,'FRSSDE10620P2',1),(143,'FRSSDE10927P1',1),(144,'FRSSDE10927P2',1),(145,'FRSSDE10938P1',1),(146,'FRSSDE10938P2',1),(147,'FRSSDE10942P1',1),(148,'FRSSDE10942P2',1),(149,'FRSSDE11191P1',1),(150,'FRSSDE11191P2',1),(151,'FRSSDE11192P1',1),(152,'FRSSDE11192P2',1),(153,'FRSSDE11298P1',1),(154,'FRSSDE11298P2',1),(155,'FRSSDE11299P1',1),(156,'FRSSDE11299P2',1),(157,'FRSSDE11300P1',1),(158,'FRSSDE11300P2',1),(159,'FRSSDE113222237981041843P3',1),(160,'FRSSDE11793P1',1),(161,'FRSSDE11793P2',1),(162,'FRSSDE11794P1',1),(163,'FRSSDE11794P2',1),(164,'FRSSDE11795P1',1),(165,'FRSSDE11795P2',1),(166,'FRSSDE11796P1',1),(167,'FRSSDE11796P2',1),(168,'FRSSDE19541A00000404P1',1),(169,'FRSSDE19541A00005704P2',1),(170,'FRSSDE19694304P1',1),(171,'FRSSDE20291432P1',1),(172,'FRSSDE667170126160001P1',1),(173,'FRSSDE667170126160001P2',1),(174,'FRSSDE667170126160002P1',1),(175,'FRSSDE667170126160002P2',1),(176,'FRSSDE667170126160004P1',1),(177,'FRSSDE667170126160004P2',1),(178,'FRURWEUNIB2221',1),(179,'FRURWEUNIB2232',1),(180,'FRURWEUNIB2312',1),(181,'FRZMAE22AC56657',1),(182,'FRZMAE22AC57006',1),(183,'FR3R3E10000849271',2),(184,'FR3R3E10000849281',2),(185,'FR3R3E10000849761',2),(186,'FR3R3E10000849762',2),(187,'FR3R3E10000849781',2),(188,'FR3R3E10000849782',2),(189,'FR3R3E10000850181',2),(190,'FR3R3E10000850441',2),(191,'FR3R3E10000850442',2),(192,'FR3R3E10001361341',2),(193,'FR3R3E10001361342',2),(194,'FR3R3E10001361361',2),(195,'FR3R3E10001361362',2),(196,'FRBMPE2143',2),(197,'FRBMPE2985',2),(198,'FRBMPE3231',2),(199,'FRBMPE5197',2),(200,'FRELCE5PNG',2),(201,'FRELCE5TX5',2),(202,'FRELCE6S75',2),(203,'FRELCEALYD',2),(204,'FRELCEBPXE',2),(205,'FRELCEHNVB',2),(206,'FRELCEK9VG',2),(207,'FRELCETA2X',2),(208,'FRFR1EAYRU1',2),(209,'FRFR1EAYRU2',2),(210,'FRFR1EDXS1',2),(211,'FRFR1EDXS2',2),(212,'FRFR1EPJXS1',2),(213,'FRFR1EPJXS2',2),(214,'FRHPCENF0510460011',2),(215,'FRHPCENF0510460021',2),(216,'FRHPCENF0510460033',2),(217,'FRHPCENF0510460041',2),(218,'FRPD1EACCVDAKP200011',2),(219,'FRPD1EACCVDAKP200012',2),(220,'FRPD1EACCVDAKP200013',2),(221,'FRPD1EACCVDAKP200014',2),(222,'FRPD1EACCVDAKP200015',2),(223,'FRPD1EACCVDAKP200016',2),(224,'FRPD1EACCVDAKP200017',2),(225,'FRPD1EACCVDAKP200018',2),(226,'FRPD1EACCVDAKPC50012',2),(227,'FRPD1ECORFLEUFC200011',2),(228,'FRPD1ECORFLEUFC200014',2),(229,'FRPD1EIBSMEBKPC100012',2),(230,'FRPD1EIBSMEBKPC100014',2),(231,'FRPD1EIBSVDAKPC200012',2),(232,'FRPD1EIBSVDAKPC200013',2),(233,'FRPD1EIBSVDAKPC200014',2),(234,'FRPD1EMATVDAEFAQ45012',2),(235,'FRPD1EMRCMEBKPC100011',2),(236,'FRPD1EMRCMEBKPC100012',2),(237,'FRPD1EMRCMEBKPC100021',2),(238,'FRPD1EMRCMEBKPC100022',2),(239,'FRPD1EMRCMEBKPC100032',2),(240,'FRPD1EMRCMEBKPC50012',2),(241,'FRSSDE113222237981041843P1',2),(242,'FRSSDE113222237981041843P2',2),(243,'FRSSDE19541A00000404P2',2),(244,'FRSSDE19541A00005704P1',2),(245,'FR3R3E10000850182',3),(246,'FRPD1EACCVDAKPC50011',3),(247,'FRPD1ECORFLEUFC200013',3),(248,'FRPD1EIBSMEBKPC100011',3),(249,'FRPD1EIBSVDAKPC200011',3),(250,'FRPD1EMATVDAEFAQ45011',3),(251,'FRPD1EMRCMEBKPC100031',3),(252,'FRPD1EMRCMEBKPC50011',3);
/*!40000 ALTER TABLE `list_plug_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `person`
--

DROP TABLE IF EXISTS `person`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `person` (
  `id` int NOT NULL AUTO_INCREMENT,
  `lastname` varchar(80) DEFAULT NULL,
  `firstname` varchar(80) DEFAULT NULL,
  `email` varchar(200) DEFAULT NULL,
  `gender` varchar(80) DEFAULT NULL,
  `birthdate` date DEFAULT NULL,
  `city` varchar(80) DEFAULT NULL,
  `zipcode` int DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `status` varchar(80) DEFAULT 'user',
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `person`
--

LOCK TABLES `person` WRITE;
/*!40000 ALTER TABLE `person` DISABLE KEYS */;
INSERT INTO `person` VALUES (1,'Doe','John','john@example.com','male','1995-05-25','CityName',54321,'$argon2id$v=19$m=19456,t=2,p=1$kDR+OqkCsDijBJRvExPrBA$99v+M8tbuDqs8EnrScmo+pXipo5/JOzwAhyFAeBkPFA','user');
/*!40000 ALTER TABLE `person` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `plug_type`
--

DROP TABLE IF EXISTS `plug_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `plug_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(80) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `plug_type`
--

LOCK TABLES `plug_type` WRITE;
/*!40000 ALTER TABLE `plug_type` DISABLE KEYS */;
INSERT INTO `plug_type` VALUES (1,'type2'),(2,'comboCCS'),(3,'chademo');
/*!40000 ALTER TABLE `plug_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `station`
--

DROP TABLE IF EXISTS `station`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `station` (
  `id` int NOT NULL AUTO_INCREMENT,
  `station_name` varchar(80) DEFAULT NULL,
  `adress` varchar(255) DEFAULT NULL,
  `y_latitude` decimal(10,8) DEFAULT NULL,
  `x_longitude` decimal(11,8) DEFAULT NULL,
  `station_id_fr` varchar(80) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `station_id_fr` (`station_id_fr`)
) ENGINE=InnoDB AUTO_INCREMENT=253 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `station`
--

LOCK TABLES `station` WRITE;
/*!40000 ALTER TABLE `station` DISABLE KEYS */;
INSERT INTO `station` VALUES (1,'R3 - Marquette 2','30 Rue des Moissons, 59520 Marquette-lez-Lille',50.68092900,3.06500000,'FR3R3P89882107'),(7,'R3 - Norauto V2','1 Rue de Versailles 59650 Villeneuve d\'ascq',50.61526800,3.12902400,'FR3R3P89283504'),(8,'R3 - Norauto Loos','92 Rue Georges PotiÃ©, 59120 Loos',50.61395700,3.00296000,'FR3R3P89363743'),(9,'R3 - Haute Borne','Haute Borne, 59650 Villeneuve d\'ascq',50.60818300,3.15515200,'FR3R3P89882097'),(10,'R3 - Marquette 1','7 Rue des Moissons, 59520 Marquette-lez-Lille',50.68130500,3.06457900,'FR3R3P89882104'),(11,'Bump - Monoprix - CroisÃƒÂ© Laroche','1002 Av. de la RÃƒÂ©publique',50.66393300,3.10254600,'FRBMPS64528'),(12,'Bump - Monoprix - CroisÃƒÂ© Laroche','1002 Av. de la RÃƒÂ©publique',50.66393300,3.10254600,'FRBMPS154952'),(15,'Loos, Parking de la Gare','rue du colonnel ornano loos',50.61000000,3.02000000,'FRFR1EAYRU'),(17,'Loos, Parking CIL','12 Rue Salengro LOOS',50.61750900,3.00961300,'FRFR1EPJXS'),(18,'Domyos - Marcq-en-BarÅ“ul','1 allÃ©e des Olympiades 59700 MARQ EN BAROEUL',50.68596100,3.09051300,'FRG51PDECATHLON597001'),(24,'Domyos - Marcq-en-Baroeul (2)','1 rue PavÃ© StratÃ©gique 59700 Marcq-en-Baroeul',50.68665700,3.08851300,'FRG51PDECATHLON597002'),(32,'SIXT MARCQ-EN-BAROEUL','67 AVENUE DE FRANDRE',50.66547300,3.11130900,'FROTHPOTHR15421'),(33,'HOTELF1 VILLENEUVE D ASCQ H2299','3 Bd de Mons, 59650 Villeneuve-d\'Ascq, France',50.64239082,3.14322387,'FRPD1PACCVDA'),(36,'Cora Flers','18 Rue Jules Guesde',50.63597057,3.12024882,'FRPD1PCORFLE'),(37,'hÃ´tel Ibis Styles Marcq-en-Baroeul','340bis Av. de la Marne',50.67575494,3.11621632,'FRPD1PIBSMEB'),(38,'Ibis Budget Villeneuve-D\'Ascq','9 Boulevard De Mons Zac Du Tir Ã€ Loques',50.64338160,3.14276130,'FRPD1PIBSVDA'),(39,'Match Villeneuve d\'Ascq (59)','5 Route de Sainghin',50.60730550,3.16394470,'FRPD1PMATVDA'),(44,'Mercure Marcq-en-Baroeul','157 Avenue de la Marne',50.67910790,3.10981570,'FRPD1PMRCMEB'),(48,'LePlein Btwin village - Lille - Hotel','4 Rue Professeur Langevin 59000 Lille',50.62009900,3.08362300,'FRPL1PBTWINPL1590001'),(52,'LePlein Btwin village -  Lille - EntrÃ©e principale','4 Rue Professeur Langevin 59000 Lille',50.61737100,3.08347300,'FRPL1PBTWINPL1590002'),(56,'ScanRoad','Port Fluvial 2 Ã¨me avenue Bat J 59000 Lille',50.63073500,3.03474600,'FRROSE119'),(58,'Urby','Port Fluvial 2 Ã¨me avenue Bat J 59000 Lille',50.62986800,3.03286400,'FRROSE121'),(62,'Intermarche_Lambersart','9 rue Gustave Eiffel, Lambersart 59130',50.65833300,3.01250000,'FRROSE137'),(66,'Oria','3 Rue Simon Vollant 59130 Lambersart',50.66517200,3.02794300,'FRROSE153'),(72,'CAAG','15 RUE HERGE, Villeneuve d\'ascq, 59650',50.62325200,3.14426500,'FRROSE157'),(74,'lillegrandpalais','1 Boulevard des CitÃ‡Â¸s Unies, 59777 Lille',50.63197010,3.07980870,'FRROSE24'),(76,'portdelille1','5Ã‡Ã¹me Rue 59000 Lille',50.63118600,3.03429700,'FRROSE25'),(82,'TOSSO1','5 rue Horus, 59650 Villeneuve d\'Ascq',50.60731820,3.15651840,'FRROSE30'),(86,'portdelille-LCT','12Ã‡Ã¹me Rue 59000 Lille.',50.62484900,3.02496800,'FRROSE47'),(88,'LF_Group','13 allÃ‡Â¸e Lakanal Villeneuve d\'Ascq 59650',50.64229500,3.13745000,'FRROSE95'),(89,'JLR - Villeneuve Ascq','Boulevard de l\'Ouest 59650 Villeneuve-d\'Ascq',50.63102900,3.12035700,'FRSSDPJLRASCQ596501'),(91,'IMT Douai - Lille Villeneuve','20 Rue Guglielmo Marconi 59650 Villeneuve-d\'Ascq',50.61150000,3.13458000,'FRSSDPIMTDOUAI596501'),(93,'OPEL Villeneuve d\'Ascq','21 Rue Jules Guesde 59650 Villeneuve-d\'Ascq',50.63729900,3.11921000,'FRSSDPEURAUTOOPEL596501'),(95,'Volvo Villeneuve d\'Ascq','Boulevard de l\'Ouest 59650 Villeneuve-d\'Ascq',50.63190800,3.12036700,'FRSSDPDUGARDINVOLVO596501'),(97,'Tivoli Capital - Villeneuve d\'Ascq','2 rue HÃ©raclÃ¨s 59493 Villeneuve-d\'Ascq',50.60425500,3.15962000,'FRSSDPTIVOLI594931'),(105,'Ford Villeneuve d\'Ascq','Boulevard de l\'Ouest 59650 Villeneuve-d\'Ascq',50.63243500,3.12049700,'FRSSDPDUGARDINFORD596501'),(111,'Mitsubishi Villeneuve d\'Ascq','Boulevard de l\'Ouest 59650 Villeneuve d\'Ascq',50.63231300,3.12047300,'FRSSDPDUGARDINMITSUBISHI596501'),(113,'SiÃ¨ge Promod','Chemin du Verseau 59847 Marcq-en-BarÅ“ul',50.68999500,3.12217500,'FRSSDPPROMOD598471'),(115,'HÃ´pital Saint Philibert','125 Rue du Grand But, 59160 Lille',50.65131700,2.97438600,'FRSSDPGHICLSAINTPHILIBERT59160'),(137,'HÃ´pital Saint Vincent','1 Boulevard de Belfort 59000 Lille',50.61959300,3.07652400,'FRSSDPGHICLSAINTVINCENT59000'),(143,'HÃ´tel du CroisÃ© Marcq en Baroeul','191 Rue de la Rianderie 59700 Marcq en BarÅ“ul',50.66754900,3.10086800,'FRSSDPHOTMARCQ597001'),(145,'Clinique Mitterie Wasquehal','195 Rue Adolphe Defrenne Lomme 59160 Lille',50.65447500,2.99237300,'FRSSDPCLINMITTERIE591601'),(149,'Btwin Lille - Parking usine','4 Rue Professeur Langevin, 59000 Lille',50.61786000,3.08374700,'FRSSDPBTWIN590003'),(153,'Terrasses de la Madeleine','4 Av. Pierre Mauroy 59700 Marcq-en-BarÅ“ul',50.66290700,3.07282200,'FRSSDPMADELEINE597001'),(160,'Nhood Villeneuve d\'Ascq','243 Rue Jean JaurÃ¨s 59491 Villeneuve d\'Ascq',50.67067300,3.14306500,'FRSSDPNHOOD594911'),(168,'Hyundai Villeneuve d\'Ascq','2 Boulevard de l\'Ouest, Rue du Frenelet 59650 Villeneuve-d\'Ascq',50.63875900,3.12257400,'FRSSDPEASYMOTORSHYUNDAI596501'),(169,'Hyundai Lomme','10 Rue Lavoisier Lomme, 59160 Lille',50.64455500,3.00772800,'FRSSDPVALAUTOHYUNDAI591601'),(172,'Decathlon - Jardin des plantes','24 Rue Marcel HÃ©naux, 59000 Lille',50.61515500,3.06045100,'FRSSDPDECATHLON590001'),(178,'VILLENEUVE 2 - PKG NIV0','10 CENTRE COMMERCIAL V2, BD DE VALMY',50.61761300,3.12835700,'FRURWPUNIB2221'),(179,'VILLENEUVE 2 - PKG NIV0','10 CENTRE COMMERCIAL V2, BD DE VALMY',50.61761300,3.12835700,'FRURWPUNIB2232'),(180,'VILLENEUVE 2 - PKG COMMERCANT','CENTRE COMMERCIAL V2, BD DE VALMY',50.61791200,3.13084600,'FRURWPUNIB2312'),(181,'Mazda - Lille (PARKING) PARKING','5 Rue du Frenelet, 59650 Villeneuve-d\'Ascq',50.64211080,3.03166920,'FRZMAE22AC56657'),(182,'Mazda - Lille (Villeneuve-d\'Ascq)','5 Rue du Frenelet, 59650 Villeneuve-d\'Ascq',50.64211080,3.03166920,'FRZMAE22AC57006'),(196,'Bump - Monoprix - CroisÃƒÂ© Laroche','1002 Av. de la RÃƒÂ©publique',50.66393300,3.10254600,'FRBMPS64527'),(197,'Bump - Monoprix - CroisÃƒÂ© Laroche','1002 Av. de la RÃƒÂ©publique',50.66393300,3.10254600,'FRBMPS64526'),(200,'Mons-en-Baroeul - HÃ´tel Kyriad','56 avenue LÃ©on Blum 59800 Mons-en-Baroeul',50.64998100,3.10834200,'FRELCPMEBHK'),(201,'Mons-en-Baroeul - HÃ´tel F1','Avenue de la SabliÃ¨re 59370 Mons-en-Baroeul',50.64468200,3.09741600,'FRELCPMEBHF'),(214,'RELAIS DE L\'EPINETTE','91 rue du Faubourg de BÃ©thune 59000 LILLE',50.61685000,3.02468700,'FRHPCPNF051046');
/*!40000 ALTER TABLE `station` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `person` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,1);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `visitor`
--

DROP TABLE IF EXISTS `visitor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `visitor` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `visitor_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `person` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `visitor`
--

LOCK TABLES `visitor` WRITE;
/*!40000 ALTER TABLE `visitor` DISABLE KEYS */;
/*!40000 ALTER TABLE `visitor` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-01-25 15:40:11
