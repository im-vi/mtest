const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const site = urlParams.get('site');
const dir = urlParams.get('dir');

const OWNER = "im-vi";
const REPO = "mtest";

function hideLoadingSpinner() {
    document.getElementById("spinner").remove();
}

async function loadHTMLPage(page) {
    fetch(`sites/${page}.html`)
    .then(response => response.text())
    .then(html => {
        hideLoadingSpinner();
        document.getElementById("content").innerHTML = html;
    })
    .catch(err => console.error("Nie można załadować strony HTML:", err));
}

async function getFolder(owner, repo, path = "") {
    const url = `https://api.github.com/repos/${owner}/${repo}/contents/files/${path}`;
  
    const response = await fetch(url);
    if (!response.ok) {
        document.getElementById("content").innerHTML = `<div class="container"><h1>Błąd ${response.status}</h1></div>`;
        throw new Error(`Błąd: ${response.status}`);
    }

    const data = await response.json();

    return data.map(item => ({
        name: item.name,
        type: item.type,
    }));
}

async function loadDirectoryPage(directory) {
    let result = await getFolder(OWNER, REPO, directory);
    let files = [];
    let directories = [];
    result.forEach(element => {
        switch(element.type) {
            case "file": files.push(element.name); break;
            case "dir": directories.push(element.name); break;
        }
    });

    let container = document.createElement("div");
    container.className = "container";
    let list = document.createElement("ul");
    list.className = "list-group list-group-flush";
    files.forEach(item => {
        let listItem = document.createElement("li");
        listItem.className = "list-group-item";
        listItem.innerHTML = `<a href="files/${directory}/${item}">${item}</a>`
        list.appendChild(listItem);
    })
    container.appendChild(list);
    if(directories.length != 0) {
        directories.forEach(item => {
            let newDirHeading = document.createElement("h2");
            newDirHeading.className = "mt-3";
            newDirHeading.textContent = item;
            let nList = document.createElement("ul");
            nList.className = "list-group list-group-flush";
            getFolder(OWNER, REPO, `files/${directory}/${item}`)
            .then(json => {
                json.forEach(item2 => {
                    let listItem = document.createElement("li");
                    listItem.className = "list-group-item";
                    listItem.innerHTML = `<a href="files/${directory}/${item}/${item2.name}">${item2.name}</a>`
                    nList.appendChild(listItem);
                })
            })
            container.appendChild(newDirHeading);
            container.appendChild(nList);
        })
    }
        
    hideLoadingSpinner();
    document.getElementById("content").appendChild(container);
}

async function showContent() {
    if(!site && !dir) {
        loadHTMLPage("home");
    } else if(site && !dir) {
        loadHTMLPage(site);
    } else if(!site && dir) {
        loadDirectoryPage(dir);
    } else {
        document.getElementById("content").innerHTML = `<div class="container"><h1>Za dużo argumentów.</h1><br><a class="btn btn-primary" href="/" role="button"><i class="bi bi-house-door"></i> Wróć do strony głównej</a></div>`;
    }
}