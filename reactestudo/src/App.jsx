function App() {
  const soma = (a, b) => {
  return a + b;
}
const dobro = n => n * 2;

return (
  <div>
    <p> A soma de 5 + 7 é : {soma(5,7)}</p>
    <p> O dobro da soma {soma(5,7)} é : {dobro(soma(5,7))}</p>
  </div>
);
}

export default App;