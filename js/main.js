/**
 * Created by Яков on 14.06.2015.
 */

String.prototype.isEmpty = function() {
    return (this.length === 0 || !this.trim());
};

function search() {
    var scriptName = document.getElementById("inputName").value;

    if (scriptName.isEmpty()) return false;

    var searchUrl = "https://api.github.com/search/repositories?q=%22"+scriptName+".js%22+in%3Aname+language:javascript";

    $.ajax({
        url: searchUrl,
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            processData(scriptName+".js",data);
        }
    });
}

function processData(searchName, data) {
    document.getElementById("result").innerHTML = "Попробуй другое слово";

    $.each(data.items, function (index, repo) {
        if (repo.name == searchName) {
            document.getElementById("result").innerHTML = "Пей!";
            return false;
        }
    });
}