document.addEventListener('DOMContentLoaded', function() {
    // Ottenere tutti gli elementi con attributo data-popup-id
    const popups = document.querySelectorAll('[data-popup-id]');

    // Iterare su ogni popup e gestire la configurazione
    popups.forEach(popupElement => {
        // Gestire il setup del popup
        setupPopup(popupElement);
    });
});


// Funzione per configurare il popup
function setupPopup(popupElement) {
    // Ottenere l'ID del popup corrente
    const popupId = popupElement.getAttribute("data-popup-id");

    // Verifica se l'elemento popup esiste e ha l'ID
    if (popupElement && popupId) {


        const delay = parseInt(popupElement.getAttribute("data-delay")); // Converti la stringa in un numero intero Regolazione ritardo
        const selectOptionPage = popupElement.getAttribute("data-select-option-page"); // Opzione per impostare l'altezza della pagina
        const scrollTimeout = parseInt(popupElement.getAttribute("data-time")); // Inattività allo scroll
        const textButton = popupElement.getAttribute("text-button"); // Text Button
        const popupUrlExt = popupElement.getAttribute("data-url-extern"); // External Url
        const desiredURL = popupUrlExt; // URL desiderato
        const popupName = popupElement.getAttribute("data-popup-name"); // Popup Name
        const timeExit = parseInt(popupElement.getAttribute("data-time-exit")); // Converti la stringa in un numero intero Regolazione ritardo
        const scrollDirection = popupElement.getAttribute("data-direction-scroll"); // Top or down
        const timeScrollDirection = parseInt(popupElement.getAttribute("data-time-direction"));
        const exitVisitNumberString = popupElement.getAttribute("data-logic-7"); // Loginc 7
        const exitVisitNumber = exitVisitNumberString === "true"; // Loginc 7
        const exitUrlString = popupElement.getAttribute("data-logic-8"); // Loginc 8
        const exitUrl = exitUrlString === "true"; // Loginc 8
        const exitExternalString = popupElement.getAttribute("data-logic-9"); // Loginc 9
        const exitExternal = exitExternalString === "true"; // Loginc 9
        const exitLogUserString = popupElement.getAttribute("data-logic-10"); // Loginc 10
        const exitLogUser = exitLogUserString === "true"; // Loginc 10
        let popupClosureCount =parseInt(localStorage.getItem("popupClosureCount")) || 0;
        let popupVisible = false; // Flag per tenere traccia dello stato del popup
        const exitDesktopString = popupElement.getAttribute("data-desktop"); // Logic 11
        const exitDesktop = exitDesktopString === "true"; // Logic 11
        const pxDesktop = parseInt(popupElement.getAttribute("data-px-desktop"));
        const exitTabletString = popupElement.getAttribute("data-tablet"); // Logic 12
        const exitTablet = exitTabletString === "true"; // Logic 12
        const pxTablet = parseInt(popupElement.getAttribute("data-px-tablet"));
        const exitMobileString = popupElement.getAttribute("data-mobile"); // Logic 13
        const exitMobile = exitMobileString === "true"; // Logic 13
        const pxMobile = parseInt(popupElement.getAttribute("data-px-mobile"));
        const popupClassName = popupElement.getAttribute("data-class"); // Class Popup
        const numberVisit = parseInt(popupElement.getAttribute("data-number-visit"),); // Number Visit
        const timeUrl = parseInt(popupElement.getAttribute("data-time-url")); // Delay time url
        const timeExternaLink = parseInt(popupElement.getAttribute("data-time-external-link")); // Delay time external link
        const timeLogged = parseInt(popupElement.getAttribute("data-time-logged")); // Delay time logged
        const disablePopupClosingString = popupElement.getAttribute("data-disable-closing-popup"); // Disable popup closing
        const disablePopupClosing = disablePopupClosingString === "true"; // Disable popup closing
        const exitLanguageString = popupElement.getAttribute("data-language-extit"); // Exit Language
        const exitLanguage = exitLanguageString === "true"; // Exit Language
        const selectedLanguages = popupElement.getAttribute("data-language-select"); // Selected Languages
        const exitScheduleString = popupElement.getAttribute("data-schedule"); // Exit Schedule
        const exitSchedule = exitScheduleString === "true"; // Exit Schedule
        const date = popupElement.getAttribute("data-date-popup"); // Date Popup
        const endDate = popupElement.getAttribute("data-date-end-popup"); // Date Popup End
        const exitOperationSystemString = popupElement.getAttribute("data-operation-system"); // Exit Operation System
        const exitOperationSystem = exitOperationSystemString === "true"; // Exit Operation System
        const exitWindowsString = popupElement.getAttribute("data-windows"); // Exit Windows
        const exitWindows = exitWindowsString === "true"; // Exit Windows
        const exitMacString = popupElement.getAttribute("data-mac"); // Exit Windows
        const exitMac = exitMacString === "true"; // Exit Windows
        const exitLinusString = popupElement.getAttribute("data-linus"); // Exit Windows
        const exitLinus = exitLinusString === "true"; // Exit Windows
        const exitBrowserString = popupElement.getAttribute("data-browser"); // Exit Browser
        const exitBrowser = exitBrowserString === "true"; // Exit Browser
        const selectBrowser = popupElement.getAttribute("data-browser-select"); // Select Browser
        const timeClosedPopup = parseInt(popupElement.getAttribute("data-time-popup-closed")); // Delay time Popup Closed
        const exitWooCartEmptyString = popupElement.getAttribute("data-woo-cart-empty"); // Exit Empty Cart
        const exitWooCartEmpty = exitWooCartEmptyString === "true"; // Exit Empty Cart
        const exitWooCartCountString = popupElement.getAttribute("data-woo-cart-count"); // Exit Cart Count
        const exitWooCartCount = exitWooCartCountString === "true"; // Exit Cart Count
        const exitWooCartIdString = popupElement.getAttribute("data-woo-cart-id"); // Exit Cart ID
        const exitWooCartId = exitWooCartIdString === "true"; // Exit Cart ID
        const numberProductCart = parseInt(popupElement.getAttribute("data-woo-number-product-cart")); // Number Product in Cart
        const productId = popupElement.getAttribute("data-product-id"); // Product ID
        const exitWooCartAmountString = popupElement.getAttribute("data-woo-cart-amount"); // Exit Cart Amount
        const exitWooCartAmount = exitWooCartAmountString === "true"; // Exit Cart Amount
        const amountProductCart = parseInt(popupElement.getAttribute("data-woo-amount-product-cart")); // Amount Product in Cart
        const selectedAmountCart = popupElement.getAttribute("data-woo-select-amount"); // Select Logic Amount
        const conditionAndOr= popupElement.getAttribute("data-condition-and-or"); // Select Condition and / or
        const classNameElement = popupElement.getAttribute("data-class-element"); // Element class Name
        const reopenPopupString = popupElement.getAttribute("data-popup-reopen"); // Reopen Popup
        const reopenPopup = reopenPopupString === "true"; // Reopen Popup
        const classNameElementHover = popupElement.getAttribute("data-class-element-hover"); // Element class Name
        const exitAllString = popupElement.getAttribute("data-exit-all"); //  Exit For All
        const exitAll = exitAllString === "true"; //  Exit For All
        const fileAudio = popupElement.getAttribute("data-file-audio"); // File Audio
        const selectedEvents = popupElement.getAttribute("data-events-select"); // Select Events
        const selectedClosed = popupElement.getAttribute("data-select-closed"); // Select Closed
        const openSoundString = popupElement.getAttribute("data-open-sound"); //  Exit For All
        const openSound = openSoundString === "true"; //  Exit For All
        const timeOpacityExit = parseInt(popupElement.getAttribute("data-time-opacity-exit")); // Ritardo chiusura opacity
        const timeOpacity = parseInt(popupElement.getAttribute("data-time-opacity")); // Ritardo chiusura opacity
        const colorContdown = popupElement.getAttribute("data-color-contdown"); // Color Contdown
        const secondContdown = parseInt(popupElement.getAttribute("data-second-contdown")); // Seconds Contdown
        const textContdownBefore = popupElement.getAttribute("data-text-before-contdown"); // Text Contdown Before
        const textContdownAfter = popupElement.getAttribute("data-text-after-contdown"); // Text Contdown After
        const overflowBodyString = popupElement.getAttribute("data-overflow-body"); // Overflow Body
        const overflowBody = overflowBodyString === "true"; // Overflow Body
        const filterBodyString = popupElement.getAttribute("data-filter-body"); // Filter Body
        const filterBody = filterBodyString === "true"; // Filter Body
        const sizeContdown = parseInt(popupElement.getAttribute("data-size-contdown")); // Font Size Text Contdown
        const verticalContdown = parseInt(popupElement.getAttribute("data-vertical-contdown")); // Vertical Contdown
        const horizontalContdown = parseInt(popupElement.getAttribute("data-horizontal-contdown")); // Horizontal Contdown
        const colorContdownText = popupElement.getAttribute("data-color-text-contdown"); // Color Text Contdown       
        const zIndexButton = parseInt(popupElement.getAttribute("data-zindex-button")); //Z Index Button
        const selectedAnimationPopupIn = popupElement.getAttribute("data-animation-popup-in"); // Select Animation Popup In
        const classClosePopup = popupElement.getAttribute("data-class-close-popup"); // Class Close Popup
       
     

        let popupClosed = localStorage.getItem(`popupClosed_${popupId}`) === "true";

      
       
        console.log('Popup ID received:', popupId);

        console.log("Valore dell'attributo selectedClosed all'interno di un'altra funzione:", selectedClosed);


        // Aggiungi gestione del click sul bottone di chiusura
        const closeButton = document.createElement("button");
        closeButton.classList.add("wp-kube-button-close-popup");
        closeButton.textContent = textButton;
        closeButton.style.zIndex = zIndexButton;
        closeButton.addEventListener("click", () => handleClosePopup(popupId));
        popupElement.appendChild(closeButton);

        // Remove Button
       // removeCloseButton(popupElement); // Chiamata qui per rimuovere immediatamente il bottone dopo l'aggiunta

        function removeCloseButton(popupElement) {
            // Seleziona il bottone di chiusura all'interno del popup
            const closeButton = popupElement.querySelector('.wp-kube-button-close-popup');
            // Rimuovi il bottone di chiusura se esiste
            if (closeButton) {
                closeButton.parentNode.removeChild(closeButton);
            }
        }




      
        
       


         // Funzione per creare un filtro al body 
         function createOverlay() {
            const overlay = document.createElement("div");
            overlay.id = "wp-kube-overlay-contdown";
            overlay.style.backgroundColor = colorContdown; // Colore di sfondo scuro con opacità del 50%
            document.body.appendChild(overlay);
        }
        function showOverlay() {
            let overlay = document.getElementById("wp-kube-overlay-contdown");
            if (!overlay) {
                createOverlay(); // Se l'overlay non esiste, crealo
                overlay = document.getElementById("wp-kube-overlay-contdown"); // Ottieni di nuovo l'elemento appena creato
            }
            overlay.style.display = "block";
        }
        function hideOverlay() {
            const overlay = document.getElementById("wp-kube-overlay-contdown");
            if (overlay) {
                overlay.style.display = "none";
            }
        }


         /* EVENTI */
         function wpkubeEvents() {
            // Uscita dalla pagina
            if (selectedEvents === 'exitPage') {
                logicExitPage();
            }
            // Click su classe elemento specifico
            if (openSound === true) {
                if (selectedEvents === 'logicExitElementClass') {
                    logicExitClickByClassWithSound(classNameElement);
                }
            }
            if (openSound === false) {
                if (selectedEvents === 'logicExitElementClass') {
                    logicExitClickByClass(classNameElement);
                }
            }
            // Hover su classe elemento specifico
            if (selectedEvents === 'logicExitElementClassHover') {
                logicExitHoverByClass(classNameElementHover);
            }
            // Uscita ritardata
            if (selectedEvents === 'exitTime') {
                logicExitTime();
            }
            // Inattività dello scroll
            if (selectedEvents === 'exitScrollNo') {
                logicExitScrollInactive();
            }
            // Posizione pagina
            if (selectedEvents === 'exitScrollPosition') {
                logicExitScrollPosition();
            }
            // Direzione Scroll
            if (selectedEvents === 'exitScrollDirection') {
                logicExitScrollDirection();
            }
            // Classe specifica
            if (selectedEvents === 'exitClass') {
                logicExitClass();
            }
        }

        /* CONDIZIONI */
        function allCondition() {
            let shouldShowPopup = true;

            // Verifica la modalità di concatenazione delle condizioni
            if (conditionAndOr === 'and') {
                // Concatenazione con 'and'
                shouldShowPopup =
                    (!exitAll ||  logicExitAll()) &&
                    (!exitVisitNumber || logicExitVisitNumber()) &&
                    (!exitUrl || logicExitUrl()) &&
                    (!exitExternal || logicExitLinkExt()) &&
                    (!exitLogUser || logicExitLoggedUser()) &&
                    (!exitLanguage || logicExitLanguage()) &&
                    (!exitOperationSystem || logicExitOS()) &&
                    (!exitBrowser || logicExitBrowser());
            } else if (conditionAndOr === 'or') {
                // Concatenazione con 'or'
                shouldShowPopup =
                    (exitAll &&  logicExitAll()) ||
                    (exitVisitNumber && logicExitVisitNumber()) ||
                    (exitUrl && logicExitUrl()) ||
                    (exitExternal && logicExitLinkExt()) ||
                    (exitLogUser && logicExitLoggedUser()) ||
                    (exitLanguage && logicExitLanguage()) ||
                    (exitOperationSystem && logicExitOS()) ||
                    (exitBrowser && logicExitBrowser());
            }

            if (shouldShowPopup) {
                wpkubeEvents();
            }
        }
        // Chiamata alla funzione per controllare se mostrare il popup
        allCondition();

        //   WOOCOMMERCE  //

        // Schedule
        if (exitSchedule === true) {
            logicExitSchedule();
        }
        // Carrello vuoto
        if (exitWooCartEmpty === true) {
            logicExitWooCartEmpty();
        }
        // Carrello contiene numero prodotti
        if (exitWooCartCount === true) {
            logicExitWooCartCount();
        }
        // ID prodotto
        if (exitWooCartId === true) {
            logicExitWooProductId(productId);
        }
        // Ammontare carrello
        if (exitWooCartAmount === true) {
            logicExitCartAmount();
        }

        /* FUNZIONE DISPOSITIVI */

        // Funzione per mostrare il popup solo su dispositivi desktop
        function showPopupOnDesktop() {
            const isDesktop = window.matchMedia(
                "(min-width: " + pxDesktop + "px)",
            ).matches; // Match solo se il dispositivo è un desktop
            if (isDesktop) {
                showPopup();
            }
        }

        // Funzione per mostrare il popup solo su dispositivi Tablet
        function showPopupOnTablet() {
            const isTablet = window.matchMedia(
                "(max-width: " + pxTablet + "px)",
            ).matches; // Match solo se il dispositivo è un tablet
            if (isTablet) {
                showPopup();
            }
        }

        // Funzione per mostrare il popup solo su dispositivi Mobile
        function showPopupOnMobile() {
            const isMobile = window.matchMedia(
                "(max-width: " + pxMobile + "px)",
            ).matches; // Match solo se il dispositivo è un mobile
            if (isMobile) {
                showPopup();
            }
        }
        // Funzione dispositivi
        function showPopupDevices() {
            if (exitDesktop === true) {
                showPopupOnDesktop();
            }
            if (exitTablet === true) {
                showPopupOnTablet();
            }
            if (exitMobile === true) {
                showPopupOnMobile();
            }
        }

        /* FUNZIONI EVENTI */
        
        // Uscita dall pagina
        function logicExitPage() {
            let timer; // Variabile per memorizzare il timeout
            document.body.addEventListener("mouseout", function (event) {
                // Verifica se il mouse sta lasciando la finestra del browser
                if (!event.relatedTarget && !popupVisible) {
                    // Cancella il timeout precedente se presente
                    clearTimeout(timer);
                    // Imposta un nuovo timeout per mostrare il popup dopo il periodo di ritardo specificato
                    timer = setTimeout(function () {
                        showPopupDevices();
                    }, timeExit);
                }
            });
        }

        // Funzione per aprire il popup al clic di una classe specifica con audio anche
        function logicExitClickByClassWithSound(elementClass, enableSoundCustom = true) {
            const elements = document.querySelectorAll('.' + elementClass);
            let defaultAudio = new Audio(plugin_data.pluginUrl + 'audio/open-1.mp3');
        
            elements.forEach(function(element) {
                element.addEventListener('click', function() {
                    let customAudio = null;
                    
                    // Leggi l'attributo fileAudio dall'elemento HTML
                    const fileAudioUp = fileAudio;
                    
                    // Se è stato specificato un file audio personalizzato, caricalo
                    if (fileAudioUp) {
                        customAudio = new Audio(fileAudioUp);
                    }
                    
                    // Se l'audio personalizzato è abilitato, riproduci il suono personalizzato
                    if (enableSoundCustom && customAudio) {
                        customAudio.play();
                    }
                    // Altrimenti, riproduci il suono predefinito
                    else {
                        defaultAudio.play();
                    }
                    
                    // Mostra il popup
                    showPopupDevices();
                });
            });
            
            if (elements.length === 0) {
               
            }
        }
      
        function logicExitClickByClass(elementClass) {
            const elements = document.querySelectorAll('.' + elementClass);
        
            elements.forEach(function(element) {
                element.addEventListener('click', function() {
                    // Mostra il popup
                    showPopupDevices();
                });
            });
            
            if (elements.length === 0) {
              
            }
        }
      
        // Funzione per mostrare il popup quando un elemento con una determinata classe viene passato sopra con il mouse
        function logicExitHoverByClass(elementClass) {
            // Seleziona tutti gli elementi con la classe specificata
            const elements = document.querySelectorAll('.' + elementClass);

            // Aggiungi un gestore di eventi per il passaggio del mouse su ciascun elemento
            elements.forEach(function(element) {
                element.addEventListener('mouseenter', function() {
                    showPopupDevices();
                });
            });

            // Se non ci sono elementi con la classe specificata, emetti un messaggio di errore
            if (elements.length === 0) {
               
            }
        }

        // Uscita ritardata
        function logicExitTime() {
            setTimeout(function () {
                showPopupDevices();
            }, delay);
        }
        
        // Inattività dello Scroll
        function logicExitScrollInactive(){
            let timeoutId;
            function showPopupWithDebounce() {
                clearTimeout(timeoutId);
                timeoutId = setTimeout(function () {
                    showPopupDevices();
                }, scrollTimeout);
            }
            document.addEventListener("scroll", showPopupWithDebounce);
        }
        
        // Posizione Pagina
        function logicExitScrollPosition() {
            let triggerPosition; // Dichiarare la variabile triggerPosition all'esterno dei blocchi condizionali
        
            function showPopupOnScrollPosition() {
                const scrollPosition = window.scrollY;
                const windowHeight = window.innerHeight;
                
                // Assegna il valore corretto a triggerPosition in base all'opzione selezionata
                if (selectOptionPage === "page-1") {
                    triggerPosition = (3 * windowHeight) / 4;
                } else if (selectOptionPage === "page-2") {
                    triggerPosition = windowHeight / 2;
                } else if (selectOptionPage === "page-3") {
                    triggerPosition = document.body.scrollHeight - windowHeight;
                }
                
                // Verifica se il popup non è visibile e non è stato chiuso
                if (!popupVisible && !popupClosed) {
                    // Mostra o nascondi il popup in base alla posizione di trigger
                    if (scrollPosition >= triggerPosition) {
                        showPopupDevices();
                    } else {
                        hidePopup(); // Nascondi il popup solo se non è già visibile e non è stato chiuso
                    }
                }
            }
        
            // Aggiungi l'ascoltatore degli eventi scroll solo se il popup non è stato chiuso
            if (!popupClosed) {
                document.addEventListener("scroll", showPopupOnScrollPosition);
            }
        }
        

        // Direzione scroll
        function logicExitScrollDirection() {
            if (scrollDirection === "up") {
                let lastScrollTop =
                    window.scrollY || document.documentElement.scrollTop;

                function showPopupOnScrollUp() {
                    const currentScrollTop =
                        window.scrollY || document.documentElement.scrollTop;
                    if (currentScrollTop < lastScrollTop && !popupVisible) {
                        // Scroll verso l'alto e il popup non è ancora visibile
                        setTimeout(() => {
                            showPopupDevices();
                        }, timeScrollDirection);
                    }
                    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // Imposta il valore minimo a 0 per evitare valori negativi
                }

                document.addEventListener("scroll", showPopupOnScrollUp);
            }

            if (scrollDirection === "down") {
                let lastScrollTop =
                    window.scrollY || document.documentElement.scrollTop;

                function showPopupOnScrollDown() {
                    const currentScrollTop =
                        window.scrollY || document.documentElement.scrollTop;
                    if (currentScrollTop > lastScrollTop && !popupVisible) {
                        // Scroll verso il basso e il popup non è ancora visibile
                        setTimeout(() => {
                            showPopupDevices();
                        }, timeScrollDirection);
                    }
                    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // Imposta il valore minimo a 0 per evitare valori negativi
                }

                document.addEventListener("scroll", showPopupOnScrollDown);
            }
        }

        // Classe specifica
        function logicExitClass() {
            function showPopupOnElementTrigger() {
                const triggerElement = document.querySelector("." + popupClassName); // Seleziona l'elemento con la classe specifica
                if (triggerElement) {
                    // Verifica se l'elemento trigger esiste
                    const rect = triggerElement.getBoundingClientRect();
                    const isTriggerVisible =
                        rect.top >= 0 &&
                        rect.left >= 0 &&
                        rect.bottom <=
                            (window.innerHeight || document.documentElement.clientHeight) &&
                        rect.right <=
                            (window.innerWidth || document.documentElement.clientWidth);
                    if (isTriggerVisible && !popupVisible) {
                        showPopupDevices();
                    }
                }
            }
            document.addEventListener("scroll", showPopupOnElementTrigger);
        }

        // CONDIZIONI //

        // Visite superate
        function logicExitVisitNumber() {
            // Ottieni il conteggio delle visite dal localStorage per il popup specifico
            const visitsCount =
                parseInt(localStorage.getItem(`popupVisitsCount_${popupId}`)) || 0;
                // Incrementa il conteggio delle visite per il popup specifico
                localStorage.setItem(`popupVisitsCount_${popupId}`, visitsCount + 1);
            // Verifica se il popup è stato chiuso dall'utente
            const isPopupClosed =
                localStorage.getItem(`popupClosed_${popupId}`) === "true";
            // Mostra il popup solo dopo la terza visita e se il popup non è stato chiuso
            if (visitsCount >= numberVisit && !isPopupClosed) {
                return true;
            } else {
                return false;
            }
        }
        
        // url specifico
        function logicExitUrl() {
            function showPopupWithDelay(delay) {
                setTimeout(() => {
                    wpkubeEvents();
                }, delay);
            }
            function checkReferrer() {
                const urlParams = new URLSearchParams(window.location.search);
                const source = urlParams.get("source");
                if (source === desiredURL) {
                    showPopupWithDelay(timeUrl);
                    return true; // Restituisci true se il popup deve essere mostrato
                } else {
                    return false; // Restituisci false se il popup non deve essere mostrato
                }
            }
            // Restituisci il risultato di checkReferrer(), che sarà true se il popup deve essere mostrato, altrimenti false
            return checkReferrer();
        }
        
        // link Esterno
        function logicExitLinkExt() {
            const referrer = document.referrer; // Ottieni l'URL di provenienza
            // Verifica se l'URL di provenienza è esterno al sito web
            if (referrer && !referrer.includes(window.location.hostname)) {
                setTimeout(function () {
                    wpkubeEvents();
                }, timeExternaLink);
                return true; // Restituisci true se il popup deve essere mostrato
            } else {
                hidePopup(); // Nascondi il popup se l'utente arriva da un link interno al sito web
                return false; // Restituisci false se il popup non deve essere mostrato
            }
        }
        
        // Utenti loggati
        function logicExitLoggedUser() {
            // Verifica se l'utente è loggato
            const isLoggedIn = document.body.classList.contains("logged-in");
            if (isLoggedIn) {
                setTimeout(function () {
                    wpkubeEvents();
                }, timeLogged); // Mostra il popup se l'utente è loggato
                return true; // Restituisci true se il popup deve essere mostrato
            } else {
                hidePopup(); // Nascondi il popup se l'utente non è loggato
                return false; // Restituisci false se il popup non deve essere mostrato
            }
        }
        
        // Lingua 
        function logicExitLanguage() {
            if (exitLanguage) { // Verifica se la condizione è abilitata
                var userLanguage = navigator.language || navigator.userLanguage;
                var patternString = "^(" + selectedLanguages + ")";
                var languagePattern = new RegExp(patternString);
                if (languagePattern.test(userLanguage)) {
                    
                    return true; // Restituisce true se la condizione è soddisfatta
                } else {
                    return false; // Restituisce false se la condizione non è soddisfatta
                }
            } else {
                return true; // Se la condizione è disabilitata, restituisce true per consentire il passaggio alla successiva condizione
            }
        }

        // Sistema operativo
        function logicExitOS() {
            const userAgent = navigator.userAgent.toLowerCase(); // Ottieni l'user agent del browser
            
            // Verifica se almeno uno dei sistemi operativi è abilitato
            if (exitWindows || exitMac || exitLinus) {
                // Verifica se l'user agent contiene informazioni specifiche sul sistema operativo
                if ((exitWindows && userAgent.includes("windows")) ||
                    (exitMac && userAgent.includes("mac")) ||
                    (exitLinus && userAgent.includes("linux"))) {
                    wpkubeEvents(); // Mostra il popup se l'utente sta utilizzando uno dei sistemi operativi abilitati
                    return true; // Restituisci true se il popup deve essere mostrato
                } else {
                    hidePopup(); // Nascondi il popup se l'utente non sta utilizzando uno dei sistemi operativi abilitati
                    return false; // Restituisci false se il popup non deve essere mostrato
                }
            } else {
                hidePopup(); // Nascondi il popup se nessun sistema operativo è abilitato
                return false; // Restituisci false se il popup non deve essere mostrato
            }
        }
        
        /* Browser */
        function logicExitBrowser() {
            const userAgent = navigator.userAgent.toLowerCase();
            const vendor = navigator.vendor.toLowerCase();
            switch (selectBrowser) {
                case "chrome":
                    return userAgent.includes("chrome") && vendor.includes("google");
                case "firefox":
                    return userAgent.includes("firefox");
                case "safari":
                    return vendor.includes("apple");
                case "edge":
                    return userAgent.includes("edg");
                case "opera":
                    return userAgent.includes("opera") && vendor.includes("opera");
                case "msie":
                    return userAgent.includes("msie") || userAgent.includes("trident");
                default:
                    return false; // Nessuna corrispondenza, restituisce false
            }
        }

        // Sempre visibile //
        function logicExitAll() {
            // Verifica se exitAll è true
            if (exitAll) {
                return true; // Restituisci true se exitAll è abilitato
            } else {
                return false; // Altrimenti, restituisci false
            }
        }
            
        // Schedule 
        function logicExitSchedule() {
            function showPopupWithinScheduledPeriod(startDateTime, endDateTime) {
                const currentDate = new Date();
                const startTime = new Date(startDateTime);
                const endTime = new Date(endDateTime);

                // Confronta la data corrente con la data di inizio e fine programmata
                if (currentDate >= startTime && currentDate <= endTime) {
                    // Mostra il popup se la data corrente è compresa tra la data di inizio e fine programmata
                    wpkubeEvents();
                }
            }

            // Definisci la data e l'ora di inizio e fine programmata
            const startDateTime = date; // Esempio di data e ora di inizio programmata
            const endDateTime = endDate; // Esempio di data e ora di fine programmata
            // Chiamata alla funzione con la data e l'ora di inizio e fine programmata
            showPopupWithinScheduledPeriod(startDateTime, endDateTime);
        }

        /* WOOCOMMERCE */

        // Verifica se WooCommerce è attivo e il carrello è vuoto
        function logicExitWooCartEmpty() {
            if (
                typeof wc_cart_params !== "undefined" &&
                wc_cart_params.cart_contents_count == 0
            ) {
                showPopupDevices();
            }
        }

        // Verifica se WooCommerce è attivo e se il carrello contiene esattamente 3 prodotti
        function logicExitWooCartCount() {
            if (
                typeof wc_cart_params !== "undefined" &&
                wc_cart_params.cart_contents_count === numberProductCart
            ) {
                showPopupDevices();
            }
        }

        // Prodotto specifico nel carrello
        function logicExitWooProductId(productId) {
            if (
                typeof wc_cart_params !== "undefined" &&
                typeof wc_cart_params.cart_contents !== "undefined"
            ) {
                const cartContents = wc_cart_params.cart_contents;

                if (Object.keys(cartContents).length > 0) {
                    const isInCart = Object.keys(cartContents).some(
                        (key) => cartContents[key].product_id == productId,
                    );

                    if (isInCart) {
                        showPopupDevices();
                    } else {
                    }
                } else {
                }
            } else {
            }
        }

        /* Total Amount in Cart */
        function logicExitCartAmount() {
            function formatPrice(priceString) {
                // Rimuove eventuali caratteri non numerici tranne la virgola per i decimali
                const cleanedPrice = priceString.replace(/[^0-9,.]/g, '');
                // Sostituisce la virgola con il punto per i decimali
                const formattedPrice = cleanedPrice.replace(',', '.');
                return formattedPrice;
            }
            function showPopupIfCartTotalLessThan(amount) {
                if (typeof wc_cart_params !== 'undefined' && typeof wc_cart_params.cart_total !== 'undefined') {
                    const cartTotalString = wc_cart_params.cart_total;
                    // Formatta il prezzo totale in un numero valido
                    const cartTotal = parseFloat(formatPrice(cartTotalString));
                     // Verifica quale opzione è stata selezionata
                    if (selectedAmountCart === 'lower') {
                        // Mostra il popup se il prezzo totale del carrello è inferiore all'importo specificato
                        if (!isNaN(cartTotal) && cartTotal < amount) {
                            showPopupDevices();
                        }
                    } else if (selectedAmountCart === 'higher') {
                        // Mostra il popup se il prezzo totale del carrello è superiore all'importo specificato
                        if (!isNaN(cartTotal) && cartTotal > amount) {
                            showPopupDevices();
                        }
                    }
                    else {
                    }
                } else {
                }
            }
            // Chiamata alla funzione con l'importo specificato
            showPopupIfCartTotalLessThan(amountProductCart); 
        }




        // Funzione per mostrare il popup
        
        function showPopup() {
 
            if ( filterBody === true ) {
                showOverlay();
            }
            // Chiusura Contdown
             if (selectedClosed === 'close-contdown') {
                closedContdown();
            }
            // Filter
            if (overflowBody === true) {
                document.body.style.overflow = 'hidden'; // Blocca lo scroll del body
            }

            // Rimuivi assieme L CAMBAIMENTO TRUE per non far comparire piu il popup una vomlta chiuso
            if (disablePopupClosing === false) {
                if (reopenPopup === false) { // Funzione per farl oriaprire anche quando è stato chiuso!
                    if (!popupVisible) {
                        popupElement.style.display = "block";
                        popupElement.classList.add(selectedAnimationPopupIn);
                        popupVisible = true;
                    }
                }
            }
            
            if (!popupClosed) {
                // Mostra il popup solo se non è stato chiuso
                popupElement.style.display = "block";
            }

            // Effettua una richiesta AJAX per aggiornare il conteggio delle visite del popup lato server

            // Codice JavaScript per inviare una richiesta AJAX per aggiornare il conteggio delle visualizzazioni del popup

            jQuery.ajax({
                url: frontend_ajax_object.ajax_url,
                type: "POST",
                data: {
                    action: "update_popup_viewe_count", // Nome dell'azione AJAX da eseguire nel tuo codice PHP
                    popup_id: popupId, // Passa l'ID del popup al server
                },
                success: function(response) {
                    // Gestisci la risposta dal server (se necessario)
                    console.log("Conteggio delle visualizzazioni del popup aggiornato con successo.");
                    console.log("Nuovo conteggio:", response);
                },
                error: function(xhr, status, error) {
                    // Gestisci gli errori della richiesta AJAX
                    console.error("Si è verificato un errore durante l'aggiornamento del conteggio delle visualizzazioni del popup:");
                    console.error("Stato:", status);
                    console.error("Errore:", error);
                }
            });

        }







// Funzione per gestire la chiusura del popup
function handleClosePopup() {
  //  const popupElement = document.querySelector(`[data-popup-id="${popupId}"]`);
    
   
    if (popupElement) {
        // Nascondi il popup
        wpkubeClosed();
       // hidePopup();
        if (overflowBody === true) {
            document.body.style.overflow = 'auto';// Sblocca  lo scroll del body
        }
        // Controlla il valore di disablePopupClosing e imposta popupClosed e la localStorage di conseguenza
        if (disablePopupClosing === false) {
            popupClosed = false;
        } else {
            popupClosed = true;
        }
        // Salva lo stato di popupClosed nella localStorage
        localStorage.setItem(`popupClosed_${popupId}`, popupClosed.toString());
    
        // Effettua una richiesta AJAX per aggiornare il conteggio delle chiusure del popup lato server
        jQuery.ajax({
            url: frontend_ajax_object.ajax_url,
            type: "POST",
            data: {
                action: "update_popup_closure_count", // Nome dell'azione AJAX da eseguire nel tuo codice PHP
                popup_id: popupId, // Passa l'ID del popup al server
            },
        });
    
    }

}
        
    // Funzione per chiudere il popup dopo lo scroll alla fine della pagina
    function closedScroll() {
        window.addEventListener("scroll", () => {
            // Controlla se lo scroll è verso il basso
            if (
                window.innerHeight + window.scrollY >=
                document.body.offsetHeight
            ) {
                // Nascondi il popup quando si è raggiunto il fondo della pagina
                popupElement.style.display = "none";
            }
        });
        removeCloseButton(popupElement);
    }
        
    // Funzione per chiudere il popup con il click sulla finestra
    function closedClickWindow() {
        window.addEventListener("click", function (event) {
            // Verifica se l'evento di click si è verificato al di fuori del popup
            if (!popupElement.contains(event.target)) {
                // Chiudi il popup
                popupElement.style.display = "none";
            }
        });
        removeCloseButton(popupElement);
    }

    // Chiusura graduale con ritardo
    function reduceOpacityAndClose(duration, delayOpacity) {
        setTimeout(() => {
            // Aggiungi un ritardo prima di iniziare la chiusura graduale
            const fadeOutInterval = 50; // Intervallo di tempo per ridurre gradualmente l'opacità
            const steps = duration / fadeOutInterval; // Numero di passaggi per ridurre l'opacità
            const opacityStep = 1 / steps; // Passo di riduzione dell'opacità per ogni intervallo
            let currentOpacity = 1; // Opacità iniziale del popup

            // Riduci gradualmente l'opacità del popup
            const reduceOpacityInterval = setInterval(() => {
                currentOpacity -= opacityStep; // Riduci l'opacità di un passo
                popupElement.style.opacity = currentOpacity; // Applica l'opacità aggiornata al popup

                // Se l'opacità raggiunge 0, ferma l'intervallo e chiudi il popup
                if (currentOpacity <= 0) {
                    clearInterval(reduceOpacityInterval); // Ferma l'intervallo di riduzione dell'opacità
                    popupElement.style.display = "none";
                }
            }, fadeOutInterval);
        }, delayOpacity); // Tempo di attesa prima di iniziare la chiusura graduale
        removeCloseButton(popupElement);
    }

    // Funzione per chiudere il popup quando viene cliccato un elemento con una classe specifica all'interno del popup
    function closePopupOnElementClick(elementClass, parentContainer) {
        // Definisci la funzione di gestione dell'evento click
        function handleClick(event) {
            const clickedElement = event.target;
            const clickedOnSpecificElement = clickedElement.classList.contains(elementClass);
            
            // Controlla se il clic è avvenuto sull'elemento specifico all'interno del popup
            if (clickedOnSpecificElement || clickedElement.closest('.' + elementClass)) {
                // Chiudi il popup solo se è stato cliccato l'elemento specifico
                parentContainer.style.display = "none";
            }
        }
        // Aggiungi l'ascoltatore degli eventi clic al documento
        document.addEventListener('click', handleClick);
    }

    // Funzione per nascondere il popup e aggiungere una classe
    function hidePopup(filterBody) {
        /*
        // Rimuivi assieme L CAMBAIMENTO TRUE per non far comparire piu il popup una vomlta chiuso
        if (disablePopupClosing === false) {
            if (popupVisible) {
                popupElement.style.display = "none";
                popupVisible = false;
                popupElement.classList.add("hidden"); // Aggiungi la classe 'hidden' al popup
            }
        }
        */
        wpkubeClosed();
        // Filter
        if ( filterBody === true ) {
            hideOverlay();
        }
    
    }

    // Chiusura immediata
    function closedIstant() {
        popupElement.style.display = "none";
    }

            // Closed No
            function closedNo() {
                removeCloseButton(popupElement);
                popupElement.style.display = "block";
               
            }

    // Funzione per chiudere il popup dopo un lasso di tempo
    function closedTime() {
        setTimeout(() => {
            popupElement.style.display = "none";
        }, timeClosedPopup); // 5000 millisecondi = 5 secondi, puoi modificare questo valore a tuo piacimento*/
        removeCloseButton(popupElement);
    }
        


    // Funzione Contdown 
    function closedContdown() {
        // Verifica se closeButton è stato trovato
        if (closeButton) {
            // Rimuovi l'elemento button dal suo genitore (il suo contenitore)
            closeButton.parentNode.removeChild(closeButton);
        }
        function showTimer(duration) {
            const timerElement = document.createElement("div");
            timerElement.classList.add("wp-kube-text-contdown");
            timerElement.style.top = verticalContdown + 'px';
            timerElement.style.right = horizontalContdown + 'px';
            timerElement.style.fontSize = sizeContdown +'px';
            timerElement.style.color = colorContdownText;
            let remainingTime = duration / 1000; // Calcola i secondi rimanenti
            // Aggiorna il testo del timer ogni secondo
            const timerInterval = setInterval(() => {
                const paragraphElement = document.createElement("p");
                paragraphElement.textContent = textContdownBefore + ' ' + remainingTime + ' ' + textContdownAfter ;
                timerElement.innerHTML = ''; // Rimuovi il contenuto precedente
                timerElement.appendChild(paragraphElement);
                remainingTime--;
                // Quando il tempo rimanente raggiunge 0, ferma il timer e chiudi il popup
                if (remainingTime < 0) {
                    clearInterval(timerInterval);
                    popupElement.style.display = "none";
                }
            }, 1000); // Aggiorna il timer ogni secondo
            // Aggiungi il timer al popup
            popupElement.appendChild(timerElement);
        }
        // Chiamata alla funzione per mostrare il timer e chiudere il popup dopo 20 secondi
        showTimer(secondContdown); // 20000 millisecondi corrispondono a 20 secondi
    }
        
           

    /* CHIUSURE */
    function wpkubeClosed() {
        // Instatn
        if (selectedClosed === 'close-instant') {
            closedIstant();
        }
        // Opacity
        if (selectedClosed === 'close-opacity') {
            reduceOpacityAndClose(timeOpacity, timeOpacityExit);
        }
        // Click wondow
        if (selectedClosed === 'close-window') {
            closedClickWindow();
        }
        // Scroll 
        if (selectedClosed === 'close-scroll') {
            closedScroll();
        }
        // Time 
        if (selectedClosed === 'close-time') {
            closedTime();
        }
        // No Clsed
        if (selectedClosed === 'close-no') {
            closedNo();
        }
        // Classe dentro al Popup
        if (selectedClosed === 'close-class') {
            // Ottenere il riferimento al contenitore del popup utilizzando il selettore
            const popupContainer = document.querySelector('.wp-kube-popup'); 
            // Chiama la funzione per chiudere il popup quando viene cliccato l'elemento con la classe specifica all'interno del popup
            const elementClass = classClosePopup;
            closePopupOnElementClick(elementClass, popupContainer);
        }

    }







}
}
