---
title: "complete"
description: "This is a R Notebook"
---

### 1.5 - Windows Setngs

Setngs

- An updaed inerace
  - A migraonromhe Conrol Panel
- One placeor mos conguraon setngs
  - A common UI
- Searchor “Setngs”, Or scroll downo “S”

Time and Language

- Windows can auomacally seheme
  - Acve Domain is very sensiveo synchronized clocks
  - Five minues oolerance by deaul
- Windows can speak many dieren languages
  - Change or add a language

Updae and Securiy

- Keep your OS upo dae - Securiy paches, bugxes
- Auomac insallaon - Updaes are always insalled
- Acve hours - You conrolhe updaeme

Personalizaon

- Changehe way Windows looks andeels
  - Colors, wallpaper, lock screen
- Exensive cusomizaon - Make Windows your own

Apps

- Manage insalled applicaons
  - Uninsall or modiy an exisng app
- Add Windowseaures
  - Fonsor oher languages
  - OpenSSH Server
  - SNMP suppor

Privacy

- Share app acviy - Cusomized adversing
- Share your language - Websie conen
- Speech recognion - Sends audioo an online service

```
Sysem
```

- Change display setngs
  - Nigh ligh, scaling, resoluon
- Audio setngs
  - Inpu and oupu
- Nocaons - Enable/disable - Show on lock screen
  Devices
- Manage devices
  - Blueooh, priners, ec.
- Mouse setngs
  - Buon and wheel opons
- Typing and wring - Keyboard and pen
  Network and Internet
- Nework setngs
  - Inerne connecviy
- View Inerne saus
  - Up or down?
- Change IP setngs - Modiy address inormaon
  Gaming
- Xbox Game Bar - Xbox gaming nework
- Cha, join games - Lookorriends
  Accounts
- Manage login accoun inormaon
  - Microsof accoun or local accoun
- Email conguraon - Speciy an email app
- Sign-in opons - PIN, password, securiy key, ec.

### 1.6 - Windows Nework Technologies

Shared resources

- Make aolder or priner available onhe nework
  - “Share” wih ohers, view in Windows Explorer
- Assign (map) a drive leero a share
  - Access ale server
  - Reconnec auomacally
- Shares ending wih a dollar sign ($) are “hidden”
  - No a securiyeaure
- Adminisrave Tools > Compuer Managemen

Mapping drives

- Access a share
  - This PC / Map nework drive
- Local drive leer and share name
  - May require addional auhencaon
- Or usehe command line:
  net use h: “\\Daedalus\Gate Room”

Sharing priners

- Similaro sharing aolder
  - Bu i’s a priner insead
- Priner Properes
  - Accesshrough Windows Explorer,he Setngs app,
    or any oher Priner Properes
  - Share an exisng priner

Using a shared priner

- Similaro sharing aolder
  - Bu i’s a priner insead
- Add a priner
  - Windows Explorer
  - Setngs app

```
Proxy Setngs
```

- Changeheracow
  - An Inerne go-beween
- Setngs > Nework and Inerne
  - Or use Conrol Panel > Inerne Opons >
    Connecons > LAN setngs
- Dene address and excepons - Proxies don’ workor everyhing
  Nework locaons
- Privae
  - Share and conneco devices
  - Home or work nework
- Public
  - No sharing or connecviy
  - Public Wi-Fi
- Cusomize securiy setngs - Prole is deermined auomacally - Changehe setngs a anyme
  Nework pahs
- View nework pahs in File Explorer
  - Server and share name
- Map nework drive
  - Add a drive leer
- Disconnec - Toolbar - Righ-clickhe drive
  Meered connecons
- Reduce daa usage
  - Slow nework links
  - Limied bandwidh
  - Usage-based billing
- Can modiy applicaon communicaon
  - Windows Updaes
  - OneDrive sync

### 1.6 - Conguring Windows Firewall

Windows Defender Firewall

- Yourrewall should always be enabled
  - Somemes you needoroubleshoo
- Temporarily disableromhe main screen
  - Turn Windows Firewall on or o
  - Requires elevaed permissions
- Dieren setngsor each neworkype
  - Public / Privae

Windows Firewall conguraon

- Block all incoming connecons
  - Ignores your excepon lis
  - Useul when you needhe mos securiy
- Modiy nocaon
  - App blocking

```
Creang arewall excepon
```

- Allow an app oreaure
  hrough Windows Firewall
  - The more secure excepon
- Por number
  - Block or allow
- Predened excepons
  - Lis o common excepons
- Cusom rule
  - Everyrewall opon

How Windows gets an IP address

- DHCP (Dynamic Hos Conguraon Proocol)
  - Auomac IP addressing
  - This ishe deaul
- APIPA (Auomac Privae IP Addressing)
  - There’s no sac address or DHCP server
  - Communicae locally (link-local address)
  - Assigns 169.254.1.0o 169.254.254.
  - No Inerne connecviy
- Sac address
  - Assign all IP address parameers manually
  - You needo know very specic deails

TCP/IP hos addresses

- IP Address – Unique idener
  Subne mask – Ideneshe subne
  Gaeway – The roue ohe subneohe res ohe world - DNS – Domain Name Services - Convers domain nameso IP addresses - DHCP – Dynamic Hos Conguraon Proocol - Auomaeshe IP address conguraon process - Addresses can be dynamic or sac - Loopback address - 127.0.0.1 - I’s alwayshere!
  A backuporhe DHCP server - Mulple DHCP servers should be conguredor
  redundancy - There will always be one available - I a DHCP server isn’ available, Windows useshe
  Alernae Conguraon - The deaul is APIPA addressing - You can also congure a sac IP address - Keep working normally

### 1.6 - Windows IP Address Conguraon

Network setup

- Conrol Panel
  - Nework and Sharing Cener
  - Se up a new connecon or nework
- Sep-by-sep wizard
  - Conrmaon duringhe process
- Many dieren connecons
  - Direc, VPN, dial-up, ec.

VPN connecons

- Buil-in VPN clien
  - Included wih Windows
  - Conneco a workplace
- Inegrae a smar card
  - Mul-acor auhencaon
    - Somehing you know
    - Somehing you have
    - Somehing you are
- Connecromhe nework saus icon
  - Click and provide credenals

```
Wireless connecons
```

- Nework name - SSID (Service Se Idencaon)
- Securiyype - Encrypon mehod
- Encryponype - TKIP, AES
- Securiy key - WPA2-Personal - Pre-shared key - WPA2-Enerprise - 802.1X auhencaon
  Wired connecons
- Eherne cable - Direc connecon
- Fases connecon ishe deaul - Eherne, Wireless, WWAN
- Alernae conguraons - When DHCP isn’ available
  WWAN connecons
- Wireless Wide Area Nework
  - Buil-in mobileechnology
- Hardware adaper - Anenna connecons
- USB conneced or 802.11 wireless - Teher or hospo
- Requireshird-pary sofware - Each provider is dieren

### 1.6 - Windows Nework Connecons

Insalling applicaons

- Exendheunconaliy o your operang sysem
  - Specialized applicaons
- Available everywhere
  - Findhe applicaon you need
  - Insall on your operang sysem
- No every compuer can run every applicaon
  - Some simple checks can help manage your deskop

```
Operang sysem plaorm
```

- 32-bi vs. 64-bi
  - Processor specic
- 32-bi processors can sore
  232 = 4,294,967,296 values
- 64-bi processors can sore
  264 = 18,446,744,073,709,551,616 values
  - 4 GB vs. 17 billion GB
  - The OS has a maximum suppored value
- Hardware drivers are specicohe OS version
  - 32-bi (x86), 64-bi (x64)

### 1.7 - Insalling Applicaons

### 1.7 - Insalling Applicaons (connued)

- 32-bi OS canno run 64-bi apps
  - Bu 64-bi OS can run 32-bi apps
- Apps in a 64-bi Windows OS
  - 32-bi apps: \Program Files (x86)
  - 64-bi apps: \Program Files

Graphics requiremens

- Inegraed graphics
  - CPU and GPU arehe same chip
  - Uses sysem memoryor graphics
  - Common in lapops
- Dedicaed graphics card
  - Also called a discree graphics card
  - Uses is own VRAM (Video RAM)
  - High-end graphics requiremens
- Checkhe applicaon
  - Inegraed or dedicaed
  - VRAM requiremens

RAM requiremens

- Random Access Memory
  - Memory modules
- A crical specicaon
  - Applicaon may perorm poorly
  - Or no a all
- This would be above and beyondhe OS requiremens
  - Dependen onhe applicaon
  - Consider all ohe oher running applicaons

CPU requiremens

- Cenral Processing Uni
  - Processing speed
  - Usually measured in gigaherz (GHz)
- A broad measuremen
  - Higher numbers areaser CPUs
- Applicaon requiremens vary
  - Word processing vs. video eding

Exernal hardwareokens

- Manage applicaon usage
  - Limi accesso auhorized users
- Applicaon will only operae wihhe
  hardwareoken conneced
  - Commonly a USB device
  - Can be a challengeo manage
- Ofen used wih high-end sofware
  - High per-sea licensing coss

```
Sorage requiremens
```

- Drive space concerns
  - Inial insallaon space requiremen
  - Applicaon use requiremen
- Some applicaons use a LOT o sorage space
  afer insallaon - The inial insall requiremens may no behe mos
  imporan specicaon
  Disribuon mehods
- Physical media
  - Opcal media, USB drive, ec.
  - Increasingly rare
- Downloadable - Direcromhe manuacurer - Cenralized app sore - Avoid 3rd-pary downloads
  ISOles
- Opcal disk image
  - A single ISOle / ISO image
  - Files andolders
- Secor by secor copy ohe daa on an opcal disc
  - ISO 9660le sysem
- Moun inhe OS - Appears as a separae drive
  Insallaon consideraons
- There’s a reason we are careul when
  insalling applicaons
  - Applicaons havehe same righs and permissions
    ashe user
  - An unknown applicaon can cause signican issues
- Impaco device
  - Applicaon upgrade sops working
  - Slowdowns
  - Deleedles
- Impaco nework
  - Accesso inernal services
  - Righs and permissionsole shares
- Impaco operaon
  - Many jobs areme-sensive
  - An updaed applicaon may require a change
    ohe workow
  - Or may no work a all
- Impacohe business
  - Crical processes are sensiveo downme
    and ouages
  - A changeo an applicaon can creae signican issues
  - Oher pars ohe business rely on your resuls

### 1.8 - Operang Sysem Overview

Why do you need an OS?

- Conrol ineracon beween componens
  - Memory, hard drives, keyboard, CPU
- A common plaormor applicaons
  - You’re goingo do some work, righ?
- Humans need a wayo inerac wihhe machine
  - The “user inerace” - Hardware can’ do everyhing!

Sandard OSeaures

- File managemen
  - Add, delee, rename
- Applicaon suppor
  - Memory managemen, swaple managemen
- Inpu and Oupu suppor
  - Priners, keyboards, hard drives, USB drives
- Operang sysem conguraon and managemenools

Microsof Windows

- Major marke presence
  - Many dieren versions
  - Windows 10, Windows 11, Windows Server
- Advanages
  - Large indusry suppor
  - Broad selecon o OS opons
  - Wide variey o sofware suppor
- Disadvanages
  - Large insall base provides a bigargeor
    securiy exploiaon
  - Large hardware suppor can creae challenging
    inegraon exercises

Linux

- Free Unix-compable sofware sysem
  - Unix-like, bu no Unix
- Many (many) dieren disribuons
  - Ubunu, Debian, Red Ha / Fedora
- Advanages
  - Cos. Free!
  - Works on wide variey o hardware
  - Passionae and acve user communiy
- Disadvanages
  - Limied driver suppor, especially wih lapops
  - Limied suppor opons

Apple macOS

- macOS - Deskop OS running on Apple hardware
- Advanages
  - Easyo use
  - Exremely compable
  - Relavelyewer securiy concerns
- Disadvanages
  - Requires Apple hardware
  - Less indusry supporhanhe PC plaorm
  - Higher inial hardware cos

```
Chrome OS
```

- Google’s operang sysem
  - Based onhe Linux kernel
- Ceners around Chrome web browser
  - Mos apps are web-based
- Many dieren manuacurers
  - Relavely less expensive
- Relies onhe cloud - Connecohe Inerne
  Apple iPadOS
- Operang sysemor Apple’s iPadables
  - A varian o Apple’s phone iOS
- Tableeaures - Deskop browser (Saari) - Second monior (Sidecar) - Keyboard suppor - Mulasking
  Apple iOS
- Apple iOS
  - Apple iPhones
  - Based on Unix
  - Closed-source - No accesso source code
  - Exclusiveo Apple producs
- iOS Apps - Apps are developed wih iOS SDK on macOS - Apps mus be approved by Apple beore release - Apps are availableo users inhe Apple App Sore
  Google Android
- Google Android
  - Open Handse Alliance
  - Open-source OS, based on Linux
  - Suppored on many dieren manuacurer’s devices
- Android Apps - Apps are developed on Windows, macOS, and - Linux wihhe Android SDK - Apps availablerom Google Play - Apps also availableromhird-pary sies
  (i.e., Amazon Appsore)
  Vendor-specic limiaons
- End-o-lie
  - Dieren companies seheir own EOL policies
- Updang
  - iOS, Android, and Windows check and
    prompor updaes
  - Chrome OS will updae auomacally
- Compabiliy beween operang sysems
  - Some movies and music can be shared
- Almos no direc applicaon compabiliy
  - Forunaely, many apps have been builo run on
    dieren OSes
  - Some daales can be moved across sysems
  - Web-based apps have poenal

File sysems

- Beore daa can be wrienohe paron,
  i mus beormaed
  - Buildheoundaon
- Operang sysems expec daao be wrien
  in a parcularorma
  - FAT32 and NTFS are popular
- Many operang sysems can read
  (and perhaps wrie) mulple le sysemypes
  - FAT, FAT32, NTFS, exFAT, ec.

FAT

- FAT - File Allocaon Table
  - One ohers PC-basedle sysems (circa 1980)
- FAT32 - File Allocaon Table
  - Larger (2erabye) volume sizes
  - Maximumle size o 4 gigabyes
- exFAT - Exended File Allocaon Table
  - Microsofash drivele sysem
  - Files can be largerhan 4 gigabyes
  - Compable across many operang sysems
  - Windows, Linux, macOS

#### NTFS

- NTFS – NT File Sysem
  - Exensive improvemens over FAT32
  - Quoas,le compression, encrypon, symbolic links,
    largele suppor, securiy, recoverabiliy
- No very compable across operang sysems - Many OSes will read NTFS (bu no wrie) - Some have limied wrieunconaliyo
  an NTFSle sysem
  Oherle sysems
- ex3 - Third exendedle sysem
  - Commonly used byhe Linux OS
- ex4 - Fourh exendedle sysem - An updaeo ex 3 - Commonly seen in Linux and Android OS
  APFS
- Apple File Sysem (APFS)
  - Addedo macOS High Sierra (10.12.4)
  - Also included wih iOS and iPadOS
- Opmizedor solid-sae sorage
  - Encrypon, snapshos, increased daa inegriy

### 1.8 - Filesysems

### 1.9 - Insalling Operang Sysems

Boo mehods

- USB sorage
  - USB mus be booable
  - Compuer mus suppor boongrom USB
- Opcal media
  - CD-ROM and DVD-ROM
- PXE (“Pixie”) - Preboo eXecuon Environmen
  - Perorm a remoe nework insallaon
  - Compuer mus suppor boong wih PXE
- Solid sae drives / hard drives
  - Sore many OS insallaonles
- Inerne-based
  - Linux disribuons, macOS Recovery insallaon,
    Windows updaes
- Exernal / ho swappable drive
  - Some exernal drives can moun an
    ISO image (opcal drive image)
  - Boorom USB
- Inernal hard drive
  - Insall and boorom separae drive
  - Creae and boorom new paron

```
Types o insallaons
```

- In-place upgrade - Mainain exisng applicaons and daa
- Recovery paron
  - Hidden paron wih insallaonles
- Clean insall
  - Wipehe slae clean and reinsall
  - Migraonool can help
- Image deploymen
  - Deploy a clone on every compuer
  - Relavely quick
  - Can be compleely auomaed
- Repair insallaon
  - Fix problems wihhe Windows OS
  - Does no modiy userles
- Remoe nework insallaon
  - Local server or shared drive
  - Insall acrosshe Inerne
- Load alernaehird pary drivers when necessary - Disk conroller drivers, ec.
  The disk paron
- Separaeshe physical drive ino logical pieces
  - Useulo keep daa separaed
  - Mulple parons are no always necessary
- Useulor mainaining separae operang sysems
  - Windows, Linux, ec.
- Formaed parons are called volumes
  - Microsof’s nomenclaure

GPT paron syle

- GPT (GUID Paron Table)
  - Globally Unique Idener
  - The laes paronorma sandard
- Requires a UEFI BIOS
  - Can have upo 128 parons
  - Maximum paron size is over 9 billion TB
  - Windows max paron is currenly 256 TB
- No needor exended parons or logical drives

MBR paron syle

- MBR (Maser Boo Record)
  - The old sandby, wih all ohe old limiaons
  - Maximum paron size o 2 TB
- Primary
  - Booable parons
  - Maximum oour primary parons per hard disk
  - One ohe primary parons can be marked as Acve
- Exended
  - Usedor exendinghe maximum number o parons
  - One exended paron per hard disk (oponal)
  - Conains addional logical parons
  - Logical parons inside an exended paron
    are no booable

```
Disk paroning
```

- Thers sep when preparing disks
  - May already be paroned
  - Exisng parons may no always be compable
    wih your new operang sysem
- An MBR-syle hard disk can have upoour parons
- GUID paronables suppor upo 128 parons
  - Requires UEFI BIOS or BIOS-compabiliy mode
  - BIOS-compabiliy mode disables UEFI SecureBoo
- BE CAREFUL! - Serious poenalor daa loss - This is no an everyday occurrence
  Quickorma vs.ullorma
- Quickorma
  - Creaes a newleable
  - Looks like daa is erased, bu i’s no
  - No addional checks
- Quickormahe deaul during insallaon in
  Windows 10 and 11
  - Usediskpartor aullorma
- Fullorma
  - Wries zerosohe whole disk
  - Your daa is unrecoverable
  - Checkshe diskor bad secors (me consuming)

### 1.9 - Insalling Operang Sysems (connued)

### 1.9 - Upgrading Windows

Why upgrade?

- Upgrade vs. Insall
  - Upgrade - Keeples in place
  - Insall - Sar over compleelyresh
- Mainain consisency
  - Cusomized conguraons
  - Mulple local user accouns
- Upgrades save hours ome
  - Avoid applicaon reinsall
  - Keep user daa inac
  - Keep user setngs
  - Ge up and running quickly

Upgrade mehods

- In-place upgrade
  - Upgradehe exisng OS
  - Keeps all applicaons, documens,
    and setngs
  - Sarhe seuprom inside
    he exisng OS
- Clean insall
  - Wipe everyhing and reload
  - Backup yourles
  - Sarhe seup by boong
    romhe insallaon media

```
Preparehe boo drive
```

- Know your drive
  - Is daa onhe drive?
  - Hashe drive beenormaed?
  - Wha parons are onhe drive?
- Backup any old daa
  - You may needha daa again someday
  - Save user preerences
- Mos paroning andormatng can be compleed
  duringhe insallaon
  - Clearhe drive and sarresh

Beorehe insallaon

- Check minimum OS requiremens
  - Memory, disk space, ec.
  - Andhe recommended requiremens
- Run a hardware compabiliy check
  - Runs when you perorm an upgrade
  - Run manuallyromhe Windows seup screen
  - Windows 10 Upgrade Checker,
    PC Healh Checkor Windows 11
- Planor insallaon quesons
  - Drive/paron conguraon, license keys, ec.
- Applicaon and driver compabiliy
  - Check wihhe app developer and
    hardware manuacurer

```
Windows produc lie cycle
```

- Qualiy updaes
  - Monhly securiy updaes and bugxes
- Feaure updaes
  - Annual updae wih neweaures
  - Usedo occur everyhreeove years
- Suppor is provided aferhe release
  - 18 o 36 monhs
  - Dependen onhe Windows version and edion
- Also calledhe Modern Liecycle Policy
  - For connuously suppored producs

### 1.9 - Upgrading Windows (connued)

### 1.10 - macOS Overview

Fileypes

- .dmg
  - Apple Disk Image
  - Mounable as a drive in Finder
- .pkg
  - Insaller Package
  - Usedo disribue sofware
  - Runshrough an insaller scrip
- .app
  - Applicaon bundle
  - Conainshe necessaryleso usehe applicaon
  - “View Package Conens”romhe Finder

App store

- Cenralized updaes and paches
  - For boh OS and apps
- App Sore applicaon
  - The “Updaes” opon
- Auomac updaes
  - Or manual insall
- Pach managemen
  - Insall and view previous updaes

Uninsallaon process

- Movehe .appleohe Trash
- The .app package conains all ohe applicaonles
- Quick and easy
- Some applicaons include a separae uninsall program
- Usually included inhe Applicaonolder

```
Apple ID and corporae resricons
```

- Personal Apple producs use a personal Apple ID
  - Associaed wih personal daa and digial purchases
- Companies use Managed Apple IDs using
  Apple Business Manager - Inegrae wih Acve Direcory - Connec wih an exisng - MDM (Mobile Device Manager) - Assign and move apps and digial conen
  o seleced users
  Backups
- Time Machine - Included wih macOS
- Hourly backups - The pas 24 hours
- Daily backups - The pas monh
- Weekly backups - All previous monhs
- Sars deleng oldes inormaon when disk isull
  An-virus
- macOS does no include an-virus
  - Or an-malware
- Many 3rd-pary opons
  - Fromhe usual companies
- An emerginghrea
  - Sll doesn’ approach Windows
  - I’s all abouhe number o deskops
- Auomae your signaure updaes
  - New updaes every hour / day

### 1.10 - macos Sysem Preerences

Sysem Preerences

- The macOS version ohe Windows Conrol Panel
  - A close comparison
- Accesso mos cusomizaon and personalizaon opons
  - Includes imporan conguraon ulies
- A good placeo sar
  - I’s probably in here

Displays

- Congurehe locaon o mulple displays
  - Side by side,opo boom
- Menu bar can be movedo any display
  - Doesn’ haveo behe primary
- Modiy individual display setngs
  - Resoluon, brighness, colors

Networks

- Congure nework ineraces - Wired, wireless
- IPv4 and IPv6 - Manual and auomac (DHCP)
- Deailed nework setngs - IP, DNS, 802.1X, ec.

Priners & Scanners

- Add and remove priners and scanners
  - Congure individual setngs
- Share priners and scanners
  - Congure righs and permissions
- View saus - Ink andoner levels, scanning saus

```
Privacy
```

- Limi applicaon accesso privae daa
  - Locaon services, phoos, calendars
- Conrol accesso cameras and microphones
  - Enable on a per-app basis
- Unauhorized apps can’ view your privae daa - Malware, oher apps
  Accessibiliy
- Allow appso use sysem inpu
  - Keyboard, mouse, audio, video
- Scripng and auomaon
  - Requires accessor inpu
- Limishird-pary applicaons - Can’ake overhe keyboard
  Time Machine
- Auomaed backups
  - Included wih macOS
- Hourly backups
  - The pas 24 hours
- Daily backups
  - The pas monh
- Weekly backups
  - All previous monhs
- Sars deleng oldes inormaon when disk isull

### 1.10 - macos Feaures

Mission Conrol and Spaces

- Quickly view everyhingha’s running
  - Spread ouhe deskop ino a viewable area
  - Swipe upwards wihhreengers or
  - Conrol-Up arrow
- Spaces
  - Mulple deskops
  - Add Spaces inside o
  - Mission Conrol

Keychain

- Password managemen
  - Passwords, noes, cercaes, ec.
- Inegraed inohe OS - Keychain Access
- Passwords and Secure Noes are encryped
  - Login password ishe key

Spoligh

- Findles, apps, images, ec.
  - Similaro Windows search
- Magniying glass in upper righ
- Or press Command-Space
- Type anyhing in - See wha yound
- Dene search caegories in Sysem Preerences / Spoligh
  - Enable/disable caegories

```
iCloud
```

- Inegraes Appleechnologies
  - macOS, iOS
- Share across sysems
  - Calendars, phoos, documens, conacs, ec.
- Backup iOS devices
  - Never lose daa again
- Soreles in an iCloud drive - Similaro Google Drive, Dropbox - Inegraed inohe operang sysems
  Gestures
- You can do morehan jus poin and click
  - Exendhe capabilies o yourrackpad
- Use one,wo,hreengers
  - Swipe, pinch, click
- Cusomizaon
  - Enable/disable
  - Sysem Preerences / Trackpad

### 1.10 - macos Feaures (connued)

Finder

- The cenral OSle manager
  - Compare wih Windows Explorer
- File managemen
  - Launch, delee, rename, ec.
- Inegraed accesso oher devices
  - File servers
  - Remoe sorage
  - Screen sharing

Remoe Disc

- Use an opcal driverom anoher compuer
  - Has become more imporan overme
  - Designedor copyingles
  - Will no work wih audio CDs or video DVDs
- Se up sharing in Sysem Preerences
  - Sharing opons
  - Appears inhe Finder

Dock

- Fas accesso apps
  - Quickly launch programs
- View running applicaons
  - Do underneahhe icon
- Keepolders inhe dock
  - Easy accessoles
- Moveo dieren sides ohe screen
  - Auo-hide or always display

```
Disk Uliy
```

- Manage disks and images - Resolve issues
- File sysem ulies
  - Veriy and repairle sysems
  - Modiy paron deails
  - Erase disks
- Creae, conver, and resore images - Manage disk images
  FileVaul
- Full Disk Encrypon (FDE)or macOS
  - Decrypon uses a local key or iCloud auhencaon
- Proper auhencaon is required beore macOS can sar
  - Daa is unavailableo ohers
- Available in Sysem Preerences - Securiy & Privacy > FileVaul
  Terminal
- Command line accessohe operang sysem
  - Managehe OS wihou a graphical inerace
- OS access - Run scrips, manageles - Congure OS and applicaon setngs
  Force Quit
- Sop an applicaonrom execung
  - Some applicaons are badly wrien
- Command-Opon-Escape - Lis applicaono qui
- Holdhe opon key when righ-clickinghe
  app icon inhe dock
  - Choose Force Qui

### 1.11 - Linux Commands

Linux commands

- The command line - Terminal, XTerm, or similar
- Commands are similar in boh Linux and macOS
  - Mac OS derivedrom
    BSD (Berkeley Sofware Disribuon) Unix
  - This secon is specico Linux
- Download a Live CD or insall a virual machine
  - Many pre-made Linux disribuons are available
  - I’m using Ubunu in a virual machine
- Usehemancommandor help
  - An online manual
    > man grep

ls

- Lis direcory conens
  - Similarohe dir command in Windows
- Lissles, direcories
  - May suppor color coding;
  - Blue is a direcory, red is an archivele, ec.
- For long oupu, pipehrough more:
  > ls -l | more
  > (useqorCtrl-co exi)

```
pwd
```

- Prin Working Direcory - Displayshe curren working direcory pah - Useul when changing direcories ofen
  mv
- Move ale - Rename ale
  •mv SOURCE DEST > mv frst.txt second.txt
  cp
- Copy ale - Duplicaeles or direcories
  •cp SOURCE DEST > cp frst.txt second.txt
  rm
- Removeles or direcories
  - Deleesheles
- Does no remove direcories by deaul
  - Direcories mus be empyo be removed or
    mus be removed wih-r

### 1.11 - Linux Commands (connued)

chmod

- Change mode o ale sysem objec
  - r=read, w=wrie, x=execue
  - Can also use ocal noaon
  - Seorhele owner (u), he group(g),
    ohers(o), or all(a)

•chmod mode FILE

> chmod 744 script.sh

- chmod 744 frst.txt
  - User; read, wrie execue
  - Group; read only
  - Oher; read only
- chmod a-w frst.txt
  - All users, no wringors.x

•chmod u+x script.sh

- The owner o scrip.sh can execuehele

```
yum
```

- Yellowdog Updaer, Modied (yum) - Insall, delee, updae
- Manages RPM packages - Red Ha Package Manager - RPM Package Manager - A Linux disribuon will commonly use eiher
  yumorapt-get
  ip
- Managehe nework ineraces - Enable, disable, congure addresses, manage roues,
  ARP cache, ec.
  •ip address - View inerace addresses
  •ip route - Viewhe IP roungable
  •sudo ip address add 192.168.121.241/24 dev eth0 - Congurehe IP address o an inerace
  df
- Disk Free - Viewle sysems andree space
  •df - View number o blocks
  •df -h - View human-readable sizes
  grep
- Findex in ale - Searchhrough manyles a ame
  grep PATTERN [FILE] > grep failed auth.log
  fnd
- Find ale by name or exension
  - Searchhrough any or all direcories
- Findles wih a specic exension > fnd. -name “\*.txt”
  dig
- Lookup inormaonrom DNS servers - Canonical names, IP addresses, cachemers, ec.
  •dig(Domain Inormaon Groper) - Deailed domain inormaon - AdddigoWindows: -hp://www.isc.org/downloads/bind/
  cat
- Concaenae - Linkogeher in a series
- Copy ale/lesohe screen
  cat fle1.txt fle2.txt
- Copy ale/leso anoherle
  cat fle1.txt fle2.txt > both.txt
  nano
- Full-screenex edior - Easyo edi
- Included wih many Linux disribuons - Easyo insall
- Selec, mark, copy/cu, and paseex
  - Similareaureso graphical-based ediors

chown

- Changele owner and group
  - Modiyle setngs
- sudo chown [OWNER:GROUP] fle
  > sudo chown professor script.sh

su / sudo

- Some command require elevaed righs
  - There are somehings normal users can’ do

•su

- Become super user or changeo a dieren user
- You connueo beha user unl you exi

•sudo

- Execue a command ashe super user or user ID
- Onlyha command execues ashe super user

apt-get

- Advanced Packaging Tool
  - Handleshe managemen o applicaon packages
  - Applicaons and ulies
- Insall, updae, remove
  > sudo apt-get install wireshark

### 1.11 - Linux Feaures

Backups

- Many opons
  - Command line and graphical
  - May be included wihhe disribuon

•tar

- Tape Archive
- Easyo scrip ino
- a backup schedule

•rsync

- Syncles beween sorage devices
- Insan synchronizaon or scheduled
- Command lineools
  apt-get, yum
- Graphical updae managers
- Sofware updaer
- Pach managemen
- Updaes can be scheduled
- Sofware cener
- The Linux “App Sore”

```
An-Virus / An-malware
```

- Relavelyew viruses and malwareor Linux
  - Sll imporano keep updaed
- Clam Anvirus
  - Open source anvirus engine
- Same bes pracce as any oher OS - Always updae signaure daabase - Always use real-me scanning
  Shell/Terminal
- Command line accessohe operang sysem
  - Commono manage in Linux
- OS mainenance - Run scrips, manageles - Congure OS and applicaon setngs
  Samba
- Add SMB (Server Message Block)o Linux
  - File and prin sharing
  - Acve Direcory inegraon
- Inegrae Linux ino a Windows environmen
  - Linux becomes a Windowsle server

### 2.1 - Physical Securiy

Access conrol vesbule

- All doors normally unlocked
  - Opening one door causes oherso lock
- All doors normally locked
  - Unlocking one door prevens ohers
    rom being unlocked
- One door open / oher locked
  - When one is open,he oher canno be unlocked
- One a ame, conrolled groups
  - Managed conrolhrough an area

Badge reader

- Magnec swipe, RFID, or NFC
  - Many dieren idencaon mehods
- Dieren applicaons
  - Time clocks
  - Securiy guard parols
  - Door access

Video surveillance

- CCTV (Closed circuielevision)
  - Can replace physical guards
- Cameraeaures are imporan
  - Objec deecon can ideny a license plae or
    person’sace
- Ofen many dieren cameras
  - Neworkedogeher and recorded overme
- Moon deecon
  - Radio reecon or passive inrared
  - Useul in areas no ofen in use

```
Alarm sysems
```

- Circui-based
  - Circui is opened or closed
  - Door, window,ence
  - Useul onhe perimeer
- Moon deecon
  - Ideny moon wihou a camera
- Duress - Triggered by a person - The big red buon
  Door locks
- Convenonal - Lock and key
- Deadbol - Physical bol
- Elecronic - Keyless, PIN
- Token-based - RFID badge, magnec swipe card, or keyob
- Biomeric - Hand,ngers or rena
- Mul-acor - Smar card and PIN
  Equipmen locks
- Daa cener hardware is usually managed by dieren
  groups
  - Responsibiliy lies wihhe owner
- Racks can be insalledogeher
  - Side-o-side
- Enclosed cabines wih locks
  - Venlaon onron, back,op, and boom

### 2.1 - Physical Securiy (connued)

### 2.1 - Physical Securiyor Sa

Guards and access lists

- Securiy guard
  - Physical proecon ahe recepon area o aaciliy
  - Validaes idencaon o exisng employees
  - Provides gues access
- ID badge
  - Picure, name, oher deails
  - Mus be worn a allmes
- Access lis
  - Physical lis o names
  - Enorced by securiy guard
- Mainains a visior log

Barricades / bollards

- Preven access
  - There are limisohe prevenon
- Channel peoplehrough a specic access poin
  - And keep ou oherhings
  - Allow people, preven cars andrucks
- Ideny saey concerns
  - And preven injuries
- Can be usedo an exreme
  - Concree barriers / bollards
  - Moas

```
Fences
```

- Build a perimeer
  - Usually very obvious
  - May no be wha you’re lookingor
- Transparen or opaque
  - Seehroughheence (or no)
- Robus
  - Diculo cuheence
- Preven climbing
  - Razor wire
  - Build i high

Keyobs

- Small RFID key
  - Addo physical keychain
- Replaces a physical key
  - Commonly usedor door locks
  - Proximiy operaon and conacless

Smar cards

- Cercae-based auhencaon
  - Somehing you have
  - Usually requires addionalacors
- Inegraed card reader
  - Buil inohe lapop
- Exernal reader
  - USB conneced

Keys

- Some doors may no have an elecronic lock
  - Rarely used
  - Sandalone locks
  - Sae, sorage bin, cabine
- Use a key cabine
  - Formal check in/check ou
  - Well-dened sorage locaon
  - Allowsor auding andmesamps

```
Biometrics
```

- Biomeric auhencaon
  - Usually sores a mahemacal represenaon o your
    biomeric
  - Your acualngerprin isn’ usually saved
- Diculo change
  - You can change your password
  - You can’ change yourngerprin
- Used in very specic siuaons - Nooolproo
  Biometric factors
- Rena scanner
  - Unique capillary srucure inhe back ohe eye
- Fingerprin scanner - Phones, lapops, door access
- Palmprin scanner - Shape ohe hand andngers
  Lighng
- More ligh means more securiy
  - Aackers avoidhe ligh
  - Easiero see when li
  - Non IR cameras can see beer
- Specialized design
  - Consider overall ligh levels
  - Lighng angles may be imporan
  - Facial recognion
  - Avoid shadows and glare

Magnetometers

- Passive scanning - Deec meal objecs
- No useulor non-meal objecves
  - Won’ ideny ceramic or plasc

```
Mobile Device Managemen (MDM)
```

- Manage company-owned and
  user-owned mobile devices
  - BYOD - Bring Your Own Device
- Cenralized managemen ohe mobile devices
  - Specializedunconaliy
- Se policies on apps, daa, camera, ec.
  - Conrolhe remoe device
  - The enre device or a “paron”
- Manage access conrol
  - Force screen locks and PINs on
    hese single user devices

### 2.1 - Physical Securiyor Sa (connued)

### 2.1 - Logical Securiy

Leas privilege

- Righs and permissions should be seohe bare
  minimum
  - You only ge exacly wha’s neededo
    complee your objecve
- All user accouns mus be limied
  - Applicaons should run wih minimal privileges
- Don’ allow userso run wih adminisrave privileges
  - Limishe scope o malicious behavior

Access Conrol Liss (ACLs)

- Usedo allow or denyrac
  - Also usedor NAT, QoS, ec.
  - Commonly used onhe ingress or egress o
    a rouer inerace
- ACLs evaluae on cerain crieria
  - Source IP, Desnaon IP,
  - TCP por numbers, UDP por numbers, ICMP
- Deny or permi
  - Wha happens when an ACL machesherac?
- Also used in operang sysems
  - Allow or deny accessohelesysem

Mul-acor auhencaon

- Morehan oneacor
  - Somehing you are, somehing you have,
    somehing you know, somewhere you are,
    somehing you do
- Can be expensive
  - Separae hardwareokens

Sofwareokens

- Auhencaor applicaon
  - Pseudo-random number generaor
  - Can’ guess i
  - Changes consanly
    - Saves money
      - Free smarphone applicaons
      - No separae deviceo lose
        Shor message service (SMS)
    - Tex messaging
      - Includes morehanexhese days
    - Loginacor can be sen via SMSo a
      predened phone number
      - Provide username and password
      - Phone receives an SMS
      - Inpuhe SMS code inohe loginorm
    - Securiy issues exis
      - Phone number can be reassignedo
        a dieren phone
      - SMS messages can be inerceped
      - SMS spoong
        Voice call
    - A phone call providesheoken
      - The compuer isalkingo you
      - “Your code is 1-6-2-5-1-7.”
    - Similar disadvanageso SMS
      - Phone call can be inerceped ororwarded
      - Phone number can be addedo anoher phone
        Emaillering
    - Unsolicied email
      - Sop i ahe gaeway beore i reacheshe user
      - On-sie or cloud-based
    - Scan and block malicious sofware
      - Execuables, known vulnerabilies
      - Phishing aemps
      - Oher unwaned conen

### 2.1 - Acve Direcory

Acve Direcory

- A daabase o everyhing onhe nework
  - Compuers, user accouns,le shares,
    priners, groups, and more
- Manage auhencaon
  - Users login usingheir AD credenals
- Cenralized access conrol
  - Deermine which users can access resources
- Commonly used byhe help desk
  - Rese passwords
  - Add and remove accouns

Domain

- The name associaed wihhis relaed
  group o users, compuers, and resources
  - Each domain has a name
- Domain conrollers sorehis cenral domain daabase
  - Acve Direcory ishe serviceha
    manageshis direcory
- Ofen reerenced whenroubleshoong
  - Ishis compuer onhe domain?
  - Can you resehe domain password?

Organizaonal unis (OU)

- Keephe (very large) daabase organized
  - Users, Compuers
- Creae your own hierarchy
  - Counries, saes, buildings, deparmens, ec.
- Apply policieso an OU
  - Can be very large:
  - Domain Users
  - Can beor a specic group:
  - Markeng, Norh America,
  - Pegasus galaxy

Login script

- Auomae a series oasks during login
  - Assign a scripo a specic user, group, or OU
- Associaehe scrip wih a Group Policy
  - User Conguraon > Policies >
  - Windows Setngs > Scrips
- Creae dieren login scripsor dieren OUs
  - Cusomize based on your needs

Group Policy/updaes

- Managehe compuers or users wih Group Policies
  - Local and Domain policies
  - Group Policy Managemen Edior
- A cenral console
  - Login scrips
  - Nework conguraons (QoS)
  - Securiy parameers
    Updae a clien wihhegpupdateuliy:
    > gpupdate /force

```
Home folder
```

- Assign a user Homeoldero a neworkolder
  - Manage and backuplesromhe nework
  - Avoid soringles onhe local compuer
- When addedohe user prole,he direcories
  are auomacally creaed
  - And proper permissions are assigned
- Requires someraining - Encourage userso soreles onhe
  nework Homeolder
  Folder redirecon
- Some users and applicaons usehe
  Windows Libraryolders
  - Deskop, Downloads,
  - Music, Documens, ec.
- Redirecheolderso a nework share
  - Group Policy > User Conguraon >
  - Windows setngs > Folder Redirecon
- This is ofen paired wihhe Oine Fileseaure - You’re no always conneced
  Securiy groups
- Creae a group
  - Assign permissionsohe group
- Sehe righs and permissionsohe group
  - Add usersohe group
- Some buil-in groups
  - Users, guess
  - Remoe managemen users
  - Even Log Readers
- Saveme
  - Avoid conusion and misakes

```
Group Policy and login scrips
```

### 2.2 - Wireless Encrypon

Securing a wireless nework

- An organizaon’s wireless nework can conain
  condenal inormaon
  - No everyone is allowed access
- Auhencaehe users beore granng access
  - Who ges accessohe wireless nework?
  - Username, password, mul-acor auhencaon
- Ensureha all communicaon is condenal
  - Encryphe wireless daa
- Veriyhe inegriy o all communicaon
  - The received daa should be idencalo
    he original sen daa
  - A message inegriy check (MIC)

WPA (Wi-Fi Proeced Access)

- 2002: WPA washe replacemenor serious
  crypographic weaknesses in
  WEP (Wired Equivalen Privacy)
  - Don’ use WEP
- Needed a shor-erm bridge beween WEP and
  whaever would behe successor
  - Run on exisng hardware
- WPA: RC4 wih TKIP (Temporal Key Inegriy Proocol)
  - Inializaon Vecor (IV) is larger and an encryped hash
  - Every packe ges a unique 128-bi encrypon key

Wireless encrypon

- All wireless compuers are
  radioransmiers and receivers
  - Anyone can lisen in
- Soluon: Encryphe daa
  - Everyone has an encrypon key
- Only people wihhe righ key canransmi and lisen
  - WPA2 and WPA3

WPA2 and CCMP

- Wi-Fi Proeced Access II (WPA2)
  - WPA2 cercaon began in 2004
- CCMP block cipher mode
  - Couner Mode wih Cipher Block Chaining Message
    Auhencaon Code Proocol, or
    Couner/CBC-MAC Proocol
- CCMP securiy services
  - Daa condenaliy wih AES encrypon
  - Message Inegriy Check (MIC) wih CBC-MAC

```
WPA3 and GCMP
```

- Wi-Fi Proeced Access 3 (WPA3)
  - Inroduced in 2018
- GCMP block cipher mode
  - Galois/Couner Mode Proocol
  - A sronger encryponhan WPA2
- GCMP securiy services - Daa condenaliy wih AES - Message Inegriy Check (MIC) wih - Galois Message Auhencaon Code (GMAC)
  The WPA2 PSK problem
- WPA2 has a PSK brue-orce problem
  - Lisenoheour-way handshake
  - Some mehods can derivehe PSK hash
    wihouhe handshake
  - Capurehe hash
- Wihhe hash, aackers can brueorcehe
  pre-shared key (PSK)
- This has become easier asechnology improves
  - A weak PSK is easiero brueorce
  - GPU processing speeds
  - Cloud-based password cracking
- Once you havehe PSK, you have everyone’s
  wireless key - There’s noorward secrecy
  SAE
- WPA3 changeshe PSK auhencaon process
  - Includes muual auhencaon
  - Creaes a shared session key wihou sending
    ha key acrosshe nework
  - No moreour-way handshakes, no hashes,
    no brueorce aacks
  - Adds perecorward secrecy
- Simulaneous Auhencaon o Equals (SAE) - A Die-Hellman derived key exchange wih
  an auhencaon componen - Everyone uses a dieren session key, even wih
  he same PSK - An IEEE sandard -he dragony handshake
  Wireless securiy modes
- Congurehe auhencaon on your
  wireless access poin / wireless rouer
- Open Sysem
  - No auhencaon password is required
- WPA/2/3-Personal / WPA/2/3-PSK
  - WPA2 or WPA3 wih a pre-shared key
  - Everyone useshe same 256-bi key
- WPA/2/3-Enerprise / WPA/2/3-802.1X
  - Auhencaes users individually wih an
    auhencaon server (i.e., RADIUS)

### 2.2 - Auhencaon Mehods

RADIUS (Remoe Auhencaon Dial-in User Service)

- One ohe more common AAA proocols
  - Suppored on a wide variey o plaorms and devices
  - No jusor dial-in
- Cenralize auhencaonor users
  - Rouers, swiches,rewalls
  - Server auhencaon
  - Remoe VPN access
  - 802.1X nework access
- RADIUS services available on almos any server
  operang sysem

TACACS

- Terminal Access Conroller
  - Access-Conrol Sysem
  - Remoe auhencaon proocol
  - Creaedo conrol accesso dial-up lineso ARPANET
- TACACS+
  - The laes version o TACACS
  - More auhencaon requess and response codes
  - Released as an open sandard in 1993

Kerberos

- Nework auhencaon proocol
  - Auhencae once,rused byhe sysem
  - No needo re-auhencaeo everyhing
  - Muual auhencaon -he clien andhe server
  - Proec agains on-pah or replay aacks
- Sandard sincehe 1980s
  - Developed byhe Massachuses Insue o
    Technology (MIT)
- Microsof sarng using Kerberos in Windows 2000
  - Based on Kerberos 5.0 open sandard
  - Compable wih oher operang sysems and devices

```
SSO wih Kerberos
```

- Auhencae oneme
  - Los o backendckeng
  - Crypographicckes
- No consan username and password inpu!
  - Saveme
- Only works wih Kerberos
  - No everyhing is Kerberos-riendly
- There are many oher SSO mehods - Smar-cards, SAML, ec.
  Which mehodo use?
- Many dieren wayso communicaeo an
  auhencaon server
  - Morehan a simple login process
- Ofen deermined by wha is a hand
  - VPN concenraor canalko a RADIUS server
  - We have a RADIUS server
- TACACS+
  - Probably a Cisco device
- Kerberos - Probably a Microsof nework
  Mul-acor auhencaon
- Morehan oneacor
  - Somehing you are
  - Somehing you have
  - Somehing you know
  - Somewhere you are
  - Somehing you do
- Can be expensive
  - Separae hardwareokens
  - Specialized scanning equipmen
- Can be inexpensive - Free smarphone applicaons

### 2.3 - Malware

Malware

- Malicious sofware - These can be very bad
- Gaher inormaon - Keysrokes
- Parcipae in a group - Conrolled overhe ‘ne
- Show you adversing - Big money
- Viruses and worms
  - Encryp your daa and ruin your day

Malwareypes and mehods

- Trojan Horse
- Rooki
- Viruses
- Spyware
- Ransomware
- Keylogger
- Boo secor virus
- Crypominers

```
How you ge malware
```

- These all workogeher
  - Malicious sofwareakes advanage o a vulnerabiliy
  - Insalls malwareha includes a remoe access backdoor
  - Bo may be insalled laer
- Your compuer mus run a program
  - Email link - Don’ click links
  - Web page pop-up
  - Drive-by download
  - Worm
- Your compuer is vulnerable
  - Operang sysem - Keep your OS updaed!
  - Applicaons - Check wihhe publisher

### 2.3 - Malware (connued)

Trojan horse

- Used byhe Greekso capure Troyromhe Trojans
  - A digial wooden horse
- Sofwareha preendso be somehing else
  - So i can conquer your compuer
  - Doesn’ really care much abou replicang
- Circumvens your exisng securiy
  - An-virus may cach i when i runs
  - The beer Trojans are builo avoid and disable AV
- Once i’s inside i hasree reign
  - And i may openhe gaesor oher programs

Rookis

- Originally a Unixechnique
  - The “roo” in rooki
- Modies core sysemles
  - Par ohe kernel
- Can be invisibleohe operang sysem
  - Won’ see i in Task Manager
- Also invisibleoradional an-virus ulies
  - I you can’ see i, you can’ sop i
  - Finding and removing rookis
- Lookorhe unusual
  - An-malware scans
- Use a remover specicohe rooki
  - Usually buil aferhe rooki is discovered
- Secure boo wih UEFI
  - Securiy inhe BIOS

Virus

- Malwareha can reproduce isel
  - I needs youo execue a program
- Reproduceshroughle sysems orhe nework
  - Jus running a program can spread a virus
- May or may no cause problems
  - Some viruses are invisible, some are annoying
- An-virus is very common
  - Thousands o new viruses every week
  - Is your signaurele updaed?
  - Boo secor virus
- Mos viruses run aferhe OS is loaded
  - Like mos applicaons
- Some boo loaders can be modiedo run malware
  - Runs everyme you sar your compuer
- Modern UEFI BIOS includes Secure Boo
  - Preven unsigned sofwarerom running duringhe
    boo process

```
Spyware
```

- Malwareha spies on you
  - Adversing, idenyhef, aliaeraud
- Canrick you ino insalling
  - Peero peer,ake securiy sofware
- Browser monioring - Capure surng habis
- Keyloggers - Capure every keysroke - Send i backohe moher ship
  Ransomware
- A parcularly nasy malware
  - Your daa is unavailable unl you provide cash
- Malware encryps your daales
  - Picures, documens, music, movies, ec.
  - Your OS remains available
  - They wan you running, bu no working
- You mus payhe bad guyso obainhe decrypon key - Unraceable paymen sysem - An unorunae use o public-key crypography
  Keyloggers
- Your keysrokes conain valuable inormaon
  - Web sie login URLs, passwords, email messages
- Save all o your inpu
  - Send iohe bad guys
- Circumvens encrypon proecons
  - Your keysrokes are inhe clear
- Oher daa logging
  - Clipboard logging, screen logging,
    insan messaging, search engine queries

```
Crypominers
```

- Some crypocurrency mining requires “proo o work”
  - Usually consiss o a dicul mah problem
  - Answerhe problem and earn some currency
- This requires exensive CPU processing
  - One CPU isn’ enough
  - Aackers wano use your CPU
- May appear in dieren ways
  - Visi a websie and CPU ulizaon spikes
  - Malware is insalled and mining is always occurring

### 2.3 - An-Malware Tools

Windows Recovery Environmen

- Very powerul
- Very dangerous
  - Las resor
- Complee conrol
  - Fix your problems beorehe sysem sars
  - Remove malicious sofware
- Requires addional inormaon
  - Use, copy, rename, or replace operang sysemles
    andolders
  - Enable or disable service or device sarup
  - Repairhele sysem boo secor orhe
    maser boo record (MBR)

Sarnghe console

- All Windows versions
  - Hold Shif key while clicking Resar
  - Or boorom insallaon media
- Windows 10
  - Setngs > Updae and Securiy > Recovery >
    Advanced sarup
- Windows 11
  - Sysem > Recovery > Advanced sarup > Resar now
- Afer reboong
  - Troubleshoo > Advanced Opons > Command Promp

An-virus and an-malware

- You need boh
  - Ofen includedogeher
- Real-me opons
  - No jus an on-demand scan
- Modern an-malware recognizes malicious acviy
  - Doesn’ require a specic se o signaures

Sofwarerewalls

- Moniorhe local compuer
  - Aler on unknown or unauhorized
    nework communicaon

### 2.4 - Social Engineering

- Preven malware communicaon
  - Downloads afer inecon
  - Bone communicaon
- Use Windows Firewall - A a minimum
- Runs by deaul - Consanly monioring - Any nework connecon
  An-phishingraining
- No singleechnology can sop social engineering
  - Don’ give away privae inormaon
  - The user ishe bes an-phishing
- Exensiveraining - Avoid becoming a vicm
- Teshe users
  - Send a phishing email
  - Find ou who clicks and gives up inormaon
- Train again
  End user educaon
- One on one - Personalraining
- Posers and signs - High visibiliy
- Message board posng - The real kind
- Login message - These become invisible
- Inrane page - Always available
  OS reinsallaon
- Only one wayo guaranee malware removal
  - Delee everyhing
  - Insallrom scrach
- Resorerom backup (as)
  - As long ashe backup is no also ineced
- Manual insallaon (slowes)
  - Backup daales
  - Insall Windowsrom insallaon media
- Imagehe sysem (ases)
  - User’s daales are on a nework share
  - Recoverrom a prebuil image

Eecve social engineering

- Consanly changing - You never know whahey’ll use nex
- May involve mulple people
  - And mulple organizaons
  - There arees connecng many organizaons
- May be in person or elecronic
  - Phone callsrom aggressive “cusomers”
  - Emaileduneral nocaons o ariend or associae

```
Phishing
```

- Social engineering wih aouch o spoong
  - Ofen delivered by email,ex, ec.
- Don’ beooled - Checkhe URL
- Usuallyhere’s somehing no quie righ
  - Spelling,ons, graphics
- Vishing (Voice phishing) is done over
  he phone or voicemail
  - Caller ID spoong is common
  - Fake securiy checks or bank updaes

### 2.4 - Social Engineering (connued)

Shoulder surng

- You have accesso imporan inormaon
  - Many people wano see
  - Curiosiy, indusrial espionage, compeve advanage
- This is surprisingly easy
  - Airpors / Flighs, hallway-acing moniors,
    or coee shops
- Surrom aar
  - Binoculars / Telescopes (easy inhe big ciy)
  - Webcam monioring

Prevenng shoulder surng

- Conrol your inpu
  - Be aware o your surroundings
- Use privacylers
  - I’s amazing how wellhey work
- Keep your monior ou o sigh
  - Awayrom windows and hallways
- Don’ si inron o me on yourigh
  - I can’ help mysel

Spear phishing

- Targeed phishing wih inside inormaon
  - Makeshe aack more believable
- Spear phishinghe CEO is “whaling”
  - Targeed phishing wihhe possibiliy o a large cach
  - The CFO (Chie Financial Ocer) is commonly speared
- These execuves have direc accessohe corporae
  bank accoun
  - The aackers would loveo havehose credenals

Tailgang and piggybacking

- Tailgang uses an auhorized persono gain
  unauhorized accesso a building
  - The aacker does no have consen
  - Sneakshrough when nobody is looking
- Piggybackingollowshe same process, buhe
  auhorized person is giving consen
  - Holdhe door, my hands areull o donu boxes
  - Somemes you shouldn’ be polie
- Once inside,here’s lileo sop you
  - Mos securiy sops ahe border

```
Wachingorailgang
```

- Policyor visiors - You should be ableo ideny
  anyone
- One scan, one person
  - A maer o policy or mechanically required
- Access Conrol Vesbule / Airlock
  - You don’ have a choice
- Don’ be araido ask - Who are you and why are you here?
  Impersonaon
- Preendo be someone you aren’
  - Halloweenorheraudsers
- Use some ohose deails you goromhe dumpser
  - You canrus me, I’m wih your help desk
- Aackhe vicm as someone higher in rank
  - Oce ohe Vice Presidenor Scamming
- Throwons oechnical deails around
  - Caasrophiceedback dueohe
    depolarizaon ohe dierenal magneomeer
- Be a buddy - How abouhose Cubs?
  Dumpser diving
- Mobile garbage bin
  - Unied Saes brand name “Dumpser”
  - Similaro a rubbish skip
- Imporan inormaonhrown ou wihherash
  - Thanksor bagging your garbageor me!
- Gaher deailsha can be usedor a dieren aack
  - Impersonae names, use phone numbers
- Timing is imporan - Jus afer end o monh, end o quarer - Based on pickup schedule
  Wireless evilwins
- Looks legimae, bu acually malicious
  - The wireless version o phishing
- Congure an access poino look like
  an exisng nework
  - Same (or similar) SSID and securiy
    setngs/capve poral
- Overpowerhe exisng access poins
  - May no requirehe same physical locaon
- WiFi hospos (and users) are easyoool
  - Andhey’re wide open
- You encryp your communicaon, righ?
  - Use HTTPS and a VPN

### 2.4 - Denial o Service

Denial o service

- Force a serviceoail
  - Overloadhe service
- Take advanage o a designailure or vulnerabiliy
  - Keep your sysems pached!
- Cause a sysemo be unavailable
  - Compeve advanage
- Creae a smokescreenor some oher exploi
  - Precursoro a DNS spoong aack
- Doesn’ haveo be complicaed
  - Turn ohe power

A “riendly” DoS

- Uninenonal DoSing
  - I’s no always a ne’er-do-well
- Nework DoS
  - Layer 2 loop wihou STP
- Bandwidh DoS
  - Downloading mul-gigabye Linux disribuons
    over a DSL line
- The waer line breaks
  - Ge a good shop vacuum

```
Disribued Denial o Service (DDoS)
```

- Launch an army o compuerso bring down a service
  - Use allhe bandwidh or resources -rac spike
- This is whyhe bad guys have bones
  - Thousands or millions o compuers a your command
  - A is peak, Zeus bone ineced over 3.6 million PCs
  - Coordinaed aack
- The aackers are zombies - Many people have no ideahey are parcipang
  in a bone
  Migang DDoS aacks
- May be ableoler ourac paerns
  - Sopherac a yourrewall
- Inerne service provider may have an-DDoS sysems
  - These can help “urn down”he DDoS volume
- Third-paryechnologies
  - CloudFlare, ec.

### 2.4 - Zero-Day Aacks

Zero-day aacks

- Many applicaons have vulnerabilies
  - We’ve jus nooundhem ye
- Someone is working hardondhe
  nex big vulnerabiliy
  - The good guys sharehese wih developers
- Aackers keephese ye-o-be-discovered
  holesohemselves
  - They wano usehese vulnerabiliesor personal gain
- Zero-day
  - The vulnerabiliy has no been deeced or published
  - Zero-day explois are increasingly common
- Common Vulnerabilies and Exposures (CVE)
  - hps://cve.mire.org/

```
Zero-day vulnerabilies
```

- December 9, 2021 - Log4j remoe code execuon
  - Java-based logging uliy provided as
    an Apache service
  - Insalled on millions o servers
  - Vulnerabiliy inroduced on Sepember 14h, 2013
- December 14h - Fix is released
  - Exensive paching
- December 17h -
  - Two new issuesxed
  - Everyone is lookingor bugs

### 2.4 - On-Pah Aacks

On-pah nework aack

- How can an aacker wach wihou you knowing?
  - Formerly known as man-in-he-middle
- Redirecs yourrac
  - Then passes i onohe desnaon
  - You never know yourrac was redireced
- ARP poisoning
  - On-pah aack onhe local IP subne
  - ARP has no securiy
  - ARP poisoning (spoong)

```
On-pah browser aack
```

- Wha ihe middleman was onhe same
  compuer ashe vicm?
  - Malware/Trojan does all ohe proxy work
  - Formerly known as man-in-he-browser
- Huge advanagesorhe aackers
  - Relavely easyo proxy encrypedrac
  - Everyhing looks normalohe vicm
- The malware in your browser waisor you
  o logino your bank
  - And cleans you ou

Plainex / unencryped passwords

- Some applicaons sore passwords “inhe clear”
  - No encrypon. You can readhe sored password.
  - This is rare,hankully
- Do no sore passwords as plainex
  - Anyone wih accessohe passwordle or
    daabase has every credenal
- Whao do i your applicaon saves passwords
  as plainex:
  - Ge a beer applicaon

Hashing a password

- Hashes represen daa as axed-lengh sring oex
  - A message diges, or “ngerprin”
- Will no have a collision (hopeully)
  - Dieren inpus will no havehe same hash
- One-wayrip
  - Impossibleo recoverhe original message
    romhe diges
  - A common wayo sore passwords

The passwordle

- Dieren across operang sysems and applicaons
  - Dieren hash algorihms

```
Brute force
```

- Try every possible password combinaon
  unlhe hash is mached
- This mighake someme
  - A srong hashing algorihm slowshings down
- Brueorce aacks - Online
  - Keepryinghe login process
  - Very slow
  - Mos accouns will lockou afer a number o
    ailed aemps
- Brueorcehe hash - Oine - Obainhe lis o users and hashes - Calculae a password hash, compare io a sored
  hash - Large compuaonal resource requiremen
  Diconary aacks
- Use a diconaryond common words
  - Passwords are creaed by humans
- Many common wordliss available onhe ‘ne
  - Some are cusomized by language or line o work
- The password crackers can subsue leers
  - p&ssw0rd
- Thisakesme
  - Disribued cracking and GPU cracking is common
- Discover passwordsor common words
  - This won’ discover random characer passwords

### 2.4 - Password Aacks

```
192.168.1.1
11:22:33:44:55:66
```

```
192.168.1.9
c8:bc:c8:a7:38:d5
```

```
ARP Response: I am 192.168.1.1
My MAC address is 11:22:33:44:55:66
```

```
ARPCache
192.168.1.1 = 11:22:33:44:55:66
```

```
A legimae responseo
an ARP reques is received
romhe deaul gaeway.
```

```
The ARP response is
cached onhe local device.
```

```
192.168.1.1
11:22:33:44:55:66
```

```
192.168.1.9
c8:bc:c8:a7:38:d5
ARPCache
192.168.1.1 = 11:22:33:44:55:66
192.168.1.1 = aa:bb:cc:dd:ee:
192.168.1.4
aa:bb:cc:dd:ee:
```

```
ARP Response: I am 192.168.1.1
My MAC address is aa:bb:cc:dd:ee:
```

```

```

```
An aacker sends an ARP
responseha spooshe IP
address ohe rouer and
includeshe aacker’s MAC
address.
```

```
The malicious ARP inormaon
replaceshe cached record,
complenghe ARP poisoning.
```

1

2

### 2.4 - On-Pah Aacks (connued)

ARP poisoning (spoong)

### 2.4 - Insider Threas

Insiderhreas

- Morehan jus passwords on scky noes
  - Some insiders are ouor no good
- Sophiscaon may no be advanced, buhe insider
  has insuonal knowledge
  - Aacks can be direced a vulnerable sysems
  - The insider knows whao hi
- Exensive resources
  - Eang awayromhe inside

```
Recruing insiders
```

- We’re getng beer wih proecnghe nework perimeer
  - I’s an ongoing race
- Ransomware acors areargeng insiders
  - Oering Bicoin in exchangeor access
  - One ransomware inecon can earn millions
    or an aacker
- Keep aware
  - Mainain good securiyundamenals
  - Always have backups

### 2.4 - SQL Injecon

Code injecon

- Code injecon
  - Adding your own inormaon ino a daa sream
- Enabled because o bad programming
  - The applicaon should properly handle inpu
    and oupu
- So many dieren daaypes
  - HTML, SQL, XML, LDAP, ec.

```
SQL injecon
```

- SQL - Srucured Query Language
  - The mos common relaonal daabase managemen
    sysem language
- SQL Injecon
  - Modiy SQL requess (Your applicaon shouldn’ allowhis)
- I you can manipulaehe daabase,
  hen you conrolhe applicaon
  - A signican vulnerabiliy

### 2.4 - Cross-sie Scripng

Cross-sie scripng

- XSS
  - Cascading Syle Shees (CSS) are
    somehing else enrely
- Originally called cross-sie because o
  browser securiyaws
  - Inormaonrom one sie could be
    shared wih anoher
- One ohe mos common web applicaon
  developmen errors
  - Takes advanage oherus a user hasor a sie
  - Complex and varied
- Malwareha uses JavaScrip
  - Do you allow scrips? Meoo.

Non-persisen (reeced) XSS aack

- Web sie allows scripso run in user inpu
  - Search box is a common source
- Aacker emails a linkhaakes advanage o
  his vulnerabiliy
  - Runs a scripha sends credenals /
    session IDs / cookiesohe aacker
- Scrip embedded in URL execues in
  he vicm’s browser
  - As i i cameromhe server
- Aacker uses credenals/session IDs/ cookieso
  seal vicm’s inormaon wihouheir knowledge
  - Very sneaky

```
Persisen (sored) XSS aack
```

- Aacker poss a messageo a social nework
  - Includeshe malicious payload
- I’s now “persisen”- Everyone geshe payload
- No specicarge - All viewersohe page
- For social neworking,his can spread quickly - Everyone who viewshe message can have i
  posedoheir page - Where someone else can view i and propagae iurher...
  Hacking a Subaru
- June 2017, Aaron Guzman - Securiy researcher
- When auhencang wih Subaru, users ge aoken
  - Thisoken never expires (bad!)
- A validoken allowed any service reques
  - Even adding your email addresso someone else’s accoun
  - Now you haveull accesso someone else’s car
- Webron-end included an XSS vulnerabiliy - A user clicks a malicious link, and you haveheiroken
  Proecng agains XSS
- Be careul when clicking unrused links
  - Never blindly click in your email inbox. Never.
- Consider disabling JavaScrip
  - Or conrol wih an exension
  - This oers limied proecon
- Keep your browser and applicaons updaed
  - Avoidhe nasy browser vulnerabilies
- Validae inpu
  - Don’ allow userso addheir own scripso an inpueld

### 2.4 - Securiy Vulnerabilies

Non-complian sysems

- A consan challenge
  - There are always changes and updaes
- Sandard operang environmens (SOE)
  - A se oesed and approved
    hardware/sofware sysems
  - Ofen a sandard operang sysem image
- Operang sysem and applicaon updaes
  - Mus have pacheso be in compliance
  - OS updaes, an-virus signaures
  - Can be checked and veried beore access is given

Proecng agains non-complian sysems

- Operang sysem conrol
  - Apply policiesha will preven
    non-complian sofware
- Moniorhe neworkor applicaonrac
  - Nex-generaonrewalls wih applicaon visibiliy
- Perorm periodic scans
  - Login sysems can scanor non-compliance
  - Require correcon beorehe sysem is given access

Unpached sysems

- Microsof Pach Tuesday
  - Second Tuesday o each monh (10:00 AM PST)
- Suddenly, sysems are vulnerableo securiyaws
  - Pachhe operang sysem and applicaons
- An organizaon migh havehousands o sysems
  - Some ohose are major services
- Oneorgoen sysem may behe weakes link
  - This happens quie a bi
- Pach managemen is a crical pracce
  - Tes, priorize, and deploy

```
Unproeced sysems
```

- Securiy issues are ofen roadblocks
  - Applicaons may no work properly wihou
    addional conguraons
- Someroubleshoongasks can be insecure
  - Disable anvirus andry again
  - Disableherewall andry again
- Permanenly disabling securiy isn’he answer - You don’x a bad door lock by removinghe door - Become an exper in applicaonroubleshoong
  Produc suppor lieme
- End o lie (EOL) operang sysems
  - Manuacurer sops selling an OS
  - May connue suppornghe OS
  - Imporanor securiy paches and updaes
- End o service lie (EOSL)
  - Manuacurer sops selling an OS
  - Suppor is no longer available
  - No ongoing securiy paches or updaes
  - May have a premium-cos suppor opon
- Technology EOSL is a signican concern - Securiy paches are par o normal operaon
  BYOD
- Bring Your Own Device / Bring Your Own Technology
- Employee ownshe device
  - Needo meehe company’s requiremens
- Diculo secure
  - I’s boh a home device and a work device
  - How is daa proeced?
  - Wha happensohe daa when a device is
    sold orraded in?
  - An ineced device could disclose proprieary
    company inormaon

### 2.5 - Deender Anvirus

Microsof Deender Anvirus

- Buil-in anvirusor Windows 10 and 11
  - No addionalhird-pary producs required
- Included inhe Windows Securiy app
  - Virus &hrea proecon
- May no specically display “Deender Anvirus”
  - The name has changed overme
  - Windows Deender
  - Microsof Deender Anvirus

Acvae or deacvae

- Don’ disable your securiy proecon
  - This isoremporaryroubleshoong
  - This will increase risk
  - Make sure you know wha you’re doing
    - Deender Anvirus operaes in real-me
      - Enable or disablehiseaure
    - Windows Securiy app
      - Virus &hrea proecon setngs >
      - Manage setngs > Real-me proecon
        Updaed denions
    - Anvirus is only as good ashe laes signaures
      - I’s imporano say upo dae
    - Virus &hrea proecon updaes
      - Checkor updaes
    - Clickhe “Checkor updaes” buon
      - Auomac updaes are normally congured

### 2.5 - Windows Firewall

Enabling and disabling Windows Firewall

- Yourrewall should always be enabled
  - Somemes you needoroubleshoo
- Temporarily disableromhe Conrol Panel or
  rom Windows Securiy
  - Turn Windows Firewall on or o
  - Requires elevaed permissions
- Dieren setngsor each neworkype
  - Public / Privae

Windows Firewall conguraon

- Block all incoming connecons
  - Ignores your excepon lis
  - Useul when you need securiy
- Modiy nocaon - App blocking

```
Creang arewall excepon
```

- Allow an app oreaurehrough Windows Firewall
  - The more secure excepon
- Por number
  - Block or allow
- Predened excepons
  - Lis o common excepons
  - Cusom rule
  - Everyrewall opon

Windows auhencaon

- Loginohe Windows deskop
  - And access nework resources
- Local accouns
  - Only associaed wih a specic Windows device
- Microsof accouns
  - Sync setngs beween devices, inegrae applicaons
    (Skype, Oce) wih OneDrive, and more
- Windows Domain accouns
  - Cenrally managedrom Acve Direcory

Users and groups

- Users
  - Adminisraor
  - The Windows super-user
  - Gues (Limied access)
  - Sandard Users
- Groups
  - Power Users
  - No much more conrolhan a regular user
  - Permissions removed in Windows Visa and laer

Login opons

- Username / password
  - Common auhencaon credenals
- Personal Idencaon Number (PIN)
  - A local access code
- Biomerics
  - Fingerprin,acial recognion
- Single sign-on (SSO)
  - Windows Domain credenals
  - Sign in oneme

```
NTFS vs. Share permissions
```

- NTFS permissions applyrom local and
  nework connecons
- Share permissions only applyo connecons
  overhe nework
  - A “nework share”
- The mos resricve setng wins
  - Deny beas allow
- NTFS permissions are inheriedrom
  he paren objec - Unless you moveo a dierenolder
  onhe same volume
  Explici and inheried permissions
- Explici permissions
  - Se deaul permissionsor a share
- Inheried permissions
  - Propagaedromhe paren objeco
    he child objec
  - Se a permission once, i applieso
    everyhing underneah
- Explici permissionsake precedence over
  inheried permissions - Even inheried deny permissions
  Run as adminisraor
- Adminisraors have special righs and permissions
  - Eding sysemles, insalling services
- Use righs and permissions ohe adminisraor
  - You don’ gehese by deaul, even i you’re in
    he Adminisraors group
- Righ-clickhe applicaon
  - Run as adminisraor
  - Or search and click “Run as adminisraor”

### 2.5 - Windows Securiy Setngs

### 2.5 - Windows Securiy Setngs (connued)

UAC (User Accoun Conrol)

- Limi sofware access - Proec your compuer
- Sandard users
  - Usehe nework or change your password
- Adminisraors
  - Insall applicaons or congure Remoe Deskop
- Secure Deskop - Limis auomaed access

BitLocker

- Encryp an enre volume
  - Proecs all o your daa, includinghe OS
  - Supporor all Windows edions excep Home
- Lose your lapop? - Doesn’ maer wihouhe password
- Daa is always proeced
  - Even ihe physical drive is movedo anoher compuer
- BiLocker To Go - Encryp removable USBash drives

#### EFS

- Encrypng File Sysem
  - Encryp ahele sysem level
  - Requireshe NTFSle sysem
- OS suppor
  - Supporor all Windows edions excep Home
- Uses password and usernameo encryphe key
  - Adminisrave reses will cause EFSleso be
    inaccessible

### 2.6 - Securiy Bes Pracces

Daa encrypon

- Full-disk encrypon
  - Encryp daa-a-res
- File sysem encrypon
  - Individualles andolders
- Removable media
  - Proechose USBash drives
- Key backups are crical
  - You always needo have a copy
  - This may be inegraed ino Acve Direcory
  - You’ll wano keephe key handy

Password complexiy and lengh

- Make your password srong
  - Resis guessing or brue-orce aack
- Increase password enropy
  - No single words, no obvious passwords
  - Mix upper and lower case and use special characers
- Sronger passwords are a leas 8 characers
  - Consider a phrase or se o words

Password expiraon and recovery

- All passwords should expire
  - Change every 30 days, 60 days, 90 days
  - Sysem remembers password hisory,
    requires unique passwords
- Crical sysems migh change morerequenly
  - Every 15 days or every week
- The recovery process should no berivial!
  - Some organizaons have a veryormal process

Password bes pracces

- Changing deaul usernames/passwords
  - All devices have deauls
  - There are many web siesha documenhese
    - BIOS/UEFI passwords
      - Supervisor/Adminisraor password:
        Preven BIOS changes
      - User password: Preven boong
    - Requiring passwords
      - Always require passwords
      - No blank passwords
      - No auomaed logins
        End-user bes pracces
    - Require a screensaver password
      - Inegrae wih login credenals
      - Can be adminisravely enorced
    - Does no require user inervenon
      - Auomacally locks afer non-use ormeou
    - Secure crical hardware
      - Lapops can easily walk away -
      - Lockhem down
        Securing PII and passwords
    - Personally idenable inormaon
      - Name, address, social securiy number, ec.
    - Conrol your inpu
      - Be aware o your surroundings
    - Use privacylers
      - I’s amazing how wellhey work
    - Keep your monior ou o sigh
      - Awayrom windows and hallways
    - Don’ si inron o me on yourigh
      - I can’ help mysel

### 2.6 - Securiy Bes Pracces (connued)

Account management

- User permissions
  - Everyone isn’ an Adminisraor
  - Assign proper righs and permissions
  - This may be an involved audi
- Assign righs based on groups
  - More diculo manage per-user righs
  - Becomes more useul as you grow
- Loginme resricons
  - Only login during working hours
  - Resric afer-hours acvies

Disabling unnecessary accouns

- All operang sysems include oher accouns
  - Gues, roo, mail, ec.
- No all accouns are necessary
  - Disable/removehe unnecessary
  - Disablehe gues accoun
- Disable ineracve logins
  - No all accouns needo login
- Changehe deaul usernames
  - User:admin Password:admin
  - Helps wih brue-orce aacks

```
Lockinghe deskop
```

- Failed password aemps
  - Should lockhe accoun and/or reboo afer
    a cerainhreshold
  - Prevens online brueorce aacks
- Auomacally lockhe sysem - Afer a cerain amoun o inacviy - Or when you walk away
  AuoRun and AuoPlay
- Disable AuoRun on older OSes
  - auorun.in in Visa
  - No Auorun in Windows 7, 8/8.1, 10, or 11
  - Disabledhroughhe regisry
- Disable AuoPlay
  - Congure in Setngs >
    Blueooh & devices >
    AuoPlay
- Gehe laes securiy paches
  - Updaeso auorun.in and AuoPlay

### 2.7 - Mobile Device Securiy

Screen locks

- Resric accessohe device
  - You’re goingo leave i somewhere
- Facial recognion
  - Unlock wih yourace
- PIN
  - Choose a personal idencaon number
- Fingerprin
  - Buil-inngerprin reader
- Swipe
  - Choose a paern
- Failed aemps
  - iOS: Erase everyhing afer 10ailed aemps
  - Android: Lockhe device and require a
    Google login or wipehe device

Locaor applicaons and remoe wipe

- Buil-in GPS
  - And locaon “helpers”
- Find your phone
  - On a map.
- Conrolrom aar
  - Make a sound
  - Display a message
- Wipe everyhing
  - A leas your daa is sae

```
Paching/OS updaes
```

- All devices need updaes - Even mobile devices
- Device paches - Securiy updaes
- Operang sysem updaes
  - Neweaures, bugxes
- Don’ ge behind! - Avoid securiy problems
  Full device encrypon
- Encryp all device daa
  - Phone keepshe key
- iOS 8 and laer
  - Personal daa is encryped wih your passcode
- Android - Version 5.0 and laer is probably already encryped
  Remoe backup
- Diculo backup somehingha’s always moving
  - Backupohe cloud
- Consan backup
  - No manual process
- Backup wihou wires
  - Usehe exisng nework
- Resore wih one click
  - Resores everyhing
  - Auhencae and wai

### 2.7 - Mobile Device Securiy (connued)

An-virus and an-malware

- Apple iOS
  - Closed environmen,ghly regulaed
  - Malware hasond a vulnerabiliy
- Android
  - More open, apps can be insalledrom anywhere
  - Easieror malwareond is way in
- Apps run in a “sandbox”
  - You conrol wha daa an app can view
- Third-pary virus and malware proecon
  - Availableromhe usual providers

Firewalls

- Mobile phones don’ include arewall
  - Mos acviy iniaes oubound, no inbound
- Some mobilerewall apps are available
  - Mosor Android
  - None seemo be widely used
- Enerprise environmens can conrol mobile apps
  - Firewalls can allow or disallow access

```
Policies and procedures
```

- Manage company-owned and user-owned
  mobile devices
  - BYOD - Bring Your Own Device
- Cenralized managemen ohe mobile devices
  - Specializedunconaliy /
    Mobile Device Manager (MDM)
- Se policies on apps, daa, camera, ec.
  - Conrolhe remoe device
  - The enre device or a “paron”
- Manage access conrol - Force screen locks and PINs onhese single user devices
  IoT (Inerne o Things)
- Sensors - Heang and cooling, lighng
- Smar devices - Home auomaon, video doorbells
- Wearableechnology - Waches, healh moniors
- Faciliy auomaon - Temperaure, air qualiy, lighng
- Weak deauls
  - IoT manuacurers are no securiy proessionals
  - Consider isolang IoT devices onheir own nework

### 2.8 - Daa Desrucon

Physical desrucon

- Shredder
  - Heavy machinery - complee desrucon
- Drill / Hammer
  - Quick and easy - Plaers, allhe wayhrough
- Elecromagnec (degaussing)
  - Removehe magneceld
  - Desroyshe drive daa andhe elecronics
- Incineraon - Fire ho.

Cercae o desrucon

- Desrucon is ofen done by a 3rd pary
  - How many drills and degaussers do you have?
- Need conrmaonha your daa is desroyed
  - Service should include a cercae
- A paperrail o broken daa
  - You know exacly wha happened

Diskormatng

- Low-levelormatng
  - Provided aheacory
  - No recommendedorhe user
- Sandardormatng / Quickorma
  - Ses uphele sysem, insalls a boo secor
  - Clearshe maserleable bu nohe daa
  - Can be recovered wihhe righ sofware
- Sandardormatng / Regularorma
  - Overwries every secor wih zeros
  - Deaulor Windows Visa and laer
  - Can’ recoverhe daa

```
Erasing data
```

- File level overwring
  - Sdelee – Windows Sysinernals
  - Remainingles are sll available
- Whole drive wipe secure daa removal
  - DBAN - Darik’s Boo and Nuke
  - Removes all daa onhe drive
  - Usehe drive again
- Physical drive desrucon - One-o or indusrial removal and desroy - Drive is no longer usable
  Hard drive securiy
- 2019 sudyrom Blancco and Onrack
  - 159 sorage drivesrom eBay
  - 42% ohe used drives conain sensive daa
- Dieren daaypes
  - 66 drives had daa, 25 drives wih PII
- Varied daa sources
  - Travel company email archive
  - Freigh company shipping deails
  - Universiy suden papers
  - Audio, video, and oher personalles

### 2.9 - Securing a SOHO Nework

Change deaul passwords

- All access poins have deaul usernames and passwords
  - Change yours!
- The righ credenals provideull conrol
  - Adminisraor access
- Very easyondhe deaulsor your
  access poin or rouer
  - hps://www.rouerpasswords.com

Firmware updates

- Small oce / home oce appliances
  - Appliance are usually a closed archiecure
  - Updaes are provided byhe manuacurer
- Updaes may address dieren requiremens
  - Bugxes
  - Neweaures
  - Securiy paches
- Insallhe laes sofware
  - Updae and upgradehermware
  - Firewalls, rouers, swiches, ec.

IP addresslering

- Conenlering, IP address ranges
  - Or a combinaon
- Allow lis
  - Nohing passhroughherewall unless i’s approved
  - Very resricve
- Deny lis
  - Nohing onhe “bad lis” is allowed
  - Specic URLs
  - Domains
  - IP addresses

Conenlering

- Conrolrac based on daa wihinhe conen
  - URLlering, websie caegorylering
- Corporae conrol o oubound and inbound daa
  - Sensive maerials
- Conrol o inappropriae conen
  - No saeor work
  - Parenal conrols
- Proecon agains evil
  - An-virus, an-malware

Physical placemen

- Ofen a single device
  - Rouer, swich, access poin,rewall, ec.
- Locaon may be resricedo a secure room
  - Preven accesso servers and nework devices
  - For wireless, locaon becomes more imporan
  - Above ceilingles or anoher high poin
  - This may cause problemsor power cycling
- Plan beorehe insallaon
  - May require addional seupme

```
IP addressing
```

- DHCP (auomac) IP addressing vs.
  manual IP addressing
- IP addresses are easyo see in
  an unencryped nework
- Ihe encrypon is broken,he IP addresses
  will be obvious
- Conguring a sac IP address is no
  a securiyechnique - Securiyhrough obscuriy
  DHCP reservaons
- Address reservaon
  - Adminisravely congured
- Table o MAC addresses
  - Each MAC address has a maching IP address
- Oher names - Sac DHCP Assignmen - Sac DHCP - Sac Assignmen - IP Reservaon
  Sac WAN IP
- Wide area nework / Inerne link
  - Exernal IP address
- Many ISPs dynamically allocae WAN addresses
  - The deaulor mos ISPs
- I’s easiero manage ihe IP address is sac
  - The ITeam always knowshe IP address
  - A SOHO migh provide a service
- This may be an addional cos - Conache ISPor opons
  UPnP (Universal Plug and Play)
- Allows nework deviceso auomacally congure
  andnd oher nework devices
  - Zero-conguraon
- Applicaons onhe inernal nework can open
  inbound pors using UPnP
  - No approval needed
  - Usedor many peer-o-peer (P2P) applicaons
- Bes pracce would beo disable UPnP - Only enable ihe applicaon requires i - And maybe no evenhen
  Screened subne
- Previously known ashe demiliarized zone (DMZ)
  - An addional layer o securiy beween
    he Inerne and you
  - Public accesso public resources

### 2.9 - Securing a SOHO Nework (connued)

SSID managemen

- Service Se Idener
  - Name ohe wireless nework
  - LINKSYS, DEFAULT, NETGEAR
- Changehe SSIDo somehing no-so obvious
- Disable SSID broadcasng?
  - SSID is easily deerminedhrough wireless
    nework analysis
  - Securiyhrough obscuriy

Wireless channels and encrypon

- Open Sysem
  - No auhencaon password is required
- WPA/2/3-Personal / WPA/2/3-PSK
  - WPA2 or WPA3 wih a pre-shared key
  - Everyone useshe same 256-bi key
- WPA/2/3-Enerprise / WPA/2/3-802.1X
  - Auhencaes users individually wih an
    auhencaon server (i.e., RADIUS, LDAP, ec.)
- Use an openrequency
  - Some access poins will auomacallynd
    goodrequencies

Disable gues neworks

- Limi accesso ousiders
  - Gues neworks are ofen enabled by deaul
- Some gues neworks can be usedor oher
  connecons
  - Inerne o Things
  - Lab neworks
- Don’ enable wihou securiy
  - WPA2 or WPA3

```
Disabling pors
```

- Enabled physical pors
  - Conerence rooms
  - Break rooms
- Adminisravely disable unused pors
  - Moreo mainain, bu more secure
- Nework Access Conrol (NAC) - 802.1X conrols - You can’ communicae unless you are auhencaed
  Port forwarding
- 24x7 accesso a service hosed inernally
  - Web server, gaming server, securiy sysem, ec.
- Exernal IP/por number mapso an inernal IP/por
  - Does no haveo behe same por number
- Also called Desnaon NAT or Sac NAT
  - Desnaon address isranslaedrom a public IPo
    a privae IP
  - Does no expire ormeou

### 2.10 - Browser Securiy

Browser download and insallaon

- Always userused sources
  - Aackers wan youo insallhe malwareorhem
  - Noancy exploi required
- Avoid unrusedhird-pary sies
  - Don’ click links in emails
  - Don’ollow linksrom oher websies
  - Always visi a browser sie direcly
- Use hasheso veriyhe download
  - Conrmhe downloadedle macheshe
    version onhe server

Hash vericaon

- Insall a hash checking applicaon
  - Availableor command line and GUI
  - Opons available inhe Microsof Sore
- Hash values may be available onhe download sie
  - Usually includes a digial signaureor vericaon
- Veriyhe downloadedle
  - Comparehe downloadedle hash wihhe posed hash value

```
Extensions and plug-ins
```

- Trused sources
  - Ocial browser exension library
  - Chrome Web Sore
  - Microsof Sore
  - Known-good websies
- Unrused sources
  - Random or unamiliar websies
  - Insalled by malware
- This is a signican aack vecor - Almos everyhing we do is in our browser
  Malicious browser exensions
- March 2021
  - Morehan 24 malicious
  - Google Chrome exensions idened
  - Includes 40 malicious domains
  - No idened by securiyechnologies

```
Internet
```

```
Firewall
```

```
Internal Network
Switch
```

```
Screened Subnet
Switch
```

```
Screened Subnet
```

```
Internal Network
```

### 2.10 - Browser Securiy (connued)

- Malicious acviy idened
  - Credenalhef
  - Screenshos and keylogging
  - Daa exlraon
- Don’rus any sofware - Always have backups

Password managers

- Password vauls
  - All passwords in one locaon
  - A daabase o credenals
- Secure sorage
  - All credenals are encryped
  - Cloud-based synchronizaon opons
- Creae unique passwords
  - Passwords are nohe same across sies
- Personal and enerprise opons
  - Corporae access

Secure connecons

- Securiy alers and invalid cercaes
  - Somehing isn’ quie righ
  - Should raise your ineres
- Look ahe cercae deails
  - May be expired orhe wrong domain name
  - The cercae may no be properly signed
    (unrused cercae auhoriy)
  - Correcme and dae is imporan

Enable pop-up blockers

- Pop-up blocker
  - Preven unwaned nocaon windows
- Enable or disable
  - Should usually be enabled
  - Disableemporarily whenroubleshoong
- Block and allow
  - Conrol pop-up blocking on cerain websies

```
Clearing privae daa
```

- Clear browsing daa
  - Hisory
  - Saved passwords
  - Lis o downloadedles
- Clear cache - Pars o a websie are sored locally - Remove all local daa
  Privae browsing mode
- Don’ sore inormaonrom a browsing session
  - Goodor privacy
  - Useul whenesng orroubleshoong
- Removeshe inormaon whenhe browser is closed - No hisoryracking - No downloadle lis - Cached inormaon is deleed
  Browser daa synchronizaon
- Share browsing daa across mulple sysems
  - Sign inohe browser
- Use wih oher compuers,ables, and mobile devices - Browsing hisory - Favories - Insalled exensions - Oher setngs
  Ad blockers
- Some browsers can block adversing
  - This isn’ always an opon
- Many sies willrack visis
  - And recognize a reurn visi
- Diculo always recognize an adversemen
  - You can conrolhe securiy level

### 3.1 - Troubleshoong Windows

Bluescreens andrequen shudowns

- Sarup and shudown BSOD
  - Bad hardware, bad drivers, bad applicaon
- Use Las Known Good, Sysem Resore,
  or Rollback Driver
  - Try Sae mode
- Resea or removehe hardware
  - I possible
- Run hardware diagnoscs
  - Provided byhe manuacurer
  - BIOS may have hardware diagnoscs

Sluggish perormance

- Task Manager
  - Checkor high CPU ulizaon and I/O
- Windows Updae - Laes paches and drivers
  - Disk space - Checkor available space and derag
  - Lapops may be using power-saving mode
    - Throleshe CPU
  - An-virus and an-malware - Scanor aackers
    Boot errors
  - Can’nd operang sysem
    - “Operang sysem noound”, “Missing operang sysem”
  - Boo loader replaced or changed
    - Mulple operang sysems insalled
  - Check boo drives- Remove any media
  - Sarup Repair
  - Modiyhe Windows Boo Conguraon Daabase (BCD)
    - Formerly boo.ini
    - Recovery Console:bootrec /rebuildbcd

### 3.1 - Troubleshoong Windows (connued)

Sarup Repair

- Missing NTLDR
  - The main Windows boo loader is missing
  - Run Sarup Repair or replace manually
    and reboo
  - Disconnec removable media
- Missing operang sysem
  - Boo Conguraon Daa may be incorrec
  - Run Sarup Repair or manually congure
    BCD sore
- Booso Sae Mode
  - Windows is no sarng normally
  - Run Sarup Repair

Sarnghe sysem

- Device no sarng
  - Check Device Manager and Even Viewer
  - Ofen a bad driver
  - Remove or replace driver
- “One or more servicesailedo sar”
  - Bad/incorrec driver, bad hardware
  - Try sarng manually
  - Check accoun permissions
  - Conrm service dependencies
  - Windows service; check sysemles
  - Applicaon service; reinsall applicaon

Applicaons crashing

- Applicaon sops working
  - May provide an error message
  - May jus disappear
- Checkhe Even Log
  - Ofen includes useul reconnaissance
- Checkhe Reliabiliy Monior
  - A hisory o applicaon problems
  - Checksor resoluons
- Reinsallhe applicaon
  - Conac applicaon suppor

Low memory warnings

- Your compuer is low on memory
  - Applicaons need RAMo run
  - More applicaons need more RAM
- Close large-memory processes
  - Check Task Manager
- Increase virual memory
  - More roomor swapping applicaons
  - Sysem > Abou > Advanced sysem setngs >
    Perormance > Setngs > Virual memory

```
USB conroller resource warnings
```

- USB devices conain buers called “endpoins”
  - Dieren USB conrollers suppor a dieren
    number o endpoins
  - (96 endpoins, 254 endpoins, ec.)
- Dieren devices require a dieren number o endpoins
  - Exceedhe number o endpoins and you
    run ou o resources
  - I’s diculo deerminehe number o
    endpoins used by a device
- The conroller does no have enough resources
  orhis device.
  - The endpoins arehese resources
- Movehe deviceo a dieren USB inerace
  - USB 2.0 ineraces migh suppor a larger
    number o endpoins
- Machhe USB ineraceohe device capabilies - USB 2.X devices or USB 3.X devices - More endpoinsor all devices
  Sysem insabiliy
- General sysemailures
  - Sofware errors, sysem hangs, applicaonailures
- Timeor aull diagnosc- This could be anyhing
- Hardware diagnosc
  - Mos sysems include manuacurer diagnoscs
  - Also run sorage and memory checks
- Checkhe operang sysem - Run SFC (Sysem File Checker) - Perorm an an-malware scan
  Slow prole load
- Roaming user prole
  - Your deskopollows youo any compuer
  - Changes are synchronized
- Nework laencyohe domain conroller
  - Slows login scripransers
  - Slowo apply compuer and user policies
  - May require many hundreds (orhousands) o LDAP
    queries
- Clien worksaon picks a remoe domain conroller
  insead o local DC - Problems wih local inrasrucure
  Time drif
- A compuer’s inernal clock will drif overme
  - Compuers aren’ greamekeepers
- The soluon isoxhe sympom
  - Fixinghe problem would require changinghe design
    o every compuer
- Enable auomacme setng
  - Setngs > Time & language > Dae &me
  - Time zone may needo be congured manually i
    privacy setngs are enabled

### 3.1 - Troubleshoong Soluons

Reboo

- Have youriedurning i o and on again?
  - There’s a reason i works
- Bug in your rouer sofware - Reboohe rouer
- Applicaon is usingoo many resources
  - Sopshe app
- Memory leak slowly consumes all available RAM
  - Clearshe RAM and sars again

Resar services

- Services
  - Applicaonsha run inhe background
  - No user ineracon
- Similar issues as a normal process
  - Resource ulizaon
  - Memory leaks
  - Crashes
- View saus in Task Manager
  - Servicesab
  - Righ-clicko sar, sop, or resar

Uninsall/reinsall/updae applicaons

- Applicaon issues
  - Problems wihhe applicaonles or conguraons
- Setngs > Apps > Apps &eaures
  - Repair, rese, or uninsall
- Some opons inhe Conrol Panel
  - Programs and Feaures
- Runhe applicaon seup again
  - Oher opons may be availableromhe seup
    program
- Repair
  - Insall missingles
  - Replace corrupedles
  - Fix applicaon shorcus
  - Repair regisry enries
  - Updae or recongure drivers
- Rese
  - Remove all applicaon daa
  - Aacory rese / original insall
- Uninsall - Removehe applicaon

Veriy requiremens

- Every operang sysem and applicaon publishes
  a se o requiremens
  - These are commonlyhe bare minimums
- Check wihhe manuacurer
  - Gehe ocial requiremens
- Hardware and sofware resources
  - CPU speed,oal RAM, video opons,
    device drivers, runme libraries
- Use Sysem Inormaon
  - Viewhe curren conguraon

```
Add resources
```

- Check resource ulizaon
  - Task Manager
- Consider a long-erm analysis
  - Perormance Monior
- Compare exisng resources wih manuacurer
  requiremens
  - Add or replace hardware (CPU, SSD, RAM)
- Free drive space - Disk Cleanup
  Sysemle checker
- Veriyhe inegriy ohe operang sysem - Check every imporan sysemle wihsfc
  Sarup Repair
- Sarrom Setngs
  - Setngs > Sysem > Recovery
- Also availableromhe - Advanced Boo Opons - Repair Windows
  Windows Resore
- Sarhe Sysem Resore applicaon
  - Sysem > Abou > Sysem Proecon
  - This assumes you’ve no disabled resore poins
- Pick a resore poin and lehe sysem reboo - The operang sysem conguraon will revero
  he previous dae andme - User daa will no be modied
  Reimage or reload OS
- Windows is big
  - And complex
- Spendmeryingondhe needle
  - Or simply build a new haysack
- Many organizaons have prebuil images
  - Don’ waseme researching issues
- Windows includes a rese opon - Windows 10: Setngs >
  Updae & Securiy > Recovery - Windows 11: Setngs > Sysem > Recovery
  Updae and pach
- Windows Updae
  - Cenralized OS and driver updaes
- Los oexibiliy
  - Change acve hours
  - Manage meered connecons
- Applicaons mus be pached
  - Securiy issues don’ sop ahe OS
  - Downloadromhe publisher

### 3.1 - Troubleshoong Soluons (connued)

Roll back updaes

- Updaes are insalled auomacally by deaul
  - Imporan securiy paches
- Viewhe hisory
  - Windows 10:
  - Setngs > Updae & Securiy >
  - Windows Updae
  - Windows 11:
  - Setngs > Windows Updae

Rebuild Windows proles

- Proles can become corruped
  - The User Prole Serviceailedhe logon.
  - User Prole canno be loaded.
  - User documens may be “missing”
- I a prole doesn’ exis, i’s recreaed
  - We’re goingo deleehe prole andorce
    he rebuilding process

```
Deleng Windows proles
```

- Loginohe compuer wih Domain Adminisraor righs
- Renamehe \Users\nameolder - This will save imporanles
- Backuphe user’s regisry
  - HKLM\SOFTWARE\Microsof\Windows NT\
     CurrenVersion\ProleLis
  - Righ-click / Expor
- Deleehe regisry enry - You have a backup - Resarhe compuer
  Reconsrucng Windows proles
- Loginohe compuer wihhe user accoun
  - The prole will be rebuil
  - This will recreaehe \Users\nameolder
- Login as Domain Adminisraor
  - Copy over any imporanlesromhe old prole
- Do no copyhe enre prole
  - Corrupedles migh exis inhe old prole
- Logou as Domain Adminisraor, login wihhe user accoun

### 3.2 - Troubleshoong Securiy Issues

Unableo accesshe nework

- Slow perormance, lock-up
  - Malware isn’he bes wrien code
- Inerne connecviy issues
  - Malware likeso conrol everyhing
  - You go where i wans youo go
  - You can’ proec yoursel i you can’ download
- OS updaesailures
  - Malware keeps you vulnerable
  - Some malware uses mulple communicaon pahs
- Reload or clean
  - Malware cleaner or recoverrom known good backup

Desktop alerts

- Browser push nocaon messages
  - Preendso be a malware inecon
  - Acual nocaons comerom your anvirus uliy
- Disable browser nocaons
  - Creae an allow lis o legi sies
- Scanor malware
  - Consider a cleaning
  - Rebuildrom scrach or known good backupo
    guaranee removal

False anvirus alers

- False anvirus message
- May include recognizable logos and language
  - May require moneyo “unlock” your PC
  - Oro “subscribe”oheir service
- Ofen requires a specic an-malware removal
  uliy orechnique
  - The aackers are very, very good

```
Alered sysem or personalles
```

- Renamed sysemles- Won’ needha anymore
- Files disappearing- Or encryped
- File permission changes- Proecons are modied
- Access denied
  - Malware locks isel away
  - I doesn’ leave easily
- Use a malware cleaner or
  resorerom known good backup - Some malware is exceponally diculo remove
  Browser securiy alers
- Securiy alers and invalid cercaes
  - Somehing isn’ quie righ
  - Should raise your ineres
- Look ahe cercae deails - Clickhe lock icon - May be expired orhe wrong domain name - The cercae may no be properly signed
  (unrused cercae auhoriy) - Correcme and dae is imporan
  Browser redirecon
- Insead o your Google resul,
  your browser goes somewhere else
  - This shouldn’ ever happen
- Malware ishe mos common cause
  - Makes moneyorhe bad guys
- Use an an-malware/an-virus cleaner
  - This is nohe bes opon
- Resorerom a good known backup
  - The only wayo guaranee removal

### 3.3 - Removing Malware

Malware removal

- This is almos neverhe bes pracce
  - I’s impossibleo know i all ohe malware
    has been removed
- Ideally, you should delee everyhing and sar over
  - Resorerom a known-good backup
  - Insallromhe original media
- There are reasonso remediae
  - Imporan user documens may needo be recovered
  - Gehe sysem running well enougho
    backup cerainles

1. Veriy malware sympoms

- Odd error messages
  - Applicaonailures, securiy alers
- Sysem perormance issues
  - Slow boo, slow applicaons
- Researchhe malware
  - Know wha you’re dealing wih

2. Quaranne ineced sysems

- Disconnecromhe nework
  - Keep i conained
- Isolae all removable media
  - Everyhing should be conained
- Prevenhe spread
  - Don’ranserles, don’ryo backup
  - Tha ship sailed

3. Disable Sysem Resore

- Resore poins make i easyo rewind
  - Malware inecs resore poins
- Disable Sysem Proecon
  - No reasono save an ineced cong
- Delee all resore poins
  - Remove all inecon locaons

4a. Remediae: Updae an-virus

- Signaure and engine updaes
  - The acve an-virus engine
  - Signaure updaes
  - A very, veryny shel lie
- Auomac vs. manual
  - Manual updaes are almos poinless
- Your malware may prevenhe updae process
  - Copyrom anoher compuer

4b. Remediae: Scan and remove

- Microsof and ohers - The big an-virus apps
- Malware-specic -
  - Scan and remove dicul malware
- Sand-alone removal apps
  - Check wih your an-virus company
- There’s really no wayo know i i’s really gone
  - Delee and rebuild

```
4b. Remediae: Scan and remove
```

- Sae mode
  - Loadhe bare minimum operang sysem
  - Jus enougho gehe OS running
  - Can also prevenhe bad surom running
- Pre-insallaon environmen (WinPE)
  - Recovery Console, booable CD/DVDs/USBs
  - Build your ownromhe Windows
  - Assessmen and Deploymen Ki (ADK)
- May requirehe repair o boo records and secors

5. Schedule scans and run updaes

- Buil inohe anvirus sofware
  - Auomaed signaure updaes and scans
- Task scheduler
  - Run anyask
- Operang sysem updaes
  - Make sure is enabled and working

6. Enable Sysem Proecon

- Now you’re clean
  - Puhings ashey were
- Creae a resore poin
  - Sar populang again

7. Educaehe end user

- One on one
  - Personalraining
- Posers and signs
  - High visibiliy
- Message board posng
  - The real kind
- Login message
  - These become invisible
- Inrane page
  - Always available

### 3.4 - Troubleshoong Mobile Devices

App issues

- Problemac apps
  - Apps no loading
  - Slow app perormance
- Resarhe phone
  - Hold power buon, power o
- Sophe app and resar
  - iPhone: Double-ap home|slide up, slide app up
  - Android: Setngs/Apps, selec app, Force sop
- Updaehe app -Gehe laes version

Appailso close or crashes

- App hangs
  - Bu oher apps are sll working
- App crashes
  - May provide an error message, or jus disappear
- Resarhe device
  - Clearhe slae,ryhe app again
- Updaehe app
  - A bugx migh resolvehe issue
- Delee and reinsallhe app
  - Be careul noo remove imporan app daa

App fails to update

- App does no updaeo a new version
  - Bu oher apps are sll working
- Checkhe Soreo manually upgrade
  - Forcehe upgrade process
  - Some sores require a valid mehod o paymen onle
- Resarhe device
  - Tryhe updae process again

OSailso updae

- Device operang sysem will no updae
  - Neweaures, bugxes, securiy updaes
- Check available sorage
  - Remove unused documens and apps
- Check download bandwidh
  - Conneco Wi-Fi
- Try a dieren nework connecon
  - Updae server may no be accessible
- Reboo -Always a good idea

Baery lie issues

- Bad recepon
  - Always searchingor signal
  - Airplane mode onhe ground
- Aging baery
  - There’s only so many recharges
- Disable unnecessaryeaures
  - 802.11 wireless, Blueooh, GPS
- Check applicaon baery usage
  - iOS: Setngs/Baery
  - Android: Setngs/Baery

```
Random reboos
```

- A device reboos during normal operaon
  - May occur randomly
- Checkhe OS and app versions
  - Keep everyhing upo dae
- Perorm a hardware check
  - Checkhe baery healh
  - No many diagnoscs opons
- Conac Tech Supporor opons - Crash logs should be onhe device
  Connecviy issues
- Inermien connecviy
  - Move closero access poin
  - Try a dieren access poin
- No WiFi connecviy
  - Check/Enable WiFi
  - Check securiy key conguraon
  - Hard rese can resar wireless subsysem
- No Blueooh connecviy
  - Check/Enable Blueooh
  - Check/Pair Blueooh componen
  - Hard reseo resar Blueooh subsysem
- NFC no working
  - Limiedroubleshoong opons
  - Device may allow disable/enable o NFC
  - Resehe device
  - I paymen relaed, remove and addhe card again
- AirDrop no working - Disance beween devices < 30ee - Turn on Wi-Fi and Blueooh - Check AirDrop discovery opons - “Allow meo be discovered by”
  Screen does no auoroae
- Turninghe device doesn’ roaehe view
  - I should know which way is up
- Disable roaon lock
  - Prevens auoroaon when enabled
- Resarhe app
  - The device migh be working properly
- Resarhe device
  - Perhapshe device isn’ working properly
- Conac device suppor
  - I nohing roaes, you could have a sensor issue

### 3.5 - Troubleshoong Mobile Device Securiy

Android package source

- Once malware is on a phone, i has a huge amoun o access
  - Don’ insall APKlesrom an unrused source
- iOS
  - All apps are curaed by Apple
- Android
  - Apps can be downloadedrom Google Play or sideloaded
  - This is where problems can occur

Developer mode

- Enables developer-specic setngs
  - USB debugging
  - Memory sascs
  - Demo mode setngs
- iOS and iPadOS
  - Enable using Xcode
  - Mus use macOS
- Android
  - Enabledrom Setngs > Abou Phone
  - Taphe build number sevenmes

Roo access/jailbreaking

- Mobile devices are purpose-buil sysems
  - You don’ need direc accessohe operang sysem
- Gaining access
  - Android - Roong
  - Apple iOS - Jailbreaking
- Insall cusomrmware
  - Replaceshe exisng operang sysem
- Unconrolled access
  - Circumven securiyeaures, sideload apps wihou
    using an app sore
  - The MDM becomes relavely useless

Applicaon spoong

- Insall wha appearso be a legimae app
  - Acually a booleg or malicious applicaon
- Google removed 150 appsromhe sore in 2021
  - Phoo eding, cameralers, games, QR code scanners
  - UlmaSMS appriedo subscribe userso
    $40/monh SMS service
- Ineche applicaon usedo buildhe apps
  - A malicious version o Xcode: XcodeGhos malware
- Always checkhe source o a download
  - Andhe legimacy ohe app
  - You are givinghis app permissions and conrol

High neworkrac

- Higherhan normal nework use
  - May indicae insalled malware
  - Command & conrol
  - Proxy nework use
- Check buil-in daa use repors
  - Some ohese are quie deailed
    - Use ahird-pary reporng app
      - Use arused source
    - Run a malware scan
      - Always a good precauon
        Daa-usage limi nocaon
    - Buil-in Androideaure
      - No nave in iOS
    - Se a warning and limi
      - Ge nocaon whenrac is excessive
    - Can indicae a malware inecon
      - Drill-down on individual app usage
    - Run a malware scan
      - Findhe problem app
        Sluggish responseme
    - Running slowly
      - Screen lags, poor inpu responseme
    - Resar
      - Clearhe slae
    - Checkor OS and app updaes
      - Fixhe buggy code
    - Close appsha are no in use
      - Less resourceso manage
    - Facory rese
      - A las chanceo resolvehe problem
        Limied or no Inerne connecviy
    - Malware doesn’ wano be removed
      - I will preven accesso nework resources
    - Disable and enable Wi-Fi
      - Or enable/disable airplane mode
    - Resarhe device
      - Clear memory and reload drivers
    - Perorm a malware scan
      - Find and remove
        High number o ads
    - Malware wanso show you adversing
      - Revenueor each view and click
    - May be diculond
      - 2019: Ads Blockeror Android promisedo
        remove ads
      - Acually didhe opposie
      - Once insalled, wasn’ lised in available apps
      - FakeAdsBlock malware srain
    - Run an-malware uliy
      - Removehe adware

### 3.5 - Troubleshoong Mobile Device Securiy (connued)

```
Fake securiy warnings
```

- The easies wayo ge on a phone
  - Havehe user insallheir own malware
- The warnings seem legimae
  - They are no acual securiy issues
  - Do no insall any sofware
- Malware can direcly access user daa
  - Seals credi card deails, sored passwords,
    browsing hisory,ex messages
- Don’ click - I you click, run a malware removalool
  Unexpeced applicaon behavior
- Apps unexpecedly close - Or have excessive delays
- App doesn’ seemo have all ohe normaleaures
  - Or includedeaures are no working
- High baery ulizaon
  - Only whenhis applicaon is running
- Updaehe app - Gehe laes version

```
Leaked personalles
```

- Unauhorized accoun access
  - Unauhorized roo access
  - Leaked personalles and daa
- Deermine cause o daa breach
  - Perorm an app scan, run an-malware scan
- Facory rese and clean insall
  - This is obviously a huge issue
- Check online daa sources
  - Apple iCloud/Apple Conguraor, Google Workspace,
    Microsof OneDrive
  - Change passwords

### 4.1 - Tickeng Sysems

Tickeng sysems

- The bes wayo manage suppor requess
  - Documen, assign, resolve, repor
- Usually a responsibiliy ohe help desk
  - Takehe calls andriage
- Deerminehe bes nex sep
  - Assignhecke and monior
- There are many dierenckeng sysems
  - They’re all very similar inuncon

Managing a supporcke

- Inormaon gahering
  - User and device inormaon
  - Problem descripon
- Applying conex
  - Caegorizaon ohe problem
  - Assign severiy
  - Deermine i escalaon is required
- Clear and concise communicaon
  - Problem descripon, progress noes,
    resoluon deails

User inormaon

- You can’ address a person’s problem unless
  you know who hashe issue
  - Addhe name ohe person repornghe problem
- Usually inegraed ino a name service
  - Acve Direcory or similar
- May be added auomacally
  - Many issues arriverom a poral or email gaeway
- Always conrmhe conac inormaon
  - The daabase may no be upo dae

```
Device and descripon
```

- Device inormaon
  - Lapop, priner, conerence room projecor, ec.
- Descripon
  - One ohe mos imporanelds inhecke
  - Makehe descripon clear and concise
- The descripon deermineshe nex sep - Call backor more inormaon - Associae wih anoher even - Assigno anoher person
  Caegorizaon and escalaon
- Caegories
  - Broad descripon
  - Change reques, hardware reques,
    problem invesgaon, hardwareailure,
    onboarding/ooarding, ec.
- Severiy
  - Ofen an esablished se o sandards
  - Low, medium, high, crical
- Escalaon levels - Dicul problems can be handled by a specialis - Escalaeo a newer oro a specic group
  Resolvinghe issue
- Progress noes
  - Many people may read and/or work on a singlecke
  - Keephe progress inormaon concise
  - Documen any changes or addional inormaon
- Problem resoluon
  - Documenhe soluon
  - May be reerenced laer by ohers wihhe same problem
  - A “live” knowledgebase o issues and resoluons

### 4.1 - Asse Managemen

### 4.1 - Documen Types

Asset management

- A record o every asse
  - Lapops, deskops, servers, rouers, swiches, cables,
    ber modules,ables, ec.
- Associae a supporcke wih a device make and model
  - Can be more deailedhan a user’s descripon
- Financial records, audis, depreciaon
  - Make/model, conguraon, purchase dae, locaon,
    ec.
- Add an asseag
  - Barcode, RFID, visibleracking number,
    organizaon name

Asse daabase

- A cenral asseracking sysem
  - Used by dieren pars ohe organizaon
- Assigned users
  - Associae a person wih an asse
  - Useulorracking a sysem
    - Warrany
      - A dieren process i ou o warrany
    - Licensing
      - Sofware coss
      - Ongoing renewal deadlines
        Procuremen lie cycle
    - The purchasing process
      - Mul-sep processor requesng and obaining
        goods and services
    - Sar wih a requesromhe user
      - Usually includes budgeng inormaon andormal
        approvals
    - Negoae wih suppliers
      - Terms and condions
      - Purchase, invoice, and paymen
      - The money par

Accepable use policies (AUP)

- Wha is accepable use o company asses?
  - Deailed documenaon
  - May be documened inhe Rules o Behavior
- Covers manyopics
  - Inerne use,elephones, compuers, mobile devices, ec.
- Used by an organizaono limi legal liabiliy
  - I someone is dismissed,hese arehe
    well-documened reasons why

Neworkopology diagram

- Describeshe nework layou
  - May be a logical diagram
  - Can include physical rack locaons

Compliance

- Compliance
  - Meenghe sandards o laws, policies, and regulaons
- A healhy caalog o rules
  - Across many aspecs o business and lie
  - Many are indusry-specic or siuaonal
- Penales - Fines, loss o employmen, incarceraon
- Scope - Domesc and inernaonal requiremens

Splash screens

- A message, logo, or graphic shown during sarup or login
  - Can be usedor branding oro require compliance
- Can be inormaonal
  - Mainenance nocaons or sysem changes
- May be requiredor legal or adminisrave purposes
  - Warnings abou sysem misuse
  - Inormaon abou relying on applicaon daa

```
Incident reports
```

- Securiy policy
  - An ongoing challenge
  - Documenaon mus be available
  - No quesons
- Incidens are ongoing
  - Organizaons haveormal inciden plans
- Repors and documenaon - Deails o any securiy inciden - Creae a reerenceoruure incidens
  Sandard operang procedures
- Organizaons have dieren business objecves
  - Processes and procedures
- Operaonal procedures
  - Downme nocaons,acilies issues
- Sofware insallaon and upgrades
  - Cusom insallaon o a sofware package
  - Tesng, change conrol
- Documenaon ishe key - Everyone can review and undersandhe policies
  On-boarding
- Bring a new person inohe organizaon
  - New user seup checklis
- IT agreemens needo be signed
  - May be par ohe employee handbook or
    a separae AUP
- Creae accouns
  - Associaehe user wih groups and deparmens
- Provide required IT hardware
  - Lapops,ables, ec.
  - Precongured and readyo go

### 4.1 - Documen Types (connued)

### 4.2 - Change Managemen

O-boarding

- All goodhings...
  - End-usererminaon checklis
- This process should be predened
  - You don’ wano decide howo dohings ahis poin
- Wha happensohe hardware?
- Wha happensohe daa?
- Accoun inormaon is usually deacvaed
  - Bu no always deleed

```
Knowledge base and arcles
```

- Exernal sources
  - Manuacurer knowledge base
  - Inerne communies
- Inernal documenaon
  - Insuonal knowledge
  - Usually par o help desk sofware
- Findhe soluon quickly
  - Searchable archive
  - Auomac searches wih helpdeskcke keywords

Change managemen

- Howo make a change
  - Upgrade sofware, pach an applicaon, changerewall
    conguraon, modiy swich pors
- One ohe mos common risks inhe enerprise
  - Occurs veryrequenly
- Ofen overlooked or ignored
  - Did youeelha bie?
- Have clear policies
  - Frequency, duraon, insallaon process, rollback
    procedures
- Somemes exremely diculo implemen
  - I’s hardo change corporae culure

Rollback plan

- The change will work perecly and nohing will ever go bad
  - O course i will
- You should always have a wayo rever your changes
  - Prepareorhe wors, hopeorhe bes
- This isn’ as easy as i sounds
  - Some changes are diculo rever
- Always have backups

Sandboxesng

- Isolaedesng environmen
  - No conneconohe real world or producon sysem
  - Aechnological sae space
- Use beore making a changeo producon
  - Tryhe upgrade, applyhe pach
  - Tes and conrm beore deploymen
- Conrmhe rollback plan
  - Move everyhing backohe original
  - A sandbox can’ consider every possibiliy

Responsible sa members

- Aeam eor - Many dieren pars ohe organizaon
- ITeam - Implemenshe change
- Business cusomer - The user oheechnology or sofware
- Organizaon sponsor
  - Someone’s budge is responsibleorhe process
  - Or responsibleorhe pro

```
Change managemen process
```

- Aormal processor managing change
  - Avoid downme, conusion, and misakes
- Nohing changes wihouhe process - Compleehe requesorms - Deerminehe purpose ohe change - Idenyhe scope ohe change - Schedule a dae andme ohe change - Deermine aeced sysems andhe impac - Analyzehe risk associaed wihhe change - Ge approvalromhe change conrol board - Ge end-user accepance aferhe change is
  complee
  Change requesorms
- Aormal process always seemso include a bi o
  paperwork
  - This is usually an online sysem
- Nohing ges missed
  - Easyo manage
  - Creae deailed repors and sascs
- Usually aransparen process - Many dieren groups and people are usually
  involved
  Purpose ohe change
- Why are we doinghis?
  - There needso be a compelling reason
- Applicaon upgrades
  - Neweaures
  - Bugxes
  - Perormance enhancemens
- Securiyxes
  - Monhly paches and vulnerabiliyxes
- There needso be a good reason
  - Changes are cosly

### 4.2 - Change Managemen (connued)

Scope ohe change

- Deerminehe eec ohe change
  - May be limiedo a single server
  - Or an enre sie
- A single change can bear reaching
  - Mulple applicaons, Inerne connecviy,
    remoe sie access, exernal cusomer access
- How long willhisake?
  - Specic dae andmeorhe change
  - May have no impac, could have hours o downme

Risk analysis

- Deermine a risk value - i.e., high, medium, low
- The risks can be minor orar-reaching
  - The “x” doesn’ acuallyx anyhing
  - Thex breaks somehing else
  - Operang sysemailures
  - Daa corrupon
- Wha’she risk wih NOT makinghe change?
  - Securiy or applicaon vulnerabiliy
  - Unexpeced downmeo oher services

```
Change board and approvals
```

- Go or no go
  - Los o discussion
- All imporan pars ohe organizaon are represened
  - Poenal changes can aeche enre company
- Some changes have prioriy
  - The change board makeshe schedule
  - Some changes happen quickly, someakeme
- This ishe las sep - The acual work comes nex
  End-user acceptance
- Nohing happens wihou a sign-o
  - The end users ohe applicaon / nework
- One o your jobs iso makehem successul
  - They ulmaely decide i a change is worh iohem
- Ideally,his is aormaliy
  - O course,hey have been involved
    hroughouhis enre process
  - There’s consan communicaon beore and afer

### 4.3 - Managing Backups

Backups

- Incredibly imporan
  - Recover imporan and valuable daa
  - Planor disaser
    - Many dieren implemenaons
      - Toal amoun o daa
      - Type o backup
      - Backup media
      - Sorage locaon
      - Backup and recovery sofware
      - Day ohe week

```
Full
Backup
```

```
MondayTuesdayWednesday ThursdayRecovery
```

```
Full
Backup
```

```
Full
Backup
```

```
Full
Backup
```

```
Full
Backup
```

Full Backup

- Backup everyhing
  - All operang sysem and userles
- This is usuallyhe longes
  backup process
  - I’s everyhing in one backup
- Migh be impraccal every day
  - Long backupmes
  - Los o sorage space

```
Full
Backup
```

```
Monday Tuesday Wednesday Thursday Recovery
```

```
Incremental Incremental
```

```
Incremental
```

```
Full
Backup
```

```
Incremental
```

```
Incremental
```

```
Incremental
```

Incremental Backup

- Aull backup isakenrs
- Subsequen backups conain
  daa changed sincehe lasull
  backup and las incremenal backup
  - These are usually smaller
    hanheull backup
- A resoraon requiresheull backup
  and all ohe incremenal backups

### 4.3 - Managing Backups (connued)

Backupesng

- I’s no enougho perormhe backup
  - You haveo be ableo resore
- Disaser recoveryesng
  - Simulae a disaser siuaon
  - Resorerom backup
- Conrmhe resoraon
  - Teshe resored applicaon and daa
- Perorm periodic audis
  - Always have a good backup
  - Weekly, monhly, quarerly checks

On sie vs. o sie backups

- On sie backups
  - No Inerne link required
  - Daa is immediaely available
  - Generally less expensivehan o sie
- O sie backups
  - Transer daa over Inerne or WAN link
  - Daa is available afer a disaser
  - Resoraon can be perormedrom anywhere
- Organizaons ofen use boh
  - More copies ohe daa
  - More opons when resoring

```
Grandaher-aher-son (GFS)
```

- Three separae backup roaons
  - Monhly, weekly, daily
- Twelve monhlyull backups (grandaher)
  - A good choiceor osie sorage
- Four (orve) weeklyull backups (aher)
  - Depends on which day ohe monh is seleced
- Thiry-one daily incremenal or dierenal backups (son) - Backup any daily changes
  GFS backup schedule
- Choose a roaon
  - Every organizaon is dieren
- Grandaher
  - Las day o every monh
- Faher
  - Every Monday
- Son - Mondayhrough Friday
  3-2-1 backup rule
- A popular and eecve backup sraegy
  - For business or home use
- 3 copies o daa should always be available
  - One primary copy andwo backups
- 2 dierenypes o media should be used
  - Local drive,ape backup, NAS
- 1 copy ohe backup should be osie
  - Osie sorage, cloud backup

Dierenal backup

- Aull backup isakenrs
  - Subsequen backups conain daa
    changed sincehe lasull backup
  - These usually grow larger as
    daa is changed
- A resoraon requiresheull backup
  andhe las dierenal backup

Synhec backup

- Creae aull backup
  - Wihou acually perorming aull backup
- Synhec backup
  - Thersull backup copies everyle
  - Subsequenull backups are creaedrom
    previous backups
- Can beaser and less bandwidh inensive
  - The advanage o aull backup
  - The eciency o an incremenal backup

### 4.4 - Managing Elecrosac Discharge

Wha is elecrosac discharge?

- Sac elecriciy
  - Elecriciyha doesn’ move
- Sac elecriciy isn’ harmulo compuers
  - I’she dischargeha geshem
- ESD can be very damagingo compuer componens
  - Silicon is very sensiveo high volages
- Feel sac discharge: ~3,500 vols
  - Damage an elecronic componen: 100 vols or less

Conrolling ESD

- Humidiy over 60% helps conrol ESD
  - Won’ preven all possible ESD
  - Keeping an air condioned room a 60% humidiy
    isn’ very praccal
- Use your hando “sel-ground”
  - Touchhe exposed meal chassis beore
    ouching a componen
  - You’ll wano unplughe power connecon
  - Always. Really.
- Do no connec yourselohe ground
  o an elecrical sysem!

```
Prevenng sac discharge
```

- An-sac srap
  - Connec your wriso a meal par ohe compuer
- An-sac pad
  - A workspaceorhe compuer
- An-sac ma
  - A maor sanding or sitng
- An-sac bag - Saely move or ship componens
  Componen handling and sorage
- Try nooouch componens direcly
  - Card edges only
- Sore in an HVAC regulaed environmen
  - Beween 50 and 80 degrees Fahrenhei
    or 10o 27 degrees Celsius
- Avoid high humidiy
  - Silica gel packes can help conrol humidiy
- Sore inhe original padded box
  - Bubble wrap can be a good alernave

### 4.4 - Saey Procedures

#### WARNING

- Power is dangerous
- Remove all power sources beore working
- Don’ouchANYTHINGi you aren’ sure
- Replace enre power supply unis
  - Don’ repair inernal componens
- High volage
  - Power supplies, displays, laser priners

Equipmen grounding

- Mos compuer producs conneco ground
  - Diver any elecricalauls awayrom people
- Also applieso equipmen racks
  - Large ground wire
- Don’ removehe ground connecon
  - I’shereo proec you
- Never connec yourselohe ground o an elecrical sysem
  - This is no a wayo preven ESD

```
Personal saey
```

- Lifingechnique
  - Lif wih your legs, keep your back sraigh
  - Don’ carry overweigh iems
  - You can ge equipmeno lif
- Elecricalre saey
  - Don’ use waer oroam
  - Use carbon dioxide, FM-200,
    or oher dry chemicals
  - Removehe power source
- Saey goggles
  - Useul when working wih chemicals
  - Priner repair,oner, baeries
- Airler mask - Dusy compuers - Prineroner
  Local governmen regulaons
- Healh and saey laws
  - Vary widely depending on your locaon
  - Keephe workplace hazard-ree
- Building codes
  - Fire prevenon, elecrical codes
- Environmenal regulaon
  - High-ech wase disposal

### 4.5 - Environmenal Impacs

Disposal procedures

- Read your Maerial Saey Daa Shees (MSDS)
  - Unied Saes Deparmen o Labor,
  - Occupaonal Saey and Healh Adminisraon (OSHA)
  - hps://www.osha.gov, Index page
- Provides inormaonor all hazardous chemicals
  - Baeries, display devices / CRTs,
    chemical solvens and cans,oner and ink carridges
- Somemes abbreviaed as Saey Daa Shee (SDS)
  - Dieren names in each counry

MSDS ino

- Produc and company inormaon
- Composion / ingrediens
- Hazard inormaon
- Firs aid measures
- Fire-ghng measures
- Accidenal release / leaking
- Handling and Sorage
- Much more

Handling toxic waste

- Baeries
  - Uninerrupble Power Supplies
  - Dispose a your local hazardous waseaciliy
- Toner
  - Recycle and reuse
  - Many priner manuacurers provide a reurn box
  - Some oce supply companies will provide a discoun
    or each carridge
- Oher devices and asses
  - Reerohe MSDS
  - Don’hrow ou wihou clear direcons

Room conrol

- Temperaure
  - Devices need consan cooling
  - So do humans
    - Humidiy level
      - High humidiy promoes condensaon
      - Low humidiy promoes sac discharges
      - 50% is a good number
    - Proper venlaon
      - Compuers generae hea
      - Don’ pu everyhing in a close
        Baery backup
    - Uninerrupble Power Supply
      - Backup power
      - Powerailures, under-volage evens, surges
    - UPSypes
      - Sandby UPS
      - Line-ineracve UPS
      - On-line UPS
    - Feaures
      - Auo shudown, baery capaciy, oules,
        phone line suppression
        Surge suppressor
    - No all power is “clean”
      - Sel-iniced power spikes and noise
      - Sorms, power grid changes
    - Spikes are diveredo ground
    - Noiselers remove line noise
      - Decibel (Db) levels a a speciedrequency
      - Higher Db is beer
        Surge suppressor specs
    - Joule rangs
      - Surge absorpon
      - 200=good, 400=beer
      - Lookor over 600 joules o proecon
    - Surge amp rangs
      - Higher is beer
    - UL 1449 volage le-hrough rangs
      - Rangs a 500, 400, and 330 vols
      - Lower is beer

### 4.6 - Privacy, Licensing, and Policies

Inciden response: Chain o cusody

- Conrol evidence - Mainain inegriy
- Everyone who conacshe evidence
  - Avoidampering, use hashes
- Label and caalog everyhing
  - Seal, sore, and proec - Use digial signaures

Inciden response: Firs response

- Idenyhe issue - Logs, in person, monioring daa
- Reporo proper channels
  - Don’ delay
  - May include inernal managemen and law enorcemen
- Collec and proec inormaon relango an even
  - Many dieren daa sources and proecon mechanisms

```
Inciden response: Copy o drive
```

- Copyhe conens o a disk
  - Bi-or-bi, bye-or-bye
- Removehe physical drive
  - Use a hardware wrie-blocker
  - Preservehe daa
- Sofware imagingools
  - Use a booable device
- Use hashesor daa inegriy
  - Drive image is hashedo ensure
    ha daa has no been modied

### 4.6 - Privacy, Licensing, and Policies (connued)

Inciden response: Documenaon

- Documenhendings
  - For Inernal use, legal proceedings, ec.
- Summary inormaon
  - Overview ohe securiy even
- Deailed explanaon o daa acquision
  - Sep-by-sep mehod ohe process
- Thendings - An analysis ohe daa
- Conclusion - Proessional resuls, givenhe analysis

Sofware licenses

- Mos sofware includes a license
  - Terms and condions
  - Overall use, number o copies, and backup opons
- Valid licenses
  - Per-sea or concurren
- Non-expired licenses
  - Ongoing Subscripons
  - Annual,hree-year, ec.
  - Usehe sofware unlhe expiraon dae

Licenses

- Personal license
  - Designedorhe home user
  - Usually associaed wih a single device
  - Or small group o devices owned
    byhe same person
  - Perpeual (oneme) purchase
- Corporae use license
  - Per-sea purchase / Sie license
  - The sofware may be insalled everywhere
  - Annual renewals

Open source license

- Free and Open Source (FOSS)
  - Source code isreely available
  - End user can compileheir own execuable
- Closed source / Commercial
  - Source code is privae
  - End user ges compiled execuable
- End User Licensing Agreemen (EULA)
  - Deermines howhe sofware can be used

Regulang credi card daa

- Paymen Card Indusry
  - Daa Securiy Sandard (PCI DSS)
  - A sandardor proecng credi cards
- Six conrol objecves
  - Build and Mainain a Secure Nework and Sysems
  - Proec Cardholder Daa
  - Mainain a Vulnerabiliy Managemen Program
  - Implemen Srong Access Conrol Measures
  - Regularly Monior and Tes Neworks
  - Mainain an Inormaon Securiy Policy

```
Personal governmen-issued inormaon
```

- Usedor governmen services and documenaon
  - Social securiy number, driver license
- There may be resricons on collecng or soring
  governmen inormaon - Check your local regulaons
- U.S. Oce o Personnel Managemen (OPM) - Compromised personal idenable inormaon - Personnelle inormaon; name, SSN, dae o birh,
  job assignmens, ec. - July 2015 - Aeced ~21.5 million people
  PII - Personally idenable inormaon
- Any daaha can ideny an individual
  - Par o your privacy policy - How will you handle PII?
- No everyone realizeshe imporance ohis daa
  - I becomes a “normal” par ohe day
  - I can be easyoorge is imporance
- Aackers use PIIo gain access or impersonae - Bank accoun inormaon - Answer badly-wrien password-rese quesons
  GDPR - General Daa Proecon Regulaon
- European Union regulaon
  - Daa proecon and privacyor individuals inhe EU
  - Name, address, phoo, email address, bank deails,
    poss on social neworking websies, medical inormaon,
    a compuer’s IP address, ec.
- Conrols expor o personal daa
  - Users can decide whereheir daa goes
- Gives individuals conrol oheir personal daa
  - A righo beorgoen, righ o erasure
- Sie privacy policy - Deails all ohe privacy righsor a user
  PHI - Proeced Healh Inormaon
- Healh inormaon associaed wih an individual
  - Healh saus, healh care records, paymensor
    healh care, and much more
- Daa beween providers
  - Mus mainain similar securiy requiremens
- HIPAA regulaons - Healh Insurance Porabiliy and Accounabiliy Ac o 1996
  Daa reenon requiremens
- Keeplesha changerequenlyor version conrol
  - Files change ofen - Keep a leas a week, perhaps more
- Recoverrom virus inecon
  - Inecon may no be idened immediaely
  - May needo reain 30 days o backups
- Ofen legal requiremensor daa reenon
  - Email sorage may be required over years
  - Some indusries mus legally sore cerain daaypes
  - Dieren daaypes have dieren sorage requiremens
  - Corporaeax inormaon, cusomer PII,ape backups, ec.

### 4.7 - Communicaon

Communicaon skills

- One ohe mos useul skillsorheroubleshooer
- One ohe mos dicul skillso maser
- A skilled communicaor is incredibly markeable

Avoid jargon

- Abbreviaons and TLAs
  - Three Leer Acronyms
- Avoid acronyms and slang
  - Beheranslaor
- Communicae inermsha everyone can undersand
  - Normal conversaon pus everyone a ease
  - Decisions are based on wha you say
- These arehe easies problemso avoid

Mainain a posive atude

- Posiveone o voice
  - Parner wih your cusomer
  - Projec condence
- Problems can’ always bexed
  - Do your bes
  - Provide helpul opons
- Your atude has a direc impac onhe
  overall cusomer experience

Avoid inerrupng

- Bu I knowhe answer!
- Why do we inerrup?
  - We wano solve problems quickly
  - We wano show how smar we are
    - Acvely lisen,ake noes
      - Build a relaonship wihhe cusomer
      - They’ll need help again someday
      - Don’ miss a key piece o inormaon
      - Especially useul onhe phone
    - This skillakesmeo perec
      - The beer you are,he moreme you’ll save laer
        Clariy cusomer saemens
    - Ask pernen quesons
      - Drill-down inohe deails
      - Avoid an argumen
      - Avoid being judgmenal
    - Repea your undersanding ohe problem
      backohe cusomer
      - Did I undersand you correcly?
    - Keep an open mind
      - Ask clariying quesons, even ihe issue
        seems obvious
      - Never make assumpons
        Setng expecaons
    - Oer dieren opons
      - Repair or replace
    - Documen everyhing
      - No roomor quesons
    - Keep everyone inormed
      - Even ihe saus is unchanged
    - Follow up aferwards
      - Veriy sasacon

### 4.7 - Proessionalism

Professional appearance

- Machhe atre ohe curren environmen
  - Everyone shouldeel comorable abouheir dress
- Formal
  - Some organizaons have specic requiremens
- Business casual
  - A more relaxed syle
- Findhe righ balance
  - Followhe organizaon’s lead

Avoid being judgmenal

- Culural sensiviy
  - Use appropriae proessionalles
- You’reheeacher
  - Nohe warden
  - Leave insuls onhe playground
- Make people smarer
  - They’ll be beerechnologiss
- You’re goingo make some BIG misakes
  - Rememberhem.

```
Be onme and avoid disracons
```

- Don’ allow inerrupons
  - No personal calls, noexng, no Twier
  - Don’alko co-workers
- Apologizeor delays and uninended disracons
  - Creae an environmenor conversaon
  - In person
- Open and inving
  - Candy bowl can be magical
  - Onhe phone
  - Quie background, clear audio
  - Say ohe speakerphone

### 4.7 - Proessionalism (connued)

Dicul siuaons

- Technical problems can be sressul
- Don’ argue or be deensive
  - Don’ dismiss
  - Don’ conradic
- Diuse a dicul siuaon wih lisening and quesons
  - Relaonship-building
- Communicae
  - Even ihere’s no updae
- Neverakehe siuaono social media

```
Mainain condenaliy
```

- Privacy concerns
  - Sensive inormaon
  - Boh proessional and privae
  - Onhe compuer, deskop, or priner
- Proessional responsibilies
  - IT proessionals have accesso a lo o corporae
    daa
- Personal respec
  - Trea people as you would wano bereaed

### 4.8 - Scripng Languages

Scripng languages

- Auomae wihhe righools
  - The scrip should machhe requiremen
- May be specico aask or operang sysem
  - Your choices may already be limied
- You will probably learn morehan one ohese
  - An imporan skillor anyechnician

Bachles

- .bale exension
  - Scripngor Windows ahe command line
  - Legacy goes backo DOS and OS/2

Windows PowerShell

- Command lineor sysem adminisraors
  - .ps1le exension
  - Included wih Windows 8/8.1 and 10
- Exend command-lineuncons
  - Uses cmdles (command-les)
  - PowerShell scrips anduncons
  - Sandalone execuables
- Auomae and inegrae
  - Sysem adminisraon
  - Acve Domain adminisraon

Microsof Visual Basic Scripng Edion

- VBScrip
  - .vbsle exension
- General purpose scripng in Windows
  - Back-end web server scripng
  - Scripng onhe Windows deskop
  - Scripng inside o
    Microsof Oce applicaons

```
Shell scrip
```

- Scripnghe Unix/Linux shell
  - Auomae and exendhe command line
- Sars wih a shebang or hash-bang #! - Ofen has a .shle exension
  JavaScrip
- Scripng inside o your browser
  - .jsle exension
- Adds ineracviyo HTML and CSS
  - Used on almos every web sie
- JavaScrip is no Java - Dieren developers and origins - Very dieren use and implemenaon
  Pyhon
- General-purpose scripng language
  - .pyle exension
- Popular in manyechnologies
  - Broad appeal and suppor

```
#!/bin/sh
// Add the frst input string
INPUT_STRING=hello
// Keep looping i the string isn’t equal to bye
while [ “$INPUT_STRING” != “bye” ]
do
echo “Please type something in (bye to quit)”
read INPUT_STRING
echo “You typed: $INPUT_STRING”
done
```

### 4.8 - Scripng Use Cases

Basic auomaon

- Auomaeasks
  - You don’ haveo behere
  - Solve problems in your sleep
  - Monior and resolve problems beorehey happen
- The needor speed
  - The scrip is asas ashe compuer
  - Noyping or delays
  - No human error
- Auomae mundaneasks
  - You can do somehing more creave

Resarng machines

- Turning i o and back on again
  - An imporanask
- Applicaon updaes
  - Some apps require a sysem resar
- Securiy paches
  - Deploy overnigh and reboohe sysem
- Troubleshoong
  - The once-a-day resar
  - You may no have physical access

Remapping nework drives

- Shared nework drives
  - The link beweenhe user andheir daa
- A commonask during sarup
  - Login scrips providehe connecon
- Auomae sofware changes
  - Map a driveohe reposiory
- Add or move user daa
  - Auomaehe process

Applicaon insallaons

- Insall applicaons auomacally
  - Don’ walk aash driveo every compuer
  - Many applicaons have an auomaed
    insallaon process
  - Scripng canurnhis ino a hands-o process
- On-demand or auomac insallaon scrips
  - Maphe applicaon insallaon drive
  - Insallhe applicaon wihou user promps
  - Disconneche drive
  - Resarhe sysem

Auomaed backups

- Usually perormed a nigh or during o-hours
  - Ge a copy o all imporan daa
- Time consuming
  - File sysems, nework connecons
- Scrip an auomaed backup process
  - Works while you sleep
  - Don’ haveohink abou i

```
Inormaon gahering
```

- Ge specic inormaonrom a remoe device
  - Monioring and reporng
- Perormance monioring
  - Conrm proper operaon o a device
- Invenory managemen
  - Checkhe hardware or sofware conguraon
- Securiy and vulnerabiliy checks - Checkor cerain applicaon or library versions - Planorhe laes paches
  Iniang updaes
- Nohing ever sayshe same
  - Consan changes and updaes
- Operang sysems
  - Neweaures
  - Securiy paches
- Device drivers
  - Bugxes
  - New hardware or OS suppor
- Applicaons - New version rollous
  Oher scripng consideraons
- Uninenonally inroducing malware
  - Make sure you know wha you’re insalling
- Inadverenly changing sysem setngs
  - Tes all updaes
  - Trackhele and regisry changes
- Browser or sysem crashes
  - Mishandling o resources
  - A single characer in a scrip can have
    uninended consequences
  - Always have a backup
  - Alwayses beore deploymen

### 4.9 - Remoe Access

Remoe deskop connecons

- Share a deskoprom a remoe locaon
  - I’s like you’re righhere
- RDP (Microsof Remoe Deskop Proocol)
  - Cliensor Mac OS, Linux, and ohers as well
- VNC (Virual Nework Compung)
  - Remoe Frame Buer (RFB) proocol
  - Cliensor many operang sysems
  - Many are open source
- Commonly usedorechnical suppor
  - Andor scammers

Remoe deskop securiy

- Microsof Remoe Deskop
  - An open por ocp/3389 is a bigell
  - Brueorce aack is common
- Third-pary remoe deskops
  - Ofen secured wih jus a username and password
  - There’s a LOT o username/password re-use
- Once you’re in, you’re in
  - The deskop is all yours
  - Easyo jumpo oher sysems
  - Obain personal inormaon, bank deails
  - Make purchasesromhe user’s browser

VPNs

- Virual Privae Neworks
  - Encryped (privae) daaraversing a public nework
- Concenraor
  - Encrypon/decrypon access device
  - Ofen inegraed ino arewall
- Many deploymen opons
  - Specialized crypographic hardware
  - Sofware-based opons available
- Used wih clien sofware
  - Somemes buil inohe OS

```
VPN securiy
```

- VPN daa onhe nework is very secure
  - The bes encryponechnologies
- Auhencaon is crical
  - An aacker wihhe righ credenals can gain access
- Almos always includes
  mul-acor auhencaon (MFA) - Require morehan jus a username and password
  SSH (Secure Shell)
- Encryped console communicaon -cp/22
- Looks and acshe same as Telne -cp/23
  SSH securiy
- The neworkrac is encryped
  - Nohingo see inhe packes
- Auhencaon is a concern
  - SSH suppors public/privae key pair auhencaon
- Cerain accouns should be disabled in SSH
  - For example, roo
  - Consider removing all
    password-based auhencaon
- Limi accesso SSH by IP address - Congure a localrewall or neworkler
  RMM
- Managed Service Providers (MSP)
  - Many cusomers and sysemso monior
  - Many dieren service levels
- Remoe Monioring and Managemen (RMM)
  - Manage a sysemrom a remoe locaon
- Manyeaures
  - Pach operang sysems
  - Remoe login
  - Anomaly monioring
  - Hardware/sofware invenory

```
Corporate
Network
```

Internet

```
VPN Concentrator
Remote User
```

Clien-o-sie VPN

- On-demand accessrom a remoe device
  - Sofware connecso a VPN concenraor
- Some sofware can be congured as always-on

### 4.9 - Remoe Access (connued)

RMM securiy

- A popular aack poin
- The RMM has a grea deal o inormaon and conrol
- Access should be limied
  - Don’ allow everyoneo conneco
    he RMM service
- Auding is imporan
  - Know who’s connecngo which devices and
    whahey’re doing

Microsof Remoe Assisance (MSRA)

- Ge accesso a remoe user’s deskop
  - Norewall conguraons or pororwarding required
- User makes a reques
  - Sends an inviaon wihhe deails
- Technician connecs
  - Useshe password inhe reques
- Replaced by Quick Assis in Windows 10
  - The laes version o MSRA

```
MSRA/Quick Assis securiy
```

- No ongoing Remoe Deskop service required
  - Avoids uninended access
  - No pororwarding
- Email wih inviaon deails is always a concern
  - Consider using voice communicaon
- Perhaps a bioo easyo use - Social engineering can be an issue
  Third-paryools
- Screen-sharing
  - See and conrol a remoe device
  - GoToMyPC, TeamViewer
- Video-conerencing
  - Mul-user meengs wih video and audio
  - Zoom, WebEx
- Fileranser
  - Sore and share documens inhe cloud
  - Dropbox, Box.com, Google Drive
- Deskop managemen
  - Manage end-user devices and operang sysems
  - Cirix Endpoin Managemen, ManageEngine
    Deskop Cenral

Connue your journey on

ProessorMesser.com:

```
Proessor Messer's Free
CompTIA A+ Training Courses
```

Monhly A+ Sudy Group Live Sreams

24 x 7 Live Discord Cha

```
Proessor Messer's
CompTIA A+ Success Bundle
```

Voucher Discouns

hps://www.ProessorMesser.com
