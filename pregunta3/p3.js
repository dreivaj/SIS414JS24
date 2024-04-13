function fun() {
    const c = document.querySelectorAll('input[name="o"]');
    let s = 0;
    c.forEach(function(x) { if (x.checked) s++; });
    c.forEach(function(x) { x.disabled = (s >= 2 && !x.checked); });
  }

  function v() {
    const r = ["a", "b"];
    const c = document.querySelectorAll('input[name="o"]:checked');
    if (c.length >= 1 && c.length <= 2) {
      const s = Array.from(c).map(function(x) { return x.value; });
      let p = 0;
      if (s.length === 1 && r.includes(s[0])) {
        p = 50;
      } else if (s.length === 1 && !r.includes(s[0])) {
        p = 40;
      } else if (s.length === 2 && r.includes(s[0]) && !r.includes(s[1])) {
        p = 40;
      } else if (s.length === 2 && r.includes(s[1]) && !r.includes(s[0])) {
        p = 40;
      } else if (s.length === 2 && r.every(function(x) { return s.includes(x); })) {
        p = 100;
      }
      document.getElementById('s').innerText = "NOTA: " + p + " puntos";
    } else {
      alert("SeleccionAAA 1 o 2 opciones");
    }
  }