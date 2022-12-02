let light = true;

function switchTheme() {
  // TODO: implement toggling the light/dark theme
  if (light) {
    let body = document.querySelector("body");
    let navbar = document.querySelector("nav");
    let cards = document.getElementsByClassName("card");
    let table = document.querySelector("table");
    let footer = document.getElementsByClassName("navbar mt-5");

    body.classList.add("bg-dark");
    navbar.classList.add("navbar-dark", "bg-dark");

    for (let i = 0; i < cards.length; i++) {
      cards[i].classList.add('text-white', 'bg-dark', 'border-light');
    }

    table.classList.add('table-dark');
    footer[0].style.cssFloat = "right";
    footer[0].classList.add("text-white");

    document.getElementsByClassName("container mb-5")[0].innerHTML = "<h1>This is the Dark theme</h1>";

    document.querySelector(".mb-5").classList.add("text-white");
    document.querySelectorAll(".row")[2].classList.add("text-white");
    let columns = document.querySelectorAll(".col");
    let h2Elements = document.getElementsByTagName("h2");
    for (let i = 0; i < 3; i++) {
      columns[i].classList.add("col-md-12");
      h2Elements[i].innerHTML = `Row ${i + 1} of 3`
    }
    document.getElementById("themeSwitch").innerHTML = "Activate Light Theme"
    light = false;
  } else {
    let body = document.querySelector("body");
    let navbar = document.querySelector("nav");
    let cards = document.getElementsByClassName("card");
    let table = document.querySelector("table");
    let footer = document.getElementsByClassName("navbar mt-5");

    body.classList.remove("bg-dark");
    navbar.classList.remove("navbar-dark", "bg-dark");

    for (let i = 0; i < cards.length; i++) {
      cards[i].classList.remove('text-white', 'bg-dark', 'border-light');
    }

    table.classList.remove('table-dark');
    footer[0].style.cssFloat = "left";
    footer[0].classList.remove("text-white");

    document.getElementsByClassName("container mb-5")[0].innerHTML = "<h1>This is the Light theme</h1>";

    document.querySelector(".mb-5").classList.remove("text-white");
    document.querySelectorAll(".row")[2].classList.remove("text-white");
    let columns = document.querySelectorAll(".col");
    let h2Elements = document.getElementsByTagName("h2");
    for (let i = 0; i < 3; i++) {
      columns[i].classList.remove("col-md-12");
      h2Elements[i].innerHTML = `Column ${i + 1} of 3`
    }
    document.getElementById("themeSwitch").innerHTML = "Activate Dark Theme"
    light = true;
  }
}