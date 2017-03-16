/*
1. Polyfill metody repeat dla String
W standardzie EcmaScript 2015 pojawiła się nowa metoda dostępna na obiektach typu
String o nazwie repeat. Jej użycie wygląda następująco:
“hej ”.repeat(3) // zwraca “hej hej hej ”
Metoda ta jest dostępna we wszystkich nowoczesnych przeglądarkach internetowych, ale
aby poćwiczyć rozszerzanie wbudowanych typów, utwórz jej polyfill. W kodzie sprawdź
najpierw czy taka metoda już w przeglądarce została zaimplementowana, a jeśli nie, to
dopisz własną funkcję, która będzie mogła być na dowolnym stringu wywołana w podany
wyżej sposób. Podpowiedź: rozszerzaj prototyp konstruktora String. Przy sprawdzeniu czy
taka metoda już istnieje, w nowoczesnych przeglądarkach otrzymasz odpowiedź
pozytywną. Jeśli zatem napiszesz odpowiedni warunek, to nie będzie można przetestować
Twojej metody. Z tego powodu, zamiast repeat możesz ją nazwać repeatt
*/


if (!String.prototype.repeatt) {

    String.prototype.repeatt = function(x) {

        if(typeof x !== "number"){
            throw new Error("Podaj dodatnią liczbę powtórzeń");
            //console.log("Podaj prawidłową liczbę powtórzeń"); 
            //return;           

                    // //PYTANIE: Czym się różni napisanie (bo niezależnie jak to wpiszę mam w konsoli tak samo "Uncaught Error: Błąd"):
                    // throw new Error("Błąd"); lub
                    // throw Error("Błąd");     lub
                    // Error("Błąd");
        }

        if( x < 0 ){
            throw new Error("Podaj prawidłową liczbę powtórzeń"); 
            //console.log("Podaj dodatnią liczbę powtórzeń"); 
            //return;
        };


        var result = "",
            s = this.toString();

        for (var i = 0; i < x; i++) {
            result += s;
        }

        return result;

    }

}


(function() {

    var result = "xyz".repeatt(4);
    console.log(result);

})();