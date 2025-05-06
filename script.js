document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('shopForm');
    const product = document.getElementById('product');
    const quantity = document.getElementById('quantity');
    const artivism = document.getElementById('artivism');
    const customRequestContainer = document.getElementById('customRequestContainer');
    const customRequest = document.getElementById('customRequest');
    const totalPriceOutput = document.getElementById('totalPrice');
    const distribution = document.getElementById('distribution');
    const citySelectContainer = document.getElementById('citySelectContainer');
    const city = document.getElementById('city');
  
    function updatePrice() {
      const productPrice = parseFloat(product.value);
      const artivismPrice = parseFloat(artivism.value);
      const qty = parseInt(quantity.value);
      const distributionChecked = distribution.checked;
  
      if (!isNaN(productPrice) && !isNaN(artivismPrice) && !isNaN(qty)) {
        const baseTotal = productPrice * qty;
        const customFee = (artivism.options[artivism.selectedIndex].text.includes("Custom")) ? 10 : 0;
        const distributionFee = distributionChecked ? 100 : 0;
        const total = baseTotal + customFee + distributionFee;
        totalPriceOutput.textContent = total.toFixed(2);
      }
    }
  
    product.addEventListener('change', updatePrice);
    quantity.addEventListener('input', updatePrice);
    artivism.addEventListener('change', () => {
      if (artivism.options[artivism.selectedIndex].text.includes("Custom")) {
        customRequestContainer.style.display = 'block';
      } else {
        customRequestContainer.style.display = 'none';
        customRequest.value = '';
      }
      updatePrice();
    });
  
    distribution.addEventListener('change', () => {
      citySelectContainer.style.display = distribution.checked ? 'block' : 'none';
      updatePrice();
    });
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      if (artivism.value === "10" && customRequest.value.trim() === '') {
        alert('Please enter your custom Artivism request.');
        return;
      }
  
      if (distribution.checked && !city.value) {
        alert('Please select a city for distribution.');
        return;
      }
  
      alert('Thank you for your purchase!');
    });
  
    // Initial price calculation
    updatePrice();
  });
  