document.getElementById("button1").addEventListener("click", information);

function information() {
  let pNoun = document.getElementById("pNoun-id").value;
  let Adj = document.getElementById("Adj-input").value;
  let PresentVerb = document.getElementById("Present-verb-id").value;
  let noun = document.getElementById("Noun").value;

  let sentence =
    '"There are too many ' +
    pNoun +
    " on this " +
    Adj +
    ' airplane!." I screamed. "Somebody has to ' +
    PresentVerb +
    " in the " +
    noun +
    ' to solve this problem!"';

  document.getElementById("para-airplane").innerHTML = sentence;
}

document.getElementById("button2").addEventListener("click", information2);

function information2() {
  let pNoun = document.getElementById("pNoun-id").value;
  let Adj = document.getElementById("Adj-input").value;
  let PresentVerb = document.getElementById("Present-verb-id").value;
  let noun = document.getElementById("Noun").value;

  let sentence2 =
    '"The ' +
    pNoun +
    " excitedly " +
    PresentVerb +
    " their " +
    Adj +
    " " +
    noun +
    '."';

  document.getElementById("para-2").innerHTML = sentence2;
}
