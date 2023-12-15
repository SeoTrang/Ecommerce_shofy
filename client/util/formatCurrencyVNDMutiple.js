function formatCurrency(value) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
  }
  
  function formatRange(range) {
    const [min, max] = range.split('-').map(Number);
    const formattedMin = formatCurrency(min).replace(/\s/g, '');
    if(max){
      const formattedMax = formatCurrency(max).replace(/\s/g, '');
    
      return `${formattedMin} - ${formattedMax}`;
    }

    return formattedMin;
    
  }
  


const formatCurrencyVNDMutiple = (originalRange) => {
    const formattedRange = formatRange(originalRange);
    // console.log(formattedRange);
    return formattedRange;
}
//   console.log(formattedRange); // Kết quả: "13.000.000₫ - 16.000.000₫"

export default formatCurrencyVNDMutiple;