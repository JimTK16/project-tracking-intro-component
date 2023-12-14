const openBtn = document.querySelector(".btn-menu-open");
const closeBtn = document.querySelector(".btn-menu-close");
const drawerMobile = document.querySelector(".drawer-mobile");

const openDrawer = () => {
  openBtn.style.display = "none";
  closeBtn.style.display = "block";
  drawerMobile.style.display = "flex";
};
const closeDrawer = () => {
  openBtn.style.display = "block";
  closeBtn.style.display = "none";
  drawerMobile.style.display = "none";
};

openBtn.addEventListener("click", openDrawer);
closeBtn.addEventListener("click", closeDrawer);
