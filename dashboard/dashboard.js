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

//برای باز و بسته شدن نوتیف باکس
const bellButton = document.querySelector('.bellbtn');
const notificationBox = document.getElementById('notificationBox');
// افزودن رویداد کلیک به دکمه زنگوله
bellButton.addEventListener('click', () => {
    if (notificationBox.classList.contains('hidden')) {
        notificationBox.classList.remove('hidden');
        notificationBox.classList.add('visible'); 
    } else {
        notificationBox.classList.remove('visible'); 
        notificationBox.classList.add('hidden'); 
    }
});
// بستن جعبه وقتی بیرون از آن کلیک می‌شود
document.addEventListener('click', (event) => {
    if (!notificationBox.contains(event.target) && !bellButton.contains(event.target)) {
        notificationBox.classList.remove('visible');
        notificationBox.classList.add('hidden');
    }
});

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
