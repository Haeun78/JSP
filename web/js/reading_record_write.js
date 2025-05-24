const isLoggedIn = true;
if (!isLoggedIn) {
alert("로그인이 필요한 서비스입니다.");
location.href = "login_form.html";
}

const editor = new toastui.Editor({
el: document.querySelector('#editor'),
height: '500px',
initialEditType: 'markdown',
previewStyle: 'vertical'
});

const thumbnailInput = document.getElementById('thumbnail');
const thumbnailPreview = document.getElementById('thumbnailPreview');

thumbnailInput.addEventListener('change', (e) => {
const file = e.target.files[0];
if (file) {
const reader = new FileReader();
reader.onload = function (event) {
thumbnailPreview.src = event.target.result;
thumbnailPreview.style.display = 'block';
};
reader.readAsDataURL(file);
}
});

document.getElementById('cancelBtn').addEventListener('click', function () {
const confirmCancel = confirm("기록 작성을 멈추시겠습니까?");
if (confirmCancel) {
window.history.back();
}
});

document.getElementById('recordForm').addEventListener('submit', function (e) {
e.preventDefault();
const title = this.title.value;
const content = editor.getMarkdown();
document.getElementById('successModal').style.display = 'block';
setTimeout(() => {
document.getElementById('successModal').style.display = 'none';
location.href = "reading_record_main.html";
}, 1800);
});