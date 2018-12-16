// actual database for distros can be found in static/distro.db (SQLite3 database)
distros = [['Elementary OS', 0, 0, 1, 'mac', 1, 0, 1, 1,
         "It's own unique Pantheon desktop", 'elementary',
         'https://elementary.io/', 'https://elementary.io/get-involved#funding',
          'A fast and open replacement for Windows and macOS'],
          ['Linux Mint', 0, 1, 1, 'windows', 0, 0, 1, 0, 'Mate, Cinnamon, and XFCE', 'mint', 'https://linuxmint.com/',
          'https://linuxmint.com/donors.php', 'A modern, elegant and comfortable operating system which is both powerful and easy to use.']
          , ['Ubuntu', 0, 0, 1, '0', 1, 0, 1, 1, 'A customized GNOME desktop', 'ubuntu', 'https://www.ubuntu.com/download/desktop',
          'https://www.ubuntu.com/download/desktop/thank-you', 'Linux for Human Beings.'], ['Solus', 1, 0, 0, '0', 1, 0, 1, 0,
          'Budgie, GNOME, and Mate', 'solus', 'https://solus-project.com/', 'https://solus-project.com/support/', 'The Personal OS for Personal Computers.'],
          ['Zorin OS', 0, 0, 1, 'windows', 1, 0, 0, 1, 'A customized GNOME desktop', 'zorin', 'https://zorinos.com/', 'https://zorinos.com/about/', "A desktop as versatile as it's easy to use."],
          ['Endless OS', 0, 0, 0, 'windows', 1, 1, 1, 1, 'A GNOME based desktop', 'endless', 'https://endlessos.com/',
          'https://endlessos.com/community/', 'The operating system that comes with everything your family needs.'],
          ['PureOS', 1, 0, 1, '0', 1, 1, 0, 0, 'The GNOME Desktop', 'pure', 'https://www.pureos.net/', 'https://puri.sm/products/',
          'A user friendly, secure and freedom respecting OS for your daily usage.'], ['Trisquel', 1, 1, 1, 'windows', 0, 1, 0, 0,
          'The Mate Desktop', 'trisquel', 'https://trisquel.info/', 'https://trisquel.info/en/donate',
          'A fully free operating system for home users, small enterprises and educational centers.'],
          ['Parabola', 2, 1, 0, '0', 0, 1, 1, 0, 'It comes without one', 'parabola', 'https://www.parabola.nu/',
          'https://liberapay.com/Parabola/donate', 'A distro giving you complete control over your system, with 100% "libre" software.'],
          ['Guix', 2, 1, 0, '0', 0, 1, 0, 0, 'It comes without one', 'guix', 'https://www.gnu.org/software/guix/', 'https://www.gnu.org/software/guix/contribute/',
          'An advanced distribution of the GNU operating system developed by the GNU Project—which respects the freedom of computer users.'], ['Kali Linux', 2, 1, 0, '0', 0, 1, 1, 0,
          'GNOME, Mate, KDE Plasma, LXQT, Enlightenment, and XFCE', 'kali', 'https://www.kali.org/', 'https://docs.kali.org/contribute', 'Penetration Testing and Ethical Hacking Linux Distribution.'],
          ['Tails', 2, 0, 1, '0', 0, 1, 0, 0, 'A customized GNOME desktop', 'tails', 'https://tails.boum.org/', 'https://tails.boum.org/donate?r=sidebar',
          'Privacy for anyone anywhere.'], ['Qubes OS', 2, 0, 1, '0', 0, 1, 0, 0, 'It comes without one', 'qubes', 'https://www.qubes-os.org/',
          'https://www.qubes-os.org/donate/', 'A reasonably secure operating system'], ['Fedora', 1, 1, 1, '0', 1, 1, 1, 0, 'GNOME, but has spins for Mate, Cinnamon, KDE Plasma, XFCE, and LXQT',
          'fedora', 'https://getfedora.org/', 'https://fedoraproject.org/wiki/Donations', 'Choose Freedom. Choose Fedora.'], ['Debian', 1, 1, 1, '0', 1, 0, 1, 0, 'GNOME, KDE Plasma, XFCE, LXQT, and Mate', 'debian', 'https://www.debian.org/'
          , 'https://www.debian.org/donations', "The Universal Operating System. Super stable, with most other distro's being based on this."],
          ['OpenSUSE Leap', 2, 0, 1, '0', 1, 0, 1, 0, 'Cinnamon, Englightenment, Gnome, KDE Plasma, Mate, XFCE, and LXQT', 'leap', 'https://www.opensuse.org/', 'https://en.opensuse.org/Portal:How_to_participate',
          'Get the most complete Linux distribution with openSUSE’s latest regular-release version!'], ['Deepin', 0, 0, 0, 'mac', 1, 0, 1, 1, "It's own unique Deepin desktop", 'deepin', 'https://www.deepin.org/en/', 'http://feedback.deepin.org/', 'An elegant, user-friendly and reliable operating system. '], ['Arch', 2, 0, 0, '0', 0, 0, 1, 0, 'It comes without one', 'arch',
          'https://www.archlinux.org/', 'https://www.archlinux.org/donate/', 'A lightweight and flexible Linux® distribution that tries to Keep It Simple.'], ['Gentoo', 2, 1, 0, '0', 0, 1, 1, 0, 'It comes without one', 'gentoo', 'https://www.gentoo.org/', 'https://www.gentoo.org/get-involved/contribute/',
          'Welcome to Gentoo, a flexible, source-based Linux distribution that becomes just about any system you need—and much more.'], ['OpenSUSE Tumbleweed', 2, 0, 0, '0', 1, 0, 1, 0, 'Cinnamon, Englightenment, Gnome, KDE Plasma, Mate, XFCE, and LXQT', 'tumbleweed',
          'https://www.opensuse.org/', 'https://en.opensuse.org/Portal:How_to_participate', "The newest Linux packages with OpenSUSE's rolling release. Fast! Integrated! Stabilized! Tested!"],
          ['Manjaro', 1, 1, 0, '0', 1, 0, 1, 1, 'XFCE, KDE Plasma, and GNOME, but has community editions for Budgie, Cinnamon, Deepin, Mate, and LXQT', 'manjaro', 'https://manjaro.org/', 'https://manjaro.org/feedback/',
          'Professional and user-friendly Linux at its best. Evolving and giving the Linux world a new face and operating experience.'], ['Pop!_OS', 1, 0, 1, '0', 1, 0, 1, 1, 'A customized GNOME desktop', 'popos',
          'https://system76.com/pop', 'https://system76.com/pop/community', 'An OS for the software developer, maker, and computer science professional.'], ['Mageia GNOME', 1, 1, 1, '0', 1, 0, 0, 0, 'KDE Plasma, GNOME, and XFCE',
          'mageia', 'https://www.mageia.org/en/', 'https://www.mageia.org/en/contribute/', 'Beyond delivering a secure, stable and sustainable operating system, is to also build great tools for people.'],
          ['KDE Neon', 0, 0, 0, 'windows', 0, 0, 1, 0, 'The KDE Plasma Desktop', 'neon', 'https://neon.kde.org/', 'https://www.kde.org/donations', 'The latest and greatest of the KDE Plasma desktop on the rock solid base of Ubuntu.'],
          ['Linux Lite', 0, 1, 1, 'windows', 0, 0, 0, 1, 'A customized XFCE desktop', 'linuxlite', 'https://www.linuxliteos.com/', 'https://www.linuxliteos.com/donate.html', "With a Windows-like interface given a design reboot, it's an easy to use and very customizable Ubuntu based distro."], ['Bodhi Linux', 1, 1, 1, '0', 0, 0, 0, 1,
          'The Enlightenment Desktop', 'bodhi', 'https://www.bodhilinux.com/', 'https://www.bodhilinux.com/donate/', 'Lightweight, with its own in-house Enlightenment desktop, while being based on Ubuntu.'],
          ['Knoppix', 1, 1, 1, '0', 0, 1, 0, 0, 'The LXDE Desktop', 'knoppix', 'http://www.knopper.net/knoppix/index-en.html', 'http://www.knopper.net/kontakt/index-en.php', 'An operating system designed to flash and run, straight from a CD/Pendrive.'],
          ['Feren OS', 0, 1, 0, 'windows', 0, 0, 0, 1, 'A customized Cinnamon desktop', 'ferenos', 'https://ferenos.weebly.com/', 'https://gitlab.com/Feren-OS/feren-OS-Bug-Reporting/issues',
          "Made for today and tomorrow's generation. Fast updates, but stable. Customizable, with unique apps and features."], ['BlackArch', 2, 0, 0, '0', 0, 1, 0, 1,
          'It comes without one', 'blackarch', 'https://blackarch.org/', 'https://blackarch.org/donate.html', 'BlackArch Linux is an Arch Linux-based penetration testing distribution for penetration testers and security researchers. '],
          ['Sabayon', 2, 0, 0, '0', 1, 0, 0, 1, 'KDE Plasma, GNOME, Mate, and XFCE', 'sabayon', 'https://www.sabayon.org/', 'https://www.sabayon.org/donate/', 'An "out of the box" experience, while based on Gentoo.'],
          ['OpenMandriva', 1, 0, 1, 'windows', 0, 0, 0, 0, 'The KDE Plasma Desktop', 'openmandriva', 'https://www.openmandriva.org/', 'https://www.openmandriva.org/en/documentation/association/Donate?q=%2Fdonate',
          'A pinch of passion, A pinch of innovation, flavoured with fun.'], ['Frugalware', 1, 0, 1, 'windows', 0, 0, 0, 1, 'GNOME, KDE Plasma, XFCE, and Mate', 'frugalware',
          'https://frugalware.org/', 'https://frugalware.org/donations', 'The design decisions of Slackware, the package manager of Arch, and mixing easy to use with the terminal. A unique combination!'],
          ['Slackware', 2, 1, 1, '0', 0, 0, 0, 0, 'KDE Plasma, and XFCE', 'slackware', 'http://www.slackware.com/', 'https://www.reddit.com/r/linux/comments/93bkga/slackware_founder_getting_ripped_off_by_slackware/',
          'Slackware has been around for almost forever! An advanced distro with a goal of being stable and easy to use.'], ['Puppy Linux', 0, 1, 1, 'windows', 0, 0, 0, 1, 'A customized JWM desktop', 'puppylinux',
          'http://puppylinux.org/main/Overview%20and%20Getting%20Started.htm', 'https://www.paypal.com/donate/?token=36saFjRNFZ7Dr479mP2l14_jcylLi7JPK57tNoOg_wZMRF-DPp5ZgRJqCS-rTi1vugso3m&country.x=PH&locale.x=PH', 'Simple to use, and Grandpa-certified. Comes in many bases and flavours.'], ['Chakra Linux', 1, 0, 0, 'windows', 0, 0, 0, 0,
          'The KDE Plasma Desktop', 'chakralinux', 'https://www.chakralinux.org/', 'https://www.chakralinux.org/?donate', 'An independent distro with strong ties to QT and the KDE desktop. It tries minimizing uses of other toolkits to stick with QT, and KDE.'],
          ['Kubuntu', 0, 1, 1, 'windows', 0, 0, 1, 0, 'The KDE Plasma Desktop', 'kubuntu', 'https://kubuntu.org/', 'https://kubuntu.org/contribute-to-kubuntu/', 'The stable, and Ubuntu based KDE distro! Vanilla KDE Plasma combined with the stability and ease of use of Ubuntu!'],
          ['Xubuntu', 0, 1, 1, '0', 0, 0, 1, 0, 'The XFCE Desktop', 'xubuntu', 'https://xubuntu.org/', 'https://xubuntu.org/donations/', 'The lightweight yet powerful XFCE desktop, now on Ubuntu.'],
          ['Ubuntu Budgie', 0, 1, 1, '0', 0, 0, 1, 0, 'The Budgie Desktop', 'ubuntubudgie', 'https://ubuntubudgie.org/', 'https://ubuntubudgie.org/contribute', "Solus's home grown Budgie desktop, customizable yet quick, unique yet easy to use, now on Ubuntu!"],
          ['Ubuntu MATE', 0, 1, 1, 'windows', 0, 0, 1, 1, 'A customized Mate desktop', 'ubuntumate', 'https://ubuntu-mate.org/', 'https://ubuntu-mate.org/donate/', 'Ubuntu Mate - For a retrospective future'],
          ['NixOS', 2, 1, 0, '0', 0, 1, 0, 0, 'The KDE Plasma Desktop', 'nixos', 'https://nixos.org/', 'https://nixos.org/nixos/community.html', 'The Purely Functional Linux Distribution'],
          ['Void Linux', 2, 1, 0, '0', 0, 1, 0, 0, 'Enlightenment, Cinnamon, LXDE, Mate, and XFCE', 'void', 'https://voidlinux.org/', 'https://liberapay.com/voidforum/donate', 'Void Linux is an independent Linux distribution that uses the XBPS package manager along with the runit init system.'],
          ['Mageia XFCE and KDE Plasma', 1, 1, 1, 'Windows', 0, 0, 0, 0, 'KDE Plasma, and XFCE', 'mageia', 'https://www.mageia.org/en/', 'https://www.mageia.org/en/contribute/', 'Beyond delivering a secure, stable and sustainable operating system, is to also build great tools for people.'],
          ['Alpine Linux', 2, 1, 0, '0', 0, 1, 0, 0, 'It comes without one', 'alpine', 'https://www.alpinelinux.org/', 'https://www.alpinelinux.org/community/', 'Alpine Linux is a security-oriented, lightweight Linux distribution based on musl libc and busybox.']];
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
}

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
  secure = optionSelected("secure");
  popularity = optionSelected("popularity");
  customtweaks = optionSelected("customtweaks");

  // shuffle the lists inside the list (order of distros)
  distros = shuffle(distros);

  // this will be the order of user input, and distro output
  var UserOptions=[linuxexpertise,oldnew,updates,lookalike,touch,secure,popularity,customtweaks];
  // empty array for selected distros
  var SelectedDistros = [];
  // loop through database
  // 43 IS DISTRO LIST, CHANGE IF DISTROS ADDED
  for (i = 0; i < 43; i++)  {
    if (distros[i][1] <= linuxexpertise) {
      // add distros[i] (the distro) to SelectedDistros list
      SelectedDistros.push(distros[i]);
    }
  }
  SelectedDistrosLength = SelectedDistros.length;
  for (i = 0; i < SelectedDistrosLength; i++) {
    // loop 8 times, add [] to current distro
    for (j = 0; j < 8; j++){
      SelectedDistros[i].push([]);
    }
    for (var index = 0; index < 7; index++){
      if (index == 0 || index == 2 || index == 3){
        if (UserOptions[index+1] != 0){
          if (UserOptions[index+1] != SelectedDistros[i][index+2]){
            if (SelectedDistros[i][index+14].length == 1){
              SelectedDistros[i][index+14][0] = 1;
            }
            else{
              SelectedDistros[i][index+14].push(1);
            }
          }
        }
      }
      else if (UserOptions[index+1] != SelectedDistros[i][index+2]){
        if (SelectedDistros[i][index+14].length == 1){
          SelectedDistros[i][index+14][0] = 1;
        }
        else{
          SelectedDistros[i][index+14].push(1);
        }
      }
    }
    SelectedDistros[i][21].push(0);
    for (j = 0; j < 7; j++){
      if (SelectedDistros[i][j+14].length == 1){
        SelectedDistros[i][21][0] = SelectedDistros[i][21][0]+SelectedDistros[i][j+14][0];
      }
    }
  SelectedDistros.sort(function(a,b){
    return a[21] - b[21];
  });
  // SelectedDistros = first twenty elements

  }
  SelectedDistros.splice(20);
  console.log(SelectedDistros);

}
