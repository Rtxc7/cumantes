const fs = require('fs')


exports.ok = () => {
    return `Ok desu~`
}

exports.cmdNotFound = (cmd, prefix) => {
    return `Command *${cmd}* tidak terdaftar di *${prefix}menu*`
}

exports.hadis = (command) => {
    return `*── 「 HADIS 」 ──*

Daftar hadis:
1. Hadis Bukhari ada 6638 hadis
    _usage_: ${command} bukhari 1
2. Hadis Muslim ada 4930 hadis
    _usage_: ${command} muslim 25
3. Hadis Tirmidzi ada 3625 hadis
    _usage_: ${command} tirmidzi 10
4. Hadis nasai ada 5364 hadis
    _usage_: ${command} nasai 6
5. Hadis Ahmad ada 4305 hadis
    _usage_: ${command} ahmad 5
6. Hadis Abu Daud ada 4419 hadis
    _usage_: ${command} abu-daud 45
7. Hadis Malik ada 1587 hadis
    _usage_: ${command} malik 45
8. Hadis Ibnu Majah ada 4285 hadis
    _usage_: ${command} ibnu-majah 8
9. Hadis Darimi ada 2949 hadis
    _usage_: ${command} darimi 3`
}

exports.groupBot = (sender) => {
    return `
Link Group Felix Fenst : Segera Hadir...


Link Akan Tersedia Jika User Bot Sudah Banyak @${sender.split('@')[0]}`
}

exports.BlockBan = (ownerNumber, prefix) => {
    return `*Sepertinya kamu telah diblok/diban. Hubungi untuk mengetahui cara membuka blok!*\n\n Owner: wa.me/${ownerNumber}`
}

exports.ownerOnly = () => {
    return `Command ini khusus Owner-sama!`
}

exports.doneOwner = () => {
    return `Sudah selesai, Owner-sama~`
}

exports.groupOnly = () => {
    return `Command ini hanya bisa digunakan di dalam grup!`
}

exports.notNsfw = () => {
    return `Command NSFW belum diaktifkan!`
}

exports.nsfwOn = () => {
    return `Command NSFW berhasil *diaktifkan*!`
}

exports.nsfwOff = () => {
    return `Command NSFW berhasil *dinonaktifkan*!`
}

exports.nsfwAlready = () => {
    return `Command NSFW sudah diaktifkan sebelumnya.`
}

exports.stickerDel = () => {
    return `Stiker berhasil dihapus dari database!`
}

exports.stickerAdd = () => {
    return `Stiker berhasil ditambahkan ke database!`
}

exports.stickerAddAlready = (q) => {
    return `Stiker dengan keyword "${q}" sudah ada di database!`
}

exports.stickerNotFound = () => {
    return `Stiker tidak ditemukan!`
}

exports.vnDel = () => {
    return `Vn berhasil dihapus dari database!`
}

exports.vnAdd = () => {
    return `Vn berhasil ditambahkan ke database!`
}

exports.vnAddAlready = (q) => {
    return `Vn dengan keyword "${q}" sudah ada di database!`
}

exports.vnNotFound = () => {
    return `Vn tidak ditemukan!`
}

exports.imageAdd = () => {
    return `image berhasil ditambahkan ke database!`
}

exports.imageAddAlready = (q) => {
    return `image dengan keyword "${q}" sudah ada di database!`
}

exports.imageNotFound = () => {
    return `image tidak ditemukan!`
}

exports.respon = (ketikan, respt) => {
    return `
*── 「 AUTO RESPON 」 ──*

Auto-Respon berhasil dibuat dengan:

➸ *Text*: ${ketikan}
➸ *Akan Merespon*: ${respt}`
}

exports.responAlready = (ketikan) => {
    return `
Maaf, autorespon untuk teks "${ketikan}" sudah ada sebelumnya,harap memasukkan teks lain.`
}

exports.received = (pushname) => {
    return `
Halo ${pushname}!
Terima kasih telah melapor, laporanmu akan kami segera terima.`
}

exports.levelingOn = () => {
    return `Fitur leveling berhasil *diaktifkan*!`
}

exports.levelingOff = () => {
    return `Fitur leveling berhasil *dinonaktifkan*!`
}

exports.levelingOnAlready = () => {
    return `Fitur leveling telah diaktifkan sebelumnya.`
}

exports.levelingNotOn = () => {
    return `Fitur leveling belum diaktifkan!`
}

exports.claimOn = (yo) => {
    return `
*── 「 CLAIM  」 ──*

Selamat kamu mendapatkan *10000Xp* dan *$${yo}* balance
Dari claim harian`
}

exports.claimOnAlready = () => {
    return `Kamu sudah melakukan claim sebelumnya, Harap claim lagi di esok hari.`
}

exports.notNum = (q) => {
    return `"${q}", bukan angka!`
}

exports.menu = (prefix, ucap, pushname2, jumlahUser, timebot, owner, jumlahHarian, jumlahCommand, sender, time, public, levelMenu, xpMenu, reqXp, uangku, role, Limitnya) => {
    return `\`\`\`Selamat ${ucap} Kak @${sender.split('@')[0]} 😳\`\`\`

「 *BOT INFO* 」

🚀 *Time: ${time}*
💣 *Mode* :「 ${public} 」



┌────❉ *USER INFO* ❉

🕊 *Name* : *${pushname2}* 
♻️ *API* : *wa.me/${sender.split('@')[0]}*
🐣 *Limit* : *${Limitnya}*
🐥 *Level: ${levelMenu}*
🐤 *XP: ${xpMenu} / ${reqXp}*
🌹 *Role: ${role}*
🎉 *Your Balance: $${uangku}*

└────❉ *YOUR INFO* ❉



┌────❉ *BOT INFO* ❉

𒍮 *Auto-Regis User: ${jumlahUser}*
𒍮 *Hit Bot : ${jumlahCommand}*
𒍮 *Hit Today : ${jumlahHarian}*
𒍮 *Runtime : ${timebot}*

└────❉ *FELIX BOT* ❉



*Sponsor By @0*
*Sc BOT By Rasyid*`
}

exports.menuDownloader = (prefix) => {
    return `
*── 「 DOWNLOADER 」 ──*

1. ${prefix}play
usage: *${prefix}play judul*

2. ${prefix}music
usage: *${prefix}music judul*

3. ${prefix}video
usage: *${prefix}video judul*

4. ${prefix}soundcloud
usage: *${prefix}*

5. ${prefix}twitterdl
usage: *${prefix}*

6. ${prefix}zippydl
usage: *${prefix}zippydl link*

7. ${prefix}drive
usage: *${prefix}drive link*

8. ${prefix}mediafire
usage: *${prefix}mediafire link*

9. ${prefix}jooxplay
usage: *${prefix}jooxplay judul*

10. ${prefix}playmp4
usage: *${prefix}playmp4 judul*

11. ${prefix}playmp3
usage: *${prefix}playmp3 judul*

12. ${prefix}igstory
usage: *${prefix}igstory query*

13. ${prefix}hintt
usage: *${prefix}hintt text*

14. ${prefix}sendfile
usage: *${prefix}sendfile name*

15. ${prefix}cocofun
usage: *${prefix}cocofun link*

16. ${prefix}smule
usage: *${prefix}smule link*

17. ${prefix}instagram
usage: *${prefix}instagram link*

18. ${prefix}facebook
usage: *${prefix}facebook link*

19. ${prefix}ytsearch
usage: *${prefix}ytsearch judul*

2p. ${prefix}igstalk
usage: *${prefix}igstalk username*

21. ${prefix}ghstalk
usage: *${prefix}ghstalk username*
    `
}

exports.menuText = (prefix) => {
    return `
*── 「 TEXT MAKER 」 ──*
    `
}

exports.menuPremi = (prefix) => {
    return `
*── 「 PREMIUM 」 ──*

1. ${prefix}ytdl
usage: *${prefix}ytdl link*

2. ${prefix}ytmp4
usage: *${prefix}ytmp4 link*

3. ${prefix}ytmp3
usage: *${prefix}ytmp3 link*

4. ${prefix}stickerwm
usage: *${prefix}stickerwm author|packname*

5. ${prefix}asupan
usage: *-*

6. ${prefix}ptlvid
usage: *-*

7. ${prefix}spamcall
usage: *${prefix}spamcall nomor_target*

8. ${prefix}spamsms
usage: *${prefix}spamsms nomor_target*

9. ${prefix}nekosearch
usage: *${prefix}nekosearch judul*

10. ${prefix}pinterest
usage: *${prefix}pinterest query*

11. ${prefix}addrespon
usage: *${prefix}addrespon textnya|responnya*

12. ${prefix}delrespon
usage: *${prefix}delrespon text*
`
}

exports.menuSticker = (prefix) => {
    return `
*── 「 STICKER 」 ──*

1. ${prefix}toimg
usage: *-*

2. ${prefix}togif
usage: *-*

3. ${prefix}tovid
usage: *-*

4. ${prefix}linestickerdl
usage: *${prefix}linestickerdl link*

5. ${prefix}telesticker
usage: *${prefix}telesticker link*

6. ${prefix}petpet
usage: *-*

7. ${prefix}bucinstick
usage: *-*

8. ${prefix}dogestick
usage: *-*

9. ${prefix}gurastick
usage: *-*

10. ${prefix}patrick
usage: *-*

11. ${prefix}waifustick
usage: *-*

12. ${prefix}animesticker
usage: *-*
    `
}

exports.menuWeeaboo = (prefix) => {
    return `
*── 「 WEEABOO 」 ──*

1. ${prefix}slap
usage: *${prefix}slap @tag*

2. ${prefix}pat
usage: *${prefix}pat @tag*

3. ${prefix}baka
usage: *${prefix}baka @tag*

4. ${prefix}hug
usage: *${prefix}hug @tag*

5. ${prefix}cium
usage: *${prefix}cium @tag*

6. ${prefix}waifu
usage: *-*

7. ${prefix}kemono
usage: *-*

8. ${prefix}elf
usage: *-*

9. ${prefix}konachan
usage: *-*

10. ${prefix}fanart
usage: *-*

11. ${prefix}quotesanime
usage: *-*

12. ${prefix}wallnime
usage: *-*

13. ${prefix}wallpaper
usage: *-*

14. ${prefix}neko
usage: *-*

15. ${prefix}genshininfo
usage: *${prefix}genshininfo chara*

16. ${prefix}searchmanga
usage: *${prefix}searchmanga judul*

17. ${prefix}searchanime
usage: *${prefix}searchanime judul*

18. ${prefix}whatanime
usage: *${prefix}whatanime reply_image*
    `
}

exports.menuFun = (prefix) => {
    return `
*── 「 FUN FEATURE 」 ──*

1. ${prefix}suit
usage: *${prefix}suit batu/gunting/kertas*

2. ${prefix}slot
usage: *-*

3. ${prefix}tictactoe
usage: *${prefix}tictactoe @tag*

4. ${prefix}dadu
usage: *${prefix}dadu 1/6*

5. ${prefix}tebakgambar
usage: *-*

6. ${prefix}family100
usage: *-*

7. ${prefix}siapaaku
usage: *-*

8. ${prefix}tebakbendera
usage: *-*

9. ${prefix}tebaklirik
usage: *-*

10. ${prefix}asupan
usage: *-*

11. ${prefix}joke
usage: *-*

12. ${prefix}meme
usage: *-*

13. ${prefix}wpsearch
usage: *${prefix}wpsearch judul*

14. ${prefix}subreddit
usage: *${prefix}subreddit query*

15. ${prefix}fuckmylife
usage: *-*

16. ${prefix}memeindo
usage: *-*

18. ${prefix}darkjoke
usage: *-*
    `
}

exports.menuImage = (prefix) => {
    return `
*── 「 EFFECT AND MANIPULATION 」 ──*

1. ${prefix}emoji
usage: *${prefix}emoji 🗿*

2. ${prefix}ttp2
usage: *${prefix}ttp2 text*

3. ${prefix}sfire
usage: *${prefix}sfire send_image*

4. ${prefix}attp
usage: *${prefix}attp text*

5. ${prefix}ttg
usage: *${prefix}ttg text*

6. ${prefix}stickermeme
usage: *${prefix}stickername text*

7. ${prefix}ttp
usage: *${prefix}ttp text*
    `
}

exports.menuKerang = (prefix) => {
    return `
*── 「 KERANG 」 ──*

1. ${prefix}kapankah
Usage: *${prefix}kapankah* text

2. ${prefix}bisakah
Usage: *${prefix}bisakah* text

3. ${prefix}rate
Usage: *${prefix}rate* pertanyaan

    `
}

exports.menuModeration = (prefix) => {
    return `
*── 「 MODERATION GROUP 」 ──*

1. ${prefix}getpic
usage: *${prefix}getpic @tag*

2. ${prefix}tagme
usage: *-*

3. ${prefix}kontak
usage: *${prefix}kontak nomor|nama*

4. ${prefix}kontag
usage: *${prefix}kontag nomor|nama*

5. ${prefix}hidetag
usage: *${prefix}hidetag text*

6. ${prefix}antidelete
usage: *${prefix}antidelete aktif/mati*

7. ${prefix}mutual
usage: *-*

8. ${prefix}delete
usage: *${prefix}delete reply_image_sticker*

9. ${prefix}afk
usage: *${prefix}afk query*

10. ${prefix}grupinfo
usage: *-*

11. ${prefix}add
usage: *${prefix}add reply/nomor*

12. ${prefix}oadd
usage: *${prefix}oadd reply/nomor*

13. ${prefix}kick
usage: *${prefix}kick @tag/reply*

14. ${prefix}okick
usage: *${prefix}okick @tag/reply*

15. ${prefix}promote
usage: *${prefix}promote @tag/reply*

16. ${prefix}opromote
usage: *${prefix}opromote @tag/reply*

17. ${prefix}demote
usage: *${prefix}demote @tag/reply*

18. ${prefix}odemote
usage: *${prefix}odemote @tag/reply*

19. ${prefix}linkgc
usage: *${prefix}*

20. ${prefix}leave
usage: *${prefix}*

21. ${prefix}setdesc
usage: *${prefix}setdesc text*

22. ${prefix}revoke
usage: *-*

23. ${prefix}setgroupname
usage: *${prefix}setgroupname text*

24. ${prefix}sider
usage: *-*

25. ${prefix}group
usage: *${prefix}group disable/enable/close/open*

26. ${prefix}setppgrup
usage: *-*

27. ${prefix}tagall
usage: *${prefix}tagall query*

28. ${prefix}otagall
usage: *${prefix}otagall query*

29. ${prefix}antibadword
usage: *${prefix}antibadword enable/disable*

30. ${prefix}mute
usage: *${prefix}mute enable/disable*

31. ${prefix}antilink
usage: *${prefix}antilink enable/disable*

32. ${prefix}antiviewonce
usage: *${prefix}antiviewonce enable/disable*

33. ${prefix}welcome
usage: *${prefix}welcome enable/disable*

34. ${prefix}autosticker
usage: *${prefix}autosticker enable/disable*

35. ${prefix}nsfw
usage: *${prefix}nsfw enable/disable*

36. ${prefix}leveling
usage: *${prefix}leveling enable/disable*
   `
}


exports.menuNsfw = (prefix) => {
    return `
*── 「 NSFW 」 ──*

1. ${prefix}lewd
usage: *${prefix}lewd name*

2. ${prefix}fetish
usage: *${prefix}fetish name*

3. ${prefix}nhentai
usage: *${prefix}nhentai code*

4. ${prefix}nekoinfo
usage: *${prefix}nekoinfo link*

5. ${prefix}xnxxsearch
usage: *${prefix}xnxxsearch query*

6. ${prefix}xhamstersearch
usage: *${prefix}xhamstersearch query*

7. ${prefix}waifu18
usage: *${prefix}*

8. ${prefix}lewdavatar
usage: *-*

9. ${prefix}chiisaihentai
usage: *-*

10. ${prefix}femdom
usage: *-*

11. ${prefix}hololewd
usage: *-*
    `
}

exports.menuOwner = (prefix) => {
    return `
*── 「 OWNER MENU 」 ──*

1. ${prefix}premium
usage: *${prefix}premium add/del*

2. ${prefix}lreset
usage: *-*

3. ${prefix}ban
usage: *${prefix}ban add/del*

4. ${prefix}listban
usage: *-*

5. ${prefix}clearall
usage: *-*

6. ${prefix}public
usage: *-*

7. ${prefix}self
usage: *-*

8. ${prefix}shutdown
usage: *-*

9. ${prefix}setprefix
usage: *${prefix}setprefix multi/nopref*

10. ${prefix}setname
usage: *${prefix}setname text*

11. ${prefix}give
usage: *${prefix}give @tag/nomor jumlah_xp*

12. ${prefix}setstat
usage: *${prefix}setstat text*

13. ${prefix}bc
usage: *${prefix}bc text*

14. ${prefix}exif
usage: *${prefix}exif author|packname*

15. ${prefix}leaveall
usage: *-*

16. ${prefix}listgrup
usage: *-*
   `
}

exports.menuLeveling = (prefix) => {
    return `
*── 「 LEVELING 」 ──*

1. ${prefix}leaderboard
usage: *-*

2. ${prefix}level
usage: *-*

3. ${prefix}buygamelimit
usage: *${prefix}buygamelimit jumlah*

4. ${prefix}buylimit
usage: *${prefix}buylimit jumlah*

5. ${prefix}claim
usage: *-*

6. ${prefix}limit
usage: *-*
    `
}

exports.menuPrimbon = (prefix) => {
    return `
*── 「 PRIMBON MENU 」 ──*

1. ${prefix}artinama
usage: *${prefix}artinama text*

2. ${prefix}artimimpi
usage: *${prefix}artimimpi text*

3. ${prefix}pasangan
usage: *${prefix}pasangan text*

4. ${prefix}ramaljadian
usage: *-*
    `
}

exports.menuPray = (prefix) => {
    return `
*── 「 PRAY 」 ──*

1. ${prefix}hadis
Usage: *${prefix}hadis query*

2. ${prefix}jadwalsholat
Usage: *${prefix}jadwalsholat kota*

3. ${prefix}kisahnabi
Usage: *${prefix}kisahnabi query*

4. ${prefix}alquran
Usage: *${prefix}alquran query*

5. ${prefix}surah
usage: *${prefix}surah query*

6. ${prefix}asmaulhusna
usage: *-*

7. ${prefix}quranaudio
usage: *${prefix}quranaudio query*

8. ${prefix}listsurah
usage: *-*

9. ${prefix}randomquran*
usage: *-*
    `
}

exports.menuMisc = (prefix) => {
    return `
*── 「 MEDIA AND MISC 」 ──*

1. ${prefix}tolink
usage: *${prefix}tolink reply image*

2. ${prefix}cuaca
usage: *${prefix}cuaca query*

3. ${prefix}jadwalbola*
usage: *-*

5. ${prefix}berita
usage: *${prefix}*

6. ${prefix}corona
usage: *-*

7. ${prefix}jadwaltv
usage: *-*

8. ${prefix}movie
usage: *${prefix}movie query*

9. ${prefix}kalkulator
usage: *${prefix}kalkulator 1+1*

10. ${prefix}jarak
usage: *${prefix}jarak query*

11. ${prefix}hoax
usage: *-*

12. ${prefix}mutual
usage: *-*

13. ${prefix}resepmasakan
usage: *${prefix}resepmasakan query*

14. ${prefix}resep*
usage: *-*

15. ${prefix}wallpapersearch*
usage: *${prefix}wallpalersearch query*

16. ${prefix}wiki*
usage: *${prefix}wiki query*

17. ${prefix}wikien*
usage: *${prefix}wikien query*

18. ${prefix}google*
usage: *${prefix}google text*

19. ${prefix}addsticker
usage: *${prefix}addsticker reply*

20. ${prefix}delsticker
usage: *${prefix}delsticker name*

21. ${prefix}liststicker
usage: *-*

22. ${prefix}addvn
usage: *${prefix}addvn reply*

23. ${prefix}delvn
usage: *${prefix}delvn name*

24. ${prefix}listvn
usage: *-*

25. ${prefix}addimage
usage: *${prefix}addimage name*

26. ${prefix}delimage
usage: *${prefix}delimage name*

27. ${prefix}listimage
usage: *-*
    `
}

exports.menuBot = (prefix) => {
    return `
*── 「 BOT MENU 」 ──*

1. ${prefix}status
usage: *-*

2. ${prefix}speed
usage: *-*

3. ${prefix}runtime
usage: *-*

4. ${prefix}sc
usage: *-*

5. ${prefix}donasi
usage: *-*

6. ${prefix}report
usage: *${prefix}report keluhan*

7. ${prefix}rules
usage: *-*

8. ${prefix}join
usage: *${prefix}join link_grup*
    `
}

exports.menuPrice = (owner, pushname) => {
    return `
*── 「 PRICE LIST 」 ──*
 
*Hai kak  *${pushname}*
*Harga Sewa Bot*
*15K/Group Selama 1 Bulan*

*Pembayaran Bisa Melalui Metode Pembayaran di Bawah:*

-Saweria
-Pulsa


*_note_*:
*Jika kalian ingin menjadi owner bot,bisa chat owner untuk price nya :D*
*wa.me/${owner} (Owner)*

    `
}

exports.UpToPremi = (ownerNumber, prefix) => {
    return `
*── 「 UPGRADE PREMIUM 」 ──*

*Tarif Premium User adalah 10K Perbulan*
*Keuntungan Premium Diantaranya:*
♲ *Bebas memakai fitur premium*
♲ *Dapat Informasi Lebih dulu akan Update, Nomor Bot Baru (Jika Terbanned), dan Lainnya*

*Jika Tertarik,Kalian Bisa Bayar Melalui Metode Pembayaran di Bawah:*
Pulsa = 081462239208*
*Qris pada gambar diatas*

*Info Lebih Lengkap Chat Owner, Ketik ${prefix}owner
*_note_*:
*Pembelian Premium yang disertai SewaBot hanya akan membayar 20K (Diskon 5K)*

    `
}

exports.rules = (prefix) => {
    return `
*── 「 RULES 」 ──*

1. Jangan spam bot. 😖
Sanksi: *WARN/SOFT BLOCK*

2. Jangan telepon bot. 🙅‍♂
Sanksi: *SOFT BLOCK*

3. Jangan mengeksploitasi bot. 🗣
Sanksi: *PERMANENT BLOCK*

Jika sudah dipahami rules-nya, silakan ketik *${prefix}menu* untuk memulai!

    `
}

exports.tos = (ownerNumber, prefix) => {
    return `
*── 「 DONATE 」 ──*

Kalian bisa mendukung saya agar bot ini tetap up to date dengan:
081462239208 (Indosat/Pulsa)


Terima kasih!

Contact person Owner:
wa.me/${ownerNumber} (Owner)

Untuk melihat script yang bot gunakan,ketik ${prefix}sc
    `
}
