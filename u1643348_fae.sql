-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jun 11, 2023 at 11:27 AM
-- Server version: 10.6.13-MariaDB-cll-lve
-- PHP Version: 8.1.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `u1643348_fae`
--

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `hadir` tinyint(1) NOT NULL DEFAULT 0,
  `komentar` text DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `uuid` varchar(255) DEFAULT NULL,
  `ip` varchar(255) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `parent_id` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id`, `user_id`, `nama`, `hadir`, `komentar`, `created_at`, `updated_at`, `uuid`, `ip`, `user_agent`, `parent_id`) VALUES
(1, 1, 'Abdur Razzaaq bin Umar', 1, 'Tahu2 dah kahwin.\nTahniah Odi. Dua2 sama padan cantik dan tampan', '2023-05-07 20:00:49', '2023-05-07 20:00:49', 'bb0f4b11-4bfd-437b-ba50-2e8dbd34ebc7', '103.161.195.18', 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1', NULL),
(2, 1, 'Indras', 1, 'Setelah cerita puanjaaaaang, tiap hari curhat nangis ketawa nangis ketawa, ternyata Allah punya rencana lain. Alhamdulilah bestieku satu ini sampai pda takdirnya juga, doaku selalu mengiringi perjalananmu ya Sirly ??', '2023-05-07 21:28:53', '2023-05-07 21:28:53', '6d5373dd-34f2-49b1-9f70-39df1eb42845', '36.85.67.49', 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.2 Mobile/15E148 Safari/604.1', NULL),
(3, 1, 'Dita Sesa', 1, 'Alhamdulillah.. puji syukur selamat sirly ?.. semoga lancar damoai hari H dan semiga menjadi keluarga yg samawa serta selalu bahagia sampai akhir hayat.. aamiin', '2023-05-07 21:34:16', '2023-05-07 21:34:16', '2d74a088-d3b6-4a38-810e-ee987f7cc243', '36.75.205.218', 'Mozilla/5.0 (Linux; Android 10; SM-J610F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.101 Mobile Safari/537.36', NULL),
(4, 1, 'Nazilah', 0, 'Aaaaaa.... Alhamdulillah Akhirnya bestieku yg siap nikah dari jaman kuliah bener-bener nikah dan menemukan orang yang tepat, makasih udah banyak menjadi tempat curhat pengantin baru ini wkwk, nah sekarang giliran kamu nih yg bakal ngerasain serunya berumah tangga, semoga diberikan kelancaran sampai hari h ya, dan dikaruniai keluarga yang sakinah mawadah warahmah...... Sedihhhhh aku ngga bisa datang karena undangannya terlalu mendadak oeee, kan aku masih jauh disana T_T', '2023-05-07 21:37:45', '2023-05-07 21:37:45', 'b569b980-0899-496e-ab89-e0a95e060aea', '114.4.82.5', 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Mobile Safari/537.36', NULL),
(5, 1, 'Puput', 1, 'Masya Allah besti akuuuu!\nSelamat buat kamu ya. Macem2 denger cerita kamu dengan si dia. Dari yg sedih sampe yg happy. Alhamdulillah semua itu terbayar dengan terbukanya jalan kamu ketemu dengan jodoh yg terbaik buat kamu. Seneng banget akunya juga. Pengen nanged~\nSemoga semua yg terbaik selalu buat kalian. Selalu jaga satu sama lain ya. Semoga kamu selalu bahagia dengan pasangan kamu. Halangan rintangan apapun semoga bisa kalian hadapi dengan baik.\nSelamat, Yassirly Sabila Yulizar!', '2023-05-07 21:39:49', '2023-05-07 21:39:49', '1b3cfcaa-263d-480b-bbb9-41bbd1f83ad2', '114.5.243.61', 'Mozilla/5.0 (Linux; Android 10; vivo 1938) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Mobile Safari/537.36', NULL),
(6, 1, 'Ulil', 1, 'Uwaaaaah congrats sirly akhirnyaaaa.. semoga lancar terus yaaa sampe kakek nenek', '2023-05-07 21:43:43', '2023-05-07 21:43:43', '42d6bc4c-33b4-4069-a15e-cc16549c3554', '103.189.201.13', 'Mozilla/5.0 (Linux; Android 13; SM-A325F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Mobile Safari/537.36', NULL),
(7, 1, 'Mas Zain', 1, 'Ibarat \" Tumbu oleh tutup\", ibarat \"bantal oleh guling\"\n\nDAUN PINANG DIATAS PAYUNG, KAIN SUTERA DIDALAM PETI..\nPUTUSNYA BENANG BISA DISAMBUNG, PUTUSNYA CINTA DIBAWA MATI.. \n\n?? ?????? ????\n', '2023-05-07 21:45:11', '2023-05-07 21:45:11', 'e2c88a9c-dd4a-4227-845f-d9456d828e1b', '114.79.20.238', 'Mozilla/5.0 (Linux; U; Android 13; in-id; CPH2375 Build/TP1A.220905.001) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.88 Mobile Safari/537.36 HeyTapBrowser/45.9.4.1.1', NULL),
(8, 1, 'Mas Opek', 0, 'turut berbahagia yaaa bel, smoga lancar semuanya ?', '2023-05-07 21:50:01', '2023-05-07 21:50:01', 'd0ff5c4d-4c42-4971-90d4-0b6b9eca4d46', '182.1.119.57', 'Mozilla/5.0 (Linux; U; Android 13; in-id; CPH2365 Build/TP1A.220905.001) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.88 Mobile Safari/537.36 HeyTapBrowser/45.9.4.1.1', NULL),
(9, 1, 'AF', 0, 'Selamat kepada sirly dan suami, semoga menjadi keluarga sakinah mawadah warahmah. aamiin.', '2023-05-07 22:11:37', '2023-05-07 22:11:37', '2db133e1-972b-4e1d-bb77-e7a080ca6417', '36.78.200.136', 'Mozilla/5.0 (Linux; Android 8.1.0; GOME_C7_Note_Plus) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Mobile Safari/537.36', NULL),
(10, 1, 'Bang Daus', 1, 'Semoga sakinah mawadah waromah. Selamat ya sepupu yg pling cantik ketiga setelah nia n kayla.hehehehe. semoga ini menjadi yg pertama n terakhir smpe kakek nenek. N semoga disegarakan dpt anak cowok. Cewek udah bnyak. Ingatlah....ketika suatu saat nanti ada mslh keluarga bella n suaminya...salah satu hrus ada yg mengalah...jgn mengalah keduanya.. Gak seru.hahahaahaha..... Sukses buat acara tgl 14 nanti. Aamin...999x', '2023-05-07 22:27:51', '2023-05-07 22:27:51', '2c23d80d-31c3-47d6-b82a-d36695100370', '114.5.245.253', 'Mozilla/5.0 (Linux; Android 13; SM-A226B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Mobile Safari/537.36', NULL),
(11, 1, 'Psycoro SKA', 0, 'MasyAllah barokallah sirly dan suami. Lancar2 sampe hari H dan seterusnya yaa. Sakinah mawaddah wa rohmah. Aamiin', '2023-05-07 23:10:02', '2023-05-07 23:10:02', '8fde37f7-516a-4354-a1a4-53292c462a8f', '116.206.40.2', 'Mozilla/5.0 (Linux; Android 12; V2027; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/87.0.4280.141 Mobile Safari/537.36 VivoBrowser/10.1.2.0', NULL),
(12, 1, 'Deviana', 1, 'Finallyyyyyyy bahagia selalu untuk mba sirly dan mas gilby.Semoga dilancarkan segala urusannya dan menjadi keluarga yng sakinah mawadah warohmah bahagia dunia akhirat aminnnnnnnn???', '2023-05-08 00:17:57', '2023-05-08 00:17:57', '2e6d15d9-8b57-4fdd-a388-befd9fc4ff95', '202.67.40.247', 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Mobile Safari/537.36', NULL),
(13, 1, 'Dana', 1, 'semoga dilancarkan hingga hari H Happy wedding mb sirly \nsemoga menjadi klrga sakinnah mawaddah warrahmah \ndan semoga lekas diberi momongan', '2023-05-08 00:18:15', '2023-05-08 00:18:15', '8ac6a2e7-a3b1-4e98-94e6-7488a948834d', '112.215.242.57', 'Mozilla/5.0 (Linux; U; Android 12; id-id; Redmi Note 9 Build/SP1A.210812.016) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/100.0.4896.127 Mobile Safari/537.36 XiaoMi/MiuiBrowser/13.27.0-gn', NULL),
(14, 1, 'Mbak Mila', 1, 'Selamat menempuh hidup baru,semoga langgeng sampai maut memisahkan.Aminn aminn ', '2023-05-08 00:20:17', '2023-05-08 00:20:17', '7a4b76f2-ed1f-45c4-8cdb-0ebf29e33133', '116.206.40.42', 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36', NULL),
(15, 1, 'Bu Ribut', 1, 'Alhamdulillah..... SAMAWA ya Sayang, dgn 2 pribadi yg berbeda menjadi 1,jalani dgn suka cita. Dgn teriring doa yg tulus smoga bahagia sllu. Saling pengertian dan komunikasi itu yg terpenting. ????????', '2023-05-08 00:32:33', '2023-05-08 00:32:33', 'd8086085-462e-4078-99aa-efa20266a708', '116.206.40.103', 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Mobile Safari/537.36', NULL),
(16, 1, 'Mbak Evi', 1, 'Selamat hidup baru semoga kedepannya bisa menjalin rumah tangga yg bahagia dunia dan ahirat diberikan keturunan soleh/soleha amiin...', '2023-05-08 00:35:51', '2023-05-08 00:35:51', 'ffe51950-4ce3-455d-9e2b-40766c3810bc', '114.79.21.20', 'Mozilla/5.0 (Linux; Android 11; SAMSUNG SM-A325F) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/18.0 Chrome/99.0.4844.88 Mobile Safari/537.36', NULL),
(17, 1, 'Mbak Ida', 1, 'Selamat nempuh hidup baru ya mbk sirly..\nSemoga menjadi keluarga sakinah mawadah dan warohmah..\nSelalu bahagia sampai kakek nenek ya mbak.. ', '2023-05-08 00:40:02', '2023-05-08 00:40:02', '3d735ca8-41fd-4ccd-bf58-0179f11cf56d', '114.125.100.117', 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Mobile Safari/537.36', NULL),
(18, 1, 'Risma', 1, 'Masya allah, alhamdulilah, happy wedding Sirly. Semoga lancar, samawa, bahagia till jannah ??', '2023-05-08 04:54:58', '2023-05-08 04:54:58', 'aa492ea3-31f8-4b22-bffe-95101b144c03', '125.166.0.150', 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Mobile/15E148 Safari/604.1', NULL),
(19, 1, 'Ratih', 1, 'selamat man, hehhehe', '2023-05-08 06:51:35', '2023-05-08 06:51:35', 'c7ff72a7-106d-4974-9cd7-27f183bec08e', '103.189.201.49', 'Mozilla/5.0 (Linux; U; Android 11; id-id; Redmi Note 8 Pro Build/RP1A.200720.011) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/89.0.4389.116 Mobile Safari/537.36 XiaoMi/MiuiBrowser/12.22.0-gn', NULL),
(20, 1, 'Ana', 0, 'Selamaaat sirlycuuu ?\nSemoga keluarga kecil sirly jadi keluarga yg Samawa, penuh kebahagiaan dan keberkahaan aamiin ?', '2023-05-08 11:58:48', '2023-05-08 11:58:48', '6fee21cf-f115-4966-9cf8-4d3aa9b804b9', '103.133.62.61', 'Mozilla/5.0 (Linux; Android 12; SAMSUNG SM-A125F) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/19.0 Chrome/102.0.5005.125 Mobile Safari/537.36', NULL),
(21, 1, 'Papa Axa', 1, 'Selamat menikah, brother, tinggal menghitung hari kamu sudah jadi seorang imam yang mempunyai amanah dan tanggung jawab besar untuk istrimu dan anak-anakmu kelak. Jangan lupa untuk selalu bersemangat, jadilah suami yang hebat dan ayah yang penyayang nantinya. Semoga Allah menjagamu.\nSebesar apapun ombaknya jangan melompat dari kapal!', '2023-05-08 17:01:38', '2023-05-08 17:01:38', '49f99ba7-630e-4b1b-beb2-693eb021ac4f', '112.215.153.98', 'Mozilla/5.0 (Linux; Android 13; CPH2363) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Mobile Safari/537.36', NULL),
(22, 1, 'Rudi Asmanto', 1, 'Selamat menikah, brother !!', '2023-05-08 17:13:31', '2023-05-08 17:13:31', '35404ddc-2248-4407-bc1b-4e14811d0093', '125.164.232.182', 'Mozilla/5.0 (Linux; U; Android 12; id-id; Redmi Note 9 Pro Build/SKQ1.211019.001) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/100.0.4896.127 Mobile Safari/537.36 XiaoMi/MiuiBrowser/13.25.2-gn', NULL),
(23, 1, 'Nelayan Kidal', 1, 'Selamat berbahagia, semoga sakinah mawaddah wa rohmah, safety can be fun', '2023-05-08 17:51:42', '2023-05-08 17:51:42', '4a446bef-4637-40f1-991e-9252be5cc159', '36.82.5.2', 'Mozilla/5.0 (Linux; Android 13; SAMSUNG SM-A035F) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/19.0 Chrome/102.0.5005.125 Mobile Safari/537.36', NULL),
(24, 1, 'Dikky Hendra', 1, 'Selamat mas odi', '2023-05-08 18:32:14', '2023-05-08 18:32:14', '40996b88-f982-4adf-8220-9e95d279a744', '182.4.135.211', 'Mozilla/5.0 (Linux; Android 13; SM-A135F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Mobile Safari/537.36', NULL),
(25, 1, 'Alifansyah Muhammad', 1, 'Semoga lancar', '2023-05-08 18:50:52', '2023-05-08 18:50:52', '028a1bc8-47de-45a0-a1f1-04c4d67bddfe', '139.162.67.64', 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Mobile Safari/537.36', NULL),
(26, 1, 'Reta', 1, 'Semoga lancar sampai hari H, selamat berbahagia, semoga menjadi keluarga yg sakinah mawadah warohma aamiin ', '2023-05-09 08:46:44', '2023-05-09 08:46:44', '62b56039-6ad0-405c-9593-f92f6369f0fd', '125.166.12.239', 'Mozilla/5.0 (Linux; U; Android 6.0.1; id-id; Redmi 4A Build/MMB29M) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/100.0.4896.127 Mobile Safari/537.36 XiaoMi/MiuiBrowser/13.14.2-go', NULL),
(27, 1, 'Mbak Dian', 0, 'Selamat buat Bela & Odi..semoga lancar acaranya....long lasting & happy forever', '2023-05-09 08:52:45', '2023-05-09 08:52:45', '77aaaae2-c2ca-4277-8593-808d1a4b6246', '180.243.27.216', 'Mozilla/5.0 (Linux; U; Android 11; in-id; CPH1937 Build/RKQ1.200903.002) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.88 Mobile Safari/537.36 HeyTapBrowser/45.9.4.2.1', NULL),
(28, 1, 'Diyan', 0, 'Selamat buat Bela & Odi, semoga lancar acaranya, long lasting & happy forever', '2023-05-09 08:54:00', '2023-05-09 08:54:00', '594a9c60-4ac4-4c01-931d-77930a9d3ad0', '180.243.27.216', 'Mozilla/5.0 (Linux; U; Android 11; in-id; CPH1937 Build/RKQ1.200903.002) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.88 Mobile Safari/537.36 HeyTapBrowser/45.9.4.2.1', NULL),
(29, 1, 'Ikha', 1, 'Sahabatku, doa pernikahan aku lantunkan untukmu. Semoga pernikahanmu diberkati oleh-Nya. Semoga pula terlahir keturunan yang hebat dari kalian berdua.\n\n\"Selalu rendah hati dan lemah lembut. Sabar satu sama lain, saling memaafkan kesalahan karena cintamu.\" Efesus 4:2', '2023-05-09 09:35:26', '2023-05-09 09:35:26', 'ebdab7f9-4728-407b-9b46-586992835a90', '36.68.221.228', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36', NULL),
(30, 1, 'Fahmi', 1, 'Lancar sampai hari H Ahahahahaha', '2023-05-09 13:06:35', '2023-05-09 13:06:35', 'd3e8d9ad-1612-48a9-9694-01d7ddcbe76f', '140.213.219.245', 'Mozilla/5.0 (Linux; U; Android 13; in-id; CPH2473 Build/TP1A.220905.001) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.88 Mobile Safari/537.36 HeyTapBrowser/45.9.4.1.1', NULL),
(31, 1, 'Dr. Siti Marpuah', 0, 'Alhamdulillah, Barokallah laka wa Baroka alaikuma wa jamaa bainakuma fii al khoir, semoga SaMaWa ya odi dan  Sabila,, doa ibu dan keluarga di Malaysia,, maaf tdk dpt hadir ', '2023-05-09 20:11:49', '2023-05-09 20:11:49', 'dc9b18ab-f425-4e96-ad5a-4ce8d19508f2', '183.171.64.246', 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1', NULL),
(32, 1, 'Nurul Farahin Mohd Joharudin', 0, 'Congratulations odi dan pasangan. terlalu jauh untuk memenuhi undangan, kakak kirim selamat ya, moga lancar dan majlis yanh diberkati ?', '2023-05-09 22:07:17', '2023-05-09 22:07:17', '605efd87-7394-47c9-8369-1e0122f661f6', '115.164.182.65', 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.3 Mobile/15E148 Safari/604.1', NULL),
(33, 1, 'Dr. Jabbar Al-Fattah Bin Yahaya', 0, 'Tahniah kepada Gilby & Sirly, semoga urusan majlis berjalan dgn lancar. Saya doakan kamu berdua sentiasa bahagia, diberikan kesihatan dan rezeki yg baik. ', '2023-05-10 07:16:16', '2023-05-10 07:16:16', '45489d7c-b49a-4fbd-b9d8-e38edb056c7a', '42.153.128.19', 'Mozilla/5.0 (Linux; Android 13; SAMSUNG SM-N986B) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/20.0 Chrome/106.0.5249.126 Mobile Safari/537.36', NULL),
(34, 1, 'Prof. Madya Dr. Danial Bin Md Nor', 0, 'Selamat Pengantin Baru Gilby & Sirly. Moga dipermudahkan urusan menempuh hidup baru. Dari Johor Malaysia, saya doakan semoga menjadi keluarga yang sakinah, mawaddah dan warrohmah. Diberikan keturunan yang soleh dan solehah, diberikan limpahan rezeki yang berkat serta selalu berada di dalam lindungan juga kasih Allah swt.', '2023-05-11 11:30:33', '2023-05-11 11:30:33', '0a72c52f-a814-46a1-87b4-78c3745b0be8', '103.31.34.28', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36', NULL),
(35, 1, 'Nesvira', 1, 'Semoga mbak sirly di berikan kelancaran sampai hari H aamiin dan semoga menjadi keluarga yang sakinah mawadah warohmah cepat di beri momongan ?', '2023-05-11 16:14:11', '2023-05-11 16:14:11', '1421fb75-03a7-4ea8-aa94-4a8b6bf19254', '103.127.65.52', 'Mozilla/5.0 (Linux; Android 11; vivo 1901; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/87.0.4280.141 Mobile Safari/537.36 VivoBrowser/10.2.0.1', NULL),
(36, 1, 'Me', 1, 'Selamat mbak sirly ... \nLancar sampai hari H dan langgeng sampai maut memisahkan ?\nSelamat menyambut dunia yang sesungguhnya ... ', '2023-05-11 16:32:04', '2023-05-11 16:32:04', '0b1ea60a-7b64-4b06-b60c-c5e80a3d3926', '114.5.247.246', 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Mobile Safari/537.36', NULL),
(37, 1, 'Indahfitram', 0, 'lancar sampai hari H ya bil? byk byk bikin anak ya? smoga aku bisa main ke malang??', '2023-05-11 23:49:57', '2023-05-11 23:49:57', 'e6375893-f94e-40f3-bae7-b4fa3762f393', '103.141.255.1', 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1', NULL),
(38, 1, 'Pak Udin', 1, 'As.wb\nsemoga di hari yg bahagia sirly dan gilby di mudah kan acara nya sampai selesai dan menjadi keluarga sakinah warohmah Amiiin ', '2023-05-12 09:10:23', '2023-05-12 09:10:23', '103f8d26-64a4-470f-b7a5-d961f4a026fd', '125.166.3.204', 'Mozilla/5.0 (Linux; Android 8.1.0; vivo 1724 Build/OPM1.171019.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/87.0.4280.141 Mobile Safari/537.36 VivoBrowser/10.0.1.0', NULL),
(39, 1, 'Mbak Tri', 1, 'Selamat yaaa mbak Sirly, semoga lancar sampai hari H, bahagia selaluuu ??', '2023-05-12 19:09:06', '2023-05-12 19:09:06', '00ea60de-b6c1-4a07-ac32-c1293f1167cf', '36.70.252.110', 'Mozilla/5.0 (Linux; Android 13; SAMSUNG SM-A336E) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/20.0 Chrome/106.0.5249.126 Mobile Safari/537.36', NULL),
(40, 1, 'Aan', 1, 'Bahagia selalu bi', '2023-05-13 15:34:34', '2023-05-13 15:34:34', 'fc6ecde7-a6f9-44d0-9c79-d2206a0c1963', '139.228.40.206', 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Mobile Safari/537.36', NULL),
(41, 1, 'Putri Yunita', 1, 'Happy wedding mbk sirly&suami.? Semoga menjadi keluarga sakinah mawadah warahmah. Berkah disetiap hembusan nafas dalam jalinan pernikahan.? Aamiin ', '2023-05-13 17:39:19', '2023-05-13 17:39:19', 'fb4c85cb-14ea-4d2c-b4bc-e9a2b82f29bc', '103.184.19.208', 'Mozilla/5.0 (Linux; U; Android 12; id-id; Redmi Note 10 Build/SKQ1.210908.001) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/100.0.4896.127 Mobile Safari/537.36 XiaoMi/MiuiBrowser/13.27.0-gn', NULL),
(42, 1, 'Prasetiyawan, SH, ST', 1, 'Sampai ketemu besok yaa hehe', '2023-05-13 17:48:40', '2023-05-13 17:48:40', 'd1d532fe-f0cb-4abf-9d20-4ba0e854fade', '182.4.132.14', 'Mozilla/5.0 (Linux; Android 13; SM-T225) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36', NULL),
(43, 1, 'Mia', 0, 'Bella-ku yg cantik, selamat menikah ya. Alhamdulilah akhirnya sampai di pelabuhan terakhir. Semoga langgeng bersama suami. Bahagia luar dalam. Salam seribu kangen dari Gresik! ??', '2023-05-13 18:39:48', '2023-05-13 18:39:48', '5e2095eb-bec4-4100-9808-7de8b87f201b', '120.188.87.172', 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Mobile Safari/537.36', NULL),
(44, 1, 'Hanafi', 1, 'Selamat Bu shirly, bahagia selalu...', '2023-05-13 20:36:06', '2023-05-13 20:36:06', '5cef2f99-cba6-4501-96bc-decbf3701de7', '182.4.135.159', 'Mozilla/5.0 (Linux; U; Android 11; in-id; RMX3171 Build/RP1A.200720.011) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.88 Mobile Safari/537.36 HeyTapBrowser/45.9.4.2.1', NULL),
(45, 1, 'Ita', 0, 'Happy wedding mbak sirly , semoga menjadi keluarga yg sakinah mawadah marohmah . Amiinn', '2023-05-13 22:03:01', '2023-05-13 22:03:01', '2861a8c7-c7a6-4b26-8b17-f93e916c5d41', '118.99.125.4', 'Mozilla/5.0 (Linux; Android 13; SAMSUNG SM-A528B) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/20.0 Chrome/106.0.5249.126 Mobile Safari/537.36', NULL),
(46, 1, 'Tofan', 1, 'Happy wedding mbak sirly.. ', '2023-05-13 22:17:26', '2023-05-13 22:17:26', '13e03b27-c97f-4d76-a22e-47574f8b6365', '114.5.111.97', 'Mozilla/5.0 (Linux; Android 12; SAMSUNG SM-M315F) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/20.0 Chrome/106.0.5249.126 Mobile Safari/537.36', NULL),
(47, 1, 'Mbak Galuh', 1, 'Happy wedding ibuuuukk sirly, semoga menjadi keluarga sakinah, mawadah, waromah,bahagia dunia akhirat sama mas bojonya.. Aamiin', '2023-05-14 07:43:02', '2023-05-14 07:43:02', 'f9b3eed9-adae-4024-91d7-db56a629314c', '114.79.17.74', 'Mozilla/5.0 (Linux; Android 8.1.0; vivo 1820 Build/O11019; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/87.0.4280.141 Mobile Safari/537.36 VivoBrowser/10.1.2.0', NULL),
(48, 1, 'Pak Roni', 1, 'Selamat menempuh hidup baru bahagia selalu.\nsakinah mawadah warohmah.\n', '2023-05-14 10:00:42', '2023-05-14 10:00:42', '5bb6288e-31e6-436e-a4be-0f56df1f87c0', '103.171.162.170', 'Mozilla/5.0 (Linux; U; Android 12; in-id; CPH2387 Build/SP1A.210812.016) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.88 Mobile Safari/537.36 HeyTapBrowser/45.9.4.1.1', NULL),
(49, 1, 'Liliana', 0, 'Selamat berbahagia Odi', '2023-05-14 22:26:19', '2023-05-14 22:26:19', '9125a700-dc88-4a83-bc14-69330910ac15', '182.3.198.236', 'Mozilla/5.0 (Linux; Android 9; SM-A207F Build/PPR1.180610.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/108.0.5359.79 Mobile Safari/537.36', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) NOT NULL,
  `nama` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `nama`, `email`, `password`, `created_at`, `updated_at`) VALUES
(1, 'User', 'user@example.com', '$2y$10$n0C0e0qclWaGwTx6hzqIm.RWIP1z4oAv5kgxbQGMcHqnYSvjoJfsG', '2023-05-07 19:25:36', '2023-05-07 19:25:36'),
(2, 'asix', 'asix@example.com', '$2y$10$n0C0e0qclWaGwTx6hzqIm.RWIP1z4oAv5kgxbQGMcHqnYSvjoJfsG', '2023-05-07 19:25:36', '2023-05-07 19:25:36');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_comments_user_id` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `FK_comments_user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
