export const formatRupiah = (amount: number) => {
  return 'Rp\u00A0' + new Intl.NumberFormat('id-ID').format(amount).replace(/,/g, '.');
};

export const formatDate = (dateString: string) => {
  const d = new Date(dateString);
  return `${d.getDate().toString().padStart(2, '0')}/${(d.getMonth()+1).toString().padStart(2, '0')}/${d.getFullYear()} ${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}:${d.getSeconds().toString().padStart(2, '0')}`;
};
