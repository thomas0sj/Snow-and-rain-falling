//SNOW
let snowbtn = document.getElementById('snow');

snowbtn.addEventListener('click', snowfall);

function snowfall(){
    setInterval(createsnowflake, 20);

    function createsnowflake(){
        let snow_flake = document.createElement('i');
        snow_flake.classList.add('fas');
        snow_flake.classList.add('fa-snowflake');
        snow_flake.style.left = Math.random()*window.innerWidth + 'px';

        snow_flake.style.animationDuration = Math.random()*3 + 2 + 's'//between 2 and 5
        snow_flake.style.opacity = Math.random();
        snow_flake.style.fontSize = Math.random()*10 + 10 + 'px';

        document.body.appendChild(snow_flake);

        setTimeout(() => {
            snow_flake.remove();
        }, 5000)
}
}

//RAIN
let rainbtn = document.getElementById('rain');

rainbtn.addEventListener('click', rainfall);

function rainfall(){
    setInterval(createdroplet, 5);

    function createdroplet(){
        let rain = document.createElement('i');
        rain.classList.add('fas');
        rain.classList.add('fa-droplet');
        rain.style.left = Math.random()*window.innerWidth + 'px';

        rain.style.animationDuration = Math.random() + 's';
        rain.style.opacity = Math.random();
        rain.style.fontSize = Math.random()*10 + 10 + 'px';


        document.body.appendChild(rain);

        setTimeout(() => {
            rain.remove();
        }, 2000)
    }
}

//LIGHT AND DARK
let ld = document.getElementById('light-dark');

ld.addEventListener('click', toggle);

function toggle(){
    document.body.style.backgroundColor = "black";
}

let lii = document.getElementById('liight');
lii.addEventListener('click', lightmode);

function lightmode(){
    document.body.style.backgroundColor = "#faebd7";
}