// برای باز و بسته کردن سایدبار
const toggleButton = document.getElementById('toggleSidebar');
const sidebar = document.getElementById('sidebar');
// افزودن رویداد کلیک به دکمه داشبورد
toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('open'); 
});
// بستن سایدبار وقتی بیرون از آن کلیک می‌شود
document.addEventListener('click', (event) => {
    if (!sidebar.contains(event.target) && !toggleButton.contains(event.target)) {
        sidebar.classList.remove('open');
    }
});

//برای باز و بسته شدن نوتیف و پروفایل باکس
const bellButton = document.querySelector('.bellbtn');
const notificationBox = document.getElementById('notificationBox');

const profButton = document.querySelector('.arrbtn');
const profileBox = document.getElementById('profileBox');

function toggleVisibility(element, hiddenClass, visibleClass,btn) {
    if (element.classList.contains(hiddenClass)) {
        element.classList.remove(hiddenClass);
        element.classList.add(visibleClass);
    } else {
        element.classList.remove(visibleClass);
        element.classList.add(hiddenClass);
    }
    // بستن جعبه وقتی بیرون از آن کلیک می‌شود
    document.addEventListener('click', (event) => {
        if (!element.contains(event.target) && !btn.contains(event.target)) {
            element.classList.remove(visibleClass);
            element.classList.add(hiddenClass);
        }
    });
}
//اضافه کردن رویداد به باتن ها
bellButton.addEventListener('click', () => {
    toggleVisibility(notificationBox, 'hidden', 'visible',bellButton);
});

profButton.addEventListener('click', () => {
    toggleVisibility(profileBox, 'hide', 'vsb',profButton);
});

//نمایش در کانتنت
document.addEventListener("DOMContentLoaded", () => {
    const iframe = document.getElementById("contentFrame");
    const defaultPage = "../home/home.html"; // مسیر صفحه اصلی

    // تنظیم پیش‌فرض صفحه اصلی
    iframe.src = defaultPage;

    // مدیریت تغییر صفحات با کلیک روی دکمه‌های سایدبار
    const buttons = document.querySelectorAll("#sidebar .btn");
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const url = button.getAttribute("data-url"); // URL فایل HTML
            if (url) {
                iframe.src = url; // بارگذاری فایل HTML در iframe
            }
        });
    });
});

