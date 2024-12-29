// لیست آگهی‌ها
const jobs = [
    { title: "توسعه‌دهنده وب", company: "شرکت آلفا" },
    { title: "طراح گرافیک", company: "شرکت بتا" },
    { title: "مدیر پروژه", company: "شرکت گاما" },
    { title: "مهندس داده", company: "شرکت دلتا" },

    { title: "تحلیل‌گر کسب‌وکار", company: "شرکت اومگا" },
    { title: "مهندس نرم‌افزار", company: "شرکت سیگما" },
    { title: "مدیر منابع انسانی", company: "شرکت فی" },
    { title: "تحلیل‌گر مالی", company: "شرکت زتا" },
    { title: "مدیر فروش", company: "شرکت تتا" },
    { title: "کارشناس دیجیتال مارکتینگ", company: "شرکت اپسیلون" },
];
// وضعیت درخواست‌ها
const resultsTable = document.getElementById("resultsTable");
jobs.forEach((job) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${job.company}</td>
        <td>${["در انتظار بررسی", "پذیرفته شده", "پذیرفته نشده"][Math.floor(Math.random() * 3)]}</td>
    `;
    resultsTable.appendChild(row);
});