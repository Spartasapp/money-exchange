// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
let num = currency;
let exchange = {};
let H;
let Q;
let D;
let N;
let P;

if (num <= 0){
  return exchange;
}
else if (num > 0 && num < 10000){
  H = Math.floor(num/50);
  num = num -H*50;
  Q = Math.floor(num/25);
  num = num -Q*25;
  D = Math.floor(num/10);
  num = num -D*10;
  N = Math.floor(num/5);
  num = num -N*5;
  P = Math.floor(num/1);
  num = num -P*1;
  exchange = {
    H: H,
    Q: Q,
    D: D,
    N: N,
    P: P
};
if (H == 0){
    delete exchange.H;
}
if (Q == 0){
    delete exchange.Q;
}
if (D == 0){
    delete exchange.D;
}
if (N == 0){
    delete exchange.N;
}
if (P == 0){
    delete exchange.P;
}
  return exchange;
}
else if (num >= 10000){
  exchange = {error: "You are rich, my friend! We don't have so much coins for exchange"};
  return exchange; 
}
}
