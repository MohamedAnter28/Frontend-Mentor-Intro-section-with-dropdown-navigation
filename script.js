const navLinks = document.querySelectorAll('.nav-links li');
const menuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const overflow = document.querySelector('.overflow');
const mobileLinks = document.querySelectorAll('.mobile-links li');

navLinks.forEach((link) => {
  const subMenu = link.querySelector('.sub-menu');
  link.addEventListener('click', () => {
    link.classList.toggle('active');
    subMenu.classList.toggle('active-menu');
  });
});

mobileLinks.forEach((link) => {
  const subMenu = link.querySelector('.mobile-sub');
  link.addEventListener('click', () => {
    link.classList.toggle('active');
    subMenu.classList.toggle('active-menu');
  });
});

const triggerButton = document.querySelector('.mobile-menu-btn');
const element1 = document.querySelector('.mobile-menu');
const closeButton = document.querySelector('.close');

// أضف مستمع حدث النقر إلى الزر
triggerButton.addEventListener('click', (event) => {
  // منع انتشار الحدث لمنع تنفيذ السلوك الافتراضي
  event.stopPropagation();

  // تبديل عنصر العرض لـ element1
  if (element1.style.display === 'none') {
    element1.style.display = 'block';
  } else {
    element1.style.display = 'none';
  }
});

// أضف مستمع حدث النقر إلى الزر .close
closeButton.addEventListener('click', (event) => {
  // تحقق مما إذا كان العنصر الذي تم النقر عليه هو زر الإغلاق
  if (event.target.classList.contains('close')) {
    // قم بإخفاء element1 إذا كان مرئيًا
    if (element1.style.display === 'block') {
      element1.style.display = 'none';
    }
  }
});

// أضف مستمع حدث النقر إلى الوثيقة لإخفاء element1 عند النقر في أي مكان آخر
document.addEventListener('click', (event) => {
  // تحقق مما إذا كان العنصر الذي تم النقر عليه ليس هو الزر triggerButton أو زر الإغلاق closeButton
  if (
    !event.target.classList.contains('mobile-menu-btn') &&
    !event.target.classList.contains('close')
  ) {
    // قم بإخفاء element1 إذا كان مرئيًا
    if (element1.style.display === 'block') {
      element1.style.display = 'none';
    }
  }
});

const p1 = document.querySelector('.p-1');
const p2 = document.querySelector('.p-2');
const mobileSub = document.querySelector('.mobile-sub');

p1.addEventListener('click', () => {
  mobileSub.style.display = 'block';
});

p2.addEventListener('click', () => {
  mobileSub.style.display = 'block';
});
