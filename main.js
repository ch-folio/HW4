let movieArray = [];


// define a constructor to create movie objects
let MovieObject = function (pTitle, pYear, pGenre) {
    this.Title = pTitle;
    this.Year = pYear;
    this.ID = movieArray.length +1;
    this.Genre = pGenre;
}

movieArray.push(new MovieObject("Matilda", 1996, "Comedy"));
movieArray.push(new MovieObject("Orphan", 2009, "Horror"));
movieArray.push(new MovieObject("The Notebook", 2004, "Drama"));
movieArray.push(new MovieObject("Synchronic", 2020, "SciFi"));

let selectedGenre = "not selected";

document.addEventListener("DOMContentLoaded", function () {

    createList();

    document.getElementById("buttonAdd").addEventListener("click", function () {

        movieArray.push(new MovieObject(document.getElementById("title").value, document.getElementById("year").value, selectedGenre));
        document.location.href = "index.html#ListAll";

    });
        
        document.getElementById("buttonClear").addEventListener("click", function () {
            document.getElementById("title").value = "";
            document.getElementById("year").value = "";
        });

        $(document).bind("change", "#select-genre", function (event, ui) {
            selectedGenre = $('#select-genre').val();
        });

        document.getElementById("buttonSortTitle").addEventListener("click", function () {
            movieArray.sort(dynamicSort("Title"));
            createList();
            document.location.href = "index.html#ListAll";

        });

        document.getElementById("buttonSortGenre").addEventListener("click", function () {
            movieArray.sort(dynamicSort("Genre"));
            createList();
            document.location.href = "index.html#ListAll";

        });

        $(document).on("pagebeforeshow", "#ListAll", function (event) {
            createList();
        });

    });

    function createList() {
        var theList = document.getElementById("myul");
        theList.innerHTML = "";

        movieArray.forEach(function (element,) {
            var li = document.createElement('li');
            li.innerHTML = element.ID + ":  " + element.Title + "  " + element.Genre;
            theList.appendChild(li);
        });
    };
        

    function dynamicSort(property) {
        var sortOrder = 1;

        if (property[0] === "-") {
            sortOrder = -1;
            property.property.substr(1);
        }

            return function (a, b) {
                if (sortOrder == -1) {
                    return b[property].localeCompare(a[property]);
                } else {
                    return a[property].localeCompare(b[property]);
                }
            }
        }
    
