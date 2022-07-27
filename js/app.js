const receipt = document.querySelector(".receipt"),
  receiptWindow = document.querySelector(".receipt__window"),
  receiptOut = document.querySelector(".receipt__window-out"),
  btnReceipt = document.querySelector(".receipt__window-btn"),
  addCart = document.querySelector(".addCart");

addCart.addEventListener("click", () => {
  receipt.style.display = "flex";
  setTimeout(() => {
    receipt.style.opacity = "1";
  }, 100);
  setTimeout(() => {
    receiptWindow.style = `top: 50px;
                                height:100px; 
                                overflow-y: scroll;`;
  }, 200);
  document.body.style.overflow = "hidden";
});
btnReceipt.addEventListener("click", () => {
  location.reload();
});

const newOpa = document.querySelector(".bbww");
const newType = document.querySelector(".geodara");
newOpa.addEventListener("mouseover", () => {
  newType.style.opacity = "1";
  newType.style.transition = ".5s";
});
newOpa.addEventListener("mouseout", () => {
  newType.style.opacity = "0";
  newType.style.transition = ".5s";
});





const newTelegramm = document.querySelector(".nomertelef");
const newOpTelegrmm = document.querySelector(".telegram");
newTelegramm.addEventListener("mouseover", () => {
  newTelegramm.style.opacity = "0";
  newTelegramm.style.transition = ".5s";
  newOpTelegrmm.style.opacity = "1";
  newOpTelegrmm.style.transition = ".5s";
});

newTelegramm.addEventListener("mouseout", () => {
  newTelegramm.style.opacity = "1";
  newTelegramm.style.transition = "1s";
  newOpTelegrmm.style.opacity = "0";
  newOpTelegrmm.style.transition = ".5s";
});

const newWata = document.querySelector(".nomerteleff");
const newWhatsapp = document.querySelector(".whatsapp");
newWata.addEventListener("mouseover", () => {
  newWata.style.opacity = "0";
  newWata.style.transition = ".5s";
  newWhatsapp.style.opacity = "1";
  newWhatsapp.style.transition = ".5s";
});

newWata.addEventListener("mouseout", () => {
  newWata.style.opacity = "1";
  newWata.style.transition = "1s";
  newWhatsapp.style.opacity = "0";
  newWhatsapp.style.transition = ".5s";
});

const newViber = document.querySelector(".nomertelefff");
const newOpViber = document.querySelector(".viber");
newViber.addEventListener("mouseover", () => {
  newViber.style.opacity = "0";
  newViber.style.transition = ".5s";
  newOpViber.style.opacity = "1";
  newOpViber.style.transition = ".5s";
});

newViber.addEventListener("mouseout", () => {
  newViber.style.opacity = "1";
  newViber.style.transition = "1s";
  newOpViber.style.opacity = "0";
  newOpViber.style.transition = ".5s";
});

const sliderId = document.querySelectorAll(".carousel-item"),
  sliderName = document.querySelectorAll(".herova");

function slider() {
  for (let i = 0; i < sliderId.length; i++) {
    if (sliderId[i].classList.contains("active")) {
      for (let p = 0; p < sliderName.length; p++) {
        sliderName[p].classList.remove("active");
      }
      sliderName[i].classList.add("active");
    }
  }
  setTimeout(slider, 0);
}

slider();

const neponatno = document.querySelector(".asdfefef"),
  popupsam = document.querySelector(".diffpopup"),
  butSeting = document.querySelector(".butsent");

neponatno.addEventListener("click", () => {
  popupsam.style.display = "flex";
  popupsam.style.zIndex = "2";
  setTimeout(() => {
    popupsam.style.opacity = "1";
  }, 100);
});

butSeting.addEventListener("click", () => {
  location.reload();
});

const neponatnoo = document.querySelector(".asdfefeff"),
  popupsamm = document.querySelector(".diffpopupp"),
  butSetingg = document.querySelector(".butsentt");

neponatnoo.addEventListener("click", () => {
  popupsamm.style.display = "flex";
  popupsamm.style.zIndex = "2";
  setTimeout(() => {
    popupsamm.style.opacity = "1";
  }, 100);
});

butSetingg.addEventListener("click", () => {
  location.reload();
});

const neponatnooo = document.querySelector(".asdfefefff"),
  popupsammm = document.querySelector(".diffpopuppp"),
  butSetinggg = document.querySelector(".butsenttt");

neponatnooo.addEventListener("click", () => {
  popupsammm.style.display = "flex";
  popupsammm.style.zIndex = "2";
  setTimeout(() => {
    popupsammm.style.opacity = "1";
  }, 100);
});

butSetinggg.addEventListener("click", () => {
  location.reload();
});

const neponatnoooo = document.querySelector(".asdfefeffff"),
  popupsammmm = document.querySelector(".diffpopupppp"),
  butSetingggg = document.querySelector(".butsentttt");

neponatnoooo.addEventListener("click", () => {
  popupsammmm.style.display = "flex";
  popupsammmm.style.zIndex = "2";
  setTimeout(() => {
    popupsammmm.style.opacity = "1";
  }, 100);
});

butSetingggg.addEventListener("click", () => {
  location.reload();
});

const neponatnooooo = document.querySelector(".asdfefefffff"),
  popupsammmmm = document.querySelector(".diffpopuppppp"),
  butSetinggggg = document.querySelector(".butsenttttt");

neponatnooooo.addEventListener("click", () => {
  popupsammmmm.style.display = "flex";
  popupsammmmm.style.zIndex = "2";
  setTimeout(() => {
    popupsammmmm.style.opacity = "1";
  }, 100);
});

butSetinggggg.addEventListener("click", () => {
  location.reload();
});

const neponatnoooooo = document.querySelector(".asdfefeffffff"),
  popupsammmmmm = document.querySelector(".diffpopupppppp"),
  butSetingggggg = document.querySelector(".butsentttttt");

neponatnoooooo.addEventListener("click", () => {
  popupsammmmmm.style.display = "flex";
  popupsammmmmm.style.zIndex = "2";
  setTimeout(() => {
    popupsammmmmm.style.opacity = "1";
  }, 100);
});

butSetingggggg.addEventListener("click", () => {
  location.reload();
});

const fiveClik = document.querySelector(".five_clik"),
  theLastPopup = document.querySelector(".popap_last"),
  poiskNazad = document.querySelector(".search");

fiveClik.addEventListener("click", () => {
  theLastPopup.style.display = "flex";
  theLastPopup.style.flexDirection = "column";
  theLastPopup.style.opacity = "1";
});
poiskNazad.addEventListener("click", () => {
  location.reload();
});




// const sliders = document.getElementById('slider');
// const selector = document.getElementById('selector');
// const SelectValues = document.getElementById('SelectValue');
// const ProgressBars = document.getElementById('ProgressBar');
// const numOne = document.querySelector('.numerasiya');
// const numTwo = document.querySelector('.numerasiyaa');
// const numThree = document.querySelector('.numerasiyaaa');
// const numFour = document.querySelector('.numerasiyaaaa');


// SelectValues.innerHTML = sliders.value;

// sliders.oninput = function () {
//   SelectValues.innerHTML = this.value;
//   selector.style.left = this.value + '%';
//   ProgressBars.style.width = this.value + '%';
// }






const menuBurget = document.querySelector('.burger-btn')
const menu = document.querySelector('.menu')

menuBurget.addEventListener('click', () => {
  menuBurget.classList.toggle('active')
  menu.classList.toggle('menu_active')
})




const ratingItemsList = document.querySelectorAll('.rating__item')
const line = document.querySelector('.line')
const rating = document.querySelector('.rating')
const trap = document.querySelector('.innerLine')
const lineWidth = line.offsetWidth;
const screenWidth = window.screen.width
// console.log(lineWidth);


ratingItemsList.forEach(item =>
  item.addEventListener('mouseover', function () {
    let width = item.offsetLeft;
    trap.style.width = `${width}px`;
    trap.style.backgroundColor = '#314C51';
  }
  )
)
ratingItemsList.forEach(item =>
  item.addEventListener('mouseout', function () {
    let width = item.offsetLeft;
    trap.style.width = `${width}px`;
    trap.style.backgroundColor = '#c4c4c4';
  }
  )
)
ratingItemsList.forEach(item =>
  item.addEventListener('mouseover', function () {
    let height = item.offsetTop;
    if (screenWidth <= 767) {
      trap.style.width = 2 + 'px';
      trap.style.height = `${height}px`;
      trap.style.backgroundColor = '#314C51';
    }
  }
  )
)
ratingItemsList.forEach(item =>
  item.addEventListener('mouseout', function () {
    let height = item.offsetTop;
    if (screenWidth <= 767) {
      trap.style.width = 2 + 'px';
      trap.style.height = `${height}px`;
      trap.style.backgroundColor = '#c4c4c4';
    }
  }
  )
)



