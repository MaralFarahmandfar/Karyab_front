function addWord() {
        // دریافت کلمه وارد شده
        var word = document.getElementById('skills').value;
        // اگر کلمه وارد شده خالی نباشد
        if (word.trim() !== "") {
            // ایجاد یک عنصر جدید li
            var li = document.createElement('li');
            li.textContent = word;
            // اضافه کردن کلمه به لیست
            document.getElementById('wordList').appendChild(li);
            document.getElementById('skills').removeAttribute('required');
        }
        // پاک کردن جعبه متنی بعد از افزودن کلمه
        document.getElementById('skills').value = '';
    }
    function addeduinfo() {
        // دریافت کلمه وارد شده
        var word = document.getElementById('degree').value;
        var word1 = document.getElementById('major').value;
        var word2 = document.getElementById('uni').value;
        var word3 = document.getElementById('eduyear').value;

        // اگر کلمه وارد شده خالی نباشد
        if (word.trim() !== "" && word1.trim() !== "" && word2.trim() !== "" && word3.trim() !== "") {
            // ایجاد یک عنصر جدید li
            var li = document.createElement('li');
            li.textContent = word + " - " + word1 + " - " + word2 + " - " + word3;
            // اضافه کردن کلمه به لیست
            document.getElementById('eduList').appendChild(li);
            document.getElementById('degree').removeAttribute('required');
            document.getElementById('major').removeAttribute('required');
            document.getElementById('uni').removeAttribute('required');
            document.getElementById('eduyear').removeAttribute('required');
        }
        // پاک کردن جعبه متنی بعد از افزودن کلمه
        document.getElementById('degree').value = '';
        document.getElementById('major').value = '';
        document.getElementById('uni').value = '';
        document.getElementById('eduyear').value = '';
    }
    let count = 0;
    function addworkexperienceinfo() {
        // دریافت کلمه وارد شده
        var word4 = document.getElementById('position').value;
        var word5 = document.getElementById('company').value;
        var word6 = document.getElementById('exyear').value;
        var word7 = document.getElementById('tasks').value;
        var messageelement = document.getElementById('message');

        // اگر کلمه وارد شده خالی نباشد
        if (word4.trim() !== "" && word5.trim() !== "" && word6.trim() !== "" && word7.trim() !== "") {
            count++;
            messageelement.textContent =  'ثبت شد' ;
            // پاک کردن جعبه متنی بعد از افزودن کلمه
            document.getElementById('position').value = '';
            document.getElementById('company').value = '';
            document.getElementById('exyear').value = '';
            document.getElementById('tasks').value = '';
        }
    }
    function addlanguagesinfo() {
        // دریافت کلمه وارد شده
        var word = document.getElementById('language').value;
        var word1 = document.getElementById('reading').value;
        var word2 = document.getElementById('writing').value;
        var word3 = document.getElementById('speaking').value;
        var word4 = document.getElementById('listening').value;

        // اگر کلمه وارد شده خالی نباشد
        if (word.trim() !== "" && word1.trim() !== "" && word2.trim() !== "" && word3.trim() !== "") {
            // ایجاد یک عنصر جدید li
            var li = document.createElement('li');
            li.textContent = word + " - " + word1 + " - " + word2 + " - " + word3 + " - " + word4;
            // اضافه کردن کلمه به لیست
            document.getElementById('languagesList').appendChild(li);
            document.getElementById('language').removeAttribute('required');
            document.getElementById('reading').removeAttribute('required');
            document.getElementById('writing').removeAttribute('required');
            document.getElementById('speaking').removeAttribute('required');
            document.getElementById('listening').removeAttribute('required');
        }
        // پاک کردن جعبه متنی بعد از افزودن کلمه
        document.getElementById('language').value = '';
        document.getElementById('reading').value = '';
        document.getElementById('writing').value = '';
        document.getElementById('speaking').value = '';
        document.getElementById('listening').value = '';
    }
    function addcoursesinfo() {
        // دریافت کلمه وارد شده
        var word = document.getElementById('course').value;
        var word1 = document.getElementById('institution').value;
        var word2 = document.getElementById('month').value;
        var word3 = document.getElementById('courseyear').value;

        // اگر کلمه وارد شده خالی نباشد
        if (word.trim() !== "" && word1.trim() !== "" && word2.trim() !== "" && word3.trim() !== "") {
            // ایجاد یک عنصر جدید li
            var li = document.createElement('li');
            li.textContent = word + " - " + word1 + " - " + word2 + " - " + word3;
            // اضافه کردن کلمه به لیست
            document.getElementById('coursesList').appendChild(li);
            document.getElementById('course').removeAttribute('required');
            document.getElementById('institution').removeAttribute('required');
            document.getElementById('month').removeAttribute('required');
            document.getElementById('courseyear').removeAttribute('required');
            
        }
        // پاک کردن جعبه متنی بعد از افزودن کلمه
        document.getElementById('course').value = '';
        document.getElementById('institution').value = '';
        document.getElementById('month').value = '';
        document.getElementById('courseyear').value = '';
    }
    function addresearchinfo() {
        // دریافت کلمه وارد شده
        var word = document.getElementById('title').value;
        var word1 = document.getElementById('publisher').value;
        var word2 = document.getElementById('researchyear').value;
        var word3 = document.getElementById('link').value;

        // اگر کلمه وارد شده خالی نباشد
        if (word.trim() !== "" && word1.trim() !== "" && word2.trim() !== "" && word3.trim() !== "") {
            // ایجاد یک عنصر جدید li
            var li = document.createElement('li');
            li.textContent = word + " - " + word1 + " - " + word2 + " - " + word3;
            // اضافه کردن کلمه به لیست
            document.getElementById('researchList').appendChild(li);
        }
        // پاک کردن جعبه متنی بعد از افزودن کلمه
        document.getElementById('title').value = '';
        document.getElementById('publisher').value = '';
        document.getElementById('researchyear').value = '';
        document.getElementById('link').value = '';
    }
    function addprojectsinfo() {
        // دریافت کلمه وارد شده
        var word = document.getElementById('projecttitle').value;
        var word1 = document.getElementById('entrepreneur').value;
        var word2 = document.getElementById('projectyear').value;
        var word3 = document.getElementById('projectmonth').value;

        // اگر کلمه وارد شده خالی نباشد
        if (word.trim() !== "" && word1.trim() !== "" && word2.trim() !== "" && word3.trim() !== "") {
            // ایجاد یک عنصر جدید li
            var li = document.createElement('li');
            li.textContent = word + " - " + word1 + " - " + word2 + " - " + word3;
            // اضافه کردن کلمه به لیست
            document.getElementById('projectsList').appendChild(li);
        }
        // پاک کردن جعبه متنی بعد از افزودن کلمه
        document.getElementById('projecttitle').value = '';
        document.getElementById('entrepreneur').value = '';
        document.getElementById('projectyear').value = '';
        document.getElementById('projectmonth').value = '';
    }
    function addhonorsinfo() {
        // دریافت کلمه وارد شده
        var word = document.getElementById('honor').value;
        var word1 = document.getElementById('honoryear').value;
        var word2 = document.getElementById('honormonth').value;

        // اگر کلمه وارد شده خالی نباشد
        if (word.trim() !== "" && word1.trim() !== "" && word2.trim() !== "") {
            // ایجاد یک عنصر جدید li
            var li = document.createElement('li');
            li.textContent = word + " - " + word1 + " - " + word2;
            // اضافه کردن کلمه به لیست
            document.getElementById('honorsList').appendChild(li);
        }
        // پاک کردن جعبه متنی بعد از افزودن کلمه
        document.getElementById('honor').value = '';
        document.getElementById('honoryear').value = '';
        document.getElementById('honormonth').value = '';
    }
    const activaterequiredbutton = document.getElementById('activaterequired');
    const inputs = document.querySelectorAll('.required');
    activaterequiredbutton.addEventListener('click', function(){
      inputs.forEach(input => {
        input.setAttribute('required', false);
        window.location.href = "resume.html";
      })
    })