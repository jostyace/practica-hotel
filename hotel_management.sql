-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 18-03-2024 a las 10:29:18
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `hotel_management`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ciudad`
--

CREATE TABLE `ciudad` (
  `id` int(11) NOT NULL,
  `nombre` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `ciudad`
--

INSERT INTO `ciudad` (`id`, `nombre`) VALUES
(1, 'Lima'),
(2, 'Arequipa'),
(3, 'Trujillo'),
(4, 'Chiclayo'),
(5, 'Huancayo'),
(6, 'Piura'),
(7, 'Cusco'),
(8, 'Chimbote'),
(9, 'Iquitos'),
(10, 'Tacna');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estados_reservas`
--

CREATE TABLE `estados_reservas` (
  `id` int(11) NOT NULL,
  `estado` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `estados_reservas`
--

INSERT INTO `estados_reservas` (`id`, `estado`) VALUES
(1, 'Cancelado'),
(2, 'Pendiente'),
(3, 'Activo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `habitaciones`
--

CREATE TABLE `habitaciones` (
  `id` int(11) NOT NULL,
  `nombre` varchar(200) NOT NULL,
  `capacidad` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `habitaciones`
--

INSERT INTO `habitaciones` (`id`, `nombre`, `capacidad`) VALUES
(1, 'simple', 1),
(2, 'doble', 2),
(3, 'familiar', 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `hoteles`
--

CREATE TABLE `hoteles` (
  `id` int(11) NOT NULL,
  `nombre` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `hoteles`
--

INSERT INTO `hoteles` (`id`, `nombre`) VALUES
(1, 'Miramar'),
(2, 'Gran Plaza Hotel'),
(3, 'Hotel del Sol'),
(4, 'Maravilla Resort'),
(5, 'Hotel Vista Hermosa'),
(6, 'Royal Palace Hotel'),
(7, 'Hotel Oasis'),
(8, 'Estrella del Mar Hotel'),
(9, 'Hotel Montaña Azul'),
(10, 'Paradise Inn');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `hoteles_ciudad`
--

CREATE TABLE `hoteles_ciudad` (
  `id` int(11) NOT NULL,
  `hotel_id` int(11) NOT NULL,
  `ciudad_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `hoteles_ciudad`
--

INSERT INTO `hoteles_ciudad` (`id`, `hotel_id`, `ciudad_id`) VALUES
(1, 1, 1),
(2, 2, 1),
(3, 3, 2),
(4, 4, 2),
(5, 5, 1),
(6, 6, 1),
(7, 7, 2),
(8, 8, 3),
(9, 9, 3),
(10, 10, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `hotel_comentarios`
--

CREATE TABLE `hotel_comentarios` (
  `id` int(11) NOT NULL,
  `hotel_id` int(11) NOT NULL,
  `huesped_id` int(11) NOT NULL,
  `comentario` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `hotel_comentarios`
--

INSERT INTO `hotel_comentarios` (`id`, `hotel_id`, `huesped_id`, `comentario`) VALUES
(1, 2, 4, 'El personal que atiende este hotel en todos sus departamentos sabe con precision la manera de atender bien a un huesped. '),
(2, 5, 8, 'Es un buen Hotel personal muy amable y servicial .\r\nEl único inconveniente es el acceso al wifi , ya que el codigo hay que cambiarlo con frecuencia .'),
(3, 3, 5, 'Nos ha gustado mucho. La habitacióntan muy bien, como pensábamos, y el trato de recepción y resto del personal exquisito.'),
(4, 2, 10, 'Sitio, comodo y cercano a los sitios turisticos.\r\nRecomendado pata estancias cortas y en familia'),
(5, 1, 12, 'En relación calidad precio esta muy bien y todo a la perfección. Habitaciones amplias, luminosas y muy comodas. '),
(6, 8, 2, 'Nos hospedamos durante una semana en el hotel con motivo de negocios. Las habitaciones, si bien algo pequeñas pero siempre están limpias en todo momento'),
(7, 10, 11, 'Hotel muy tranquilo, acogedor y moderno, las habitaciones limpias y la cama muy cómoda, el desayuno variado y de calidad'),
(8, 4, 1, 'El hotel y su ubicación están muy bien .La habitación está muy limpia , desayuno variado y de calidad , la atención al cliente buena .'),
(9, 6, 3, 'Es un hotel bastante moderno, cómodo y muy limpio. '),
(10, 7, 6, ' Las habitaciones son amplias ,el baño muy cómodo . Todos los servicios ofrecidos son impecables');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `hotel_habitaciones`
--

CREATE TABLE `hotel_habitaciones` (
  `id` int(11) NOT NULL,
  `hotel_id` int(11) NOT NULL,
  `habitacion_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `hotel_habitaciones`
--

INSERT INTO `hotel_habitaciones` (`id`, `hotel_id`, `habitacion_id`) VALUES
(1, 2, 2),
(2, 3, 3),
(3, 4, 1),
(4, 5, 1),
(5, 6, 3),
(6, 8, 2),
(7, 10, 2),
(8, 1, 2),
(9, 9, 3),
(10, 7, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `hotel_servicios`
--

CREATE TABLE `hotel_servicios` (
  `id` int(11) NOT NULL,
  `hotel_id` int(11) NOT NULL,
  `servicio_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `hotel_servicios`
--

INSERT INTO `hotel_servicios` (`id`, `hotel_id`, `servicio_id`) VALUES
(1, 1, 3),
(2, 1, 2),
(3, 1, 7),
(4, 2, 3),
(5, 2, 7),
(6, 4, 4),
(7, 4, 5),
(8, 5, 7),
(9, 5, 4),
(10, 7, 1),
(11, 8, 3),
(12, 9, 5),
(13, 3, 4),
(14, 3, 2),
(15, 3, 6);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `hotel_valoracion`
--

CREATE TABLE `hotel_valoracion` (
  `id` int(11) NOT NULL,
  `hotel_id` int(11) NOT NULL,
  `valoracion` int(2) NOT NULL,
  `huesped_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `hotel_valoracion`
--

INSERT INTO `hotel_valoracion` (`id`, `hotel_id`, `valoracion`, `huesped_id`) VALUES
(1, 2, 10, 2),
(2, 4, 7, 3),
(3, 5, 8, 4),
(4, 1, 9, 5),
(5, 6, 7, 6),
(6, 7, 8, 7),
(7, 8, 9, 8),
(8, 9, 10, 9),
(9, 10, 10, 1),
(10, 2, 8, 12),
(11, 3, 7, 11),
(12, 5, 9, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `huespedes`
--

CREATE TABLE `huespedes` (
  `id` int(11) NOT NULL,
  `nombre` varchar(250) NOT NULL,
  `telefono` varchar(11) NOT NULL,
  `correo` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `huespedes`
--

INSERT INTO `huespedes` (`id`, `nombre`, `telefono`, `correo`) VALUES
(1, 'Juan Perez', '555699999', 'juanperez@gmail.com'),
(2, 'Pedro Martinez', '55563256', 'pedrom@gmail.com'),
(3, 'Carmen Maria Villanueva', '798097320', 'f1p3laf3@gmail.com'),
(4, 'Valeria Pastor', '732997866', 'crl1yp9su@msn.com'),
(5, 'Agustina Rubio', '707155528', 'y3y6n55a@aim.com'),
(6, 'Alexandre Bautista', '602670562', 'b3zml6q6@gmail.com'),
(7, 'Jonathan Royo', '628207381', 'an47n2rdm@unforgettable.com'),
(8, 'Luis Antonio Mendoza', '665971773', 'xnna9ts@unforgettable.com'),
(9, 'Trinidad Del Rio', '785191437', 've3ja2uw@witty.com'),
(10, 'Ruben Arce', '607559470', 'jimnph9s@journalism.com'),
(11, 'Elsa Polo', '750401177', 'dstiv9o2b@talk21.com'),
(12, 'Jorge Vaquero', '671761893', 'urb5eg9rh@blu.it');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reservas`
--

CREATE TABLE `reservas` (
  `id` int(11) NOT NULL,
  `huesped_id` int(11) NOT NULL,
  `hotel_id` int(11) NOT NULL,
  `fecha_ingreso` date NOT NULL,
  `fecha_salida` date NOT NULL,
  `cantidad_huespedes` int(3) NOT NULL,
  `habitacion_id` int(11) NOT NULL,
  `estado_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `reservas`
--

INSERT INTO `reservas` (`id`, `huesped_id`, `hotel_id`, `fecha_ingreso`, `fecha_salida`, `cantidad_huespedes`, `habitacion_id`, `estado_id`) VALUES
(1, 3, 7, '2024-03-03', '2024-03-30', 3, 2, 3),
(2, 7, 3, '2024-02-02', '2024-03-02', 1, 1, 1),
(3, 4, 6, '2024-03-24', '2024-04-14', 5, 3, 2),
(4, 5, 1, '2024-02-12', '2024-05-24', 1, 1, 1),
(5, 8, 2, '2024-04-11', '2024-04-20', 8, 3, 3),
(6, 10, 4, '2024-03-28', '2024-04-01', 3, 2, 2),
(7, 2, 5, '2024-04-25', '2024-04-26', 1, 1, 2),
(8, 1, 8, '2024-08-01', '2024-08-12', 2, 1, 3),
(9, 6, 9, '2024-05-12', '2024-05-19', 5, 3, 2),
(10, 9, 10, '2024-06-21', '2024-07-01', 3, 2, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `servicios`
--

CREATE TABLE `servicios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `servicios`
--

INSERT INTO `servicios` (`id`, `nombre`) VALUES
(1, 'Piscina'),
(2, 'Wi-Fi gratuito'),
(3, 'Desayuno incluido'),
(4, 'Gimnasio'),
(5, 'Servicio de habitaciones'),
(6, 'Estacionamiento gratuito'),
(7, 'Spa'),
(8, 'Servicio de lavandería'),
(9, 'Restaurante en el lugar'),
(10, 'Recepción 24 horas');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `ciudad`
--
ALTER TABLE `ciudad`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `estados_reservas`
--
ALTER TABLE `estados_reservas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `habitaciones`
--
ALTER TABLE `habitaciones`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `hoteles`
--
ALTER TABLE `hoteles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `hoteles_ciudad`
--
ALTER TABLE `hoteles_ciudad`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ciudad_id` (`ciudad_id`),
  ADD KEY `hotel_id` (`hotel_id`);

--
-- Indices de la tabla `hotel_comentarios`
--
ALTER TABLE `hotel_comentarios`
  ADD KEY `hotel_id` (`hotel_id`),
  ADD KEY `huesped_id` (`huesped_id`);

--
-- Indices de la tabla `hotel_habitaciones`
--
ALTER TABLE `hotel_habitaciones`
  ADD PRIMARY KEY (`id`),
  ADD KEY `hotel_id` (`hotel_id`),
  ADD KEY `habitacion_id` (`habitacion_id`);

--
-- Indices de la tabla `hotel_servicios`
--
ALTER TABLE `hotel_servicios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `hotel_id` (`hotel_id`),
  ADD KEY `servicio_id` (`servicio_id`);

--
-- Indices de la tabla `hotel_valoracion`
--
ALTER TABLE `hotel_valoracion`
  ADD PRIMARY KEY (`id`),
  ADD KEY `hotel_id` (`hotel_id`),
  ADD KEY `huesped_id` (`huesped_id`);

--
-- Indices de la tabla `huespedes`
--
ALTER TABLE `huespedes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `reservas`
--
ALTER TABLE `reservas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `hotel_id` (`hotel_id`),
  ADD KEY `huesped_id` (`huesped_id`),
  ADD KEY `habitacion_id` (`habitacion_id`),
  ADD KEY `estado_id` (`estado_id`);

--
-- Indices de la tabla `servicios`
--
ALTER TABLE `servicios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `ciudad`
--
ALTER TABLE `ciudad`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `estados_reservas`
--
ALTER TABLE `estados_reservas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `habitaciones`
--
ALTER TABLE `habitaciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `hoteles`
--
ALTER TABLE `hoteles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `hoteles_ciudad`
--
ALTER TABLE `hoteles_ciudad`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `hotel_habitaciones`
--
ALTER TABLE `hotel_habitaciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `hotel_servicios`
--
ALTER TABLE `hotel_servicios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `hotel_valoracion`
--
ALTER TABLE `hotel_valoracion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `huespedes`
--
ALTER TABLE `huespedes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `reservas`
--
ALTER TABLE `reservas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `servicios`
--
ALTER TABLE `servicios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `hoteles_ciudad`
--
ALTER TABLE `hoteles_ciudad`
  ADD CONSTRAINT `hoteles_ciudad_ibfk_1` FOREIGN KEY (`ciudad_id`) REFERENCES `ciudad` (`id`),
  ADD CONSTRAINT `hoteles_ciudad_ibfk_2` FOREIGN KEY (`hotel_id`) REFERENCES `hoteles` (`id`);

--
-- Filtros para la tabla `hotel_comentarios`
--
ALTER TABLE `hotel_comentarios`
  ADD CONSTRAINT `hotel_comentarios_ibfk_1` FOREIGN KEY (`hotel_id`) REFERENCES `hoteles` (`id`),
  ADD CONSTRAINT `hotel_comentarios_ibfk_2` FOREIGN KEY (`huesped_id`) REFERENCES `huespedes` (`id`);

--
-- Filtros para la tabla `hotel_habitaciones`
--
ALTER TABLE `hotel_habitaciones`
  ADD CONSTRAINT `hotel_habitaciones_ibfk_1` FOREIGN KEY (`hotel_id`) REFERENCES `hoteles` (`id`),
  ADD CONSTRAINT `hotel_habitaciones_ibfk_2` FOREIGN KEY (`habitacion_id`) REFERENCES `habitaciones` (`id`);

--
-- Filtros para la tabla `hotel_servicios`
--
ALTER TABLE `hotel_servicios`
  ADD CONSTRAINT `hotel_servicios_ibfk_1` FOREIGN KEY (`hotel_id`) REFERENCES `hoteles` (`id`),
  ADD CONSTRAINT `hotel_servicios_ibfk_2` FOREIGN KEY (`servicio_id`) REFERENCES `servicios` (`id`);

--
-- Filtros para la tabla `hotel_valoracion`
--
ALTER TABLE `hotel_valoracion`
  ADD CONSTRAINT `hotel_valoracion_ibfk_1` FOREIGN KEY (`hotel_id`) REFERENCES `hoteles` (`id`),
  ADD CONSTRAINT `hotel_valoracion_ibfk_2` FOREIGN KEY (`huesped_id`) REFERENCES `huespedes` (`id`);

--
-- Filtros para la tabla `reservas`
--
ALTER TABLE `reservas`
  ADD CONSTRAINT `reservas_ibfk_1` FOREIGN KEY (`hotel_id`) REFERENCES `hoteles` (`id`),
  ADD CONSTRAINT `reservas_ibfk_2` FOREIGN KEY (`huesped_id`) REFERENCES `huespedes` (`id`),
  ADD CONSTRAINT `reservas_ibfk_3` FOREIGN KEY (`habitacion_id`) REFERENCES `habitaciones` (`id`),
  ADD CONSTRAINT `reservas_ibfk_4` FOREIGN KEY (`estado_id`) REFERENCES `estados_reservas` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
