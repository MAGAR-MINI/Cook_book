function list_foods() {
    //var api1 = ""d126c37ec30f4a7ba1c66d465d0bc783"
    //var api2 = 762ab72f2d674ae8a2950ef195435ced
    var api = "https://api.spoonacular.com/recipes/complexSearch?apiKey=d126c37ec30f4a7ba1c66d465d0bc783&query=" + document.getElementById("search_box").value;
    //var api = "https://api.spoonacular.com/recipes/complexSearch?apiKey=762ab72f2d674ae8a2950ef195435ced&query=" + document.getElementById("search_box").value;

    fetch(api)
        .then(response => response.json())
        .then(data => {
            var result = data['results'];

            document.getElementById("results").remove();

            var results = document.createElement('div');
            results.className = 'results';
            results.id = 'results';
            document.getElementById('results_main').appendChild(results);

            if (result.length == 0) {

                var error = document.createElement("h2");
                error.className = "error";
                error.innerHTML = "No results"
                results.appendChild(error);
            }

            for (let i = 0; i < result.length; i++) {

                //יצירת תגית כללית למאכל
                var divElement = document.createElement("button");
                divElement.className = "food_div";
                divElement.addEventListener('click', function () {
                    print_data((result[i].id));
                });
                results.appendChild(divElement);

                // יצירת תגית תמונה
                var imgElement = document.createElement("img");
                imgElement.src = result[i].image;
                imgElement.className = "picture_food";
                divElement.appendChild(imgElement);

                //יצירת תגית כללית לתיאור
                var divForText = document.createElement("div");
                divForText.className = "title_for_food_div";
                divElement.appendChild(divForText);

                // יצירת תגית כותרת
                var divTitle = document.createElement("h4");
                divTitle.className = "title_for_food";
                divTitle.innerHTML = result[i].title;
                divForText.appendChild(divTitle);

                // יצירת תגית תיאור
                var divText = document.createElement("h5");
                divText.className = "description_of_food";
                divText.innerHTML = result[i].title;
                divForText.appendChild(divText);


            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}