/* Language switcher: English (UK), English (US), Kiswahili, Espanol, Francais, Arabic.
   Translations are stored below as  "English text": [Kiswahili, Spanish, French, Arabic].
   To translate more text, add a line using the exact English text from the page. */
(function () {
    var LANGS = [["en-GB", "English (UK)", "EN"], ["en-US", "English (US)", "US"], ["sw", "Kiswahili", "SW"],
                 ["es", "Español", "ES"], ["fr", "Français", "FR"], ["ar", "العربية", "AR"]];
    var X = { sw: 0, es: 1, fr: 2, ar: 3 };
    var D = {
    "Home":["Mwanzo","Inicio","Accueil","الرئيسية"],
    "Menu":["Menyu","Menú","Menu","القائمة"],
    "Services":["Huduma","Servicios","Services","الخدمات"],
    "Projects":["Miradi","Proyectos","Projets","المشاريع"],
    "Skills":["Ujuzi","Habilidades","Compétences","المهارات"],
    "Passion":["Shauku","Pasión","Passion","الشغف"],
    "Reviews":["Maoni","Reseñas","Avis","التقييمات"],
    "Contact":["Wasiliana","Contacto","Contact","تواصل"],
    "Welcome to":["Karibu kwenye","Bienvenido a","Bienvenue sur","مرحبًا بك في"],
    "my portfolio":["jalada langu","mi portafolio","mon portfolio","معرض أعمالي"],
    "I am a computer scientist with a passion for web development, Python and AI.":["Mimi ni mwanasayansi wa kompyuta mwenye shauku ya uundaji wa tovuti, Python na AI.","Soy informático y me apasionan el desarrollo web, Python y la IA.","Je suis informaticien et passionné par le développement web, Python et l'IA.","أنا عالم حاسوب شغوف بتطوير المواقع وبايثون والذكاء الاصطناعي."],
    "Contact Me":["Wasiliana Nami","Contáctame","Me contacter","تواصل معي"],
    "My Services":["Huduma Zangu","Mis servicios","Mes services","خدماتي"],
    "Download CV":["Pakua CV","Descargar CV","Télécharger le CV","تحميل السيرة الذاتية"],
    "Hire":["Ajiri","Contratar","Engager","وظّفني"],
    "Website Development":["Uundaji wa Tovuti","Desarrollo web","Développement de sites web","تطوير المواقع"],
    "I create modern, responsive websites for businesses, schools and personal brands.":["Ninaunda tovuti za kisasa zinazojirekebisha kwa biashara, shule na chapa binafsi.","Creo sitios web modernos y adaptables para empresas, escuelas y marcas personales.","Je crée des sites web modernes et adaptatifs pour les entreprises, les écoles et les marques personnelles.","أصمّم مواقع حديثة ومتجاوبة للشركات والمدارس والعلامات الشخصية."],
    "System Building":["Ujenzi wa Mifumo","Creación de sistemas","Création de systèmes","بناء الأنظمة"],
    "I build all categories of systems, made according to what the client wants.":["Ninajenga aina zote za mifumo, kulingana na anachotaka mteja.","Construyo todo tipo de sistemas, según lo que quiera el cliente.","Je construis toutes sortes de systèmes, selon les souhaits du client.","أبني جميع أنواع الأنظمة حسب رغبة العميل."],
    "Python Programming":["Uandishi wa Programu za Python","Programación en Python","Programmation Python","برمجة بايثون"],
    "I develop Python projects, automation tools and AI applications.":["Ninaunda miradi ya Python, zana za kiotomatiki na programu za AI.","Desarrollo proyectos en Python, herramientas de automatización y aplicaciones de IA.","Je développe des projets Python, des outils d'automatisation et des applications d'IA.","أطوّر مشاريع بايثون وأدوات الأتمتة وتطبيقات الذكاء الاصطناعي."],
    "AI Assistants":["Wasaidizi wa AI","Asistentes de IA","Assistants IA","مساعدو الذكاء الاصطناعي"],
    "AI machines that run things for you and make everyday work easier.":["Mashine za AI zinazoendesha mambo kwa niaba yako na kurahisisha kazi za kila siku.","Máquinas de IA que gestionan tareas por ti y facilitan el trabajo diario.","Des machines d'IA qui gèrent les tâches pour vous et simplifient le travail quotidien.","آلات ذكاء اصطناعي تدير الأمور عنك وتسهّل عملك اليومي."],
    "Database Design & Management":["Usanifu na Usimamizi wa Hifadhidata","Diseño y gestión de bases de datos","Conception et gestion de bases de données","تصميم وإدارة قواعد البيانات"],
    "I design and manage MySQL databases that keep your records organised and easy to search.":["Ninabuni na kusimamia hifadhidata za MySQL zinazopanga rekodi zako vizuri na kurahisisha utafutaji.","Diseño y gestiono bases de datos MySQL que mantienen tus registros ordenados y fáciles de buscar.","Je conçois et gère des bases de données MySQL qui gardent vos données organisées et faciles à consulter.","أصمّم وأدير قواعد بيانات MySQL تُبقي سجلاتك منظمة وسهلة البحث."],
    "Networking":["Mitandao","Redes","Réseaux","الشبكات"],
    "Setting up and troubleshooting small office and home networks.":["Kuweka na kutatua matatizo ya mitandao midogo ya ofisi na nyumbani.","Instalación y resolución de problemas de redes pequeñas de oficina y hogar.","Installation et dépannage de petits réseaux de bureau et domestiques.","إعداد الشبكات المكتبية والمنزلية الصغيرة وإصلاح مشكلاتها."],
    "Systems Administration":["Usimamizi wa Mifumo","Administración de sistemas","Administration système","إدارة الأنظمة"],
    "Managing computers, user accounts and software so an office or school runs smoothly.":["Kusimamia kompyuta, akaunti za watumiaji na programu ili ofisi au shule iendeshwe vizuri.","Gestión de equipos, cuentas de usuario y software para que una oficina o escuela funcione sin problemas.","Gestion des ordinateurs, des comptes utilisateurs et des logiciels pour que le bureau ou l'école fonctionne bien.","إدارة الحواسيب وحسابات المستخدمين والبرامج ليعمل المكتب أو المدرسة بسلاسة."],
    "IT Support & Troubleshooting":["Msaada wa IT na Utatuzi wa Matatizo","Soporte técnico y resolución de problemas","Assistance informatique et dépannage","الدعم التقني وحل المشكلات"],
    "Fixing software and computer problems, and installing and setting up programs on Windows.":["Kurekebisha matatizo ya programu na kompyuta, na kusakinisha na kuweka programu kwenye Windows.","Reparación de problemas de software y de equipos, e instalación y configuración de programas en Windows.","Résolution des problèmes de logiciels et d'ordinateurs, installation et configuration de programmes sous Windows.","إصلاح مشكلات البرامج والحاسوب وتثبيت البرامج وإعدادها على ويندوز."],
    "Graphic Design":["Usanifu wa Picha","Diseño gráfico","Design graphique","التصميم الجرافيكي"],
    "I create posters, logos and business graphics.":["Ninabuni mabango, nembo na michoro ya biashara.","Creo carteles, logotipos y gráficos para negocios.","Je crée des affiches, des logos et des visuels pour les entreprises.","أصمّم الملصقات والشعارات والرسومات التجارية."],
    "Video Editing & Videography":["Uhariri wa Video na Upigaji Video","Edición y producción de video","Montage et tournage vidéo","مونتاج وتصوير الفيديو"],
    "Filming and editing videos and promotional clips.":["Kupiga na kuhariri video na klipu za matangazo.","Grabación y edición de videos y clips promocionales.","Tournage et montage de vidéos et de clips promotionnels.","تصوير وتحرير مقاطع الفيديو والمقاطع الترويجية."],
    "Other IT Services":["Huduma Nyingine za IT","Otros servicios de TI","Autres services informatiques","خدمات تقنية أخرى"],
    "Need something that is not listed here? Tell me what you need and I will let you know how I can help.":["Unahitaji kitu ambacho hakijaorodheshwa hapa? Niambie unachohitaji nami nitakujulisha jinsi ninavyoweza kusaidia.","¿Necesitas algo que no está en la lista? Cuéntame qué necesitas y te diré cómo puedo ayudarte.","Besoin d'autre chose ? Dites-moi ce qu'il vous faut et je vous dirai comment je peux vous aider.","تحتاج شيئًا غير مذكور هنا؟ أخبرني بما تحتاجه وسأخبرك كيف يمكنني المساعدة."],
    "My Projects":["Miradi Yangu","Mis proyectos","Mes projets","مشاريعي"],
    "Live demo":["Onyesho la moja kwa moja","Demo en vivo","Démo en direct","عرض مباشر"],
    "AI Business Assistant & Small Business System":["Msaidizi wa AI wa Biashara na Mfumo wa Biashara Ndogo","Asistente de IA y sistema para pequeños negocios","Assistant IA et système pour petites entreprises","مساعد ذكاء اصطناعي ونظام للأعمال الصغيرة"],
    "School Management System":["Mfumo wa Usimamizi wa Shule","Sistema de gestión escolar","Système de gestion scolaire","نظام إدارة المدارس"],
    "My Skills":["Ujuzi Wangu","Mis habilidades","Mes compétences","مهاراتي"],
    "Programming":["Uandishi wa Programu","Programación","Programmation","البرمجة"],
    "Web":["Wavuti","Web","Web","الويب"],
    "Databases":["Hifadhidata","Bases de datos","Bases de données","قواعد البيانات"],
    "IT & Systems":["IT na Mifumo","TI y sistemas","Informatique et systèmes","التقنية والأنظمة"],
    "Creative":["Ubunifu","Creatividad","Création","الإبداع"],
    "My Passion":["Shauku Yangu","Mi pasión","Ma passion","شغفي"],
    "Worked with me or tried one of my systems? I would love to hear what you think.":["Umefanya kazi nami au kujaribu mojawapo ya mifumo yangu? Ningependa kusikia maoni yako.","¿Trabajaste conmigo o probaste alguno de mis sistemas? Me encantaría saber tu opinión.","Vous avez travaillé avec moi ou essayé l'un de mes systèmes ? J'aimerais connaître votre avis.","هل عملت معي أو جرّبت أحد أنظمتي؟ يسعدني أن أعرف رأيك."],
    "Rate & leave a review":["Kadiria na acha maoni","Valorar y dejar una reseña","Noter et laisser un avis","قيّم واترك تقييمًا"],
    "No reviews yet. Be the first to leave one!":["Bado hakuna maoni. Kuwa wa kwanza kuacha moja!","Aún no hay reseñas. ¡Sé el primero en dejar una!","Pas encore d'avis. Soyez le premier à en laisser un !","لا توجد تقييمات بعد. كن أول من يترك تقييمًا!"],
    "Rate me":["Nikadirie","Valórame","Notez-moi","قيّمني"],
    "Email:":["Barua pepe:","Correo:","E-mail :","البريد الإلكتروني:"],
    "Phone:":["Simu:","Teléfono:","Téléphone :","الهاتف:"],
    "Location:":["Mahali:","Ubicación:","Lieu :","الموقع:"],
    "Your name":["Jina lako","Tu nombre","Votre nom","اسمك"],
    "Your email":["Barua pepe yako","Tu correo","Votre e-mail","بريدك الإلكتروني"],
    "Message":["Ujumbe","Mensaje","Message","الرسالة"],
    "Send message":["Tuma ujumbe","Enviar mensaje","Envoyer le message","إرسال الرسالة"],
    "Sending...":["Inatuma...","Enviando...","Envoi...","جارٍ الإرسال..."],
    "Confirm hire request":["Thibitisha ombi la kuajiri","Confirmar solicitud de contratación","Confirmer la demande d'embauche","تأكيد طلب التوظيف"],
    "Do you want to hire Geofrey Waithaka for":["Je, unataka kumwajiri Geofrey Waithaka kwa","¿Quieres contratar a Geofrey Waithaka para","Voulez-vous engager Geofrey Waithaka pour","هل تريد توظيف جيفري وايثاكا لـ"],
    "Please confirm and leave your details so I can contact you.":["Tafadhali thibitisha na uache taarifa zako ili nikuwasiliane nawe.","Confirma y deja tus datos para que pueda contactarte.","Veuillez confirmer et laisser vos coordonnées pour que je vous contacte.","يرجى التأكيد وترك بياناتك لأتواصل معك."],
    "Phone or WhatsApp (optional)":["Simu au WhatsApp (si lazima)","Teléfono o WhatsApp (opcional)","Téléphone ou WhatsApp (facultatif)","الهاتف أو واتساب (اختياري)"],
    "Short note about what you need (optional)":["Maelezo mafupi kuhusu unachohitaji (si lazima)","Nota breve sobre lo que necesitas (opcional)","Petite note sur ce dont vous avez besoin (facultatif)","ملاحظة قصيرة عمّا تحتاجه (اختياري)"],
    "Which IT service do you need? (required)":["Unahitaji huduma gani ya IT? (lazima)","¿Qué servicio de TI necesitas? (obligatorio)","De quel service informatique avez-vous besoin ? (obligatoire)","ما الخدمة التقنية التي تحتاجها؟ (مطلوب)"],
    "Yes, send my hire request":["Ndiyo, tuma ombi langu","Sí, enviar mi solicitud","Oui, envoyer ma demande","نعم، أرسل طلبي"],
    "Cancel":["Ghairi","Cancelar","Annuler","إلغاء"],
    "Close":["Funga","Cerrar","Fermer","إغلاق"],
    "Rate & review":["Kadiria na toa maoni","Valorar y opinar","Noter et donner un avis","قيّم وأبدِ رأيك"],
    "How was your experience? Choose a star rating and leave a comment.":["Uzoefu wako ulikuwaje? Chagua nyota na uache maoni.","¿Cómo fue tu experiencia? Elige una puntuación y deja un comentario.","Comment était votre expérience ? Choisissez une note et laissez un commentaire.","كيف كانت تجربتك؟ اختر عدد النجوم واترك تعليقًا."],
    "Your rating":["Ukadiriaji wako","Tu valoración","Votre note","تقييمك"],
    "Choose 1 to 5 stars":["Chagua nyota 1 hadi 5","Elige de 1 a 5 estrellas","Choisissez de 1 à 5 étoiles","اختر من 1 إلى 5 نجوم"],
    "Your email (optional, only I can see it)":["Barua pepe yako (si lazima, mimi tu ninaiona)","Tu correo (opcional, solo yo lo veo)","Votre e-mail (facultatif, moi seul le vois)","بريدك الإلكتروني (اختياري، أراه أنا فقط)"],
    "Your comment":["Maoni yako","Tu comentario","Votre commentaire","تعليقك"],
    "Your name, rating and comment will be shown on the Reviews page. Your email stays private.":["Jina lako, ukadiriaji na maoni vitaonyeshwa kwenye ukurasa wa Maoni. Barua pepe yako hubaki siri.","Tu nombre, valoración y comentario se mostrarán en la página de reseñas. Tu correo permanece privado.","Votre nom, votre note et votre commentaire seront affichés sur la page des avis. Votre e-mail reste privé.","سيظهر اسمك وتقييمك وتعليقك في صفحة التقييمات. يبقى بريدك الإلكتروني خاصًا."],
    "Send my review":["Tuma maoni yangu","Enviar mi reseña","Envoyer mon avis","أرسل تقييمي"]
    };

    var lang = "en-GB", orig = new WeakMap(), mine = new WeakMap();
    var btn = document.getElementById("lang-btn"), list = document.getElementById("lang-list"), now = document.getElementById("lang-now");
    if (!btn || !list) { return; }

    function skip(n) {
        var p = n.parentNode;
        return !p || /^(SCRIPT|STYLE|TEXTAREA|NOSCRIPT)$/.test(p.nodeName) || (p.closest && p.closest("#reviews-list, #lang-list, #lang-btn"));
    }

    function convert(o) {
        if (lang === "en-US") { return o.replace(/organised/g, "organized"); }
        if (lang in X) {
            var m = o.match(/^(\s*)([\s\S]*?)(\s*)$/), v = D[m[2].replace(/\s+/g, " ")];
            if (v) { return m[1] + v[X[lang]] + m[3]; }
        }
        return o;
    }

    function apply(n) {
        if (skip(n)) { return; }
        if (!orig.has(n)) { orig.set(n, n.data); }
        var out = lang === "en-GB" ? orig.get(n) : convert(orig.get(n));
        if (out !== n.data) { n.data = out; }
        mine.set(n, n.data);
    }

    function walk(root) {
        if (root.nodeType === 3) { apply(root); return; }
        var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
        while (w.nextNode()) { apply(w.currentNode); }
    }

    function setLang(code) {
        lang = code;
        document.documentElement.lang = code;
        document.documentElement.dir = code === "ar" ? "rtl" : "ltr";
        walk(document.body);
        LANGS.forEach(function (l) { if (l[0] === code) { now.textContent = l[2]; } });
        [].forEach.call(list.children, function (b) { b.classList.toggle("on", b.getAttribute("data-lang") === code); });
        try { localStorage.setItem("lang", code); } catch (e) {}
    }

    function closeList() { list.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); }

    LANGS.forEach(function (l) {
        var b = document.createElement("button");
        b.type = "button";
        b.setAttribute("data-lang", l[0]);
        b.textContent = l[1];
        b.addEventListener("click", function () { setLang(l[0]); closeList(); });
        list.appendChild(b);
    });

    btn.addEventListener("click", function (e) {
        e.stopPropagation();
        var open = list.classList.toggle("open");
        btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.addEventListener("click", function (e) { if (!list.contains(e.target)) { closeList(); } });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") { closeList(); } });

    // Text the page writes later (dialogs, messages) is translated as it appears
    new MutationObserver(function (ms) {
        ms.forEach(function (m) {
            if (m.type === "characterData") {
                if (mine.get(m.target) === m.target.data) { return; }
                orig.delete(m.target);
                apply(m.target);
            } else {
                [].forEach.call(m.addedNodes, function (a) { if (a.nodeType === 3 || a.nodeType === 1) { walk(a); } });
            }
        });
    }).observe(document.body, { childList: true, subtree: true, characterData: true });

    var saved = "";
    try { saved = localStorage.getItem("lang") || ""; } catch (e) {}
    if (saved && saved !== "en-GB") { setLang(saved); } else { setLang("en-GB"); }
})();
