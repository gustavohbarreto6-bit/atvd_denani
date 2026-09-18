function calcularTotal(itens, cupom) {
  if (!Array.isArray(itens) || itens.length === 0) {
    throw new Error("Carrinho inválido");
  }

  let subtotal = 0;

  for (let i = 0; i < itens.length; i++) {
    const item = itens[i];

    if (!item || typeof item.preco !== 'number' || typeof item.quantidade !== 'number' || item.quantidade <= 0 || item.preco < 0) {
      throw new Error("Carrinho inválido");
    }

    subtotal += item.preco * item.quantidade;
  }

  if (subtotal < 0) {
    throw new Error("Carrinho inválido");
  }

  let desconto = 0;
  if (cupom === "PROMO10") {
    desconto = subtotal * 0.10;
  }

  let frete = 15;
  if (subtotal >= 100) {
    frete = 0;
  }

  const total = subtotal - desconto + frete;
  return Number(total.toFixed(2));
}

module.exports = { calcularTotal };