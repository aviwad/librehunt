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
  // if no checkmarks were clicked, default to 0
  return 0;
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
  var SelectedDistros = [];

  // add to selected distro db if technical expertise is lower or equal to user
  for (i = 0; i < 43; i++)  {
    if (distros[i][1] <= linuxexpertise) {
      // add distros[i] (the distro) to SelectedDistros list
      SelectedDistros.push(distros[i]);
    }
  }
  for (i = 0; i < SelectedDistros.length; i++) {
    // 0 or 1 for same or not as user per DistroProperty (if property is a filter one and user clicked doesn't care, give a 0)
    for (var variable = 0; variable < 8; variable++) {
      if (variable == 0 || variable == 2 || variable == 3) {
        if (UserOptions[variable+1]==0 || UserOptions[variable+1] == SelectedDistros[i][variable+2]){
          SelectedDistros[i].push(0);
        }
        else {
          SelectedDistros[i].push(1);
        }
      }
      else if (UserOptions[variable+1] == SelectedDistros[i][variable+2]){
        SelectedDistros[i].push(0);
      }
      else {
        SelectedDistros[i].push(1);
      }
    }
    // final part of list of list for distro to add all 0's and 1's (total)
    SelectedDistros[i].push(SelectedDistros[i][14]+SelectedDistros[i][15]+SelectedDistros[i][16]+SelectedDistros[i][17]+SelectedDistros[i][18]+SelectedDistros[i][19]+SelectedDistros[i][20]+SelectedDistros[i][21]);
    //sort the selected distro db by ascending order by the total part
    SelectedDistros.sort(function(a,b){
      return a[21] - b[21];
    });
  }
  //only take first 20 lists in the selected distro db list
  SelectedDistros.splice(20);

  // hide the entire html id questions
  document.getElementById("questions").parentNode.removeChild(document.getElementById("questions"));
  document.getElementById("text").parentNode.removeChild(document.getElementById("text"));

  // add Jumbotron
  document.getElementById("distroFoundJumbotron").innerHTML += '<section class="jumbotron mx-5 my-5"><div class="container text-center"><h1 class="jumbotron-heading">Distros found!</h1><p class="lead">All distros matching even a little of what you said are here, ordered ascending to what is the most similar to what you wanted to what is the most dissimilar</p></div></section>';

  //array with does match, doesn't match
  match=["Does Match ✔️","Does Not Match ❌"];

  // add card each time in for loop, with distro
  for (j = 0; j < SelectedDistros.length; j++){
    current = SelectedDistros[j];
    document.getElementById("distroFound").innerHTML +='<div class="card mx-auto my-3 text-center" style="width: 22rem;"><div class="align-items-center"><img class="m-2"src="../static/logos/'+current[10]+'.png" alt="Disro Logo" width="200" height=auto></div><div class="card-body"><h5 class="card-title">'+current[0]+'</h5><p class="card-text font-weight-bold">'+current[13]+'</p><p class="card-text">Old Hardware Support:'+match[current[14]]+'</p><p class="card-text">Timely Updates:'+match[current[15]]+'</p><p class="card-text">Lookalike:'+match[current[16]]+'</p><p class="card-text">Touch Support:'+match[current[17]]+'</p><p class="card-text">Extreme Security:'+match[current[18]]+'</p><p class="card-text">Popularity and Support:'+match[current[19]]+'</p><p class="card-text">Appearance:'+match[current[20]]+'</p><a href='+current[11]+' class="btn btn-purple btn-space" target="_blank">Website</a><a href='+current[12]+' class="btn btn-success btn-space" target="_blank">Contribute</a></div><div class="card-footer">Desktop(s): '+current[9]+'</div></div>';
  }
  twemoji.parse(document.body);
  scroll(0,0);
}
function distrolist(){
  distrolist=shuffle(distros)
  console.log(distrolist)
  for (var i = 0; i < 43; i++){
    document.getElementById("distrolist").innerHTML +='<div class="card mx-auto my-3 text-center" style="width: 22rem;"><div class="align-items-center"><img class="m-2"src="../static/logos/'+distrolist[i][10]+'.png" alt="Card image cap" width="200" height=auto></div><div class="card-body"><h5 class="card-title">'+distrolist[i][0]+'</h5><p class="card-text font-weight-bold">'+distrolist[i][13]+'</p><a href="'+distrolist[i][11]+'" class="btn btn-purple btn-space" target="_blank">Website</a><a href="'+distrolist[i][12]+'" class="btn btn-success btn-space" target="_blank">Contribute</a></div><div class="card-footer">Desktop(s): '+distrolist[i][9]+'</div></div>'
  }
}
