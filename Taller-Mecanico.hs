import Text.Show.Functions
import Data.List

type Desgaste = Float
type Patente = String
type Fecha = (Int, Int, Int)

-- Definiciones base
anio :: Fecha -> Int
anio (_, _, year) = year

data Auto = Auto {
    patente :: Patente,
    desgasteLlantas :: [Desgaste],
    rpm :: Int,
    temperaturaAgua :: Int,
    ultimoArreglo :: Fecha
} deriving Show


autoLindo = Auto {patente = "ABDCEFP", desgasteLlantas = [0.3,0.2,0.3,0.4], rpm = 1000 , temperaturaAgua = 50,ultimoArreglo = (5,5,2016)}
autoFeo = Auto {patente = "DJK214", desgasteLlantas = [0.7,0.2,0.3,0.4], rpm = 2500 , temperaturaAgua = 30,ultimoArreglo = (5,5,1999)}
autoNuevo =  Auto {patente = "KLK214RRR", desgasteLlantas = [0.2,0.2,0.3,0.4], rpm = 3500 , temperaturaAgua = 90,ultimoArreglo = (5,5,2015)} 
costoReparacionAuto :: Auto -> Int
costoReparacionAuto auto | ((longitudPatenteEsMayorIgualA 7).patente) auto = 12500
                         | patenteRango (patente auto) "DJ" "NB" = (calculoPatental.patente) auto
                         | otherwise = 15000

longitudPatenteEsMayorIgualA :: Int -> Patente -> Bool
longitudPatenteEsMayorIgualA tamanio patente = (length patente) == tamanio

patenteRango:: Patente -> Patente -> Patente -> Bool
patenteRango valor patenteuno patentedos = valor > patenteuno && valor < patentedos

calculoPatental :: Patente -> Int
calculoPatental patente |  ((=='4').last) patente =  ((*3000).length) patente
                        | otherwise = 20000

-- Punto 2.

{-Alumno Naim (a)-}
esPeligroso :: Auto -> Bool
esPeligroso auto = ((> 0.5).head.desgasteLlantas) auto



{-Alumno Diego (b)-}
necesitaRevision :: Auto -> Bool
necesitaRevision auto = ((<= 2015).anio.ultimoArreglo) auto

---------------------------

-- punto 3

type Mecanico = Auto -> Auto 
{-Alumno Naim (a)-}
alfa:: Mecanico
alfa auto |menosDe2000Vueltas auto = auto
          |otherwise =  auto {rpm = 2000}

bravo :: Mecanico
bravo auto = auto {desgasteLlantas = [0,0,0,0]}

charly :: Mecanico
charly auto = (alfa.bravo) auto

menosDe2000Vueltas:: Auto -> Bool
menosDe2000Vueltas = (<2000).rpm


{-Alumno Diego (b)-}

tango :: Mecanico
tango auto = auto

lima :: Mecanico
lima auto = auto  {desgasteLlantas = (cubiertasDelanterasNuevas.desgasteLlantas) auto }

cubiertasDelanterasNuevas:: [Desgaste]-> [Desgaste]
cubiertasDelanterasNuevas (_:_:resto) = [0, 0] ++ resto

zulu:: Mecanico 
zulu auto = (modificarTemperaturaAgua.lima) auto 

modificarTemperaturaAgua:: Mecanico
modificarTemperaturaAgua auto = auto {temperaturaAgua= 90 }