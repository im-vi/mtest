let nav = document.createElement("nav");
let content = `<div class="container-fluid">
            <a class="navbar-brand" href="/"><img src="zst.png" height="50px" alt="ZST Puławy"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Pracownie Techniczne
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="?dir=PracownieTechniczne/regulamin-pracowni-technicznej"><i class="bi bi-arrow-return-right"></i> Regulamin pracowni technicznej</a></li>
                            <li><a class="dropdown-item" href="?dir=PracownieTechniczne/dokumenty-do-druku"><i class="bi bi-arrow-return-right"></i> Dokumenty do druku</a></li>
                            <li><a class="dropdown-item" href="?dir=PracownieTechniczne/literatura"><i class="bi bi-arrow-return-right"></i> Literatura</a></li>
                            <li><a class="dropdown-item" href="?dir=PracownieTechniczne/pracownia-rysunku-technicznego"><i class="bi bi-arrow-return-right"></i> Pracownia rysunku technicznego</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Klasa czwarta
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="?dir=KlasaCzwarta/01-badania"><i class="bi bi-arrow-return-right"></i> Badania właściwości metali i stopów</a></li>
                            <li><a class="dropdown-item" href="?dir=KlasaCzwarta/02-pomiary"><i class="bi bi-arrow-return-right"></i> Pomiary warsztatowe</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Klasa piąta
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="?dir=KlasaPiata/01-opracowanie-konstrukcyjne"><i class="bi bi-arrow-return-right"></i> Opracowanie konstrukcyjne zespołu<br>(specyfikacja, materiały oraz rysunki<br>wykonawcze)</a></li>
                            <li><a class="dropdown-item" href="?dir=KlasaPiata/02-opracowanie-technologiczne"><i class="bi bi-arrow-return-right"></i> Opracowanie technologiczne<br>(karta technologiczna, instrukcji operacji)</a></li>
                            <li><a class="dropdown-item" href="?dir=KlasaPiata/03-opracowanie-technologii-montazu"><i class="bi bi-arrow-return-right"></i> Opracowanie technologii montażu i<br>demontażu zespołu (schemat poglądowy<br>i blokowy)</a></li>
                            <li><a class="dropdown-item" href="?dir=KlasaPiata/04-opracowanie-technologiczne-naprawy"><i class="bi bi-arrow-return-right"></i> Opracowanie technologiczne naprawy<br>(remontu) zespołu</a></li>
                            <li><a class="dropdown-item" href="?dir=KlasaPiata/05-zakres-prac-remontow"><i class="bi bi-arrow-return-right"></i> Zakres prac remontów: bieżącego,<br>średniego i kapitalnego</a></li>
                            <li><a class="dropdown-item" href="?dir=KlasaPiata/06-koszt-remontow"><i class="bi bi-arrow-return-right"></i> Koszt remontu bieżącego i kapitalnego</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Zajęcia Teoretyczne
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="?dir=ZajeciaTeoretyczne/01-podstawy-konstrukcji-maszyn"><i class="bi bi-arrow-return-right"></i> Podstawy konstrukcji maszyn</a></li>
                            <li><a class="dropdown-item" href="?dir=ZajeciaTeoretyczne/02-podstawy-technik-wytwarzania"><i class="bi bi-arrow-return-right"></i> Podstawy technik wytwarzania</a></li>
                            <li><a class="dropdown-item" href="?dir=ZajeciaTeoretyczne/03-technologia-montazu-maszyn"><i class="bi bi-arrow-return-right"></i> Technologia montażu maszyn i urządzeń</a></li>
                            <li><a class="dropdown-item" href="?dir=ZajeciaTeoretyczne/04-maszynoznawstwo"><i class="bi bi-arrow-return-right"></i> Maszynoznawstwo</a></li>
                            <li><a class="dropdown-item" href="?dir=ZajeciaTeoretyczne/05-oraganizacja-procesow-produkcji"><i class="bi bi-arrow-return-right"></i> Organizacja procesów produkcji</a></li>
                            <li><a class="dropdown-item" href="?dir=ZajeciaTeoretyczne/06-podstawy-nadzorowania-pracy-maszyn"><i class="bi bi-arrow-return-right"></i> Podstawy nadzorowania pracy maszyn<br>i urządzeń stosowanych w przemyśle<br>chemicznym</a></li>
                            <li><a class="dropdown-item" href="?dir=ZajeciaTeoretyczne/07-konstrukcje-maszyn"><i class="bi bi-arrow-return-right"></i> Konstrukcje maszyn</a></li>
                            <li><a class="dropdown-item" href="?dir=ZajeciaTeoretyczne/08-eksploatacja-maszyn"><i class="bi bi-arrow-return-right"></i> Eksploatacja maszyn i urządzeń przemysłu<br>technicznego</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Egzaminy zawodowe
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="?dir=EgzaminyZawodowe/01-mec03"><i class="bi bi-arrow-return-right"></i> Kwalifikacja MEC.03</a></li>
                            <li><a class="dropdown-item" href="?dir=EgzaminyZawodowe/02-mec09"><i class="bi bi-arrow-return-right"></i> Kwalifikacja MEC.09</a></li>
                            <li><a class="dropdown-item" href="?dir=EgzaminyZawodowe/03-informator"><i class="bi bi-arrow-return-right"></i> Informator o egzaminie</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="?site=OWT">OWT</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="?site=SzkolneKoloTechniki">Szkolne koło techniki</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="?site=OWOW">OWOW</a>
                    </li>
                </ul>
            </div>
        </div>`;

nav.innerHTML = content;
nav.className = "navbar navbar-expand-xl bg-body-tertiary";
document.body.appendChild(nav)