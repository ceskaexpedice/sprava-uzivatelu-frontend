## Správa uživatelů / Frontend
Komponenta Správa uživatelů je připravena pro systém Kramerius a aplikaci ProArc.

12/2019 byla uveřejněna alfa verze, u které se předpokládá primární testování u digitálniknihovny.cz. Verze je určena pro využití s Krameriem verze 7, která bude testována v prvním čtvrtletí 2020

Přihlášený uživatel
·         Centrální správa uživatelů
·         Přihlašování uživatelů přes email/heslo, Google Account, Facebook
·         Jedno přihlášení na všech instalacích Krameria a klienta
·         Provázání s klientem
·         Použití pro následující funkce
o    Oblíbené - uživatel si může přes ikonu srdce u názvu dokumentu v panelu s metadaty přidat/odebrat libovolný dokument do/z seznamu oblíbených dokumentů, který bude mít vždy dostupný přes toolbar.
o    Záložky - podobné jako Oblíbené, jen se nevztahuje k dokumentu, ale ke konkrétní stránce v klientovi (číslo periodika, strana monografie, ….)
o    Poznámky - v klientovi půjdou vytvářet poznámky v textu, které se budou uživateli ukládat.
o    Komentáře - Dokumenty bude možné komentovat - komentáře budou veřejné.
·         V případě instalace klienta, který přistupuje k více systémům Kramerius, bude seznam oblíbených a záložek obsahovat data ze všech zpřístupněných Krameriu. Např. v seznamu oblíbených bude mít uživatel dokumenty z více knihoven a vybráním konkrétního dokumentu se klient přepne na daného Krameria.

Ověřený uživatel (dnnt)
·         Přihlašování přes OpenID a Shibboleth
·         Přidělování práva na přístup k dnnt dokumentům přes
o    Přihlášením přes důvěryhodný kanál
o    Ručním přidělením osobou s dostatečnými právy
o    Další požadované metody
o    Provázanost s jádrem Krameria pro ověření dnnt přístupu

Autorizovaný uživatel
·         Určeno pro správu jednotlivých instalací Krameriu
·         Uživatelské role a práva pro jednotlivé instalace Krameria
·         Provázanost s administrátorským rozhraním a “editorem” ProArc
·         Širší provázanost s jádrem Krameria a zabezpečení
