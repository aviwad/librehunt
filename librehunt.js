var distros = [
   {
      "notrolling":1,
      "matches":[],
      "name":"Elementary OS",
      "lookalike":"mac",
      "popularity":1,
      "oldnew":0,
      "shortdes":"A fast and open replacement for Windows and macOS",
      "touch":1,
      "desktops":"Its own unique Pantheon desktop",
      "link":"https://elementary.io/",
      "linuxexpertise":0,
      "codename":"elementary",
      "donate":"https://elementary.io/get-involved#funding",
      "customtweaks":1,
   },
   {
      "notrolling":1,
      "matches":[],
      "name":"Linux Mint",
      "lookalike":"windows",
      "popularity":1,
      "oldnew":1,
      "shortdes":"A modern, elegant and comfortable operating system which is both powerful and easy to use.",
      "touch":0,
      "desktops":"Mate, Cinnamon, and XFCE",
      "link":"https://linuxmint.com/",
      "linuxexpertise":0,
      "codename":"mint",
      "donate":"https://linuxmint.com/donors.php",
      "customtweaks":0,
   },
   {
      "notrolling":1,
      "matches":[],
      "name":"Ubuntu",
      "lookalike":"0",
      "popularity":1,
      "oldnew":0,
      "shortdes":"Linux for Human Beings.",
      "touch":1,
      "desktops":"A customized GNOME desktop",
      "link":"https://www.ubuntu.com/download/desktop",
      "linuxexpertise":0,
      "codename":"ubuntu",
      "donate":"https://www.ubuntu.com/download/desktop/thank-you",
      "customtweaks":1,
   },
   {
      "notrolling":0,
      "matches":[],
      "name":"Solus",
      "lookalike":"0",
      "popularity":1,
      "oldnew":0,
      "shortdes":"The Personal OS for Personal Computers.",
      "touch":1,
      "desktops":"Budgie, GNOME, KDE Plasma and Mate",
      "link":"https://solus-project.com/",
      "linuxexpertise":1,
      "codename":"solus",
      "donate":"https://solus-project.com/support/",
      "customtweaks":0,
   },
   {
      "notrolling":1,
      "matches":[],
      "name":"Zorin OS",
      "lookalike":"windows",
      "popularity":1,
      "oldnew":0,
      "shortdes":"A desktop as versatile as it is easy to use.",
      "touch":1,
      "desktops":"A customized GNOME desktop",
      "link":"https://zorinos.com/",
      "linuxexpertise":0,
      "codename":"zorin",
      "donate":"https://zorinos.com/about/",
      "customtweaks":1,
   },
   {
      "notrolling":0,
      "matches":[],
      "name":"Endless OS",
      "lookalike":"windows",
      "popularity":1,
      "oldnew":0,
      "shortdes":"The operating system that comes with everything your family needs.",
      "touch":1,
      "desktops":"A GNOME based desktop",
      "link":"https://endlessos.com/",
      "linuxexpertise":0,
      "codename":"endless",
      "donate":"https://endlessos.com/community/",
      "customtweaks":1,
   },
   {
      "notrolling":1,
      "matches":[],
      "name":"PureOS",
      "lookalike":"0",
      "popularity":0,
      "oldnew":0,
      "shortdes":"A user friendly, secure and freedom respecting OS for your daily usage.",
      "touch":1,
      "desktops":"The GNOME Desktop",
      "link":"https://www.pureos.net/",
      "linuxexpertise":1,
      "codename":"pure",
      "donate":"https://puri.sm/products/",
      "customtweaks":0,
   },
   {
      "notrolling":1,
      "matches":[],
      "name":"Trisquel",
      "lookalike":"windows",
      "popularity":0,
      "oldnew":1,
      "shortdes":"A fully free operating system for home users, small enterprises and educational centers.",
      "touch":0,
      "desktops":"The Mate Desktop",
      "link":"https://trisquel.info/",
      "linuxexpertise":1,
      "codename":"trisquel",
      "donate":"https://trisquel.info/en/donate",
      "customtweaks":0,
   },
   {
      "notrolling":0,
      "matches":[],
      "name":"Parabola",
      "lookalike":"0",
      "popularity":1,
      "oldnew":1,
      "shortdes":"A distro giving you complete control over your system, with 100% 'libre' software.",
      "touch":0,
      "desktops":"It comes without one",
      "link":"https://www.parabola.nu/",
      "linuxexpertise":2,
      "codename":"parabola",
      "donate":"https://liberapay.com/Parabola/donate",
      "customtweaks":0,
   },
   {
      "notrolling":0,
      "matches":[],
      "name":"Guix",
      "lookalike":"0",
      "popularity":0,
      "oldnew":1,
      "shortdes":"An advanced distribution of the GNU operating system developed by the GNU Project which respects the freedom of computer users.",
      "touch":0,
      "desktops":"It comes without one",
      "link":"https://www.gnu.org/software/guix/",
      "linuxexpertise":2,
      "codename":"guix",
      "donate":"https://www.gnu.org/software/guix/contribute/",
      "customtweaks":0,
   },
   {
      "notrolling":0,
      "matches":[],
      "name":"Kali Linux",
      "lookalike":"0",
      "popularity":1,
      "oldnew":1,
      "shortdes":"Penetration Testing and Ethical Hacking Linux Distribution.",
      "touch":0,
      "desktops":"GNOME, Mate, KDE Plasma, LXQT, Enlightenment, and XFCE",
      "link":"https://www.kali.org/",
      "linuxexpertise":2,
      "codename":"kali",
      "donate":"https://docs.kali.org/contribute",
      "customtweaks":0,
   },
   {
      "notrolling":1,
      "matches":[],
      "name":"Tails",
      "lookalike":"0",
      "popularity":0,
      "oldnew":0,
      "shortdes":"Privacy for anyone anywhere.",
      "touch":0,
      "desktops":"A customized GNOME desktop",
      "link":"https://tails.boum.org/",
      "linuxexpertise":2,
      "codename":"tails",
      "donate":"https://tails.boum.org/donate?r=sidebar",
      "customtweaks":0,
   },
   {
      "notrolling":1,
      "matches":[],
      "name":"Qubes OS",
      "lookalike":"0",
      "popularity":0,
      "oldnew":0,
      "shortdes":"A reasonably secure operating system",
      "touch":0,
      "desktops":"It comes without one",
      "link":"https://www.qubes-os.org/",
      "linuxexpertise":2,
      "codename":"qubes",
      "donate":"https://www.qubes-os.org/donate/",
      "customtweaks":0,
   },
   {
      "notrolling":1,
      "matches":[],
      "name":"Fedora",
      "lookalike":"0",
      "popularity":1,
      "oldnew":1,
      "shortdes":"Choose Freedom. Choose Fedora.",
      "touch":1,
      "desktops":"GNOME, but has spins for Mate, Cinnamon, KDE Plasma, XFCE, and LXQT",
      "link":"https://getfedora.org/",
      "linuxexpertise":1,
      "codename":"fedora",
      "donate":"https://fedoraproject.org/wiki/Donations",
      "customtweaks":0,
   },
   {
      "notrolling":1,
      "matches":[],
      "name":"Debian",
      "lookalike":"0",
      "popularity":1,
      "oldnew":1,
      "shortdes":"The Universal Operating System. Super stable, with most other distros being based on this.",
      "touch":1,
      "desktops":"GNOME, KDE Plasma, XFCE, LXQT, and Mate",
      "link":"https://www.debian.org/",
      "linuxexpertise":1,
      "codename":"debian",
      "donate":"https://www.debian.org/donations",
      "customtweaks":0,
   },
   {
      "notrolling":1,
      "matches":[],
      "name":"OpenSUSE Leap",
      "lookalike":"0",
      "popularity":1,
      "oldnew":0,
      "shortdes":"Get the most complete Linux distribution with openSUSE's latest regular-release version!",
      "touch":1,
      "desktops":"Cinnamon, Englightenment, Gnome, KDE Plasma, Mate, XFCE, and LXQT",
      "link":"https://www.opensuse.org/",
      "linuxexpertise":2,
      "codename":"leap",
      "donate":"https://en.opensuse.org/Portal:How_to_participate",
      "customtweaks":0,
   },
   {
      "notrolling":0,
      "matches":[],
      "name":"Deepin",
      "lookalike":"mac",
      "popularity":1,
      "oldnew":0,
      "shortdes":"An elegant, user-friendly and reliable operating system. ",
      "touch":1,
      "desktops":"Its own unique Deepin desktop",
      "link":"https://www.deepin.org/en/",
      "linuxexpertise":0,
      "codename":"deepin",
      "donate":"http://feedback.deepin.org/",
      "customtweaks":1,
   },
   {
      "notrolling":0,
      "matches":[],
      "name":"Arch",
      "lookalike":"0",
      "popularity":1,
      "oldnew":0,
      "shortdes":"A lightweight and flexible Linux distribution that tries to Keep It Simple.",
      "touch":0,
      "desktops":"It comes without one",
      "link":"https://www.archlinux.org/",
      "linuxexpertise":2,
      "codename":"arch",
      "donate":"https://www.archlinux.org/donate/",
      "customtweaks":0,
   },
   {
      "notrolling":0,
      "matches":[],
      "name":"Gentoo",
      "lookalike":"0",
      "popularity":1,
      "oldnew":1,
      "shortdes":"Welcome to Gentoo, a flexible, source-based Linux distribution that becomes just about any system you need and much more.",
      "touch":0,
      "desktops":"It comes without one",
      "link":"https://www.gentoo.org/",
      "linuxexpertise":2,
      "codename":"gentoo",
      "donate":"https://www.gentoo.org/get-involved/contribute/",
      "customtweaks":0,
   },
   {
      "notrolling":0,
      "matches":[],
      "name":"OpenSUSE Tumbleweed",
      "lookalike":"0",
      "popularity":1,
      "oldnew":0,
      "shortdes":"The newest Linux packages with OpenSUSE's rolling release. Fast! Integrated! Stabilized! Tested!",
      "touch":1,
      "desktops":"Cinnamon, Englightenment, Gnome, KDE Plasma, Mate, XFCE, and LXQT",
      "link":"https://www.opensuse.org/",
      "linuxexpertise":2,
      "codename":"tumbleweed",
      "donate":"https://en.opensuse.org/Portal:How_to_participate",
      "customtweaks":0,
   },
   {
      "notrolling":0,
      "matches":[],
      "name":"Manjaro",
      "lookalike":"0",
      "popularity":1,
      "oldnew":1,
      "shortdes":"Professional and user-friendly Linux at its best. Evolving and giving the Linux world a new face and operating experience.",
      "touch":1,
      "desktops":"XFCE, KDE Plasma, and GNOME, but has community editions for Budgie, Cinnamon, Deepin, Mate, and LXQT",
      "link":"https://manjaro.org/",
      "linuxexpertise":1,
      "codename":"manjaro",
      "donate":"https://manjaro.org/feedback/",
      "customtweaks":1,
   },
   {
      "notrolling":1,
      "matches":[],
      "name":"Pop!_OS",
      "lookalike":"0",
      "popularity":1,
      "oldnew":0,
      "shortdes":"An OS for the software developer, maker, and computer science professional.",
      "touch":1,
      "desktops":"A customized GNOME desktop",
      "link":"https://system76.com/pop",
      "linuxexpertise":1,
      "codename":"popos",
      "donate":"https://system76.com/pop/community",
      "customtweaks":1,
   },
   {
      "notrolling":1,
      "matches":[],
      "name":"Mageia GNOME",
      "lookalike":"0",
      "popularity":0,
      "oldnew":1,
      "shortdes":"Beyond delivering a secure, stable and sustainable operating system, is to also build great tools for people.",
      "touch":1,
      "desktops":"KDE Plasma, GNOME, and XFCE",
      "link":"https://www.mageia.org/en/",
      "linuxexpertise":1,
      "codename":"mageia",
      "donate":"https://www.mageia.org/en/contribute/",
      "customtweaks":0,
   },
   {
      "notrolling":0,
      "matches":[],
      "name":"KDE Neon",
      "lookalike":"windows",
      "popularity":1,
      "oldnew":0,
      "shortdes":"The latest and greatest of the KDE Plasma desktop on the rock solid base of Ubuntu.",
      "touch":0,
      "desktops":"The KDE Plasma Desktop",
      "link":"https://neon.kde.org/",
      "linuxexpertise":0,
      "codename":"neon",
      "donate":"https://www.kde.org/donations",
      "customtweaks":0,
   },
   {
      "notrolling":1,
      "matches":[],
      "name":"Linux Lite",
      "lookalike":"windows",
      "popularity":0,
      "oldnew":1,
      "shortdes":"With a Windows-like interface given a design reboot, it's an easy to use and very customizable Ubuntu based distro.",
      "touch":0,
      "desktops":"A customized XFCE desktop",
      "link":"https://www.linuxliteos.com/",
      "linuxexpertise":0,
      "codename":"linuxlite",
      "donate":"https://www.linuxliteos.com/donate.html",
      "customtweaks":1,
   },
   {
      "notrolling":1,
      "matches":[],
      "name":"Bodhi Linux",
      "lookalike":"0",
      "popularity":0,
      "oldnew":1,
      "shortdes":"Lightweight, with its own in-house Enlightenment desktop, while being based on Ubuntu.",
      "touch":0,
      "desktops":"The Enlightenment Desktop",
      "link":"https://www.bodhilinux.com/",
      "linuxexpertise":1,
      "codename":"bodhi",
      "donate":"https://www.bodhilinux.com/donate/",
      "customtweaks":1,
   },
   {
      "notrolling":1,
      "matches":[],
      "name":"Knoppix",
      "lookalike":"0",
      "popularity":0,
      "oldnew":1,
      "shortdes":"An operating system designed to flash and run, straight from a CD/Pendrive.",
      "touch":0,
      "desktops":"The LXDE Desktop",
      "link":"http://www.knopper.net/knoppix/index-en.html",
      "linuxexpertise":1,
      "codename":"knoppix",
      "donate":"http://www.knopper.net/kontakt/index-en.php",
      "customtweaks":0,
   },
   {
      "notrolling":0,
      "matches":[],
      "name":"Feren OS",
      "lookalike":"windows",
      "popularity":0,
      "oldnew":1,
      "shortdes":"Made for today and tomorrow's generation. Fast updates, but stable. Customizable, with unique apps and features.",
      "touch":0,
      "desktops":"Customized Plasma and Cinnamon",
      "link":"https://ferenos.weebly.com/",
      "linuxexpertise":0,
      "codename":"ferenos",
      "donate":"https://ferenos.weebly.com/feedback-center.html ",
      "customtweaks":1,
   },
   {
      "notrolling":0,
      "matches":[],
      "name":"BlackArch",
      "lookalike":"0",
      "popularity":0,
      "oldnew":0,
      "shortdes":"BlackArch Linux is an Arch Linux-based penetration testing distribution for penetration testers and security researchers. ",
      "touch":0,
      "desktops":"It comes without one",
      "link":"https://blackarch.org/",
      "linuxexpertise":2,
      "codename":"blackarch",
      "donate":"https://blackarch.org/donate.html",
      "customtweaks":1,
   },
   {
      "notrolling":0,
      "matches":[],
      "name":"Sabayon",
      "lookalike":"0",
      "popularity":0,
      "oldnew":0,
      "shortdes":"An 'out of the box' experience, while based on Gentoo.",
      "touch":1,
      "desktops":"KDE Plasma, GNOME, Mate, and XFCE",
      "link":"https://www.sabayon.org/",
      "linuxexpertise":2,
      "codename":"sabayon",
      "donate":"https://www.sabayon.org/donate/",
      "customtweaks":1,
   },
   {
      "notrolling":1,
      "matches":[],
      "name":"OpenMandriva",
      "lookalike":"windows",
      "popularity":0,
      "oldnew":0,
      "shortdes":"A pinch of passion, A pinch of innovation, flavoured with fun.",
      "touch":0,
      "desktops":"The KDE Plasma Desktop",
      "link":"https://www.openmandriva.org/",
      "linuxexpertise":1,
      "codename":"openmandriva",
      "donate":"https://www.openmandriva.org/en/documentation/association/Donate?q=%2Fdonate",
      "customtweaks":0,
   },
   {
      "notrolling":1,
      "matches":[],
      "name":"Frugalware",
      "lookalike":"windows",
      "popularity":0,
      "oldnew":0,
      "shortdes":"The design decisions of Slackware, the package manager of Arch, and mixing easy to use with the terminal. A unique combination!",
      "touch":0,
      "desktops":"GNOME, KDE Plasma, XFCE, and Mate",
      "link":"https://frugalware.org/",
      "linuxexpertise":1,
      "codename":"frugalware",
      "donate":"https://frugalware.org/donations",
      "customtweaks":1,
   },
   {
      "notrolling":1,
      "matches":[],
      "name":"Slackware",
      "lookalike":"0",
      "popularity":0,
      "oldnew":1,
      "shortdes":"Slackware has been around for almost forever! An advanced distro with a goal of being stable and easy to use.",
      "touch":0,
      "desktops":"KDE Plasma, and XFCE",
      "link":"http://www.slackware.com/",
      "linuxexpertise":2,
      "codename":"slackware",
      "donate":"https://www.patreon.com/slackwarelinux",
      "customtweaks":0,
   },
   {
      "notrolling":1,
      "matches":[],
      "name":"Puppy Linux",
      "lookalike":"windows",
      "popularity":0,
      "oldnew":1,
      "shortdes":"Simple to use, and Grandpa-certified. Comes in many bases and flavours.",
      "touch":0,
      "desktops":"A customized JWM desktop",
      "link":"http://puppylinux.org/main/Overview%20and%20Getting%20Started.htm",
      "linuxexpertise":0,
      "codename":"puppylinux",
      "donate":"https://www.paypal.com/donate/?token=36saFjRNFZ7Dr479mP2l14_jcylLi7JPK57tNoOg_wZMRF-DPp5ZgRJqCS-rTi1vugso3m&country.x=PH&locale.x=PH",
      "customtweaks":1,
   },
   {
      "notrolling":0,
      "matches":[],
      "name":"Chakra Linux",
      "lookalike":"windows",
      "popularity":0,
      "oldnew":0,
      "shortdes":"An independent distro with strong ties to QT and the KDE desktop. It tries minimizing uses of other toolkits to stick with QT, and KDE.",
      "touch":0,
      "desktops":"The KDE Plasma Desktop",
      "link":"https://www.chakralinux.org/",
      "linuxexpertise":1,
      "codename":"chakralinux",
      "donate":"https://www.chakralinux.org/?donate",
      "customtweaks":0,
   },
   {
      "notrolling":1,
      "matches":[],
      "name":"Kubuntu",
      "lookalike":"windows",
      "popularity":1,
      "oldnew":1,
      "shortdes":"The stable, and Ubuntu based KDE distro! Vanilla KDE Plasma combined with the stability and ease of use of Ubuntu!",
      "touch":0,
      "desktops":"The KDE Plasma Desktop",
      "link":"https://kubuntu.org/",
      "linuxexpertise":0,
      "codename":"kubuntu",
      "donate":"https://kubuntu.org/contribute-to-kubuntu/",
      "customtweaks":0,
   },
   {
      "notrolling":1,
      "matches":[],
      "name":"Xubuntu",
      "lookalike":"0",
      "popularity":1,
      "oldnew":1,
      "shortdes":"The lightweight yet powerful XFCE desktop, now on Ubuntu.",
      "touch":0,
      "desktops":"The XFCE Desktop",
      "link":"https://xubuntu.org/",
      "linuxexpertise":0,
      "codename":"xubuntu",
      "donate":"https://xubuntu.org/donations/",
      "customtweaks":0,
   },
   {
      "notrolling":1,
      "matches":[],
      "name":"Ubuntu Budgie",
      "lookalike":"0",
      "popularity":1,
      "oldnew":1,
      "shortdes":"Solus's home grown Budgie desktop, customizable yet quick, unique yet easy to use, now on Ubuntu!",
      "touch":0,
      "desktops":"The Budgie Desktop",
      "link":"https://ubuntubudgie.org/",
      "linuxexpertise":0,
      "codename":"ubuntubudgie",
      "donate":"https://ubuntubudgie.org/contribute",
      "customtweaks":0,
   },
   {
      "notrolling":1,
      "matches":[],
      "name":"Ubuntu MATE",
      "lookalike":"windows",
      "popularity":1,
      "oldnew":1,
      "shortdes":"Ubuntu Mate - For a retrospective future",
      "touch":0,
      "desktops":"A customized Mate desktop",
      "link":"https://ubuntu-mate.org/",
      "linuxexpertise":0,
      "codename":"ubuntumate",
      "donate":"https://ubuntu-mate.org/donate/",
      "customtweaks":1,
   },
   {
      "notrolling":0,
      "matches":[],
      "name":"NixOS",
      "lookalike":"0",
      "popularity":0,
      "oldnew":1,
      "shortdes":"The Purely Functional Linux Distribution",
      "touch":0,
      "desktops":"The KDE Plasma Desktop",
      "link":"https://nixos.org/",
      "linuxexpertise":2,
      "codename":"nixos",
      "donate":"https://nixos.org/nixos/community.html",
      "customtweaks":0,
   },
   {
      "notrolling":0,
      "matches":[],
      "name":"Void Linux",
      "lookalike":"0",
      "popularity":0,
      "oldnew":1,
      "shortdes":"Void Linux is an independent Linux distribution that uses the XBPS package manager along with the runit init system.",
      "touch":0,
      "desktops":"Enlightenment, Cinnamon, LXDE, Mate, and XFCE",
      "link":"https://voidlinux.org/",
      "linuxexpertise":2,
      "codename":"void",
      "donate":"https://liberapay.com/voidforum/donate",
      "customtweaks":0,
   },
   {
      "notrolling":1,
      "matches":[],
      "name":"Mageia XFCE and KDE Plasma",
      "lookalike":"Windows",
      "popularity":0,
      "oldnew":1,
      "shortdes":"Beyond delivering a secure, stable and sustainable operating system, is to also build great tools for people.",
      "touch":0,
      "desktops":"KDE Plasma, and XFCE",
      "link":"https://www.mageia.org/en/",
      "linuxexpertise":1,
      "codename":"mageia",
      "donate":"https://www.mageia.org/en/contribute/",
      "customtweaks":0,
   },
   {
      "notrolling":0,
      "matches":[],
      "name":"Alpine Linux",
      "lookalike":"0",
      "popularity":0,
      "oldnew":1,
      "shortdes":"Alpine Linux is a security-oriented, lightweight Linux distribution based on musl libc and busybox.",
      "touch":0,
      "desktops":"It comes without one",
      "link":"https://www.alpinelinux.org/",
      "linuxexpertise":2,
      "codename":"alpine",
      "donate":"https://www.alpinelinux.org/community/",
      "customtweaks":0,
   }
]

function optionSelected(optionName) {
  var option = document.getElementsByName(optionName);
  for (var i = 0, length = option.length; i < length; i++)
  {
   if (option[i].checked)
   {
    // return option
    return (option[i].value);
    // stop checking if found already
    break;
   }
  }
  // if no checkmarks were clicked, default to 0
  return 0;
}


// generic shuffle function, used to shuffle distros when displayed in the chooser and the distro list
function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
  }
  return a;
}

function distro(){
  // assign user values to variable
  linuxexpertise = optionSelected("linuxexpertise");
  oldnew = optionSelected("oldnew");
  updates = optionSelected("updates");
  lookalike = optionSelected("lookalike");
  touch = optionSelected("touch");
  popularity = optionSelected("popularity");
  customtweaks = optionSelected("customtweaks");

  // shuffle the lists inside the list (order of distros)
  distros = shuffle(distros);
  // this will be the order of user input, and distro output
  //var UserOptions=[linuxexpertise,oldnew,updates,lookalike,touch,popularity,customtweaks];
  var SelectedDistros = [];
  var SelectedDistrosMatches = [];

  // add to selected distro db if technical expertise is lower or equal to user
  for (i = 0; i < 43; i++)  {
    if (distros[i].linuxexpertise <= linuxexpertise) {
      // add distros[i] (the distro) to SelectedDistros list
      SelectedDistros.push(distros[i]);
    }
  }
  for (i = 0; i < SelectedDistros.length; i++) {
    // OLD HARDWARE SUPPORT
    // if old hardware support is "don't care" or it matches with the distro, say it matches with the user choice
    // has a "don't care" option
    if (oldnew == 0 || SelectedDistros[i].oldnew == oldnew){
      SelectedDistros[i].matches.push(0);
    }
    else {
      SelectedDistros[i].matches.push(1);
    }

    // UPDATES
    // notrolling basically means stable, and 0 means fast, 1 means stable TODO add slow option
    if (SelectedDistros[i].notrolling == updates){
      console.log(SelectedDistros[i].name)
      console.log("same")
      SelectedDistros[i].matches.push(0);
    }
    else {
      SelectedDistros[i].matches.push(1);
    }

    // LOOKALIKE
    // if lookalike is "don't care" or it matches with the distro, say it matches with the user choice
    // has a "don't care" option
    if (lookalike == 0 || SelectedDistros[i].lookalike == lookalike){
      SelectedDistros[i].matches.push(0);
    }
    else {
      SelectedDistros[i].matches.push(1);
    }

    // TOUCH
    // if touch is "don't care" or it matches with the distro, say it matches with the user choice
    // has a "don't care" option
    if (touch == 0 || SelectedDistros[i].touch == touch){
      SelectedDistros[i].matches.push(0);
    }
    else {
      SelectedDistros[i].matches.push(1);
    }

    // POPULARITY
    // 1 is more popular, 0 is less popular
    if (SelectedDistros[i].popularity == popularity){
      SelectedDistros[i].matches.push(0);
    }
    else {
      SelectedDistros[i].matches.push(1);
    }

    // CUSTOM TWEAKS
    // if it's a generic desktop (like gnome), or something different (like elementary)
    // if it's same as user choice, or if 0 (doesn't matter)
    if (SelectedDistros[i].customtweaks == customtweaks || customtweaks == 0){
      SelectedDistros[i].matches.push(0);
    }
    else {
      SelectedDistros[i].matches.push(1);
    }
    // final part of list of list for distro to add all 0's and 1's (total)
    SelectedDistros[i].matches.push(SelectedDistros[i].matches[0]+SelectedDistros[i].matches[1]+SelectedDistros[i].matches[2]+SelectedDistros[i].matches[3]+SelectedDistros[i].matches[4]+SelectedDistros[i].matches[5]);
    //sort the selected distro db by ascending order by the total part
  }
  SelectedDistros = SelectedDistros.sort((a, b) => parseFloat(a.matches[6]) - parseFloat(b.matches[6]));

  // only take first 20 lists in the selected distro db list
  SelectedDistros.splice(20);
  console.log(SelectedDistros);

  // hide the entire html id questions
  document.getElementById("questions").parentNode.removeChild(document.getElementById("questions"));
  document.getElementById("text").parentNode.removeChild(document.getElementById("text"));

  // add Jumbotron
  document.getElementById("distroFoundJumbotron").innerHTML += '<section class="jumbotron mx-5 my-5"><div class="container text-center"><h1 class="jumbotron-heading">Distros found!</h1><p class="lead">All distros found are ordered descending from peak similarity</p></div></section>';

  //array with does match, doesn't match
  match=[" ✔️"," ❌"];
  oldnewsupport=["Doesn't support old hardware","Supports old hardware"]
  updatesupport =["Fast updates","Stable updates"]
  touchsupport=["No touch support","Touch support"]
  popularitysupport=["Less popular","Very popular"]
  appearancesupport=["A default desktop","A unique aesthetic and design"]

  // add card each time in for loop, with distro
  for (j = 0; j < SelectedDistros.length; j++){
    current = SelectedDistros[j];
    if (current.lookalike == "0"){
      lookalikesupport = "Lookalike doesn't matter"
    }
    else if (current.lookalike == "mac") {
      lookalikesupport = "Similar aesthetic to macOS"
    }
    else {
      lookalikesupport = "Similar aesthetic to Windows"
    }
    document.getElementById("distroFound").innerHTML +=
    // card div
    '<div class="card mx-auto my-3 text-center" style="width: 22rem;">'+
      '<div class="align-items-center">'+
        // distro logo
        '<img class="m-2"src="logos/'+current.codename+'.png" alt="'+current.name+' Logo" width="200" height=auto>'+
      '</div>'+
      // body, including if each category matches or not
      '<div class="card-body">'+
        '<h5 class="card-title">'+current.name+'</h5>'+
        '<p class="card-text font-weight-bold">'+current.shortdes+'</p>'+
        '<p class="card-text">'+oldnewsupport[current.oldnew]+match[current.matches[0]]+'</p>'+
        '<p class="card-text">'+updatesupport[current.notrolling]+match[current.matches[1]]+'</p>'+
        '<p class="card-text">'+lookalikesupport+match[current.matches[2]]+'</p>'+
        '<p class="card-text">'+touchsupport[current.touch]+match[current.matches[3]]+'</p>'+
        '<p class="card-text">'+popularitysupport[current.popularity]+match[current.matches[4]]+'</p>'+
        '<p class="card-text">'+appearancesupport[current.customtweaks]+match[current.matches[5]]+'</p>'+
        '<a href='+current.link+' class="btn btn-purple btn-space" target="_blank">Website</a>'+
        '<a href='+current.donate+' class="btn btn-success btn-space" target="_blank">Contribute</a>'+
      '</div>'+
      // which desktops the distro has
      '<div class="card-footer">Desktop(s): '+current.desktops+'</div>'+
    '</div>';
  }
  twemoji.parse(document.body);
  scroll(0,0);
}
function distrolist(){
  distrolist=shuffle(distros)
  for (var i = 0; i < 43; i++){
    document.getElementById("distrolist").innerHTML +=
    // card div
    '<div class="card mx-auto my-3 text-center" style="width: 22rem;">'+
      '<div class="align-items-center">'+
        // distro logo
        '<img class="m-2"src="logos/'+distrolist[i].codename+'.png" alt="'+distrolist[i].name+' logo" width="200" height=auto>'+
      '</div>'+
      // card body, including title, description, website button, and contribution button
      '<div class="card-body">'+
        '<h5 class="card-title">'+distrolist[i].name+'</h5>'+
        '<p class="card-text font-weight-bold">'+distrolist[i].shortdes+'</p>'+
        '<a href="'+distrolist[i].link+'" class="btn btn-purple btn-space" target="_blank">Website</a>'+
        '<a href="'+distrolist[i].donate+'" class="btn btn-success btn-space" target="_blank">Contribute</a>'+
      '</div>'+
      // card body including each desktop in the distro
      '<div class="card-footer">Desktop(s): '+distrolist[i].desktops+'</div>'+
    '</div>'
  }
}
