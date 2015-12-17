
var n = 1;
search: while (true) { // pętla while może się nie wykonać, ale poprzez true się zawsze wykonuje
  n += 1; //zwiększenie n o 1 i wpisanie jej do zmiennej n, dlatego n=2
  for (var i = 2; i <= Math.sqrt(n); i += 1) //dla i=2, i mniejszego od funkcji na zmiennej n zwiększ i o 1 i wpisz ją do zmiennej i
    if (n % i == 0) // wartość n modulo i =0, (reszta z / = 0), to dalej musi szukać liczby
     continue search;
  // Znalezienie głównej liczby
  postMessage(n);
  //postMessage jest użyty do wysłania wiadomości spowrotem, gdy odnajdzie liczbę pierwszą.
}