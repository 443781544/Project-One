var title = document.getElementById('blog-title');
var content = document.getElementById('blog-content');

function clearBlog() {
    // title.value = '';
    // content.value = '';
    document.blog.reset();
}

document.blog.addEventListener('submit', function(event) {
    event.preventDefault();
    var data = objectifyForm(document.blog);
    var json = JSON.stringify(data);
    console.log(json);
});

function objectifyForm(formArray) {
    var returnArray = {};
    for (var i = 0; i < formArray.length; i++) {
        if (formArray[i]['value'] && formArray[i]['value'] != '') {
            returnArray[formArray[i]['name']] = formArray[i]['value'];
        }
    }
    return returnArray;
}
